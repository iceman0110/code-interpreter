# 1. What a code interpreter actually does

[Course home](README.md) · [Next: repository map](02-repository-map.md)

**Objective:** Explain what runs the code, where it runs, and why a service needs more than a Python command.

## Begin with a process

On your own machine, running `python report.py` starts a process. A process has a program, memory, an identity, environment variables, open files, and an exit status. Python reads source code and performs its instructions. Node.js plays a similar role for JavaScript.

The language interpreter is one part of this project. The surrounding service must accept requests from many users, control access to files, bound resource use, capture output, and remove temporary state. A submitted program can fail, loop forever, generate huge output, or attempt to read another user's files. Those possibilities shape the architecture.

The minimal useful model is:

```text
submitted code → authorized job → isolated process → output + file references
```

The **public HTTP API** receives a request. A **job** describes work to do. A **worker** picks up that work. A **sandbox** provides a controlled place to execute it. These roles can run in different processes and on different machines.

## Three outputs to keep separate

Suppose the code is:

```python
from pathlib import Path
print("Total sales: 1200")
Path("/mnt/data/result.txt").write_text("1200")
```

| Output | Meaning | How it reaches the caller |
|---|---|---|
| Standard output | Text printed by the process | Captured in the execution result |
| Exit information | Whether and how the process finished | Result fields such as exit code or signal |
| Artifact | A generated file such as `result.txt` | Uploaded to object storage and returned as a file reference |

A successful HTTP response does not, by itself, prove that the user's program succeeded. The result may describe a nonzero exit code. A program can also complete while an artifact upload fails. These are separate outcomes.

## Why use a queue?

If 50 requests arrive but the system can run only eight jobs safely at once, the extra requests need somewhere to wait. Redis and BullMQ coordinate that waiting work and assign jobs to workers.

Queuing decouples request handling from execution capacity. It does **not** imply that the caller always receives a job ID and immediately disconnects: the ordinary `/v1/exec` handler in this repository waits for completion before returning its response. Internally asynchronous work can still produce an externally synchronous request.

## Container, sandbox, and VM

- A **container image** packages a program and its dependencies. A running container is a process environment using the host kernel.
- **NsJail** restricts a process using Linux isolation and resource controls.
- A **microVM** has a separate guest kernel. This project can run the sandbox service inside a libkrun microVM and NsJail inside that guest.

Those are nested concepts. Docker packaging alone does not explain the project's execution isolation. Likewise, a Kubernetes Pod is a scheduling unit, not a synonym for a microVM.

The default KVM runner is long-lived. Do not picture a newly created microVM for every HTTP execution: the HTTP runner can serve multiple executions, with separate per-job workspace and process isolation. The optional Lambda backend has a different lifecycle.

## What happens to Python variables?

A later request should not assume that `total` from a previous Python process still exists. Saving a file is different from keeping an interpreter process alive. Even a stateful workspace can preserve files without preserving a Python process's variables.

## Read the source

Read the [overview](../../README.md), then the [sandbox route lifecycle](../../api/src/api/v2.ts#L478). For now, look only for `prime`, `execute`, `uploadGeneratedFiles`, and `cleanup`. The details come later.

**Exercise:** Draw four boxes for the API, queue, worker, and sandbox. Place the CSV input, generated chart, and printed total beside the component that handles each.

**Checkpoint:** Why can “the API returned HTTP 200” and “the Python program failed” both be true?
