// Documentation-only SVG renderer. No application dependencies or network calls.
// Run from any directory: node docs/course/diagrams/render.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const colors = {
  blue: ['#eaf2ff', '#2563eb'], green: ['#e9f8f2', '#087f5b'],
  amber: ['#fff5dd', '#b67505'], red: ['#fff0ee', '#c6473a'],
  purple: ['#f2edff', '#7451bd'], gray: ['#f1f4f8', '#64748b'],
};
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function text(x, y, value, size = 18, fill = '#18283f', anchor = 'start', weight = 400) {
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-weight="${weight}">${esc(value)}</text>`;
}
function box(x, y, w, h, title, lines = [], color = 'blue') {
  const [fill, stroke] = colors[color];
  return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`
    + text(x + 18, y + 32, title, 20, '#18283f', 'start', 650)
    + lines.map((line, i) => text(x + 18, y + 61 + i * 24, line, 16)).join('') + '</g>';
}
function group(x, y, w, h, title, color = 'gray') {
  const [fill, stroke] = colors[color];
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${fill}" fill-opacity="0.42" stroke="${stroke}" stroke-dasharray="8 6"/>`
    + text(x + 18, y + 30, title, 18, stroke, 'start', 650);
}
function edge(points, label = '', lx, ly, color = '#52657e', dashed = false) {
  const pointsText = points.map(p => p.join(',')).join(' ');
  let result = `<polyline points="${pointsText}" fill="none" stroke="${color}" stroke-width="2.2" marker-end="url(#arrow)"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`;
  if (label) {
    const width = label.length * 8.4 + 16;
    result += `<rect x="${lx - width / 2}" y="${ly - 16}" width="${width}" height="23" rx="5" fill="#fff"/>` + text(lx, ly, label, 15, color, 'middle');
  }
  return result;
}
function note(x, y, value) { return text(x, y, value, 16, '#52657e'); }
function save(name, title, subtitle, height, body) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="${height}" viewBox="0 0 1400 ${height}" role="img" aria-labelledby="title desc">
<title id="title">${esc(title)}</title><desc id="desc">${esc(subtitle)}</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#52657e"/></marker></defs>
<rect width="1400" height="${height}" fill="#fff"/>
<g font-family="Segoe UI, Arial, sans-serif">${text(40, 45, title, 28, '#10213b', 'start', 700)}${text(40, 77, subtitle, 17, '#52657e')}${body}
${text(40, height - 20, 'Code Interpreter course | Source snapshot 2fa9f0d | Arrows are labeled by purpose', 13, '#64748b')}</g></svg>\n`;
  writeFileSync(fileURLToPath(new URL(name, import.meta.url)), svg);
}

save('01-system.svg', 'The current HTTP execution architecture', 'Logical requests and job flow; Redis completion events return results to the waiting public API.', 680,
  group(345, 112, 1010, 475, 'Internal services: public callers do not address the runner directly')
  + box(40, 170, 240, 105, 'LibreChat / caller', ['Submits code and file refs', 'Receives text and artifacts'])
  + box(375, 170, 250, 105, 'Public API', ['service/api-server.ts', 'Authenticate and enqueue'])
  + box(710, 170, 250, 105, 'Redis + BullMQ', ['Jobs, completion events', 'Ownership and coordination'], 'purple')
  + box(1050, 170, 270, 105, 'Service worker', ['service/workers.ts', 'Prepare, sign, dispatch'])
  + box(1050, 400, 270, 105, 'Sandbox runner', ['api/src/api/v2.ts', 'libkrun guest + NsJail'], 'red')
  + box(710, 400, 250, 105, 'Egress gateway', ['Scoped files and tools', 'Grant ledger / revocation'], 'amber')
  + box(375, 350, 250, 82, 'File server', ['S3 / MinIO adapter'], 'green')
  + box(375, 478, 250, 82, 'Tool call server', ['Tool callback coordination'], 'amber')
  + box(40, 355, 240, 100, 'Object storage', ['Uploaded input files', 'Generated artifacts'], 'green')
  + edge([[280, 221], [375, 221]], 'HTTP', 327, 205)
  + edge([[625, 221], [710, 221]], 'enqueue', 667, 205)
  + edge([[960, 221], [1050, 221]], 'consume', 1005, 205)
  + edge([[1185, 275], [1185, 400]], 'signed execute', 1185, 338)
  + edge([[1050, 453], [960, 453]], 'scoped access', 1005, 435)
  + edge([[710, 430], [670, 430], [670, 391], [625, 391]])
  + edge([[710, 480], [670, 480], [670, 519], [625, 519]])
  + edge([[375, 391], [280, 391]], 'object I/O', 327, 375)
  + note(40, 620, 'Simplified overview: public file requests also pass API → file server. Gateway and file/tool services also use Redis.')
);

function sequence(title, subtitle, actors, rows, height, filename) {
  const margin = 150;
  const step = (1400 - margin * 2) / (actors.length - 1);
  const xs = actors.map((_, i) => margin + i * step);
  let body = actors.map((a, i) => box(xs[i] - 105, 110, 210, 58, a, [], i === actors.length - 1 ? 'red' : 'blue')
    + `<line x1="${xs[i]}" y1="168" x2="${xs[i]}" y2="${height - 75}" stroke="#cbd5e1" stroke-dasharray="5 6"/>`).join('');
  rows.forEach((row, i) => {
    const [from, to, label, dashed = false] = row;
    const y = 217 + i * 70;
    body += edge([[xs[from], y], [xs[to], y]], `${i + 1}. ${label}`, (xs[from] + xs[to]) / 2, y - 12, '#52657e', dashed);
  });
  save(filename, title, subtitle, height, body);
}
sequence('One ordinary execution: the request and its response', 'Time moves downward. File traffic is omitted here; the API waits while workers execute asynchronously.',
  ['Caller', 'Public API', 'Redis / BullMQ', 'Worker', 'Runner'], [
    [0, 1, 'POST /v1/exec'], [1, 2, 'queue.add(job)'], [2, 3, 'worker consumes job'],
    [3, 4, 'POST /api/v2/execute'], [4, 3, 'result after upload + cleanup', true],
    [3, 2, 'job completes with result', true], [2, 1, 'waitUntilFinished resolves', true],
    [1, 0, 'HTTP result + file references', true],
  ], 850, '02-execution.svg');

save('03-functions.svg', 'Functions that cooperate on an ordinary execution', 'Rows are lifecycle stages. Arrows show control handoff; callbacks and library methods are named explicitly.', 1000,
  group(30, 110, 1335, 190, '1 | Public request preparation', 'blue')
  + box(55, 158, 285, 108, '/v1/exec handler', ['authorizeRequestedFiles()', 'recordSessionOwnership()'])
  + box(400, 158, 285, 108, 'createPayload()', ['Runtime + source + inputs', 'Memory / arguments'])
  + box(745, 158, 285, 108, 'prepareSandboxJobSecurity', ['Execution and egress claims', 'Before signing'])
  + box(1090, 158, 245, 108, 'queue.add()', ['BullMQ library method', 'API waits for completion'], 'purple')
  + edge([[340, 210], [400, 210]]) + edge([[685, 210], [745, 210]]) + edge([[1030, 210], [1090, 210]])
  + group(30, 330, 1335, 190, '2 | Worker callback and backend dispatch', 'purple')
  + box(55, 378, 285, 108, 'processJobInner()', ['Deadline + profile checks', 'Gateway grant preparation'], 'purple')
  + box(400, 378, 285, 108, 'buildSandboxExecuteRequest', ['Bind and sign request body', 'Transport headers'], 'purple')
  + box(745, 378, 285, 108, 'getSandboxBackend()', ['Select http / lambda / bridge', 'execute(request, context)'], 'purple')
  + box(1090, 378, 245, 108, 'HTTP backend', ['axios.post()', '/api/v2/execute'], 'purple')
  + edge([[1212, 266], [1212, 314], [197, 314], [197, 378]])
  + edge([[340, 430], [400, 430]]) + edge([[685, 430], [745, 430]]) + edge([[1030, 430], [1090, 430]])
  + group(30, 550, 1335, 190, '3 | Runner handler and per-job lifecycle', 'red')
  + box(55, 598, 285, 108, 'verify + getJob()', ['Manifest and input checks', 'Construct execution Job'], 'red')
  + box(400, 598, 285, 108, 'Job.prime()', ['Prepare workspace and files', 'Download authorized inputs'], 'red')
  + box(745, 598, 285, 108, 'Job.execute()', ['safeCall() → nsjail.execute()', 'Compile/run; inspect outputs'], 'red')
  + box(1090, 598, 245, 108, 'Upload + cleanup', ['uploadGeneratedFiles()', 'reconcile → cleanup()'], 'red')
  + edge([[1212, 486], [1212, 534], [197, 534], [197, 598]])
  + edge([[340, 650], [400, 650]]) + edge([[685, 650], [745, 650]]) + edge([[1030, 650], [1090, 650]])
  + edge([[1212, 706], [1212, 805], [770, 805]], 'return through worker and BullMQ', 1020, 787)
  + box(375, 775, 395, 107, 'Waiting API replies to caller', ['Result normalization happens in worker', 'Private helpers are not public endpoints'], 'green')
  + note(45, 939, 'Names without () in narrow boxes are still function names. Full signatures and source locations are in the function atlas.')
);

save('04-files.svg', 'The lifecycle of sales.csv and chart.png', 'Numbered arrows are transfers. Object storage persists; the ordinary job workspace is temporary.', 810,
  box(45, 150, 250, 100, 'Caller / LibreChat', ['Upload CSV; retain file ref', 'Request execution; download'])
  + box(420, 150, 250, 100, 'Public API', ['Authorize ownership', 'Forward file operations'])
  + box(850, 150, 250, 100, 'File server', ['Resolve object identity', 'Metadata and streaming'], 'green')
  + box(850, 470, 250, 110, 'Object storage', ['sales.csv input bytes', 'chart.png output bytes'], 'green')
  + box(420, 470, 250, 110, 'Egress gateway', ['Scoped handles and grants', 'Translate permitted requests'], 'amber')
  + box(45, 470, 250, 110, 'Job workspace', ['/mnt/data/sales.csv', '/mnt/data/chart.png'], 'red')
  + edge([[295, 180], [420, 180]], '1 upload', 355, 163)
  + edge([[670, 180], [850, 180]], '2 forward', 760, 163)
  + edge([[1030, 250], [1030, 470]], '3 persist CSV', 1110, 355)
  + edge([[850, 550], [670, 550]], '4 fetch input', 760, 533)
  + edge([[420, 550], [295, 550]], '5 prime', 355, 533)
  + edge([[295, 490], [420, 490]], '6 chart output', 355, 473)
  + edge([[600, 470], [600, 340], [940, 340], [940, 250]], '7 upload via file server', 775, 323)
  + edge([[1100, 195], [1290, 195], [1290, 660], [15, 660], [15, 225], [45, 225]], '8 later download: storage → file server → API → caller', 750, 643, '#52657e', true)
  + note(45, 720, 'Arrow 8 summarizes a separate authorized download and returns to the caller, independently of the job workspace.')
  + note(45, 750, 'The API returns references after successful delivery. Input references can retain an earlier storage_session_id.')
);

save('05-isolation.svg', 'Where execution runs in KVM mode', 'A long-lived runner can handle multiple jobs. Fresh process/workspace isolation remains necessary inside its guest.', 860,
  group(45, 115, 1030, 640, 'Dedicated Linux node / Azure VM (proposed AKS runner pool)', 'gray')
  + group(80, 175, 960, 540, 'Sandbox-runner Pod / container', 'blue')
  + box(115, 230, 870, 85, 'libkrun launcher + /dev/kvm', ['Host-side VM execution; separate guest kernel'], 'purple')
  + group(115, 350, 870, 325, 'MicroVM guest: runner HTTP service + NsJail execution', 'red')
  + box(150, 410, 380, 195, 'Job A: NsJail', ['Distinct workspace and job identity', 'Bounded language process', 'Input CSV → output chart', 'Cleanup after artifact upload'], 'red')
  + box(565, 410, 380, 195, 'Job B: NsJail', ['Independent workspace / identity', 'Separate concurrent execution', 'No automatic Python state sharing', 'Same guest, separate job boundary'], 'red')
  + box(1120, 260, 245, 135, 'Runner receives', ['Manifest public verifier', 'Scoped egress grant', 'Runtime configuration'], 'amber')
  + box(1120, 470, 245, 165, 'Kept outside runner', ['Storage credentials / identity', 'Redis password', 'Manifest private key', 'Gateway encryption secret'], 'green')
  + note(65, 800, 'Direct NsJail mode removes the microVM guest-kernel layer. It is a different isolation configuration, not an Azure shortcut.')
);

sequence('Programmatic tools: default replay model', 'The caller executes authorized external tools. Resubmission carries a continuation token and tool results.',
  ['Caller / tools', 'Code API', 'Worker / runner'], [
    [0, 1, 'POST /v1/exec/programmatic'], [1, 2, 'execute wrapped code'],
    [2, 1, 'pending tool call', true], [1, 0, 'tool_call_required + continuation', true],
    [0, 1, 'submit tool results + continuation'], [1, 2, 'replay with recorded results'],
    [2, 1, 'completed output + files', true], [1, 0, 'completed response', true],
  ], 850, '06-tools.svg');

save('07-aks.svg', 'Proposed deployment: AKS + Azure Blob Storage', 'Design target only. Native Blob integration, identity/configuration changes, and KVM validation remain future work.', 1000,
  box(45, 125, 250, 95, 'LibreChat', ['Private or public API access', 'Depends on network placement'])
  + group(335, 110, 1015, 615, 'AKS cluster', 'blue')
  + group(370, 170, 535, 500, 'Application node pool: trusted services', 'blue')
  + box(395, 225, 225, 100, 'Public API', ['Ingress / API endpoint', 'Authenticate + queue'])
  + box(650, 225, 225, 100, 'Service worker', ['Consume jobs', 'Sign + dispatch'], 'purple')
  + box(395, 385, 225, 100, 'File server', ['Blob adapter (future)', 'Workload Identity'], 'green')
  + box(650, 385, 225, 100, 'Egress gateway', ['Grant checks', 'Restricted delegation'], 'amber')
  + box(520, 540, 255, 85, 'Tool call server', ['Internal coordination'], 'amber')
  + group(945, 170, 370, 500, 'Dedicated execution pool', 'red')
  + box(970, 245, 320, 115, 'Sandbox-runner Pods', ['KVM-capable Linux nodes', 'libkrun guest + NsJail', 'No direct Blob identity'], 'red')
  + box(970, 480, 320, 115, 'Placement requirements', ['Selectors / taints / tolerations', 'Verified KVM access', 'Measured runner capacity'], 'gray')
  + box(45, 420, 250, 115, 'Redis', ['On AKS or managed', 'Topology/auth/TLS validation', 'BullMQ + application state'], 'purple')
  + box(395, 795, 280, 105, 'Azure Blob Storage', ['Private container', 'Uploads and artifacts'], 'green')
  + box(45, 795, 280, 105, 'Microsoft Entra ID', ['Federated workload identity', 'Blob data role assignment'], 'purple')
  + box(990, 795, 325, 105, 'Registry / observability', ['ACR or another image registry', 'Metrics, logs, OTLP collectors'], 'gray')
  + edge([[295, 175], [320, 175], [320, 275], [395, 275]])
  + edge([[395, 300], [320, 300], [320, 460], [295, 460]], 'jobs/state', 332, 369)
  + edge([[875, 275], [970, 275]], 'execute', 922, 257)
  + edge([[970, 330], [925, 330], [925, 435], [875, 435]], 'grant', 929, 385)
  + edge([[650, 435], [620, 435]])
  + edge([[755, 485], [755, 540]])
  + edge([[505, 485], [505, 745], [535, 745], [535, 795]], 'HTTPS object I/O', 590, 745)
  + edge([[455, 485], [455, 700], [190, 700], [190, 795]], 'token exchange', 307, 686, '#52657e', true)
  + note(45, 950, 'Not all Redis, DNS, telemetry, image-pull, or result-return edges are drawn. Network policy must account for each explicitly.')
);

sequence('Proposed Blob authentication with Workload Identity', 'The file-server service account is federated to an Azure identity with scoped Blob data permissions.',
  ['File-server Pod', 'Microsoft Entra ID', 'Azure Blob'], [
    [0, 1, 'present projected service-account token'],
    [1, 0, 'return authorized Azure access token', true],
    [0, 2, 'Blob operation + access token'],
    [2, 0, 'authorized object response', true],
  ], 570, '08-identity.svg');
console.log('Rendered 8 standalone course SVG diagrams.');
