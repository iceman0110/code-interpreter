# HTTP operations and available capabilities

[Course home](README.md) · [Function atlas](function-atlas.md) · [Raw route index](route-index.md)

This is a source-based map for the course snapshot. A route being registered does not guarantee that a deployment enables it or that a particular principal may use it. The active entrypoint, authentication, policy, and feature gates determine availability.

## Ordinary caller-facing API

These paths are mounted under `/v1` by [`api-server.ts`](../../service/src/api-server.ts). Handler registrations are in [`service/router.ts`](../../service/src/service/router.ts).

| Method and full path | What it does | Inputs and result |
|---|---|---|
| `POST /v1/exec` | Execute ordinary code and wait for its result | `lang`, `code`, optional arguments/files/timeout; text, exit information, and file references |
| `POST /v1/upload` | Upload files through multipart form data | File parts plus ownership-kind fields; storage session and uploaded file IDs |
| `POST /v1/upload/batch` | Upload a batch with per-file outcomes | Batch upload data; successful/failed results and storage session |
| `GET /v1/files/:session_id` | List authorized session files | Optional detail level; list of objects/references |
| `GET /v1/download/:session_id/:fileId` | Download file bytes | Authorized session/file identity; streamed response |
| `GET /v1/sessions/:session_id/objects/:fileId` | Retrieve object metadata through the public API | Metadata such as size/version/freshness; **not** a byte download |
| `DELETE /v1/files/:session_id/:fileId` | Delete a logical file identity | Authorized session/file identity |
| `DELETE /v1/sessions/:session_id/objects/:fileId` | Alternative public delete route | Same delete handler |
| `GET /v1/health` | Check API health, including Redis reachability | Health status; outside ordinary caller-auth middleware |

Public file access is ownership checked. Uploads distinguish resource kinds `user`, `agent`, and `skill`; `kind`, `entity_id`, and version fields have specific semantics. Input file references also carry ownership information. Consult [`RequestFile`](../../service/src/types/service.ts) and [`file-authorization.ts`](../../service/src/service/file-authorization.ts) before constructing real requests.

### Language selection

[`languageConfig`](../../service/src/config.ts) distinguishes these public language choices:

| Choice | Runtime family | Example aliases |
|---|---|---|
| `py` | Python | `python`, `py` |
| `js` | Bun JavaScript | `javascript`, `js`, `bun-js`, `bun` |
| `node` | Node.js | `node`, `nodejs`, `node-js` |
| `ts` | Bun TypeScript | `typescript`, `ts`, `bun-ts` |
| `bash` | Bash with available packaged tools | `bash`, `sh` |

Actual versions and installed packages come from the matching images/runtime packages. Public language configuration, an internal `/runtimes` response, and installed packages must agree. Advanced programmatic modes have narrower language constraints than ordinary execution.

An illustrative ordinary response has this shape; exact optional fields vary:

```json
{
  "session_id": "execution-session-example",
  "stdout": "Total sales: 1200\n",
  "stderr": "",
  "files": [],
  "code": 0
}
```

## Programmatic tools

Source: [`programmatic-router.ts`](../../service/src/service/programmatic-router.ts).

| Method and path | Purpose | Important behavior |
|---|---|---|
| `POST /v1/exec/programmatic` | Start execution or continue after tool results | Can return `tool_call_required`, `completed`, or `error`; continuation tokens bind resumed work |
| `POST /v1/exec/programmatic/cancel` | Request cancellation by `request_id` | Ownership checked; cancellation has its own outcome and fencing |

The default mode is replay. A response asking for tools is an intentional intermediate result, not a failed ordinary `/exec` response. Tools are supplied/authorized by the caller; Code API does not grant unrestricted access to arbitrary external services.

## Workspace tool API

Source: [`workspace-tools/router.ts`](../../service/src/workspace-tools/router.ts), [`packages/code/src/protocol.ts`](../../packages/code/src/protocol.ts).

| Method and path | Purpose |
|---|---|
| `POST /v1/workspace-tools/execute` | Execute an authorized operation on an admitted workspace |
| `POST /v1/workspace-tools/requests` | Submit a durable workspace request |
| `GET /v1/workspace-tools/capabilities` | Report durable-request capability |
| `GET /v1/workspace-tools/requests/:requestId` | Read authorized durable request status |
| `DELETE /v1/workspace-tools/requests/:requestId` | Request cancellation of authorized durable work |

The protocol defines these operation names: `read_file`, `search_text`, `list_files`, `write_file`, `preview_edit`, `edit_file`, `execute_command`, and `import_file`. A worker's capabilities and the principal/workspace policy determine which are actually permitted. Import and mutation operations have additional limits and handling.

These are remote-workspace features, not ordinary file-server CRUD. `write_file` changes a workspace file; uploading an artifact stores an object under a storage identity.

## Remote bridge API family

Source: [`bridge/router.ts`](../../service/src/bridge/router.ts); mounted under `/v1/bridge`. This family uses administrator, pairing, and worker authentication rules, rather than treating every operation as an ordinary user API.

