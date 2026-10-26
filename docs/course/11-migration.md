# 11. Assess the conversion before implementing it

[Previous](10-azure-design.md) · [Course home](README.md) · [Next](12-capstone.md)

**Objective:** Produce a reviewable migration design with clear scope, proof points, and rollback behavior.

This lesson proposes future work. None of its stages are deployment commands or a claim that the work has been implemented.

## Compatibility has several layers

| Layer | Question |
|---|---|
| Client contract | Can LibreChat send the same requests and use the returned references? |
| Execution behavior | Do runtime selection, limits, output, cancellation, and cleanup still work? |
| Security | Are ownership, signatures, gateway scope, and isolation preserved? |
| Persistence | Do files and required coordination state survive the intended failures? |
| Operations | Can the team deploy, observe, scale, upgrade, and roll back? |

A deployment that boots but cannot safely recover or deliver artifacts is incomplete.

## Workstream 1: baseline the current contract

Record ordinary execution, upload, list, metadata, download, and delete behavior against the existing S3/MinIO path. Include error behavior and ownership checks, not just happy paths. Read existing tests before inventing new contracts.

Choose the first Azure scope explicitly: HTTP/stateless with artifacts is different from full Lambda stateful and hosted-app parity. Keep a list of excluded or deferred capabilities visible in the eventual design review.

## Workstream 2: prove the execution substrate

Validate one candidate KVM-capable AKS pool before designing a whole fleet around it. Exercise guest startup, DNS, per-job workspace isolation, concurrent jobs, resource limits, output limits, artifact transfer, cleanup, runner restarts, and time synchronization.

If the proposed pool cannot support the required isolation model, revisit the substrate. Silently disabling KVM would change the security architecture rather than solve the same deployment requirement.

## Workstream 3: adapt file storage

Create a small provider boundary around the file server's storage operations. Keep the current S3 behavior as a baseline. Add a Blob implementation and explicit provider configuration.

The important test matrix includes:

| Case | What must remain true |
|---|---|
| Empty file and ordinary file | Upload/download returns the exact bytes |
| Large unknown-length upload | Memory use stays bounded |
| Unicode and nested filename | Original filename and intended destination survive |
| Read-only input | Metadata/behavior is preserved |
| Replace same logical ID | One current identity, with correct legacy handling |
| Overwrite between metadata and download | Version mismatch is detected |
| List over many pages | No silent omission from pagination |
| Missing versus denied object | Missing is not confused with a permission failure |
| Failed artifact upload | No phantom delivered reference |
| Container removed or permissions revoked | Readiness and error handling reflect the failure |

An emulator can exercise many storage semantics; real Azure must still validate identity, TLS, networking, and service behavior. Full checkpoints need their own storage assessment because they currently use a separate S3 client.

## Workstream 4: make deployment configuration explicit

Design an Azure values profile covering image references, execution profile, backend choice, node placement, KVM delivery, identity annotations/labels, storage settings, Redis TLS/authentication, network egress, and secret injection.

Render Helm before deploying. Check that the file server receives Azure identity settings and that the runner does not receive storage credentials, Redis secrets, or private signing material. Check policy targets and actual service ports. A successful template render checks structure; it cannot prove cloud permissions or runtime isolation.

## Workstream 5: choose Redis through evidence

Test enqueue/completion, worker reconnection, Pub/Sub, Lua/multi-key operations, cancellation, locks, and any enabled bridge revocation state on the proposed Redis configuration. Use production-like TLS and authentication. Decide persistence, eviction, backup, and restore policies deliberately.

The bridge documentation requires durable authorization/revocation state. Restoring an old backup can revive trust that was revoked later. Treat recovery as a security behavior as well as a data operation.

## Workstream 6: data migration and cutover

For a brand-new deployment, an empty Blob container may be sufficient. For an existing production system, old file references point to stored objects and related ownership records. Copying bytes alone is not a complete migration.

Choose one migration contract: preserve object keys and metadata with a controlled cutover; retain an explicitly designed legacy read route; or start a separate environment with a clear boundary for old data. None of those mechanisms exists automatically in the current code.

Before switching traffic, define who may write to which backend and how in-flight jobs drain. During rollback, route/configuration and data ownership must agree. Returning traffic to S3 after new writes landed only in Blob can strand those new references.

## Evidence gates

1. Current behavior documented and initial feature scope agreed.
2. Candidate AKS runner demonstrates the required isolation and lifecycle.
3. Blob adapter preserves file and version semantics.
4. Redis behavior and failure recovery are compatible.
5. Rendered deployment assigns identities, secrets, and network rules correctly.
6. End-to-end Azure test creates a chart, returns a valid reference, downloads it, and survives selected failure scenarios.
7. Cutover and rollback are rehearsed with representative data.

**Exercise:** Write a one-page migration proposal with a scope table, an architecture diagram, five uncertainties, verification gates, and a rollback rule.

**Checkpoint:** Why can moving stored files to Blob require changes to ownership/index recovery even if the HTTP file-reference shape stays identical?
