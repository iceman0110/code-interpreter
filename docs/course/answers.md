# Checkpoint answers and capstone rubric

[Course home](README.md)

Try each lesson's exercise first. These answers explain the reasoning rather than prescribe one diagram layout.

## 1. HTTP success versus program success

HTTP 200 can mean the execution service successfully processed the request and returned an execution result. The result can still contain a nonzero process exit code or stderr. Artifact delivery is another independent outcome. Inspect the result fields, not just the HTTP status.

## 2. The two APIs

LibreChat calls the public API in `service/`, typically `/v1/exec` on port 3112. An HTTP execution worker calls the sandbox's `/api/v2/execute`, typically on port 2000. Public caller authorization and internal signed execution are different boundaries.

For the Dockerfile exercise, different build targets copy/build the relevant entrypoint and set different startup commands. Sharing a Dockerfile does not require the resulting containers to run all roles together.

## 3. The queue consumes time

A 25-second total budget with 20 seconds already spent in the queue leaves roughly five seconds for remaining work, not another 25 seconds. Grant creation, input delivery, and backend execution all use the remaining budget. Giving every stage a fresh budget violates the end-to-end deadline and can keep resources active after callers have stopped waiting.

## 4. Upload before cleanup

The workspace holds the local bytes needed for upload. Removing it first can lose the output and create dangling references. The route uploads, reconciles delivery, and settles cleanup before acknowledging completion. Cleanup also controls safe identity reuse.

Exercise classification: reserved-variable rejection is validation; fetching CSV is priming; timeout termination is execution supervision; chart upload is delivery; UID release is cleanup/isolation lifecycle.

## 5. What survives a runner crash?

Files already uploaded to object storage remain retrievable if their authorization/ownership state is available and access is healthy. Temporary workspace files that were not uploaded can be lost. A supported stateful backend may restore committed checkpoint state; uncommitted local changes are not automatically recoverable. Python process variables are not recovered merely because files persist.

For the two-run exercise, the second execution has a new execution session ID, while the first chart keeps the storage session ID associated with its original stored reference.

## 6. Keep authority outside the runner

A public verifier checks a worker-signed request without enabling the runner to forge a new authorized request. A scoped egress grant limits file/tool operations for that execution. A storage account key or unrestricted Blob identity would authorize broader access directly, bypassing the intended gateway boundary. The gateway secret and manifest private key belong to different trusted roles and serve different purposes.

## 7. Storage and execution are different subsystems

Blob stores objects. The Lambda backend launches/reuses environments, manages endpoint authorization, sessions, locks, and lifecycle. A Blob adapter does not replace those APIs. HTTP execution can be a first Azure target; stateful execution and hosted apps need separate decisions.

Exercise classification: printing a sum is ordinary execution; caller-provided database search is programmatic tool calling; retaining installed packages is a stateful-workspace requirement; keeping a preview server alive is a hosted-application lifecycle requirement.

## 8. Why a Pod can stay Pending

It might require a node selector that matches no node, lack a taint toleration, request unavailable CPU/memory/KVM devices, or depend on unavailable storage. A successfully built image establishes packaging, not schedulability or host capability.

## 9. Include all stages in the budget

Queue wait and input downloads consume user-perceived time and resources. A deadline spanning the request's execution pipeline prevents unlimited time from being accumulated by restarting timers at each stage.

For the burst exercise, first examine queue age/depth and lane binding, active worker/concurrency state, and runner resource/scheduling/admission state. Add storage/input-transfer latency if runners are occupied but CPU is low. Low API CPU is not evidence that execution has enough capacity.

## 10. Private Blob access needs three things

The Pod needs an identity, Blob data authorization for that identity, and a working network path including DNS, routing, allowed egress, and TLS. A private endpoint does not grant data permissions. A successful local developer login does not prove Workload Identity is configured on the Pod.

## 11. Moving bytes does not move the whole contract

Ownership records and logical file references determine whether a caller may access the bytes. Object keys, metadata/version markers, locator hints, and retention behavior determine how they are found and validated. A byte-only copy can leave these relationships missing or inconsistent. A rollback must also account for writes made after cutover.

## 12. Capstone rubric

Give each area 0–2 points: 0 means missing/wrong, 1 means partly explained, 2 means clear and accurate.

| Area | Full-credit explanation |
|---|---|
| Roles and entrypoints | Distinguishes public API, worker, runner, gateway, file/tool services, Redis, and storage |
| Execution trace | Correctly follows validation, enqueue, worker preparation, signing, execution, normalization, and completion |
| Sandbox lifecycle | Explains prime, execute, upload, reconciliation, cleanup, and per-job identity |
| Files and state | Distinguishes execution session, storage session, runtime session, metadata, and persistence |
| Security | Places keys/identities correctly and explains layered authorization/isolation |
| API versus function | Separates public paths, internal routes, exported helpers, and user code |
| Deployment | Explains image/Pod/Deployment/Service/node pool and the split worker/runner topology |
| Azure design | Includes Blob adaptation, Workload Identity, KVM proof, Redis compatibility, and networking |
| Operations | Uses deadlines, readiness, queue metrics, artifact failures, and recovery evidence |
| Migration | Clearly scopes features and provides test gates, data cutover, and rollback behavior |

Aim for 16/20 or more with no zero in security or Azure design. This is a self-study rubric, not a certification.

For the six incidents: investigate worker/queue binding; node/device scheduling; artifact scan/upload/gateway/storage; Pod federation/roles/DNS/egress; session locks and generation fencing; and preservation/routing of new Blob writes, respectively. Do not respond by scaling the API blindly, disabling KVM, assuming stdout proves delivery, granting the runner storage credentials, ignoring stale owners, or assuming a traffic switch moves data.

A strong final design explicitly lists unresolved evidence rather than presenting untested Azure assumptions as facts.
