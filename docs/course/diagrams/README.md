# Architecture diagram gallery

[Course home](../README.md)

These SVGs are standalone vector graphics. Open them directly in a browser or include them in notes/slides; they remain sharp when enlarged. Titles and descriptions are embedded for accessibility. The course text provides the narrative equivalent.

| Graphic | Purpose | Status |
|---|---|---|
| [System overview](01-system.svg) | Service roles and main requests | Current HTTP path, simplified |
| [Execution sequence](02-execution.svg) | Queue/worker/runner request and result handoffs | Current ordinary execution |
| [Function collaboration](03-functions.svg) | Actual function names and lifecycle stages | Current ordinary execution |
| [File lifecycle](04-files.svg) | Input, artifact, and download paths | Current storage architecture |
| [Isolation layers](05-isolation.svg) | Host, runner, guest, and per-job boundary | Current KVM model; Azure pool is proposed |
| [Tool replay](06-tools.svg) | Pending calls and continuation round trips | Current default replay model |
| [AKS deployment](07-aks.svg) | Pools, services, Blob, and supporting resources | Proposed; not deployed or validated |
| [Workload Identity](08-identity.svg) | File-server token exchange and Blob authorization | Proposed integration |

The editable source is [render.mjs](render.mjs), using only Node's built-in modules. Regenerate with:

```text
node docs/course/diagrams/render.mjs
```

This only rewrites the eight diagrams in this directory. It does not build the application or contact Azure. These are explanatory diagrams rather than complete rendered NetworkPolicy or cloud resource inventories.
