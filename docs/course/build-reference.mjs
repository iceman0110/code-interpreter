// Generate documentation inventories without executing application modules.
// Uses the repository's installed TypeScript parser; no network access.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('../../service/node_modules/typescript');
const course = dirname(fileURLToPath(import.meta.url));
const root = resolve(course, '../..');
const roots = ['service/src', 'api/src', 'packages/code/src', 'packages/extraction/src', 'shared'];
const excluded = /(?:^|\/)(?:test|tests|__tests__|fixtures|node_modules)(?:\/|$)|\.(?:test|spec|d)\.ts$/;
const posix = value => value.replaceAll('\\', '/');
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = resolve(dir, entry.name);
    const rel = posix(relative(root, full));
    if (excluded.test(rel)) return [];
    if (entry.isDirectory()) return files(full);
    return entry.name.endsWith('.ts') ? [full] : [];
  });
}
const modifier = (node, kind) => node.modifiers?.some(m => m.kind === kind) ?? false;
const allFiles = roots.flatMap(dir => files(resolve(root, dir))).sort();
const symbols = [];
const routeGroups = [];
for (const file of allFiles) {
  const path = posix(relative(root, file));
  const source = ts.createSourceFile(path, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const entries = [];
  const registrations = [];
  const line = node => source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1;
  function add(name, node, visibility) { entries.push({ name, line: line(node), visibility }); }
  for (const node of source.statements) {
    const exported = modifier(node, ts.SyntaxKind.ExportKeyword);
    if (ts.isFunctionDeclaration(node) && node.name && node.body) {
      add(`${node.name.text}()`, node, exported ? 'exported function' : 'module-local function');
    }
    if (ts.isVariableStatement(node)) {
      for (const declaration of node.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name) && declaration.initializer
          && (ts.isArrowFunction(declaration.initializer) || ts.isFunctionExpression(declaration.initializer))) {
          add(`${declaration.name.text}()`, declaration, exported ? 'exported function value' : 'module-local function value');
        }
      }
    }
    if (ts.isClassDeclaration(node) && node.name) {
      add(node.name.text, node, exported ? 'exported class' : 'module-local class');
      for (const member of node.members) {
        const visibility = modifier(member, ts.SyntaxKind.PrivateKeyword) || ts.isPrivateIdentifier(member.name ?? ts.factory.createIdentifier(''))
          ? 'private method' : modifier(member, ts.SyntaxKind.ProtectedKeyword) ? 'protected method' : 'method';
        if (ts.isMethodDeclaration(member) && member.name && member.body) {
          add(`${node.name.text}.${member.name.getText(source)}()`, member, visibility);
        }
      }
    }
  }
  function visit(node) {
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const method = node.expression.name.text;
      const receiver = node.expression.expression.getText(source);
      if (['app', 'router', 'v1'].includes(receiver) && ['get', 'post', 'put', 'patch', 'delete'].includes(method)) {
        const arg = node.arguments[0];
        const paths = arg && ts.isArrayLiteralExpression(arg) ? arg.elements : arg ? [arg] : [];
        for (const literal of paths) {
          if (ts.isStringLiteralLike(literal)) registrations.push({ method: method.toUpperCase(), path: literal.text, line: line(node) });
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  if (entries.length) symbols.push({ path, entries });
  if (registrations.length) routeGroups.push({ path, registrations });
}
const count = symbols.reduce((sum, group) => sum + group.entries.length, 0);
let output = `# Source symbol index\n\n[Course home](README.md) · [Guided function atlas](function-atlas.md)\n\n`;
output += `Generated from this checkout: **${count} named functions/classes/methods across ${symbols.length} TypeScript modules**.\n\n`;
output += 'This is a navigation index, not an HTTP API or permission list. It includes named top-level function declarations/values and implemented class methods, including private helpers. It excludes tests, fixtures, declarations, interfaces, nested local functions, anonymous route callbacks, re-export-only bindings, Rust, C, Python, and shell scripts. A class method marked “method” may still belong to a module-local class; check its enclosing declaration. Internal implementation details are not stable extension contracts.\n\n';
output += 'For the Rust launcher, start at [launcher/src/main.rs](../../launcher/src/main.rs); for Python/shell runtime behavior, follow the runtime packages and [build-packages.sh](../../build-packages.sh).\n\nRegenerate with `node docs/course/build-reference.mjs` after installing the service TypeScript dependency. The generator parses source without importing application modules.\n\n';
for (const base of roots) {
  output += `## ${base}\n\n`;
  for (const group of symbols.filter(group => group.path.startsWith(`${base}/`))) {
    output += `<details>\n<summary>${group.path} — ${group.entries.length} symbols</summary>\n\n| Symbol | Kind | Source |\n|---|---|---|\n`;
    for (const entry of group.entries) output += `| \`${entry.name.replaceAll('|', '\\|')}\` | ${entry.visibility} | [line ${entry.line}](../../${group.path}#L${entry.line}) |\n`;
    output += '\n</details>\n\n';
  }
}
writeFileSync(resolve(course, 'symbol-index.md'), output.trimEnd() + '\n');
let routes = '# Express route registration index\n\n[Course home](README.md) · [Curated API reference](api-reference.md)\n\n';
routes += 'Generated by parsing literal route registrations in TypeScript. **Paths are local to each router before mounting.** Middleware ordering, conditions, authentication, feature gates, and router mounting determine the actual availability. A registration can be logging middleware rather than the final handler; duplicate registrations across alternative entrypoints are not extra services. This index excludes custom Bun routing (notably the tool call server), computed route paths, and `.use()` mounts. Read the curated API reference for full paths and visibility.\n\n';
for (const group of routeGroups) {
  routes += `## ${group.path}\n\n| Method | Local path | Registration |\n|---|---|---|\n`;
  for (const item of group.registrations) routes += `| ${item.method} | \`${item.path.replaceAll('|', '\\|')}\` | [line ${item.line}](../../${group.path}#L${item.line}) |\n`;
  routes += '\n';
}
writeFileSync(resolve(course, 'route-index.md'), routes.trimEnd() + '\n');
console.log(JSON.stringify({ modules: symbols.length, symbols: count, routeRegistrations: routeGroups.reduce((sum, group) => sum + group.registrations.length, 0) }));