| Full path family | Purpose |
|---|---|
| `/v1/bridge/enrollments/*` and `/enrollments` | Browser/device enrollment capabilities and lifecycle |
| `/v1/bridge/pairings` and `/pairings/redeem` | Create and redeem one-time pairing authorization |
| `/v1/bridge/workers/register` | Register authenticated worker capabilities |
| `/v1/bridge/workers/:workerId/ready` | Update worker readiness |
| `/v1/bridge/workers/:workerId/status` | Read worker status with the required authority |
| `/v1/bridge/workers/:workerId/revoke` | Revoke worker authorization |
| `/v1/bridge/workers/:workerId/workspaces/reset` | Controlled workspace reset/recovery |
| `/v1/bridge/workers/:workerId/lease` | Acquire/poll an assignment |
| `/v1/bridge/workers/:workerId/assignments/:assignmentId/*` | Acknowledge, settle, quarantine, confirm workspace cleanup, and inspect cancellation |
| `/v1/bridge/workers/:workerId/credentials/*` | Refresh or recover worker credentials |

The [generated registration index](route-index.md) gives exact methods and source lines. Recovery/enrollment and other routes have configuration gates; read the [bridge runbook](../remote-bridge/worker-runbook.md) for the intended protocol sequence.

## Hosted applications

Source: [`hosted-app/router.ts`](../../service/src/hosted-app/router.ts), mounted at `/v1/hosted-apps`.

| Method and path | Purpose |
|---|---|
| `POST /v1/hosted-apps` | Start an application from the supported revision/checkpoint workflow |
| `GET /v1/hosted-apps/:appId` | Read application status |
| `DELETE /v1/hosted-apps/:appId` | Stop/delete the application lifecycle |

Feature-gated and Lambda-specific in this snapshot. Preview routing is additional middleware, not the ordinary execution response channel. Initial AKS stateless execution support would not establish hosted-app parity.

## Internal sandbox API: `/api/v2`

Source: [`api/src/api/v2.ts`](../../api/src/api/v2.ts). These paths belong to the runner, not the public Code API.

| Method and full path | Purpose / gate |
|---|---|
| `POST /api/v2/execute` | Validate signed execution request, prime/run/upload/clean |
| `GET /api/v2/health` | Internal runner health |
| `GET /api/v2/runtimes` | Installed runtime descriptors; internal discovery |
| `POST /api/v2/workspace/execute` | Dedicated authenticated bridge workspace execution path; requires its own configuration |
| `GET /api/v2/session/checkpoint` | Stream workspace checkpoint for a valid session-bound target |
| `POST /api/v2/session/restore` | Restore a workspace checkpoint for a valid session-bound target |
| `POST /api/v2/session/inputs/probe` | Probe cached pushed inputs; session-workspace-enabled runner target |
| `POST /api/v2/session/inputs` | Receive pushed input archive; same target restriction |
| `POST /api/v2/hosted-app/start` | Start dedicated hosted process; hosted-app target only |
| `GET /api/v2/hosted-app/status` | Inspect dedicated hosted process |
| `POST /api/v2/hosted-app/stop` | Stop dedicated hosted process |

The runner also exposes `/` and `/metrics` outside `/api/v2`. Lifecycle-hook routing is registered separately in [`api/lifecycle.ts`](../../api/src/api/lifecycle.ts). None of this implies the endpoints should be publicly exposed.

## Internal file server

Source: [`file-server.ts`](../../service/src/file-server.ts). Default port: 3000.

| Method and path | Purpose |
|---|---|
| `POST /sessions/:session_id/objects` | Multipart upload |
| `PUT /sessions/:session_id/objects/:fileId` | Stream one logical object upload/replacement |
| `GET /sessions/:session_id/objects` | List objects; `simple`, `summary`, `full`, or `normalized` details |
| `GET /sessions/:session_id/objects/:objectId/metadata` | Object metadata |
| `GET /sessions/:session_id/objects/:objectId` | Stream object bytes |
| `DELETE /sessions/:session_id/objects/:fileId` | Remove exact logical identity and matching legacy keys |
| `GET /health`, `/ready`, `/metrics` | Operational endpoints |

Notice the naming difference: the public GET ending in `/objects/:fileId` returns metadata; this internal file-server GET streams bytes. The internal metadata route has an explicit `/metadata` suffix.

## Internal gateway and tool call server

The [gateway](../../service/src/egress-gateway.ts) manages grants with `/internal/egress-grants*`, mints scoped callback authorization with `/internal/ptc-callback-token`, and exposes grant-checked file routes, `/input-manifest`, and `/tool-call` to sandbox-side clients. It also exposes operational probes and metrics.

The [tool call server](../../service/src/tool-call-server.ts) uses custom Bun routing, which is intentionally not inferred by the Express registration index:

- `POST /sessions`, `GET /sessions/:executionId`, `DELETE /sessions/:executionId`.
- `GET /sessions/:executionId/pending` and `GET /sessions/:executionId/status`.
- `POST /sessions/:executionId/results`, `/complete`, and `/error`.
- `POST /tool-call`, `GET /health`, and `GET /metrics`.

Session-management routes use internal service authentication when configured. Tool calls use their own session/token validation. The gateway and caller-side programmatic loop coordinate these interfaces; they are not public user CRUD endpoints.

## How to use this reference

Find an operation, locate its router, inspect its middleware and request types, then follow the relevant functions in the [atlas](function-atlas.md). The existing [service OpenAPI](../../service/openapi.yml) and [runner OpenAPI](../../api/openapi.yaml) are useful additional reading, but do not assume they enumerate every newer feature or fully encode current policy.
