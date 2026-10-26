# 12. Explain and design the whole system

[Previous](11-migration.md) · [Course home](README.md) · [Answer guide](answers.md)

**Objective:** Demonstrate understanding without copying a diagram or deploying infrastructure.

## Scenario

A team runs LibreChat and wants Code Interpreter on AKS. Users upload CSV files, run Python or JavaScript, download generated reports, and occasionally use caller-provided tools. They want persistent artifacts. They have not yet decided whether persistent workspaces or hosted applications are necessary.

You are responsible for proposing the architecture and identifying what must be verified before implementation.

## Deliverable 1: explain one request

Describe the journey from `POST /v1/exec` to the returned result. Name at least eight implementation functions/methods and identify which ones are library methods. Include file authorization, queueing, signing, runner execution, artifact delivery, cleanup, and completion.

Use the [function atlas](function-atlas.md) to check your answer after drafting it.

## Deliverable 2: draw three diagrams

1. A logical service diagram with request and result directions.
2. A sequence diagram for uploaded CSV → generated chart → download.
3. An Azure deployment diagram with application/runner pools, Redis, Blob, identity, and allowed network paths.

Label current behavior separately from proposed changes. Show the boundary around the sandbox. State which components hold the manifest private key, gateway secret, and Blob identity.

## Deliverable 3: write a function/API map

Choose one public operation for execution, upload, listing, download, and deletion. Identify the router handling it and the internal file-server or runner endpoint it eventually reaches.

Explain why `/api/v2/execute`, `Job.execute()`, and a caller's Python function are three different things even though each can be called a “function.”

## Deliverable 4: make the Azure scope decision

Write a table answering these questions:

- Is the initial execution backend HTTP, Lambda, or remote bridge?
- Is runtime state stateless, affinity, or strict?
- Which data must survive a runner restart?
- What evidence is required for the KVM node pool?
- How does the file server authenticate to Blob?
- What Redis command/topology/authentication assumptions need validation?
- Which existing Helm/network-policy gaps must be addressed?
- What remains outside the first migration's scope?

## Deliverable 5: investigate failures

For each incident, identify the likely stage, the evidence to inspect, and one unsafe assumption to avoid:

| Incident | Question to answer |
|---|---|
| Jobs wait while API replicas are healthy | Which tier or queue binding could be responsible? |
| Runner Pod cannot schedule | Which host/device constraints matter? |
| Python prints success but no chart downloads | Where can artifact delivery fail? |
| Blob access works locally but fails on AKS | Which identity and network differences matter? |
| Two calls target the same stateful workspace | Which lock/fence prevents conflicting ownership? |
| Traffic rolls back after new Blob writes | How do callers find those new artifacts? |

## Completion standard

You have completed the course when you can give a 10-minute walkthrough covering:

- The six service roles and infrastructure dependencies.
- The two APIs and the complete execution/file paths.
- Process isolation versus VM isolation versus file persistence.
- Public operations versus internal functions.
- Compose versus Helm/Kubernetes placement.
- The proposed Azure architecture and the evidence still missing.

Use the [answer guide and rubric](answers.md) to assess your explanation. The next step after this course is a reviewed design, followed by an explicitly scoped implementation task.
