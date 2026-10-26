# 8. From Docker images to Kubernetes deployments

[Previous](07-tools-and-backends.md) · [Course home](README.md) · [Next](09-operations.md)

**Objective:** Explain how the source becomes a running stack and how a local deployment differs from AKS.

## Build time versus runtime

At build time, Dockerfiles install dependencies, compile/bundle entrypoints, and assemble runnable images. At runtime, environment variables and Kubernetes configuration tell those images where Redis and other services are.

[`service/Dockerfile`](../../service/Dockerfile) has targets for several roles. The `api` target starts the public API; the `worker` target starts queue processing; the `production` target starts the file server. Other Dockerfiles build the gateway, tool server, launcher, and sandbox images.

The runner image contains language runtimes and sandbox machinery. Building that image is more involved than bundling the TypeScript API: it supplies the execution environment itself.

Pin immutable image tags or digests for a reproducible deployment. A matching source checkout, image set, and chart configuration are one release unit; a mutable tag alone does not establish that match.

## Docker Compose: one host's service graph

[`docker-compose.yaml`](../../docker-compose.yaml) defines the public API, service worker, runner, gateway, file server, tool server, Redis, and MinIO. Compose gives services names on a shared network and connects storage volumes.

It is useful for understanding the dependencies and local validation. It is not evidence that production authentication, KVM, storage durability, or networking is configured for Azure. For example, local-mode authentication and development credentials must be read as local settings.

No stack startup is needed for this course. A later local lab should first check host OS/KVM support and the selected Compose variant. Native Windows, WSL2, Linux hosts, and the macOS override do not have identical execution behavior.

## Kubernetes vocabulary, with this project as the example

| Concept | Meaning | Code Interpreter example |
|---|---|---|
| Image | Packaged executable filesystem | Worker image |
| Pod | Scheduled group of containers | One sandbox-runner instance |
| Deployment | Desired replica set and rollout behavior | Three runner Pods |
| Service | Stable network name and routing to matching Pods | Internal sandbox endpoint |
| Ingress/gateway | Route from a client network into the application | Public API hostname |
| ServiceAccount | Kubernetes workload identity | File server identity attachment point |
| Secret | Sensitive configuration delivered to workloads | Manifest private key |
| Node | Host machine running Pods | Azure VM hosting a runner |
| Node pool | Group of similarly configured nodes | Dedicated KVM-capable pool |
| PVC | Claim for persistent filesystem storage | Legacy runtime-package delivery |
| NetworkPolicy | Allowed ingress/egress relationships | Runner → gateway restrictions |

## Helm: parameterized Kubernetes objects

Helm combines templates in `helm/codeapi/templates/` with `values.yaml` and your overrides. The result is ordinary Kubernetes YAML.

```text
chart templates + default values + environment overrides
                          ↓ render
              Deployments, Services, Secrets,
              policies, optional HPA/PVC/Ingress
                          ↓ apply in a later deployment phase
                    running workloads
```

The chart currently creates separate service-worker and sandbox-runner Deployments. The worker reaches runners through a Service, not necessarily a private sidecar on localhost. Scaling runner replicas can distribute ordinary stateless jobs across them.

Redis and MinIO can be chart dependencies or external endpoints. Disabling MinIO does not make Blob Storage work: the file server currently speaks S3/MinIO APIs.

## Isolation-aware scheduling

The trusted API/worker tier can use normal application nodes. Runner Pods should use nodes whose KVM and isolation properties have been verified. Node selectors select the intended pool; taints and tolerations reserve it appropriately.

The chart supports a legacy `/dev/kvm` hostPath and an optional device-plugin resource request. A device plugin advertises a device to the scheduler; a hostPath simply exposes a host device. Neither proves that the Azure VM actually supports the required virtualization behavior.

![Proposed AKS deployment topology](diagrams/07-aks.svg)

This graphic shows a proposed Azure topology, not the current chart's complete Azure support. Blob, Workload Identity, external egress, and Redis compatibility require the assessment in Lessons 10–11.

## Read the source

Read [`Chart.yaml`](../../helm/codeapi/Chart.yaml), [`values.yaml`](../../helm/codeapi/values.yaml), the [worker/runner template](../../helm/codeapi/templates/worker-sandbox-deployment.yaml), [file-server template](../../helm/codeapi/templates/file-server-deployment.yaml), and [PVC template](../../helm/codeapi/templates/pvc.yaml).

**Exercise:** Draw two Deployment boxes, each containing two Pods, then one Service targeting the runner Pods. Explain what changes if the replica count increases.

**Checkpoint:** Why can a Pod remain Pending even though its image builds successfully?
