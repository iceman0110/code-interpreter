# 9. Capacity, failure, observability, and upgrades

[Previous](08-deployment.md) · [Course home](README.md) · [Next](10-azure-design.md)

**Objective:** Diagnose the system by lifecycle stage and explain which resource to scale.

## Follow the deadline

A request spends time authenticating, waiting in Redis, preparing grants and inputs, executing, uploading artifacts, and cleaning up. The worker's deadline calculation includes queue wait when the enqueue time is available.

There are several limits: request/body size, job deadline, sandbox runtime timeout, output size, memory, process count, file size/count, gateway budgets, and VM resources. Increasing one limit does not automatically increase the others.

For example, extending the sandbox timeout while leaving the worker deadline short can lead to a caller timing out before intended execution completes. An ingress proxy can introduce another deadline before the application sees a request.

## Capacity is a pipeline

If ten runner slots each take five seconds per job, an idealized upper bound is about two jobs per second. Real throughput is lower when priming, transfer, cleanup, uneven runtimes, and resource contention consume capacity. This arithmetic is a planning model, not a measurement of this repository.

Scaling public API replicas improves request-handling capacity. Scaling service workers increases queue consumption and orchestration. Scaling runners increases execution capacity when nodes, KVM resources, and workload limits allow it. Those are related but different bottlenecks.

The chart's optional API HPA targets CPU. The runner HPA targets CPU/memory. Queue-depth autoscaling is not supplied merely because BullMQ is present; it would require additional design/configuration. Measure queue age as well as queue length: a short queue containing very slow jobs can still produce poor latency.

## Diagnose by stage

| Symptom | First places to inspect | What the symptom does not prove |
|---|---|---|
| Requests rejected before enqueue | Auth, profile header, validation, file ownership | That runners are unhealthy |
| Jobs stay waiting | Worker readiness, correct queue names, Redis | That more API replicas are needed |
| Runner Pod Pending | Pool selectors, taints, device requests, available capacity | That user code is wrong |
| Sandbox fails before Python starts | Manifest verification, runtime packages, workspace setup, KVM | That the script itself failed |
| File created but missing from response | Artifact scan limits, upload, gateway, storage | That stdout was lost |
| File list works but download returns conflict | Version marker and overwrite timing | That authorization should be bypassed |
| Backend session busy | Session lock or lease ownership | That all runner capacity is exhausted |

## Health, readiness, metrics, traces

**Liveness** asks whether an instance needs restarting. **Readiness** asks whether it should receive work. A process responding to TCP can still lack usable storage or Redis connectivity.

The public API exposes `/v1/health`; workers expose `/health` and `/ready`; the file server exposes `/health` and `/ready`; the gateway exposes `/live`, `/health`, and `/ready`. Inspect actual checks before interpreting them. For example, the current file-server readiness path does not treat a false `bucketExists()` result as a failure; a future storage implementation should assess that behavior explicitly.

Prometheus metrics report execution, queue, file, and service behavior. OpenTelemetry context is carried across queue jobs and HTTP calls, connecting an API request to worker and sandbox spans. Logs provide details, but credentials and complete sensitive request bodies should not become debugging output.

The runner also has operational guards for file-descriptor retention and guest/host clock skew. Clock accuracy matters because signed grants and manifests have lifetimes. A healthy-looking process with a drifting clock can reject valid work.

## Upgrades and recovery

Roll out matching image/configuration versions. Respect the chart's existing rollout strategies, especially pairing/revocation compatibility rules. Profile and queue separation prevent incompatible deployments from consuming one another's work.

Before a storage cutover, decide how old references remain resolvable. Before restoring Redis backups, consider lost ownership records, locks, and revocations. Object storage and Redis do not form one automatically synchronized backup.

## Read the source

Read [`metrics.ts`](../../service/src/metrics.ts), [`telemetry.ts`](../../service/src/telemetry.ts), [`lifecycle.ts`](../../service/src/lifecycle.ts), [`worker-hpa.yaml`](../../helm/codeapi/templates/worker-hpa.yaml), [`config.ts`](../../service/src/config.ts), and [security maintenance guidance](../SECURITY-MAINTENANCE.md).

**Exercise:** A burst causes long queue waits while API CPU stays low. Propose the next three measurements before choosing a component to scale.

**Checkpoint:** Why must the overall job deadline account for input downloads and queue wait, not only Python execution?
