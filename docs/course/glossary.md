# Glossary

[Course home](README.md)

| Term | Meaning in this course |
|---|---|
| API | A contract for requesting behavior; HTTP endpoints are one form |
| AKS | Azure Kubernetes Service: managed Kubernetes control plane and associated node pools |
| Artifact | File produced or surfaced by execution and made available through persistent storage |
| Authentication | Establishing who a caller/workload is |
| Authorization | Deciding what that identity is allowed to do |
| Backend | Implementation of the worker's execution transport/lifecycle contract |
| Blob | An object stored in Azure Blob Storage |
| Bucket/container | Provider-specific grouping for stored objects; distinct from a runtime container |
| BullMQ | Job/worker library backed by Redis |
| Checkpoint | Saved workspace archive/control state for supported lifecycle recovery; not assumed to be process memory |
| Container | Isolated process environment sharing the host kernel |
| Control plane | In this application, trusted orchestration/authorization services; Kubernetes also has its own infrastructure control plane |
| Deadline | Absolute latest completion time, unlike a fresh per-operation timeout |
| Deployment | Kubernetes controller maintaining replicas and rollout behavior |
| Egress | Outbound network traffic |
| Egress grant | Execution-scoped authority for selected gateway operations |
| ETag | Provider-issued representation validator; not automatically an application version or content hash |
| Execution profile | Deployment/routing identity used to separate compatible queues and requests |
| Federation | Trust allowing one system's identity token to be exchanged/accepted by another identity system |
| Fencing | Rejecting stale owners/results using a changing generation or ownership token |
| Helm | Tool that renders/configures Kubernetes resources from a chart |
| HPA | Horizontal Pod Autoscaler: adjusts replicas from configured metrics |
| Idempotency | Repetition of an operation does not create an unintended additional effect under its defined contract |
| Image | Packaged filesystem/executable environment used to start containers |
| Ingress | Incoming traffic; also a Kubernetes HTTP routing resource |
| IRSA | AWS identity integration for Kubernetes service accounts |
| Job | Unit of queued work; also the separate runner class representing one execution |
| JWT | Signed token carrying identity/authorization claims |
| KVM | Linux kernel virtualization facility used to run guest VMs |
| Lease | Time-bounded claim to an assignment/resource |
| libkrun | Library used by the launcher to run the microVM guest |
| Manifest | Signed description of an authorized execution, bound to its request |
| MicroVM | Lightweight virtual machine with a separate guest kernel |
| MinIO | S3-compatible object storage used by the local stack |
| Namespace | A scope for names/resources; Kubernetes, storage, and application identity use different namespaces |
| NetworkPolicy | Kubernetes rules controlling allowed Pod network traffic |
| Node / node pool | Host running Pods / group of similarly configured hosts |
| NsJail | Linux process sandbox using isolation and resource controls |
| Object storage | Storage accessed as named byte objects plus metadata rather than ordinary local files |
| OTLP / OpenTelemetry | Telemetry transport / instrumentation system used for traces and context |
| Pod | Kubernetes scheduling unit containing one or more containers |
| Principal | Trusted representation of an authenticated user/workload |
| Prime | Prepare the execution workspace, source, and inputs before running code |
| PTC | Programmatic tool calling: code requests external caller-provided tool results |
| PVC | PersistentVolumeClaim: Kubernetes request for filesystem storage |
| Queue | Ordered/coordinated collection of work awaiting processing |
| Readiness | Whether an instance is prepared to receive useful work |
| Redis | Shared state/coordination server used here for jobs, ownership, locks, and other state |
| Replay | Rerun wrapped code with recorded tool results to continue a programmatic workflow |
| Runtime | Installed language executable/package and its launch metadata/scripts |
| Runtime session | Binding to a supported stateful execution environment |
| S3 | AWS object-storage API, also implemented by compatible services |
| Sandbox | Restricted execution environment; identify which layers enforce its restrictions |
| seccomp | Linux syscall-filtering mechanism |
| Service | Kubernetes stable network endpoint selecting Pods; also a general application component |
| ServiceAccount | Kubernetes workload identity attachment point, distinct from an end user |
| Stateless execution | Execution that does not rely on a reusable runtime workspace from a previous call |
| Stateful workspace | Files/environment state retained between supported executions; not automatically live Python variables |
| stdin / stdout / stderr | Standard input / normal output / error output streams of a process |
| Taint / toleration | Kubernetes node scheduling restriction / permission to tolerate that restriction |
| TLS | Encrypted transport with server identity verification when configured correctly |
| UID/GID | Linux user/group identity numbers used in process and filesystem isolation |
| Workload Identity | AKS federation allowing a Pod's service-account identity to access authorized Azure services |
| Workspace | Filesystem area used by an execution or admitted project; not the same thing as an object-storage container |
