# 2. Find your way around the repository

[Previous](01-foundations.md) · [Course home](README.md) · [Next](03-execution.md)

**Objective:** Know which process owns which responsibility and where to begin reading its code.

## Two different APIs

The directory names can be confusing:

| Location | Responsibility | Main entrypoint |
|---|---|---|
| `service/` | Public API, workers, file server, gateway, tool server | Several entrypoints below |
| `api/` | Internal sandbox API and execution machinery | [`api/src/index.ts`](../../api/src/index.ts) |
| `launcher/` | Rust/libkrun microVM launcher | [`launcher/`](../../launcher/) |
| `packages/code/` | Remote-worker CLI and provider-neutral protocol | [`README`](../../packages/code/README.md) |
| `packages/extraction/` | Separate extraction package and worker | [`package`](../../packages/extraction/) |
| `shared/` | Shared implementation such as telemetry | [`shared/`](../../shared/) |
| `helm/codeapi/` | Kubernetes templates and deployment values | [`values.yaml`](../../helm/codeapi/values.yaml) |
| `docker/`, Compose files | Image and local-stack definitions | [`docker-compose.yaml`](../../docker-compose.yaml) |
| `seccomp/`, `apparmor/` | Additional Linux security profiles | Their README files |
| `tests/` | Integration, deployment, and sandbox checks | [`tests/`](../../tests/) |

The public API normally listens on port **3112**. The sandbox's internal HTTP API normally listens on **2000**. These are repository defaults, not mandatory port assignments.

## Six runtime roles

![Current system and main dependencies](diagrams/01-system.svg)

| Role | File to open | Main dependency |
|---|---|---|
| Public API | [`api-server.ts`](../../service/src/api-server.ts) | Redis, file server, tool coordination |
| Service worker | [`worker-server.ts`](../../service/src/worker-server.ts), [`workers.ts`](../../service/src/workers.ts) | Redis, sandbox backend, gateway |
| Sandbox runner | [`index.ts`](../../api/src/index.ts), [`api/v2.ts`](../../api/src/api/v2.ts) | Runtime packages, NsJail, permitted gateway traffic |
| File server | [`file-server.ts`](../../service/src/file-server.ts) | S3/MinIO and Redis |
| Egress gateway | [`egress-gateway.ts`](../../service/src/egress-gateway.ts) | File server, tool server, Redis ledger |
| Tool call server | [`tool-call-server.ts`](../../service/src/tool-call-server.ts) | Redis and programmatic-call coordination |

The main stack also includes Redis and, for local storage, MinIO. They are infrastructure dependencies rather than additional language execution services.

An entrypoint starts a process. A module such as `payload.ts` provides functions to other modules. A Dockerfile target decides which entrypoint an image starts. A Helm Deployment decides how many instances run. Understanding those four levels prevents many configuration mistakes.

## Startup and shutdown

The public API uses `startApiServer()` and `startupApiOnly()` in [`lifecycle.ts`](../../service/src/lifecycle.ts). Workers use `startWorkerServer()` and `startupWorkerOnly()`. Startup validates configuration and dependencies before declaring the service usable.

The sandbox starts by loading runtime packages, validating hardened startup settings, initializing workspace isolation, and running optional warmup work. It then listens for HTTP requests. Shutdown stops accepting work and closes resources; cleanup of an individual job is a separate lifecycle.

Some comments describe an older co-located worker/sandbox layout. The current [worker Helm template](../../helm/codeapi/templates/worker-sandbox-deployment.yaml) declares separate `service-worker` and `sandbox-runner` Deployments. Use those active declarations when drawing deployment topology.

## How to read without getting lost

Follow one request across module boundaries first. Treat tests as examples of expected behavior. Return to helper functions only when you need to answer a concrete question such as “who signs this body?” or “which identity authorizes this file?”

The [function atlas](function-atlas.md) is the guided map. The [symbol index](symbol-index.md) is a lookup reference, not the suggested reading order.

**Exercise:** Locate the Dockerfile command for the public API and the command for the file server. Explain how one Dockerfile can build different images.

**Checkpoint:** Which API should LibreChat call, and which API should an execution worker call?
