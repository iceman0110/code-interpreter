# 4. Inside the sandbox runner

[Previous](03-execution.md) · [Course home](README.md) · [Next](05-files-and-state.md)

**Objective:** Explain how the runner transforms a signed request into execution, artifacts, and cleanup.

## The runner's lifecycle

The internal `/api/v2/execute` handler lives in [`api/src/api/v2.ts`](../../api/src/api/v2.ts#L478). Its main lifecycle is:

```text
verify request → construct Job → prime → execute
                                      ↓
                              collect/upload artifacts
                                      ↓
                              reconcile delivery → cleanup → respond
```

The `Job` here is an execution object in `api/src/job.ts`. It is different from the BullMQ `Job` that carried work through Redis. They share a word, not an implementation.

## Validate before preparing the workspace

When execution manifests are required, `verifyExecuteRequestManifest()` checks the request's authorization and body binding before constructing the execution Job. Tool-call pipe/socket access has its own authorization check.

`getJob()` in `api/v2.ts` validates the payload, selects the language runtime, normalizes timeouts and files, and constructs the Job. Functions such as `validateExecuteFiles()`, `validateExecuteArguments()`, and `sanitizeEnvVars()` help reject malformed or reserved inputs.

## Prime: prepare what the process needs

`Job.prime()` acquires workspace isolation, writes source files, and prepares requested inputs. File references identify stored bytes; they are downloaded through the permitted file path and written into the execution workspace. Destination validation and safe file handling stop a file name from becoming unrestricted host filesystem access.

Priming is not execution. A failure while downloading the CSV means the Python analysis has not successfully started.

## Execute: runtime scripts inside NsJail

`Job.execute()` selects runnable source files. If a runtime declares a compilation step, it runs that first. A compilation failure prevents the normal run step.

The key call chain is:

```text
Job.execute()
  → Job.safeCall("compile" or "run", ...)
    → nsjail.execute(options)
      → buildArgs(options)
      → start child process; capture output; enforce execution limits
```

`safeCall()` builds a command using a runtime package's script, combines the permitted environment, and passes workspace, memory, timeout, and identity settings to NsJail. A runtime package therefore contains executable launch instructions, not merely a version number.

`nsjail.execute()` renders configuration and supervises the child process. It captures stdout/stderr and reacts to output or time limits. Resource settings exist at multiple levels: per-process sandbox controls, guest resources, and Kubernetes container limits. Each level constrains a different scope.

## Where the microVM fits

![KVM runner and per-job execution layers](diagrams/05-isolation.svg)

In KVM mode, the runner and NsJail operate inside a guest kernel supplied through libkrun. Several executions may use the runner over its lifetime. Per-job identities and workspaces still matter because a separate guest kernel does not automatically separate jobs inside that guest.

In direct NsJail mode there is no guest kernel. The project describes that weaker mode as appropriate for local development. The course's proposed Azure design retains the KVM isolation model.

The baked runner image supplies its root filesystem and `/pkgs` from a read-only block image. The legacy package-PVC path is different. Do not design an Azure Files package share merely because a PVC option exists; the baked image path may need no package share at all.

## Discover, upload, and clean

After execution, the Job walks the workspace to find supported outputs. It handles unchanged input references, deleted files, limits, and empty-directory markers. It does not promise that every possible file on disk becomes an artifact.

`Job.uploadGeneratedFiles()` streams generated artifacts through the gateway. `reconcileArtifactDelivery()` removes references whose upload did not succeed and reports delivery problems.

`Job.cleanup()` runs before successful acknowledgement and also through failure/finally paths. Releasing workspace identities too early could let another execution reuse an identity while the first child is still active. Cleanup failures therefore affect isolation and future scheduling.

## Read the source

Open [`Job.prime`](../../api/src/job.ts#L935), [`Job.safeCall`](../../api/src/job.ts#L1610), [`Job.execute`](../../api/src/job.ts#L1655), [`nsjail.execute`](../../api/src/nsjail.ts#L252), [`uploadGeneratedFiles`](../../api/src/job.ts#L2579), and [`cleanup`](../../api/src/job.ts#L2718). See [`runtime.ts`](../../api/src/runtime.ts) for runtime discovery.

**Exercise:** Label each operation as validation, priming, execution, delivery, or cleanup: reject a reserved environment variable; fetch `sales.csv`; kill a timed-out process; upload `chart.png`; release a job UID.

**Checkpoint:** Why must artifact upload finish before the temporary workspace is removed?
