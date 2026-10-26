# Source symbol index

[Course home](README.md) · [Guided function atlas](function-atlas.md)

Generated from this checkout: **1991 named functions/classes/methods across 195 TypeScript modules**.

This is a navigation index, not an HTTP API or permission list. It includes named top-level function declarations/values and implemented class methods, including private helpers. It excludes tests, fixtures, declarations, interfaces, nested local functions, anonymous route callbacks, re-export-only bindings, Rust, C, Python, and shell scripts. A class method marked “method” may still belong to a module-local class; check its enclosing declaration. Internal implementation details are not stable extension contracts.

For the Rust launcher, start at [launcher/src/main.rs](../../launcher/src/main.rs); for Python/shell runtime behavior, follow the runtime packages and [build-packages.sh](../../build-packages.sh).

Regenerate with `node docs/course/build-reference.mjs` after installing the service TypeScript dependency. The generator parses source without importing application modules.

## service/src

<details>
<summary>service/src/auth/librechat-jwt.ts — 28 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `CodeApiJwtAuthError` | exported class | [line 61](../../service/src/auth/librechat-jwt.ts#L61) |
| `base64UrlDecode()` | module-local function | [line 81](../../service/src/auth/librechat-jwt.ts#L81) |
| `parseJsonSegment()` | module-local function | [line 89](../../service/src/auth/librechat-jwt.ts#L89) |
| `getBearerToken()` | module-local function | [line 100](../../service/src/auth/librechat-jwt.ts#L100) |
| `parseAllowedAlgs()` | module-local function | [line 106](../../service/src/auth/librechat-jwt.ts#L106) |
| `parseClockSkew()` | module-local function | [line 124](../../service/src/auth/librechat-jwt.ts#L124) |
| `parseCappedSeconds()` | module-local function | [line 132](../../service/src/auth/librechat-jwt.ts#L132) |
| `publicKeyFromValue()` | module-local function | [line 140](../../service/src/auth/librechat-jwt.ts#L140) |
| `loadJwks()` | module-local function | [line 152](../../service/src/auth/librechat-jwt.ts#L152) |
| `loadPublicKeyDir()` | module-local function | [line 177](../../service/src/auth/librechat-jwt.ts#L177) |
| `loadKeys()` | module-local function | [line 201](../../service/src/auth/librechat-jwt.ts#L201) |
| `rawConfigFingerprint()` | module-local function | [line 234](../../service/src/auth/librechat-jwt.ts#L234) |
| `getConfig()` | module-local function | [line 252](../../service/src/auth/librechat-jwt.ts#L252) |
| `verifySignature()` | module-local function | [line 280](../../service/src/auth/librechat-jwt.ts#L280) |
| `assertString()` | module-local function | [line 308](../../service/src/auth/librechat-jwt.ts#L308) |
| `assertAudience()` | module-local function | [line 315](../../service/src/auth/librechat-jwt.ts#L315) |
| `assertNumericDate()` | module-local function | [line 336](../../service/src/auth/librechat-jwt.ts#L336) |
| `optionalString()` | module-local function | [line 343](../../service/src/auth/librechat-jwt.ts#L343) |
| `strictTenantIsolation()` | module-local function | [line 353](../../service/src/auth/librechat-jwt.ts#L353) |
| `resolveSingleTenantId()` | module-local function | [line 357](../../service/src/auth/librechat-jwt.ts#L357) |
| `resolveTenantIdClaim()` | module-local function | [line 365](../../service/src/auth/librechat-jwt.ts#L365) |
| `isTrustedPrincipalSource()` | module-local function | [line 376](../../service/src/auth/librechat-jwt.ts#L376) |
| `assertPrincipalSource()` | module-local function | [line 380](../../service/src/auth/librechat-jwt.ts#L380) |
| `validateClaims()` | module-local function | [line 388](../../service/src/auth/librechat-jwt.ts#L388) |
| `validateLibreChatJwtVerifierConfig()` | exported function | [line 442](../../service/src/auth/librechat-jwt.ts#L442) |
| `verifyLibreChatJwt()` | exported function | [line 446](../../service/src/auth/librechat-jwt.ts#L446) |
| `LibreChatJwtAuthProvider` | exported class | [line 481](../../service/src/auth/librechat-jwt.ts#L481) |
| `LibreChatJwtAuthProvider.verify()` | method | [line 482](../../service/src/auth/librechat-jwt.ts#L482) |

</details>

<details>
<summary>service/src/auth/local.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `applyLocalPrincipal()` | exported function | [line 5](../../service/src/auth/local.ts#L5) |
| `localAuth()` | exported function value | [line 17](../../service/src/auth/local.ts#L17) |

</details>

<details>
<summary>service/src/auth/principal.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `applyPrincipal()` | exported function | [line 19](../../service/src/auth/principal.ts#L19) |
| `getPrincipal()` | exported function | [line 36](../../service/src/auth/principal.ts#L36) |
| `getPrincipalOrReject()` | exported function | [line 55](../../service/src/auth/principal.ts#L55) |
| `getCredentialId()` | exported function | [line 67](../../service/src/auth/principal.ts#L67) |

</details>

<details>
<summary>service/src/auth/provider.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `AuthProviderConfigError` | exported class | [line 10](../../service/src/auth/provider.ts#L10) |
| `getAuthProviderMode()` | exported function | [line 17](../../service/src/auth/provider.ts#L17) |

</details>

<details>
<summary>service/src/auth/startup.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `validateStartupAuthConfig()` | exported function | [line 15](../../service/src/auth/startup.ts#L15) |

</details>

<details>
<summary>service/src/auth/synthetic.ts — 11 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `nonEmpty()` | module-local function | [line 23](../../service/src/auth/synthetic.ts#L23) |
| `pathWithoutQuery()` | module-local function | [line 31](../../service/src/auth/synthetic.ts#L31) |
| `syntheticPrincipalHash()` | module-local function | [line 35](../../service/src/auth/synthetic.ts#L35) |
| `timingSafeStringEquals()` | module-local function | [line 41](../../service/src/auth/synthetic.ts#L41) |
| `getSyntheticAccessToken()` | exported function | [line 50](../../service/src/auth/synthetic.ts#L50) |
| `hasSyntheticAccessToken()` | exported function | [line 54](../../service/src/auth/synthetic.ts#L54) |
| `isSyntheticPrincipalSource()` | exported function | [line 58](../../service/src/auth/synthetic.ts#L58) |
| `validateSyntheticAccessTokenConfig()` | exported function | [line 62](../../service/src/auth/synthetic.ts#L62) |
| `isSyntheticExecRequest()` | exported function | [line 77](../../service/src/auth/synthetic.ts#L77) |
| `buildSyntheticPrincipal()` | exported function | [line 87](../../service/src/auth/synthetic.ts#L87) |
| `authenticateSyntheticRequest()` | exported function | [line 99](../../service/src/auth/synthetic.ts#L99) |

</details>

<details>
<summary>service/src/bridge/admission.ts — 8 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `durableAdmissionFence()` | exported function | [line 4](../../service/src/bridge/admission.ts#L4) |
| `BridgeAdmissionQueue` | exported class | [line 21](../../service/src/bridge/admission.ts#L21) |
| `BridgeAdmissionQueue.keys()` | private method | [line 27](../../service/src/bridge/admission.ts#L27) |
| `BridgeAdmissionQueue.enter()` | method | [line 37](../../service/src/bridge/admission.ts#L37) |
| `BridgeAdmissionQueue.submit()` | method | [line 77](../../service/src/bridge/admission.ts#L77) |
| `BridgeAdmissionQueue.position()` | method | [line 110](../../service/src/bridge/admission.ts#L110) |
| `BridgeAdmissionQueue.isHead()` | method | [line 115](../../service/src/bridge/admission.ts#L115) |
| `BridgeAdmissionQueue.leave()` | method | [line 142](../../service/src/bridge/admission.ts#L142) |

</details>

<details>
<summary>service/src/bridge/enabled.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isBridgeEnabled()` | exported function | [line 4](../../service/src/bridge/enabled.ts#L4) |
| `isWorkspaceImportEnabled()` | exported function | [line 12](../../service/src/bridge/enabled.ts#L12) |

</details>

<details>
<summary>service/src/bridge/lane-git.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isRecord()` | module-local function | [line 5](../../service/src/bridge/lane-git.ts#L5) |
| `hasLaneGit()` | exported function | [line 10](../../service/src/bridge/lane-git.ts#L10) |
| `laneGitPolicy()` | exported function | [line 21](../../service/src/bridge/lane-git.ts#L21) |

</details>

<details>
<summary>service/src/bridge/pairing.ts — 41 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `BridgePairingError` | exported class | [line 332](../../service/src/bridge/pairing.ts#L332) |
| `digest()` | module-local function | [line 350](../../service/src/bridge/pairing.ts#L350) |
| `pairingKey()` | module-local function | [line 354](../../service/src/bridge/pairing.ts#L354) |
| `browserEnrollmentKey()` | module-local function | [line 358](../../service/src/bridge/pairing.ts#L358) |
| `canonicalApproval()` | module-local function | [line 362](../../service/src/bridge/pairing.ts#L362) |
| `enrollmentReplayKey()` | module-local function | [line 380](../../service/src/bridge/pairing.ts#L380) |
| `encryptEnrollmentReplay()` | module-local function | [line 386](../../service/src/bridge/pairing.ts#L386) |
| `decryptEnrollmentReplay()` | module-local function | [line 394](../../service/src/bridge/pairing.ts#L394) |
| `credentialDigestKey()` | module-local function | [line 406](../../service/src/bridge/pairing.ts#L406) |
| `workerIdentityKey()` | module-local function | [line 410](../../service/src/bridge/pairing.ts#L410) |
| `workerStableIdentityKey()` | module-local function | [line 414](../../service/src/bridge/pairing.ts#L414) |
| `workerEnrollmentKey()` | module-local function | [line 418](../../service/src/bridge/pairing.ts#L418) |
| `workerEnrollmentRequiredKey()` | module-local function | [line 422](../../service/src/bridge/pairing.ts#L422) |
| `recoveryChallengeKey()` | module-local function | [line 426](../../service/src/bridge/pairing.ts#L426) |
| `recoveryStartNonceKey()` | module-local function | [line 430](../../service/src/bridge/pairing.ts#L430) |
| `recoveryChallengeAttemptKey()` | module-local function | [line 434](../../service/src/bridge/pairing.ts#L434) |
| `untrustedRecoveryRateKey()` | module-local function | [line 438](../../service/src/bridge/pairing.ts#L438) |
| `recoveryRateKey()` | module-local function | [line 443](../../service/src/bridge/pairing.ts#L443) |
| `workerPairingGenerationKey()` | module-local function | [line 451](../../service/src/bridge/pairing.ts#L451) |
| `workerPairingIndexKey()` | module-local function | [line 455](../../service/src/bridge/pairing.ts#L455) |
| `legacyPairingScanDeadlineKey()` | module-local function | [line 459](../../service/src/bridge/pairing.ts#L459) |
| `legacyPairingWorkerScanKey()` | module-local function | [line 463](../../service/src/bridge/pairing.ts#L463) |
| `proofNonceKey()` | module-local function | [line 472](../../service/src/bridge/pairing.ts#L472) |
| `validEd25519PublicKey()` | module-local function | [line 476](../../service/src/bridge/pairing.ts#L476) |
| `RedisBridgePairingStore` | exported class | [line 484](../../service/src/bridge/pairing.ts#L484) |
| `RedisBridgePairingStore.limitBrowserEnrollmentPeer()` | method | [line 541](../../service/src/bridge/pairing.ts#L541) |
| `RedisBridgePairingStore.issueBrowserEnrollment()` | method | [line 556](../../service/src/bridge/pairing.ts#L556) |
| `RedisBridgePairingStore.browserEnrollmentStatus()` | method | [line 614](../../service/src/bridge/pairing.ts#L614) |
| `RedisBridgePairingStore.redeemBrowserEnrollment()` | method | [line 658](../../service/src/bridge/pairing.ts#L658) |
| `RedisBridgePairingStore.limitUntrustedRecovery()` | method | [line 746](../../service/src/bridge/pairing.ts#L746) |
| `RedisBridgePairingStore.checkedEnrollment()` | private method | [line 764](../../service/src/bridge/pairing.ts#L764) |
| `RedisBridgePairingStore.checkEnrolledCredential()` | private method | [line 800](../../service/src/bridge/pairing.ts#L800) |
| `RedisBridgePairingStore.issue()` | method | [line 815](../../service/src/bridge/pairing.ts#L815) |
| `RedisBridgePairingStore.redeem()` | method | [line 843](../../service/src/bridge/pairing.ts#L843) |
| `RedisBridgePairingStore.authorize()` | method | [line 943](../../service/src/bridge/pairing.ts#L943) |
| `RedisBridgePairingStore.createRecoveryChallenge()` | method | [line 1044](../../service/src/bridge/pairing.ts#L1044) |
| `RedisBridgePairingStore.recoverCredential()` | method | [line 1109](../../service/src/bridge/pairing.ts#L1109) |
| `RedisBridgePairingStore.revoke()` | method | [line 1215](../../service/src/bridge/pairing.ts#L1215) |
| `RedisBridgePairingStore.removeLegacyPairings()` | private method | [line 1236](../../service/src/bridge/pairing.ts#L1236) |
| `RedisBridgePairingStore.rotate()` | method | [line 1411](../../service/src/bridge/pairing.ts#L1411) |
| `RedisBridgePairingStore.issueCredential()` | private method | [line 1452](../../service/src/bridge/pairing.ts#L1452) |

</details>

<details>
<summary>service/src/bridge/router.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `sameToken()` | module-local function | [line 52](../../service/src/bridge/router.ts#L52) |
| `validWorkerId()` | module-local function | [line 61](../../service/src/bridge/router.ts#L61) |
| `validIncarnationId()` | module-local function | [line 65](../../service/src/bridge/router.ts#L65) |
| `isRecord()` | module-local function | [line 69](../../service/src/bridge/router.ts#L69) |
| `parseBinding()` | module-local function | [line 73](../../service/src/bridge/router.ts#L73) |
| `asyncRoute()` | module-local function | [line 95](../../service/src/bridge/router.ts#L95) |
| `sendStoreError()` | module-local function | [line 103](../../service/src/bridge/router.ts#L103) |
| `isSettlement()` | module-local function | [line 115](../../service/src/bridge/router.ts#L115) |
| `createBridgeRouter()` | exported function | [line 143](../../service/src/bridge/router.ts#L143) |

</details>

<details>
<summary>service/src/bridge/selection.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `BridgeWorkerSelectionError` | exported class | [line 5](../../service/src/bridge/selection.ts#L5) |
| `resolveBridgeWorkerSelection()` | exported function | [line 15](../../service/src/bridge/selection.ts#L15) |

</details>

<details>
<summary>service/src/bridge/slots.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `BridgeWorkspaceSlots` | exported class | [line 17](../../service/src/bridge/slots.ts#L17) |
| `BridgeWorkspaceSlots.keys()` | private method | [line 20](../../service/src/bridge/slots.ts#L20) |
| `BridgeWorkspaceSlots.reserve()` | method | [line 34](../../service/src/bridge/slots.ts#L34) |
| `BridgeWorkspaceSlots.release()` | method | [line 159](../../service/src/bridge/slots.ts#L159) |

</details>

<details>
<summary>service/src/bridge/store.ts — 80 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `BridgeStoreError` | exported class | [line 49](../../service/src/bridge/store.ts#L49) |
| `classifyPreEnqueueExpiry()` | module-local function | [line 73](../../service/src/bridge/store.ts#L73) |
| `workspaceLaneFenceIndexKey()` | module-local function | [line 133](../../service/src/bridge/store.ts#L133) |
| `workspaceFenceParent()` | module-local function | [line 139](../../service/src/bridge/store.ts#L139) |
| `workspaceFenceReceiptKey()` | module-local function | [line 149](../../service/src/bridge/store.ts#L149) |
| `assignmentWorkspace()` | module-local function | [line 153](../../service/src/bridge/store.ts#L153) |
| `isWorkspaceMutation()` | module-local function | [line 172](../../service/src/bridge/store.ts#L172) |
| `supportsWorkspaceTool()` | module-local function | [line 176](../../service/src/bridge/store.ts#L176) |
| `supportsWorkspaceProgrammatic()` | module-local function | [line 242](../../service/src/bridge/store.ts#L242) |
| `workspaceInstanceId()` | module-local function | [line 268](../../service/src/bridge/store.ts#L268) |
| `workspaceWorktree()` | module-local function | [line 280](../../service/src/bridge/store.ts#L280) |
| `workspaceAdmissionId()` | exported function | [line 292](../../service/src/bridge/store.ts#L292) |
| `workerKey()` | module-local function | [line 300](../../service/src/bridge/store.ts#L300) |
| `workerStableIdentityKey()` | module-local function | [line 304](../../service/src/bridge/store.ts#L304) |
| `workerIncarnationKey()` | module-local function | [line 308](../../service/src/bridge/store.ts#L308) |
| `workerRegistrationGenerationKey()` | module-local function | [line 312](../../service/src/bridge/store.ts#L312) |
| `workerRegistrationGenerationIncarnationKey()` | module-local function | [line 316](../../service/src/bridge/store.ts#L316) |
| `workerReadyKey()` | module-local function | [line 320](../../service/src/bridge/store.ts#L320) |
| `workerReadyToken()` | module-local function | [line 324](../../service/src/bridge/store.ts#L324) |
| `incarnationFenceKey()` | module-local function | [line 331](../../service/src/bridge/store.ts#L331) |
| `quarantineKey()` | module-local function | [line 335](../../service/src/bridge/store.ts#L335) |
| `workspaceQuarantineKey()` | module-local function | [line 339](../../service/src/bridge/store.ts#L339) |
| `queueKey()` | module-local function | [line 349](../../service/src/bridge/store.ts#L349) |
| `leaseClaimKey()` | module-local function | [line 357](../../service/src/bridge/store.ts#L357) |
| `leaseAckKey()` | module-local function | [line 365](../../service/src/bridge/store.ts#L365) |
| `generationKey()` | module-local function | [line 373](../../service/src/bridge/store.ts#L373) |
| `lockKey()` | module-local function | [line 377](../../service/src/bridge/store.ts#L377) |
| `lockIncarnationKey()` | module-local function | [line 381](../../service/src/bridge/store.ts#L381) |
| `assignmentKey()` | module-local function | [line 385](../../service/src/bridge/store.ts#L385) |
| `withoutLaneGit()` | module-local function | [line 389](../../service/src/bridge/store.ts#L389) |
| `settlementKey()` | module-local function | [line 395](../../service/src/bridge/store.ts#L395) |
| `assignmentDeadlineKey()` | module-local function | [line 399](../../service/src/bridge/store.ts#L399) |
| `cancellationKey()` | module-local function | [line 403](../../service/src/bridge/store.ts#L403) |
| `tokenHash()` | module-local function | [line 407](../../service/src/bridge/store.ts#L407) |
| `assignmentTtlSeconds()` | module-local function | [line 411](../../service/src/bridge/store.ts#L411) |
| `assignmentOutcomeTtlSeconds()` | module-local function | [line 415](../../service/src/bridge/store.ts#L415) |
| `delay()` | module-local function | [line 421](../../service/src/bridge/store.ts#L421) |
| `signalAborted()` | module-local function | [line 436](../../service/src/bridge/store.ts#L436) |
| `boundedCommand()` | module-local function | [line 440](../../service/src/bridge/store.ts#L440) |
| `RedisBridgeStore` | exported class | [line 478](../../service/src/bridge/store.ts#L478) |
| `RedisBridgeStore.workspaceLeaseCapacity()` | method | [line 498](../../service/src/bridge/store.ts#L498) |
| `RedisBridgeStore.dispatchCommand()` | private method | [line 502](../../service/src/bridge/store.ts#L502) |
| `RedisBridgeStore.leaseCommand()` | private method | [line 524](../../service/src/bridge/store.ts#L524) |
| `RedisBridgeStore.workerStatus()` | method | [line 539](../../service/src/bridge/store.ts#L539) |
| `RedisBridgeStore.register()` | method | [line 594](../../service/src/bridge/store.ts#L594) |
| `RedisBridgeStore.confirmReady()` | method | [line 754](../../service/src/bridge/store.ts#L754) |
| `RedisBridgeStore.prepareDurableWorkspaceTool()` | method | [line 817](../../service/src/bridge/store.ts#L817) |
| `RedisBridgeStore.advanceDurableWorkspaceTool()` | method | [line 840](../../service/src/bridge/store.ts#L840) |
| `RedisBridgeStore.finishDurableWorkspaceTool()` | method | [line 928](../../service/src/bridge/store.ts#L928) |
| `RedisBridgeStore.dispatchWorkspaceTool()` | method | [line 938](../../service/src/bridge/store.ts#L938) |
| `RedisBridgeStore.dispatch()` | method | [line 977](../../service/src/bridge/store.ts#L977) |
| `RedisBridgeStore.lease()` | method | [line 1460](../../service/src/bridge/store.ts#L1460) |
| `RedisBridgeStore.acknowledgeLease()` | method | [line 1601](../../service/src/bridge/store.ts#L1601) |
| `RedisBridgeStore.claimOrPopLease()` | private method | [line 1659](../../service/src/bridge/store.ts#L1659) |
| `RedisBridgeStore.discardLeaseClaim()` | private method | [line 1689](../../service/src/bridge/store.ts#L1689) |
| `RedisBridgeStore.returnLease()` | method | [line 1709](../../service/src/bridge/store.ts#L1709) |
| `RedisBridgeStore.returnLeaseById()` | private method | [line 1718](../../service/src/bridge/store.ts#L1718) |
| `RedisBridgeStore.returnLeaseByIdWithRetry()` | private method | [line 1748](../../service/src/bridge/store.ts#L1748) |
| `RedisBridgeStore.clearUndeliveredWorkspaceFence()` | private method | [line 1767](../../service/src/bridge/store.ts#L1767) |
| `RedisBridgeStore.settle()` | method | [line 1787](../../service/src/bridge/store.ts#L1787) |
| `RedisBridgeStore.sanitizeLaneGit()` | private method | [line 2004](../../service/src/bridge/store.ts#L2004) |
| `RedisBridgeStore.cancelled()` | method | [line 2030](../../service/src/bridge/store.ts#L2030) |
| `RedisBridgeStore.quarantine()` | method | [line 2063](../../service/src/bridge/store.ts#L2063) |
| `RedisBridgeStore.confirmWorkspaceCleanup()` | method | [line 2097](../../service/src/bridge/store.ts#L2097) |
| `RedisBridgeStore.quarantineSettledWorkspace()` | private method | [line 2114](../../service/src/bridge/store.ts#L2114) |
| `RedisBridgeStore.resetWorkspace()` | method | [line 2217](../../service/src/bridge/store.ts#L2217) |
| `RedisBridgeStore.registration()` | private method | [line 2258](../../service/src/bridge/store.ts#L2258) |
| `RedisBridgeStore.dispatchableRegistration()` | private method | [line 2265](../../service/src/bridge/store.ts#L2265) |
| `RedisBridgeStore.assertDispatchActive()` | private method | [line 2294](../../service/src/bridge/store.ts#L2294) |
| `RedisBridgeStore.readAssignment()` | private method | [line 2306](../../service/src/bridge/store.ts#L2306) |
| `RedisBridgeStore.waitForSettlement()` | private method | [line 2313](../../service/src/bridge/store.ts#L2313) |
| `RedisBridgeStore.cancel()` | private method | [line 2432](../../service/src/bridge/store.ts#L2432) |
| `RedisBridgeStore.enqueueForActiveIncarnation()` | private method | [line 2447](../../service/src/bridge/store.ts#L2447) |
| `RedisBridgeStore.acquireLock()` | private method | [line 2581](../../service/src/bridge/store.ts#L2581) |
| `RedisBridgeStore.cleanupDispatch()` | private method | [line 2615](../../service/src/bridge/store.ts#L2615) |
| `RedisBridgeStore.cleanupUnassignedSlot()` | private method | [line 2632](../../service/src/bridge/store.ts#L2632) |
| `RedisBridgeStore.commitPendingWorkspace()` | private method | [line 2655](../../service/src/bridge/store.ts#L2655) |
| `RedisBridgeStore.cleanupWithRetry()` | private method | [line 2734](../../service/src/bridge/store.ts#L2734) |
| `RedisBridgeStore.cleanup()` | private method | [line 2752](../../service/src/bridge/store.ts#L2752) |
| `RedisBridgeStore.releaseLock()` | private method | [line 2826](../../service/src/bridge/store.ts#L2826) |

</details>

<details>
<summary>service/src/bridge/workspace-instance.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `principalWorkspaceInstanceId()` | exported function | [line 4](../../service/src/bridge/workspace-instance.ts#L4) |

</details>

<details>
<summary>service/src/config.ts — 16 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `resolveLanguage()` | exported function | [line 48](../../service/src/config.ts#L48) |
| `checkpointPipelineBudgetMs()` | exported function | [line 77](../../service/src/config.ts#L77) |
| `jobDeadlineAtMs()` | exported function | [line 95](../../service/src/config.ts#L95) |
| `jobCompletionWaitTimeoutMs()` | exported function | [line 118](../../service/src/config.ts#L118) |
| `parseArnList()` | exported function | [line 129](../../service/src/config.ts#L129) |
| `resolveLambdaMicrovmNumericConfig()` | exported function | [line 186](../../service/src/config.ts#L186) |
| `lambdaMicrovmNumericConfigError()` | exported function | [line 207](../../service/src/config.ts#L207) |
| `resolvePositiveIntEnv()` | exported function | [line 221](../../service/src/config.ts#L221) |
| `resolveEgressGrantTtlSeconds()` | exported function | [line 232](../../service/src/config.ts#L232) |
| `hostedAppOperationTimeoutMs()` | exported function | [line 248](../../service/src/config.ts#L248) |
| `configuredNumber()` | module-local function | [line 254](../../service/src/config.ts#L254) |
| `configuredChoice()` | module-local function | [line 258](../../service/src/config.ts#L258) |
| `resolveSandboxBackend()` | exported function | [line 269](../../service/src/config.ts#L269) |
| `resolveRuntimeSessionMode()` | exported function | [line 280](../../service/src/config.ts#L280) |
| `resolveBridgeAuthMode()` | exported function | [line 291](../../service/src/config.ts#L291) |
| `parsePlanLimits()` | exported function | [line 558](../../service/src/config.ts#L558) |

</details>

<details>
<summary>service/src/egress-gateway-client.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `gatewayUrl()` | module-local function | [line 22](../../service/src/egress-gateway-client.ts#L22) |
| `gatewayHeaders()` | module-local function | [line 29](../../service/src/egress-gateway-client.ts#L29) |
| `createGatewayEgressGrant()` | exported function | [line 37](../../service/src/egress-gateway-client.ts#L37) |
| `restoreGatewaySandboxResult()` | exported function | [line 60](../../service/src/egress-gateway-client.ts#L60) |
| `revokeGatewayEgressGrant()` | exported function | [line 86](../../service/src/egress-gateway-client.ts#L86) |
| `createGatewayPtcCallbackToken()` | exported function | [line 117](../../service/src/egress-gateway-client.ts#L117) |

</details>

<details>
<summary>service/src/egress-gateway.ts — 30 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `routeFamily()` | module-local function | [line 65](../../service/src/egress-gateway.ts#L65) |
| `requestId()` | module-local function | [line 80](../../service/src/egress-gateway.ts#L80) |
| `hashLabel()` | module-local function | [line 84](../../service/src/egress-gateway.ts#L84) |
| `auditFields()` | module-local function | [line 89](../../service/src/egress-gateway.ts#L89) |
| `isSyntheticEgressRequest()` | module-local function | [line 93](../../service/src/egress-gateway.ts#L93) |
| `setGrantAudit()` | module-local function | [line 98](../../service/src/egress-gateway.ts#L98) |
| `setPtcAudit()` | module-local function | [line 108](../../service/src/egress-gateway.ts#L108) |
| `errorStatus()` | module-local function | [line 140](../../service/src/egress-gateway.ts#L140) |
| `sendEgressError()` | module-local function | [line 148](../../service/src/egress-gateway.ts#L148) |
| `getGrant()` | module-local function | [line 173](../../service/src/egress-gateway.ts#L173) |
| `isDirkeepName()` | module-local function | [line 187](../../service/src/egress-gateway.ts#L187) |
| `decodeOriginalFilename()` | module-local function | [line 191](../../service/src/egress-gateway.ts#L191) |
| `normalizePtcCallbackTimeoutSeconds()` | module-local function | [line 199](../../service/src/egress-gateway.ts#L199) |
| `assertOutputFilenameAllowed()` | module-local function | [line 207](../../service/src/egress-gateway.ts#L207) |
| `inputFileKey()` | module-local function | [line 235](../../service/src/egress-gateway.ts#L235) |
| `assertGrantSession()` | module-local function | [line 239](../../service/src/egress-gateway.ts#L239) |
| `openSessionParam()` | module-local function | [line 251](../../service/src/egress-gateway.ts#L251) |
| `inputFileSet()` | module-local function | [line 266](../../service/src/egress-gateway.ts#L266) |
| `requiredDirkeepSet()` | module-local function | [line 270](../../service/src/egress-gateway.ts#L270) |
| `isAllowedReadObject()` | module-local function | [line 284](../../service/src/egress-gateway.ts#L284) |
| `openObjectParam()` | module-local function | [line 294](../../service/src/egress-gateway.ts#L294) |
| `responseHeaders()` | module-local function | [line 316](../../service/src/egress-gateway.ts#L316) |
| `pipeFetchResponse()` | module-local function | [line 325](../../service/src/egress-gateway.ts#L325) |
| `readRequestBody()` | module-local function | [line 339](../../service/src/egress-gateway.ts#L339) |
| `forwardUrl()` | module-local function | [line 347](../../service/src/egress-gateway.ts#L347) |
| `readiness()` | module-local function | [line 351](../../service/src/egress-gateway.ts#L351) |
| `restoreInternalSandboxResult()` | module-local function | [line 397](../../service/src/egress-gateway.ts#L397) |
| `inputMetadata()` | module-local function | [line 597](../../service/src/egress-gateway.ts#L597) |
| `closeHttpServer()` | module-local function | [line 876](../../service/src/egress-gateway.ts#L876) |
| `shutdown()` | module-local function | [line 886](../../service/src/egress-gateway.ts#L886) |

</details>

<details>
<summary>service/src/egress-grant.ts — 34 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `EgressGrantError` | exported class | [line 26](../../service/src/egress-grant.ts#L26) |
| `keyFromSecret()` | module-local function | [line 105](../../service/src/egress-grant.ts#L105) |
| `b64()` | module-local function | [line 118](../../service/src/egress-grant.ts#L118) |
| `b64decode()` | module-local function | [line 122](../../service/src/egress-grant.ts#L122) |
| `sealToken()` | module-local function | [line 133](../../service/src/egress-grant.ts#L133) |
| `openToken()` | module-local function | [line 144](../../service/src/egress-grant.ts#L144) |
| `assertString()` | module-local function | [line 176](../../service/src/egress-grant.ts#L176) |
| `assertStringArray()` | module-local function | [line 182](../../service/src/egress-grant.ts#L182) |
| `assertInputFiles()` | module-local function | [line 188](../../service/src/egress-grant.ts#L188) |
| `legacyGrantId()` | module-local function | [line 205](../../service/src/egress-grant.ts#L205) |
| `validateGrant()` | module-local function | [line 209](../../service/src/egress-grant.ts#L209) |
| `validateHandle()` | module-local function | [line 244](../../service/src/egress-grant.ts#L244) |
| `sealEgressGrant()` | exported function | [line 288](../../service/src/egress-grant.ts#L288) |
| `openEgressGrant()` | exported function | [line 313](../../service/src/egress-grant.ts#L313) |
| `sealEgressHandle()` | exported function | [line 317](../../service/src/egress-grant.ts#L317) |
| `openEgressHandle()` | exported function | [line 321](../../service/src/egress-grant.ts#L321) |
| `egressGrantFromExecutionClaims()` | exported function | [line 325](../../service/src/egress-grant.ts#L325) |
| `isPayloadFileRef()` | module-local function | [line 348](../../service/src/egress-grant.ts#L348) |
| `opaqueLabel()` | module-local function | [line 358](../../service/src/egress-grant.ts#L358) |
| `sandboxWorkspaceSessionId()` | module-local function | [line 362](../../service/src/egress-grant.ts#L362) |
| `collectMaskedInputFiles()` | module-local function | [line 366](../../service/src/egress-grant.ts#L366) |
| `prepareSandboxEgress()` | exported function | [line 377](../../service/src/egress-grant.ts#L377) |
| `inputFileKey()` | module-local function | [line 463](../../service/src/egress-grant.ts#L463) |
| `isDirkeepName()` | module-local function | [line 467](../../service/src/egress-grant.ts#L467) |
| `verifyHandleExec()` | module-local function | [line 471](../../service/src/egress-grant.ts#L471) |
| `assertSessionHandleScope()` | module-local function | [line 480](../../service/src/egress-grant.ts#L480) |
| `unwrapSessionHandle()` | module-local function | [line 499](../../service/src/egress-grant.ts#L499) |
| `unwrapObjectHandle()` | module-local function | [line 515](../../service/src/egress-grant.ts#L515) |
| `isOpaqueEgressToken()` | module-local function | [line 543](../../service/src/egress-grant.ts#L543) |
| `rejectRawReadObjectRef()` | module-local function | [line 547](../../service/src/egress-grant.ts#L547) |
| `restoreFileRef()` | module-local function | [line 564](../../service/src/egress-grant.ts#L564) |
| `restoreSandboxExecuteResult()` | exported function | [line 585](../../service/src/egress-grant.ts#L585) |
| `sealPtcCallbackToken()` | exported function | [line 598](../../service/src/egress-grant.ts#L598) |
| `openPtcCallbackToken()` | exported function | [line 620](../../service/src/egress-grant.ts#L620) |

</details>

<details>
<summary>service/src/egress-ledger.ts — 15 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `setEgressLedgerRedisForTest()` | exported function | [line 44](../../service/src/egress-ledger.ts#L44) |
| `ledgerKey()` | module-local function | [line 48](../../service/src/egress-ledger.ts#L48) |
| `ttlSeconds()` | module-local function | [line 52](../../service/src/egress-ledger.ts#L52) |
| `redisConnection()` | module-local function | [line 56](../../service/src/egress-ledger.ts#L56) |
| `pingEgressLedger()` | exported function | [line 82](../../service/src/egress-ledger.ts#L82) |
| `recordFromGrant()` | module-local function | [line 87](../../service/src/egress-ledger.ts#L87) |
| `executeLedger()` | module-local function | [line 108](../../service/src/egress-ledger.ts#L108) |
| `createEgressLedger()` | exported function | [line 131](../../service/src/egress-ledger.ts#L131) |
| `checkEgressGrantActive()` | exported function | [line 143](../../service/src/egress-ledger.ts#L143) |
| `assertEgressGrantActive()` | exported function | [line 148](../../service/src/egress-ledger.ts#L148) |
| `recordEgressRead()` | exported function | [line 158](../../service/src/egress-ledger.ts#L158) |
| `reserveEgressUpload()` | exported function | [line 163](../../service/src/egress-ledger.ts#L163) |
| `releaseEgressUpload()` | exported function | [line 169](../../service/src/egress-ledger.ts#L169) |
| `recordEgressToolCall()` | exported function | [line 175](../../service/src/egress-ledger.ts#L175) |
| `revokeEgressLedger()` | exported function | [line 180](../../service/src/egress-ledger.ts#L180) |

</details>

<details>
<summary>service/src/egress-route-params.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `openEgressRouteHandle()` | exported function | [line 8](../../service/src/egress-route-params.ts#L8) |

</details>

<details>
<summary>service/src/execution-identity.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `resolveSingleTenantNamespace()` | exported function | [line 46](../../service/src/execution-identity.ts#L46) |
| `resolveStorageNamespace()` | exported function | [line 54](../../service/src/execution-identity.ts#L54) |
| `buildExecutionIdentity()` | exported function | [line 68](../../service/src/execution-identity.ts#L68) |
| `executionIdentityFromPrincipal()` | exported function | [line 97](../../service/src/execution-identity.ts#L97) |
| `getExecutionIdentity()` | exported function | [line 106](../../service/src/execution-identity.ts#L106) |
| `applyExecutionIdentity()` | exported function | [line 121](../../service/src/execution-identity.ts#L121) |

</details>

<details>
<summary>service/src/execution-log.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `summarizeArtifactDelivery()` | module-local function | [line 26](../../service/src/execution-log.ts#L26) |
| `summarizeArtifactTruncation()` | module-local function | [line 44](../../service/src/execution-log.ts#L44) |
| `summarizeText()` | exported function | [line 60](../../service/src/execution-log.ts#L60) |
| `summarizeFiles()` | exported function | [line 67](../../service/src/execution-log.ts#L67) |
| `summarizeRequestedFiles()` | exported function | [line 82](../../service/src/execution-log.ts#L82) |
| `summarizeSandboxResponse()` | exported function | [line 99](../../service/src/execution-log.ts#L99) |

</details>

<details>
<summary>service/src/execution-manifest-claims.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isPayloadFileRef()` | module-local function | [line 22](../../service/src/execution-manifest-claims.ts#L22) |
| `collectManifestInputFiles()` | exported function | [line 32](../../service/src/execution-manifest-claims.ts#L32) |
| `buildExecutionManifestClaims()` | exported function | [line 43](../../service/src/execution-manifest-claims.ts#L43) |
| `maybeBuildExecutionManifestClaims()` | exported function | [line 98](../../service/src/execution-manifest-claims.ts#L98) |

</details>

<details>
<summary>service/src/execution-manifest.ts — 23 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `ExecutionManifestError` | exported class | [line 16](../../service/src/execution-manifest.ts#L16) |
| `base64UrlEncode()` | module-local function | [line 83](../../service/src/execution-manifest.ts#L83) |
| `base64UrlDecode()` | module-local function | [line 87](../../service/src/execution-manifest.ts#L87) |
| `canonicalJson()` | module-local function | [line 99](../../service/src/execution-manifest.ts#L99) |
| `bodyForManifestDigest()` | module-local function | [line 124](../../service/src/execution-manifest.ts#L124) |
| `executionManifestBodySha256()` | exported function | [line 130](../../service/src/execution-manifest.ts#L130) |
| `hmacSha256()` | module-local function | [line 135](../../service/src/execution-manifest.ts#L135) |
| `normalizeKeyMaterial()` | module-local function | [line 139](../../service/src/execution-manifest.ts#L139) |
| `privateKeyFromEnv()` | module-local function | [line 143](../../service/src/execution-manifest.ts#L143) |
| `publicKeyFromEnv()` | module-local function | [line 153](../../service/src/execution-manifest.ts#L153) |
| `ed25519Sign()` | module-local function | [line 163](../../service/src/execution-manifest.ts#L163) |
| `ed25519Verify()` | module-local function | [line 167](../../service/src/execution-manifest.ts#L167) |
| `validateClaimsShape()` | module-local function | [line 171](../../service/src/execution-manifest.ts#L171) |
| `payloadForClaims()` | module-local function | [line 237](../../service/src/execution-manifest.ts#L237) |
| `encodeSignedManifest()` | module-local function | [line 242](../../service/src/execution-manifest.ts#L242) |
| `decodeSignedManifest()` | module-local function | [line 246](../../service/src/execution-manifest.ts#L246) |
| `assertManifestTimeWindow()` | module-local function | [line 277](../../service/src/execution-manifest.ts#L277) |
| `signExecutionManifest()` | exported function | [line 291](../../service/src/execution-manifest.ts#L291) |
| `signExecutionManifestWithPrivateKey()` | exported function | [line 300](../../service/src/execution-manifest.ts#L300) |
| `signExecutionManifestWithKey()` | exported function | [line 309](../../service/src/execution-manifest.ts#L309) |
| `verifyExecutionManifest()` | exported function | [line 319](../../service/src/execution-manifest.ts#L319) |
| `verifyExecutionManifestWithPublicKey()` | exported function | [line 337](../../service/src/execution-manifest.ts#L337) |
| `verifyExecutionManifestWithKey()` | exported function | [line 354](../../service/src/execution-manifest.ts#L354) |

</details>

<details>
<summary>service/src/execution-profile.ts — 8 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `resolveQueuedSandboxBackend()` | exported function | [line 24](../../service/src/execution-profile.ts#L24) |
| `resolveExecutionProfile()` | exported function | [line 43](../../service/src/execution-profile.ts#L43) |
| `resolveExecutionProfileSource()` | exported function | [line 67](../../service/src/execution-profile.ts#L67) |
| `queueNamesForExecutionProfile()` | exported function | [line 91](../../service/src/execution-profile.ts#L91) |
| `queueNameForExecution()` | exported function | [line 108](../../service/src/execution-profile.ts#L108) |
| `checkExecutionProfileExpectation()` | exported function | [line 131](../../service/src/execution-profile.ts#L131) |
| `validateQueuedExecutionProfile()` | exported function | [line 168](../../service/src/execution-profile.ts#L168) |
| `validateQueuedSandboxBackend()` | exported function | [line 185](../../service/src/execution-profile.ts#L185) |

</details>

<details>
<summary>service/src/file-download.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `sendFileDownload()` | exported function | [line 6](../../service/src/file-download.ts#L6) |

</details>

<details>
<summary>service/src/file-metadata.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `originalFilenameFromMetadata()` | exported function | [line 8](../../service/src/file-metadata.ts#L8) |
| `decodeOriginalFilename()` | exported function | [line 21](../../service/src/file-metadata.ts#L21) |
| `contentDispositionForOriginalFilename()` | exported function | [line 28](../../service/src/file-metadata.ts#L28) |
| `filenameFromContentDisposition()` | module-local function | [line 35](../../service/src/file-metadata.ts#L35) |
| `isOpaqueObjectContentDisposition()` | exported function | [line 55](../../service/src/file-metadata.ts#L55) |

</details>

<details>
<summary>service/src/file-object-resolver.ts — 17 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `canonicalObjectKey()` | exported function | [line 7](../../service/src/file-object-resolver.ts#L7) |
| `canonicalObjectId()` | exported function | [line 11](../../service/src/file-object-resolver.ts#L11) |
| `legacyObjectId()` | exported function | [line 27](../../service/src/file-object-resolver.ts#L27) |
| `storageKeyForUpload()` | exported function | [line 49](../../service/src/file-object-resolver.ts#L49) |
| `FileObjectResolver` | exported class | [line 60](../../service/src/file-object-resolver.ts#L60) |
| `FileObjectResolver.reportIndexError()` | private method | [line 63](../../service/src/file-object-resolver.ts#L63) |
| `FileObjectResolver.indexKey()` | private method | [line 67](../../service/src/file-object-resolver.ts#L67) |
| `FileObjectResolver.matches()` | private method | [line 71](../../service/src/file-object-resolver.ts#L71) |
| `FileObjectResolver.remember()` | method | [line 76](../../service/src/file-object-resolver.ts#L76) |
| `FileObjectResolver.forget()` | method | [line 88](../../service/src/file-object-resolver.ts#L88) |
| `FileObjectResolver.cached()` | private method | [line 97](../../service/src/file-object-resolver.ts#L97) |
| `FileObjectResolver.findInStorage()` | private method | [line 107](../../service/src/file-object-resolver.ts#L107) |
| `FileObjectResolver.listFresh()` | method | [line 121](../../service/src/file-object-resolver.ts#L121) |
| `FileObjectResolver.resolve()` | method | [line 131](../../service/src/file-object-resolver.ts#L131) |
| `FileObjectResolver.recover()` | method | [line 137](../../service/src/file-object-resolver.ts#L137) |
| `FileObjectResolver.metadata()` | method | [line 144](../../service/src/file-object-resolver.ts#L144) |
| `mapObjectDetails()` | exported function | [line 165](../../service/src/file-object-resolver.ts#L165) |

</details>

<details>
<summary>service/src/file-server.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `forgetObjectKey()` | module-local function | [line 110](../../service/src/file-server.ts#L110) |
| `ensureBucketExists()` | module-local function | [line 120](../../service/src/file-server.ts#L120) |
| `initializeStorage()` | module-local function | [line 150](../../service/src/file-server.ts#L150) |
| `peekStreamForEmpty()` | module-local function | [line 165](../../service/src/file-server.ts#L165) |
| `uploadFile()` | module-local function | [line 203](../../service/src/file-server.ts#L203) |
| `parseObjectName()` | module-local function | [line 510](../../service/src/file-server.ts#L510) |
| `startServer()` | module-local function | [line 634](../../service/src/file-server.ts#L634) |
| `closeHttpServer()` | module-local function | [line 647](../../service/src/file-server.ts#L647) |
| `shutdown()` | module-local function | [line 657](../../service/src/file-server.ts#L657) |

</details>

<details>
<summary>service/src/hosted-app/control-plane.ts — 13 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `HostedAppControlPlaneError` | exported class | [line 23](../../service/src/hosted-app/control-plane.ts#L23) |
| `publicState()` | module-local function | [line 99](../../service/src/hosted-app/control-plane.ts#L99) |
| `hostedAppPublicStatus()` | exported function | [line 120](../../service/src/hosted-app/control-plane.ts#L120) |
| `assertHostedAppOwned()` | exported function | [line 152](../../service/src/hosted-app/control-plane.ts#L152) |
| `HostedAppControlPlane` | exported class | [line 168](../../service/src/hosted-app/control-plane.ts#L168) |
| `HostedAppControlPlane.status()` | method | [line 175](../../service/src/hosted-app/control-plane.ts#L175) |
| `HostedAppControlPlane.start()` | method | [line 195](../../service/src/hosted-app/control-plane.ts#L195) |
| `HostedAppControlPlane.stop()` | method | [line 495](../../service/src/hosted-app/control-plane.ts#L495) |
| `HostedAppControlPlane.refreshPreview()` | method | [line 609](../../service/src/hosted-app/control-plane.ts#L609) |
| `HostedAppControlPlane.recordedVm()` | private method | [line 651](../../service/src/hosted-app/control-plane.ts#L651) |
| `HostedAppControlPlane.persistPreviewCredential()` | private method | [line 661](../../service/src/hosted-app/control-plane.ts#L661) |
| `HostedAppControlPlane.writeOrFence()` | private method | [line 695](../../service/src/hosted-app/control-plane.ts#L695) |
| `HostedAppControlPlane.withLease()` | private method | [line 711](../../service/src/hosted-app/control-plane.ts#L711) |

</details>

<details>
<summary>service/src/hosted-app/credential.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `HostedAppCredentialError` | exported class | [line 12](../../service/src/hosted-app/credential.ts#L12) |
| `parseHostedAppCredentialKey()` | exported function | [line 14](../../service/src/hosted-app/credential.ts#L14) |
| `sealHostedAppCredential()` | exported function | [line 29](../../service/src/hosted-app/credential.ts#L29) |
| `openHostedAppCredential()` | exported function | [line 49](../../service/src/hosted-app/credential.ts#L49) |

</details>

<details>
<summary>service/src/hosted-app/factory.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `getHostedAppControlPlane()` | exported function | [line 28](../../service/src/hosted-app/factory.ts#L28) |
| `resetHostedAppControlPlaneForTests()` | exported function | [line 143](../../service/src/hosted-app/factory.ts#L143) |

</details>

<details>
<summary>service/src/hosted-app/microvm-runtime.ts — 17 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `hostedAppLaunchFingerprint()` | exported function | [line 37](../../service/src/hosted-app/microvm-runtime.ts#L37) |
| `hostedAppLaunchRequestFingerprint()` | exported function | [line 57](../../service/src/hosted-app/microvm-runtime.ts#L57) |
| `hostedAppLaunchGenerationSeed()` | exported function | [line 77](../../service/src/hosted-app/microvm-runtime.ts#L77) |
| `hostedAppLaunchClientToken()` | exported function | [line 88](../../service/src/hosted-app/microvm-runtime.ts#L88) |
| `HostedAppMicrovmError` | exported class | [line 100](../../service/src/hosted-app/microvm-runtime.ts#L100) |
| `abortableSleep()` | module-local function value | [line 123](../../service/src/hosted-app/microvm-runtime.ts#L123) |
| `normalizeHostedAppMicrovmEndpoint()` | exported function | [line 142](../../service/src/hosted-app/microvm-runtime.ts#L142) |
| `launchFailure()` | module-local function | [line 149](../../service/src/hosted-app/microvm-runtime.ts#L149) |
| `HostedAppMicrovmRuntime` | exported class | [line 170](../../service/src/hosted-app/microvm-runtime.ts#L170) |
| `HostedAppMicrovmRuntime.launch()` | method | [line 195](../../service/src/hosted-app/microvm-runtime.ts#L195) |
| `HostedAppMicrovmRuntime.launchOnce()` | private method | [line 231](../../service/src/hosted-app/microvm-runtime.ts#L231) |
| `HostedAppMicrovmRuntime.mintToken()` | method | [line 334](../../service/src/hosted-app/microvm-runtime.ts#L334) |
| `HostedAppMicrovmRuntime.waitForControlReady()` | method | [line 368](../../service/src/hosted-app/microvm-runtime.ts#L368) |
| `HostedAppMicrovmRuntime.startResidentApp()` | method | [line 407](../../service/src/hosted-app/microvm-runtime.ts#L407) |
| `HostedAppMicrovmRuntime.residentAppState()` | method | [line 449](../../service/src/hosted-app/microvm-runtime.ts#L449) |
| `HostedAppMicrovmRuntime.previewToken()` | method | [line 483](../../service/src/hosted-app/microvm-runtime.ts#L483) |
| `HostedAppMicrovmRuntime.terminate()` | method | [line 487](../../service/src/hosted-app/microvm-runtime.ts#L487) |

</details>

<details>
<summary>service/src/hosted-app/preview-access.ts — 10 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `HostedAppPreviewAccessError` | exported class | [line 15](../../service/src/hosted-app/preview-access.ts#L15) |
| `hostedAppPreviewOwnerBinding()` | exported function | [line 17](../../service/src/hosted-app/preview-access.ts#L17) |
| `signature()` | module-local function | [line 29](../../service/src/hosted-app/preview-access.ts#L29) |
| `decodeBase64url()` | module-local function | [line 34](../../service/src/hosted-app/preview-access.ts#L34) |
| `signHostedAppPreviewAccess()` | exported function | [line 45](../../service/src/hosted-app/preview-access.ts#L45) |
| `verifyHostedAppPreviewAccess()` | exported function | [line 69](../../service/src/hosted-app/preview-access.ts#L69) |
| `hostedAppPreviewHostname()` | exported function | [line 115](../../service/src/hosted-app/preview-access.ts#L115) |
| `hostedAppRuntimeIdFromHostname()` | exported function | [line 122](../../service/src/hosted-app/preview-access.ts#L122) |
| `hostedAppPreviewAuthorizeUrl()` | exported function | [line 134](../../service/src/hosted-app/preview-access.ts#L134) |
| `hostedAppRequestHostname()` | exported function | [line 146](../../service/src/hosted-app/preview-access.ts#L146) |

</details>

<details>
<summary>service/src/hosted-app/preview-gateway.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `cookie()` | module-local function | [line 20](../../service/src/hosted-app/preview-gateway.ts#L20) |
| `previewKey()` | module-local function | [line 33](../../service/src/hosted-app/preview-gateway.ts#L33) |
| `reject()` | module-local function | [line 37](../../service/src/hosted-app/preview-gateway.ts#L37) |
| `sendHostedAppPreviewAuthorizationHandoff()` | exported function | [line 49](../../service/src/hosted-app/preview-gateway.ts#L49) |
| `hostedAppPreviewGateway()` | exported function | [line 77](../../service/src/hosted-app/preview-gateway.ts#L77) |

</details>

<details>
<summary>service/src/hosted-app/preview-proxy.ts — 11 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `waitForPreviewRefresh()` | module-local function | [line 20](../../service/src/hosted-app/preview-proxy.ts#L20) |
| `hostedAppPreviewRecordUsable()` | exported function | [line 49](../../service/src/hosted-app/preview-proxy.ts#L49) |
| `hostedAppPreviewCredentialUsable()` | exported function | [line 69](../../service/src/hosted-app/preview-proxy.ts#L69) |
| `previewRecord()` | exported function | [line 90](../../service/src/hosted-app/preview-proxy.ts#L90) |
| `assertPreviewRecordAuthorized()` | module-local function | [line 134](../../service/src/hosted-app/preview-proxy.ts#L134) |
| `requestBody()` | module-local function | [line 152](../../service/src/hosted-app/preview-proxy.ts#L152) |
| `rewriteHostedAppLocation()` | exported function | [line 194](../../service/src/hosted-app/preview-proxy.ts#L194) |
| `hostedAppUpstreamUrl()` | exported function | [line 215](../../service/src/hosted-app/preview-proxy.ts#L215) |
| `hostedAppForwardedQuery()` | exported function | [line 246](../../service/src/hosted-app/preview-proxy.ts#L246) |
| `proxyHostedAppPreview()` | exported function | [line 251](../../service/src/hosted-app/preview-proxy.ts#L251) |
| `hostedAppRequestFailure()` | exported function | [line 333](../../service/src/hosted-app/preview-proxy.ts#L333) |

</details>

<details>
<summary>service/src/hosted-app/proxy-policy.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `applyHostedAppPreviewSecurityHeaders()` | exported function | [line 9](../../service/src/hosted-app/proxy-policy.ts#L9) |
| `hostedAppProxyRequestHeaders()` | exported function | [line 73](../../service/src/hosted-app/proxy-policy.ts#L73) |
| `hostedAppProxyResponseHeaders()` | exported function | [line 99](../../service/src/hosted-app/proxy-policy.ts#L99) |

</details>

<details>
<summary>service/src/hosted-app/queue-deadline.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `withHostedAppQueueDeadline()` | exported function | [line 3](../../service/src/hosted-app/queue-deadline.ts#L3) |

</details>

<details>
<summary>service/src/hosted-app/queue.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `resources()` | module-local function | [line 23](../../service/src/hosted-app/queue.ts#L23) |
| `submitHostedAppJob()` | exported function | [line 50](../../service/src/hosted-app/queue.ts#L50) |
| `closeHostedAppQueueResources()` | exported function | [line 69](../../service/src/hosted-app/queue.ts#L69) |

</details>

<details>
<summary>service/src/hosted-app/router.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `presentStatus()` | module-local function | [line 37](../../service/src/hosted-app/router.ts#L37) |
| `unavailable()` | module-local function | [line 59](../../service/src/hosted-app/router.ts#L59) |
| `target()` | module-local function | [line 72](../../service/src/hosted-app/router.ts#L72) |
| `parseWorkerFailure()` | module-local function | [line 98](../../service/src/hosted-app/router.ts#L98) |
| `sendFailure()` | module-local function | [line 122](../../service/src/hosted-app/router.ts#L122) |

</details>

<details>
<summary>service/src/hosted-app/source-checkpoint.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `captureHostedAppSourceCheckpoint()` | exported function | [line 25](../../service/src/hosted-app/source-checkpoint.ts#L25) |

</details>

<details>
<summary>service/src/hosted-app/spec.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `HostedAppSpecError` | exported class | [line 65](../../service/src/hosted-app/spec.ts#L65) |
| `validateHostedAppId()` | exported function | [line 74](../../service/src/hosted-app/spec.ts#L74) |
| `isPlainObject()` | module-local function | [line 81](../../service/src/hosted-app/spec.ts#L81) |
| `boundedString()` | module-local function | [line 87](../../service/src/hosted-app/spec.ts#L87) |
| `canonicalRelativePath()` | module-local function | [line 104](../../service/src/hosted-app/spec.ts#L104) |
| `parseHostedAppStartRequest()` | exported function | [line 122](../../service/src/hosted-app/spec.ts#L122) |
| `canonicalSpec()` | module-local function | [line 208](../../service/src/hosted-app/spec.ts#L208) |
| `hostedAppSpecFingerprint()` | exported function | [line 215](../../service/src/hosted-app/spec.ts#L215) |
| `deriveHostedAppRuntimeId()` | exported function | [line 220](../../service/src/hosted-app/spec.ts#L220) |

</details>

<details>
<summary>service/src/hosted-app/worker.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `serializedHostedAppFailure()` | exported function | [line 12](../../service/src/hosted-app/worker.ts#L12) |
| `processHostedAppJob()` | exported function | [line 41](../../service/src/hosted-app/worker.ts#L41) |

</details>

<details>
<summary>service/src/http-limits.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `parseBoundedContentLength()` | exported function | [line 5](../../service/src/http-limits.ts#L5) |

</details>

<details>
<summary>service/src/httpPathNormalize.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `normalizeMetricPath()` | exported function | [line 32](../../service/src/httpPathNormalize.ts#L32) |

</details>

<details>
<summary>service/src/internal-service-auth.ts — 8 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `configuredToken()` | module-local function | [line 9](../../service/src/internal-service-auth.ts#L9) |
| `internalServiceAuthEnabled()` | exported function | [line 13](../../service/src/internal-service-auth.ts#L13) |
| `constantTimeEquals()` | module-local function | [line 17](../../service/src/internal-service-auth.ts#L17) |
| `headerValue()` | module-local function | [line 23](../../service/src/internal-service-auth.ts#L23) |
| `isAuthorizedInternalServiceRequest()` | exported function | [line 35](../../service/src/internal-service-auth.ts#L35) |
| `internalServiceHeaders()` | exported function | [line 44](../../service/src/internal-service-auth.ts#L44) |
| `requireInternalServiceAuth()` | exported function | [line 53](../../service/src/internal-service-auth.ts#L53) |
| `requireConfiguredInternalServiceAuth()` | exported function | [line 61](../../service/src/internal-service-auth.ts#L61) |

</details>

<details>
<summary>service/src/internal-synthetic.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isSyntheticInternalRequestHeader()` | exported function | [line 3](../../service/src/internal-synthetic.ts#L3) |

</details>

<details>
<summary>service/src/job-cancellation.ts — 26 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `targetKey()` | module-local function | [line 14](../../service/src/job-cancellation.ts#L14) |
| `cancellationKey()` | module-local function | [line 18](../../service/src/job-cancellation.ts#L18) |
| `parseTarget()` | module-local function | [line 24](../../service/src/job-cancellation.ts#L24) |
| `JobCancellationRegistry` | exported class | [line 51](../../service/src/job-cancellation.ts#L51) |
| `JobCancellationRegistry.detachSubscriber()` | private method | [line 88](../../service/src/job-cancellation.ts#L88) |
| `JobCancellationRegistry.restartAfterTerminalDisconnect()` | private method | [line 97](../../service/src/job-cancellation.ts#L97) |
| `JobCancellationRegistry.scheduleSubscriberRestart()` | private method | [line 109](../../service/src/job-cancellation.ts#L109) |
| `JobCancellationRegistry.reconcile()` | private method | [line 137](../../service/src/job-cancellation.ts#L137) |
| `JobCancellationRegistry.scheduleReconcile()` | private method | [line 152](../../service/src/job-cancellation.ts#L152) |
| `JobCancellationRegistry.start()` | private method | [line 175](../../service/src/job-cancellation.ts#L175) |
| `JobCancellationRegistry.register()` | method | [line 205](../../service/src/job-cancellation.ts#L205) |
| `JobCancellationRegistry.unregister()` | method | [line 228](../../service/src/job-cancellation.ts#L228) |
| `JobCancellationRegistry.close()` | method | [line 244](../../service/src/job-cancellation.ts#L244) |
| `cancelJobInRedis()` | module-local function | [line 263](../../service/src/job-cancellation.ts#L263) |
| `requestJobCancellation()` | exported function | [line 302](../../service/src/job-cancellation.ts#L302) |
| `decodeCommittedResult()` | module-local function | [line 318](../../service/src/job-cancellation.ts#L318) |
| `jobCancellationRetentionSeconds()` | exported function | [line 337](../../service/src/job-cancellation.ts#L337) |
| `commitJobResult()` | exported function | [line 350](../../service/src/job-cancellation.ts#L350) |
| `claimJobExecution()` | exported function | [line 398](../../service/src/job-cancellation.ts#L398) |
| `readCommittedJobResult()` | exported function | [line 434](../../service/src/job-cancellation.ts#L434) |
| `fenceJobCancellation()` | exported function | [line 450](../../service/src/job-cancellation.ts#L450) |
| `removeJobIfWaiting()` | exported function | [line 512](../../service/src/job-cancellation.ts#L512) |
| `programmaticCancellationError()` | exported function | [line 526](../../service/src/job-cancellation.ts#L526) |
| `throwIfJobAborted()` | exported function | [line 534](../../service/src/job-cancellation.ts#L534) |
| `jobResultCommitFailure()` | exported function | [line 545](../../service/src/job-cancellation.ts#L545) |
| `waitForJobWithCancellation()` | exported function | [line 557](../../service/src/job-cancellation.ts#L557) |

</details>

<details>
<summary>service/src/lifecycle.ts — 15 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `configureProfileMetrics()` | module-local function | [line 29](../../service/src/lifecycle.ts#L29) |
| `shutdownTracing()` | module-local function | [line 37](../../service/src/lifecycle.ts#L37) |
| `validateLifecycleAuthConfig()` | module-local function | [line 46](../../service/src/lifecycle.ts#L46) |
| `registerWorkers()` | exported function | [line 57](../../service/src/lifecycle.ts#L57) |
| `setupQueueListeners()` | module-local function | [line 64](../../service/src/lifecycle.ts#L64) |
| `startupApiOnly()` | exported function | [line 98](../../service/src/lifecycle.ts#L98) |
| `startupWorkerOnly()` | exported function | [line 127](../../service/src/lifecycle.ts#L127) |
| `gracefulStartup()` | module-local function | [line 168](../../service/src/lifecycle.ts#L168) |
| `gracefulShutdown()` | exported function | [line 235](../../service/src/lifecycle.ts#L235) |
| `checkServiceStartUp()` | exported function | [line 315](../../service/src/lifecycle.ts#L315) |
| `setStartupComplete()` | exported function | [line 319](../../service/src/lifecycle.ts#L319) |
| `checkServiceShutDown()` | exported function | [line 323](../../service/src/lifecycle.ts#L323) |
| `startServer()` | exported function | [line 330](../../service/src/lifecycle.ts#L330) |
| `startApiServer()` | exported function | [line 350](../../service/src/lifecycle.ts#L350) |
| `startWorkerServer()` | exported function | [line 370](../../service/src/lifecycle.ts#L370) |

</details>

<details>
<summary>service/src/local-api.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `localStartup()` | module-local function | [line 64](../../service/src/local-api.ts#L64) |
| `localShutdown()` | module-local function | [line 98](../../service/src/local-api.ts#L98) |

</details>

<details>
<summary>service/src/metrics.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `configureExecutionProfileMetrics()` | exported function | [line 15](../../service/src/metrics.ts#L15) |
| `httpLatencyStartMs()` | exported function | [line 67](../../service/src/metrics.ts#L67) |
| `httpLatencyElapsedSeconds()` | exported function | [line 71](../../service/src/metrics.ts#L71) |
| `recordHttpRequest()` | exported function | [line 75](../../service/src/metrics.ts#L75) |
| `registerBullmqQueueMetricsCollector()` | exported function | [line 143](../../service/src/metrics.ts#L143) |
| `metricsHandler()` | exported function | [line 284](../../service/src/metrics.ts#L284) |
| `metricsResponse()` | exported function | [line 290](../../service/src/metrics.ts#L290) |

</details>

<details>
<summary>service/src/middleware/auth.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `logSessionKeyResolutionError()` | module-local function value | [line 27](../../service/src/middleware/auth.ts#L27) |
| `authLogMeta()` | module-local function | [line 51](../../service/src/middleware/auth.ts#L51) |
| `apiKeyAuth()` | exported function value | [line 68](../../service/src/middleware/auth.ts#L68) |
| `sessionAuth()` | exported function value | [line 187](../../service/src/middleware/auth.ts#L187) |

</details>

<details>
<summary>service/src/middleware/execution-profile.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `expectedExecutionProfile()` | module-local function | [line 11](../../service/src/middleware/execution-profile.ts#L11) |
| `executionProfileMiddleware()` | exported function | [line 31](../../service/src/middleware/execution-profile.ts#L31) |

</details>

<details>
<summary>service/src/middleware/httpMetrics.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `expressRouteLabel()` | module-local function | [line 4](../../service/src/middleware/httpMetrics.ts#L4) |
| `httpMetricPath()` | exported function | [line 11](../../service/src/middleware/httpMetrics.ts#L11) |
| `httpMetricsMiddleware()` | exported function | [line 16](../../service/src/middleware/httpMetrics.ts#L16) |

</details>

<details>
<summary>service/src/middleware/limits.ts — 10 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `getRedisCommands()` | module-local function | [line 19](../../service/src/middleware/limits.ts#L19) |
| `sendCommand()` | module-local function value | [line 25](../../service/src/middleware/limits.ts#L25) |
| `keySegment()` | module-local function value | [line 56](../../service/src/middleware/limits.ts#L56) |
| `hashLabel()` | module-local function value | [line 61](../../service/src/middleware/limits.ts#L61) |
| `setRateLimitRedisForTests()` | exported function | [line 67](../../service/src/middleware/limits.ts#L67) |
| `retryAfterSeconds()` | exported function | [line 71](../../service/src/middleware/limits.ts#L71) |
| `rateLimitResponseBody()` | exported function | [line 79](../../service/src/middleware/limits.ts#L79) |
| `keyGenerator()` | exported function value | [line 92](../../service/src/middleware/limits.ts#L92) |
| `buildRateLimiter()` | module-local function value | [line 101](../../service/src/middleware/limits.ts#L101) |
| `createRateLimiter()` | exported function value | [line 154](../../service/src/middleware/limits.ts#L154) |

</details>

<details>
<summary>service/src/middleware/request-error-logger.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `serializeError()` | module-local function | [line 9](../../service/src/middleware/request-error-logger.ts#L9) |
| `statusFromError()` | module-local function | [line 21](../../service/src/middleware/request-error-logger.ts#L21) |
| `requestPath()` | module-local function | [line 42](../../service/src/middleware/request-error-logger.ts#L42) |
| `buildRequestErrorLogMeta()` | exported function | [line 46](../../service/src/middleware/request-error-logger.ts#L46) |
| `buildRequestNotFoundLogMeta()` | exported function | [line 64](../../service/src/middleware/request-error-logger.ts#L64) |
| `requestNotFoundLogger()` | exported function value | [line 79](../../service/src/middleware/request-error-logger.ts#L79) |
| `requestErrorLogger()` | exported function value | [line 84](../../service/src/middleware/request-error-logger.ts#L84) |

</details>

<details>
<summary>service/src/minio-client.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `createMinioClient()` | exported function | [line 6](../../service/src/minio-client.ts#L6) |

</details>

<details>
<summary>service/src/payload.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `createPayload()` | exported function | [line 8](../../service/src/payload.ts#L8) |

</details>

<details>
<summary>service/src/preamble-bash.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `findBashToolNameCollision()` | exported function | [line 13](../../service/src/preamble-bash.ts#L13) |
| `BashToolNameCollisionError` | exported class | [line 28](../../service/src/preamble-bash.ts#L28) |
| `normalizeBashFunctionName()` | module-local function | [line 93](../../service/src/preamble-bash.ts#L93) |
| `escapeForBashDoubleQuote()` | module-local function | [line 111](../../service/src/preamble-bash.ts#L111) |
| `escapeForBashEre()` | module-local function | [line 120](../../service/src/preamble-bash.ts#L120) |
| `generateBashReplayPreamble()` | exported function | [line 135](../../service/src/preamble-bash.ts#L135) |
| `generateBashReplayPostamble()` | exported function | [line 698](../../service/src/preamble-bash.ts#L698) |
| `generateBashToolStub()` | module-local function | [line 726](../../service/src/preamble-bash.ts#L726) |
| `generateBashPendingDeferHelper()` | module-local function | [line 746](../../service/src/preamble-bash.ts#L746) |

</details>

<details>
<summary>service/src/preamble.ts — 16 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `normalizePythonFunctionName()` | module-local function | [line 86](../../service/src/preamble.ts#L86) |
| `jsonSchemaToPythonType()` | module-local function | [line 147](../../service/src/preamble.ts#L147) |
| `getSortedPropertyNames()` | module-local function | [line 179](../../service/src/preamble.ts#L179) |
| `schemaToParams()` | module-local function | [line 195](../../service/src/preamble.ts#L195) |
| `generateInputDict()` | module-local function | [line 224](../../service/src/preamble.ts#L224) |
| `inferReturnType()` | module-local function | [line 235](../../service/src/preamble.ts#L235) |
| `generateDocstring()` | module-local function | [line 270](../../service/src/preamble.ts#L270) |
| `generateToolStub()` | module-local function | [line 298](../../service/src/preamble.ts#L298) |
| `generatePreamble()` | exported function | [line 326](../../service/src/preamble.ts#L326) |
| `generateReplayPreamble()` | exported function | [line 569](../../service/src/preamble.ts#L569) |
| `extractPendingFromControlPayload()` | exported function | [line 685](../../service/src/preamble.ts#L685) |
| `findSentinelLine()` | module-local function | [line 750](../../service/src/preamble.ts#L750) |
| `extractPendingFromStdout()` | exported function | [line 769](../../service/src/preamble.ts#L769) |
| `wrapUserCodeInAsync()` | module-local function | [line 827](../../service/src/preamble.ts#L827) |
| `createProgrammaticPayload()` | exported function | [line 888](../../service/src/preamble.ts#L888) |
| `buildBashPayload()` | module-local function | [line 1014](../../service/src/preamble.ts#L1014) |

</details>

<details>
<summary>service/src/programmatic-cancellation.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `requestKey()` | module-local function | [line 21](../../service/src/programmatic-cancellation.ts#L21) |
| `normalizeProgrammaticRequestId()` | exported function | [line 25](../../service/src/programmatic-cancellation.ts#L25) |
| `programmaticCancellationOwner()` | exported function | [line 33](../../service/src/programmatic-cancellation.ts#L33) |
| `reserveProgrammaticCancellation()` | exported function | [line 103](../../service/src/programmatic-cancellation.ts#L103) |
| `attachProgrammaticCancellationTarget()` | exported function | [line 123](../../service/src/programmatic-cancellation.ts#L123) |
| `cancelProgrammaticRequest()` | exported function | [line 145](../../service/src/programmatic-cancellation.ts#L145) |
| `releaseProgrammaticCancellation()` | exported function | [line 169](../../service/src/programmatic-cancellation.ts#L169) |

</details>

<details>
<summary>service/src/ptc-constants.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isReservedPtcFilename()` | exported function | [line 46](../../service/src/ptc-constants.ts#L46) |
| `buildScopedSentinel()` | exported function | [line 81](../../service/src/ptc-constants.ts#L81) |

</details>

<details>
<summary>service/src/queue.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `retryStrategy()` | module-local function value | [line 25](../../service/src/queue.ts#L25) |
| `reconnectOnError()` | module-local function value | [line 30](../../service/src/queue.ts#L30) |
| `getQueueResources()` | module-local function | [line 80](../../service/src/queue.ts#L80) |
| `getExecutionQueueBinding()` | exported function | [line 94](../../service/src/queue.ts#L94) |
| `getExistingExecutionJob()` | exported function | [line 115](../../service/src/queue.ts#L115) |
| `withTimeout()` | module-local function | [line 128](../../service/src/queue.ts#L128) |
| `closeQueueConnections()` | exported function | [line 170](../../service/src/queue.ts#L170) |

</details>

<details>
<summary>service/src/redis-options.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `redisReconnectDelay()` | exported function | [line 5](../../service/src/redis-options.ts#L5) |
| `redisKeepAliveMs()` | exported function | [line 9](../../service/src/redis-options.ts#L9) |
| `redisKeepAliveOptions()` | exported function | [line 28](../../service/src/redis-options.ts#L28) |

</details>

<details>
<summary>service/src/request-disconnect.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `observeRequestDisconnect()` | exported function | [line 19](../../service/src/request-disconnect.ts#L19) |

</details>

<details>
<summary>service/src/runtime-session/checkpoint-store.ts — 31 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `resolveS3Endpoint()` | exported function | [line 32](../../service/src/runtime-session/checkpoint-store.ts#L32) |
| `s3Endpoint()` | module-local function | [line 53](../../service/src/runtime-session/checkpoint-store.ts#L53) |
| `createS3Client()` | module-local function | [line 61](../../service/src/runtime-session/checkpoint-store.ts#L61) |
| `CheckpointTooLargeError` | exported class | [line 128](../../service/src/runtime-session/checkpoint-store.ts#L128) |
| `checkpointArtifactFromStream()` | exported function | [line 136](../../service/src/runtime-session/checkpoint-store.ts#L136) |
| `checkpointArtifactFromBuffer()` | module-local function | [line 168](../../service/src/runtime-session/checkpoint-store.ts#L168) |
| `checkpointPrefixFor()` | exported function | [line 175](../../service/src/runtime-session/checkpoint-store.ts#L175) |
| `checkpointObjectKey()` | exported function | [line 179](../../service/src/runtime-session/checkpoint-store.ts#L179) |
| `checkpointCommitKey()` | module-local function | [line 183](../../service/src/runtime-session/checkpoint-store.ts#L183) |
| `sequenceFromKey()` | module-local function | [line 188](../../service/src/runtime-session/checkpoint-store.ts#L188) |
| `MinioCheckpointStore` | exported class | [line 195](../../service/src/runtime-session/checkpoint-store.ts#L195) |
| `MinioCheckpointStore.withDeadline()` | private method | [line 215](../../service/src/runtime-session/checkpoint-store.ts#L215) |
| `MinioCheckpointStore.send()` | private method | [line 231](../../service/src/runtime-session/checkpoint-store.ts#L231) |
| `MinioCheckpointStore.put()` | method | [line 237](../../service/src/runtime-session/checkpoint-store.ts#L237) |
| `MinioCheckpointStore.commit()` | method | [line 263](../../service/src/runtime-session/checkpoint-store.ts#L263) |
| `MinioCheckpointStore.retainForHostedApp()` | method | [line 277](../../service/src/runtime-session/checkpoint-store.ts#L277) |
| `MinioCheckpointStore.hostedRevisionKey()` | private method | [line 293](../../service/src/runtime-session/checkpoint-store.ts#L293) |
| `MinioCheckpointStore.readHostedAppRevision()` | method | [line 298](../../service/src/runtime-session/checkpoint-store.ts#L298) |
| `MinioCheckpointStore.retainHostedAppRevision()` | method | [line 330](../../service/src/runtime-session/checkpoint-store.ts#L330) |
| `MinioCheckpointStore.pruneOlderThan()` | method | [line 346](../../service/src/runtime-session/checkpoint-store.ts#L346) |
| `MinioCheckpointStore.latestSequence()` | method | [line 374](../../service/src/runtime-session/checkpoint-store.ts#L374) |
| `MinioCheckpointStore.get()` | method | [line 379](../../service/src/runtime-session/checkpoint-store.ts#L379) |
| `MinioCheckpointStore.listKeys()` | private method | [line 422](../../service/src/runtime-session/checkpoint-store.ts#L422) |
| `MinioCheckpointStore.latestKey()` | private method | [line 449](../../service/src/runtime-session/checkpoint-store.ts#L449) |
| `MinioCheckpointStore.latestCommittedKey()` | private method | [line 459](../../service/src/runtime-session/checkpoint-store.ts#L459) |
| `MemoryCheckpointStore` | exported class | [line 478](../../service/src/runtime-session/checkpoint-store.ts#L478) |
| `MemoryCheckpointStore.put()` | method | [line 482](../../service/src/runtime-session/checkpoint-store.ts#L482) |
| `MemoryCheckpointStore.commit()` | method | [line 491](../../service/src/runtime-session/checkpoint-store.ts#L491) |
| `MemoryCheckpointStore.pruneOlderThan()` | method | [line 495](../../service/src/runtime-session/checkpoint-store.ts#L495) |
| `MemoryCheckpointStore.latestSequence()` | method | [line 511](../../service/src/runtime-session/checkpoint-store.ts#L511) |
| `MemoryCheckpointStore.get()` | method | [line 520](../../service/src/runtime-session/checkpoint-store.ts#L520) |

</details>

<details>
<summary>service/src/runtime-session/checkpoint.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `withTimeout()` | module-local function | [line 28](../../service/src/runtime-session/checkpoint.ts#L28) |
| `pullCheckpoint()` | exported function | [line 79](../../service/src/runtime-session/checkpoint.ts#L79) |
| `pushRestore()` | exported function | [line 117](../../service/src/runtime-session/checkpoint.ts#L117) |
| `probeInputs()` | exported function | [line 148](../../service/src/runtime-session/checkpoint.ts#L148) |
| `pushInputs()` | exported function | [line 190](../../service/src/runtime-session/checkpoint.ts#L190) |
| `checkpointSession()` | exported function | [line 227](../../service/src/runtime-session/checkpoint.ts#L227) |
| `restoreSession()` | exported function | [line 341](../../service/src/runtime-session/checkpoint.ts#L341) |

</details>

<details>
<summary>service/src/runtime-session/files.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `SessionFilesError` | exported class | [line 51](../../service/src/runtime-session/files.ts#L51) |
| `inputCacheKey()` | exported function | [line 70](../../service/src/runtime-session/files.ts#L70) |
| `sessionFileRefs()` | exported function | [line 76](../../service/src/runtime-session/files.ts#L76) |
| `buildInputBatch()` | exported function | [line 113](../../service/src/runtime-session/files.ts#L113) |
| `fetchFileObjectToPath()` | module-local function | [line 191](../../service/src/runtime-session/files.ts#L191) |
| `tarDirectory()` | module-local function | [line 259](../../service/src/runtime-session/files.ts#L259) |

</details>

<details>
<summary>service/src/runtime-session/id.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `RuntimeSessionHintError` | exported class | [line 7](../../service/src/runtime-session/id.ts#L7) |
| `validateRuntimeSessionHint()` | exported function | [line 16](../../service/src/runtime-session/id.ts#L16) |
| `deriveRuntimeSessionId()` | exported function | [line 41](../../service/src/runtime-session/id.ts#L41) |
| `resolveRuntimeSessionIdForRequest()` | exported function | [line 71](../../service/src/runtime-session/id.ts#L71) |
| `resolveRuntimeSessionIdForExecRequest()` | exported function | [line 93](../../service/src/runtime-session/id.ts#L93) |

</details>

<details>
<summary>service/src/runtime-session/input-delivery.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isFileRef()` | module-local function | [line 5](../../service/src/runtime-session/input-delivery.ts#L5) |
| `prepareInputDelivery()` | exported function | [line 15](../../service/src/runtime-session/input-delivery.ts#L15) |

</details>

<details>
<summary>service/src/runtime-session/job-policy.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isRuntimeSessionMode()` | module-local function | [line 15](../../service/src/runtime-session/job-policy.ts#L15) |
| `resolveRuntimeSessionForJob()` | exported function | [line 31](../../service/src/runtime-session/job-policy.ts#L31) |

</details>

<details>
<summary>service/src/runtime-session/lambda-client-aws.ts — 10 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `classifyError()` | module-local function | [line 33](../../service/src/runtime-session/lambda-client-aws.ts#L33) |
| `toDescription()` | module-local function | [line 39](../../service/src/runtime-session/lambda-client-aws.ts#L39) |
| `AwsLambdaMicrovmClient` | exported class | [line 73](../../service/src/runtime-session/lambda-client-aws.ts#L73) |
| `AwsLambdaMicrovmClient.send()` | private method | [line 90](../../service/src/runtime-session/lambda-client-aws.ts#L90) |
| `AwsLambdaMicrovmClient.runMicrovm()` | method | [line 114](../../service/src/runtime-session/lambda-client-aws.ts#L114) |
| `AwsLambdaMicrovmClient.getMicrovm()` | method | [line 174](../../service/src/runtime-session/lambda-client-aws.ts#L174) |
| `AwsLambdaMicrovmClient.suspendMicrovm()` | method | [line 183](../../service/src/runtime-session/lambda-client-aws.ts#L183) |
| `AwsLambdaMicrovmClient.resumeMicrovm()` | method | [line 191](../../service/src/runtime-session/lambda-client-aws.ts#L191) |
| `AwsLambdaMicrovmClient.terminateMicrovm()` | method | [line 203](../../service/src/runtime-session/lambda-client-aws.ts#L203) |
| `AwsLambdaMicrovmClient.createMicrovmAuthToken()` | method | [line 211](../../service/src/runtime-session/lambda-client-aws.ts#L211) |

</details>

<details>
<summary>service/src/runtime-session/lambda-client-fake.ts — 17 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `runMicrovmRequestFingerprint()` | module-local function | [line 29](../../service/src/runtime-session/lambda-client-fake.ts#L29) |
| `FakeLambdaMicrovmClient` | exported class | [line 52](../../service/src/runtime-session/lambda-client-fake.ts#L52) |
| `FakeLambdaMicrovmClient.failNext()` | method | [line 68](../../service/src/runtime-session/lambda-client-fake.ts#L68) |
| `FakeLambdaMicrovmClient.delayNextLaunch()` | method | [line 75](../../service/src/runtime-session/lambda-client-fake.ts#L75) |
| `FakeLambdaMicrovmClient.terminateNextLaunch()` | method | [line 80](../../service/src/runtime-session/lambda-client-fake.ts#L80) |
| `FakeLambdaMicrovmClient.setState()` | method | [line 86](../../service/src/runtime-session/lambda-client-fake.ts#L86) |
| `FakeLambdaMicrovmClient.now()` | private method | [line 91](../../service/src/runtime-session/lambda-client-fake.ts#L91) |
| `FakeLambdaMicrovmClient.takeFailure()` | private method | [line 95](../../service/src/runtime-session/lambda-client-fake.ts#L95) |
| `FakeLambdaMicrovmClient.mustGet()` | private method | [line 101](../../service/src/runtime-session/lambda-client-fake.ts#L101) |
| `FakeLambdaMicrovmClient.describe()` | private method | [line 109](../../service/src/runtime-session/lambda-client-fake.ts#L109) |
| `FakeLambdaMicrovmClient.runMicrovm()` | method | [line 121](../../service/src/runtime-session/lambda-client-fake.ts#L121) |
| `FakeLambdaMicrovmClient.getMicrovm()` | method | [line 168](../../service/src/runtime-session/lambda-client-fake.ts#L168) |
| `FakeLambdaMicrovmClient.suspendMicrovm()` | method | [line 184](../../service/src/runtime-session/lambda-client-fake.ts#L184) |
| `FakeLambdaMicrovmClient.resumeMicrovm()` | method | [line 190](../../service/src/runtime-session/lambda-client-fake.ts#L190) |
| `FakeLambdaMicrovmClient.terminateMicrovm()` | method | [line 201](../../service/src/runtime-session/lambda-client-fake.ts#L201) |
| `FakeLambdaMicrovmClient.createMicrovmAuthToken()` | method | [line 208](../../service/src/runtime-session/lambda-client-fake.ts#L208) |
| `FakeLambdaMicrovmClient.callsFor()` | method | [line 225](../../service/src/runtime-session/lambda-client-fake.ts#L225) |

</details>

<details>
<summary>service/src/runtime-session/lambda-client.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `LambdaMicrovmApiError` | exported class | [line 64](../../service/src/runtime-session/lambda-client.ts#L64) |
| `microvmPortHeaders()` | exported function | [line 84](../../service/src/runtime-session/lambda-client.ts#L84) |

</details>

<details>
<summary>service/src/runtime-session/lock-heartbeat.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `startRuntimeSessionLockHeartbeat()` | exported function | [line 11](../../service/src/runtime-session/lock-heartbeat.ts#L11) |

</details>

<details>
<summary>service/src/runtime-session/registry.ts — 15 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `RuntimeSessionRedisTimeoutError` | module-local class | [line 90](../../service/src/runtime-session/registry.ts#L90) |
| `registryAbortReason()` | module-local function | [line 92](../../service/src/runtime-session/registry.ts#L92) |
| `runRegistryCommand()` | module-local function | [line 98](../../service/src/runtime-session/registry.ts#L98) |
| `registerScripts()` | module-local function | [line 215](../../service/src/runtime-session/registry.ts#L215) |
| `setRedisForTests()` | exported function | [line 277](../../service/src/runtime-session/registry.ts#L277) |
| `resetRedisForTests()` | exported function | [line 281](../../service/src/runtime-session/registry.ts#L281) |
| `acquireRuntimeSessionLock()` | exported function | [line 285](../../service/src/runtime-session/registry.ts#L285) |
| `waitForRuntimeSessionLock()` | exported function | [line 321](../../service/src/runtime-session/registry.ts#L321) |
| `releaseRuntimeSessionLock()` | exported function | [line 389](../../service/src/runtime-session/registry.ts#L389) |
| `renewRuntimeSessionLock()` | exported function | [line 446](../../service/src/runtime-session/registry.ts#L446) |
| `readRuntimeSessionRecord()` | exported function | [line 472](../../service/src/runtime-session/registry.ts#L472) |
| `writeRuntimeSessionRecord()` | exported function | [line 495](../../service/src/runtime-session/registry.ts#L495) |
| `allocateRuntimeSessionGeneration()` | exported function | [line 528](../../service/src/runtime-session/registry.ts#L528) |
| `allocateCheckpointSequence()` | exported function | [line 559](../../service/src/runtime-session/registry.ts#L559) |
| `removeRuntimeSession()` | exported function | [line 578](../../service/src/runtime-session/registry.ts#L578) |

</details>

<details>
<summary>service/src/runtime-session/throttle.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `setRedisForTests()` | exported function | [line 23](../../service/src/runtime-session/throttle.ts#L23) |
| `resetRedisForTests()` | exported function | [line 27](../../service/src/runtime-session/throttle.ts#L27) |
| `MicrovmOpThrottledError` | exported class | [line 31](../../service/src/runtime-session/throttle.ts#L31) |
| `abortReason()` | module-local function | [line 57](../../service/src/runtime-session/throttle.ts#L57) |
| `defaultSleep()` | module-local function value | [line 63](../../service/src/runtime-session/throttle.ts#L63) |
| `throwIfAborted()` | module-local function | [line 89](../../service/src/runtime-session/throttle.ts#L89) |
| `runRedisWithinDeadline()` | module-local function | [line 97](../../service/src/runtime-session/throttle.ts#L97) |
| `acquireOpBudget()` | exported function | [line 161](../../service/src/runtime-session/throttle.ts#L161) |
| `poisonOpBucket()` | exported function | [line 212](../../service/src/runtime-session/throttle.ts#L212) |

</details>

<details>
<summary>service/src/sandbox-backend/http.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `HttpSandboxBackend` | exported class | [line 10](../../service/src/sandbox-backend/http.ts#L10) |
| `HttpSandboxBackend.execute()` | method | [line 13](../../service/src/sandbox-backend/http.ts#L13) |

</details>

<details>
<summary>service/src/sandbox-backend/index.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `LazyRemoteBridgeSandboxBackend` | module-local class | [line 17](../../service/src/sandbox-backend/index.ts#L17) |
| `LazyRemoteBridgeSandboxBackend.load()` | private method | [line 21](../../service/src/sandbox-backend/index.ts#L21) |
| `LazyRemoteBridgeSandboxBackend.execute()` | method | [line 28](../../service/src/sandbox-backend/index.ts#L28) |
| `LazyLambdaMicrovmSandboxBackend` | module-local class | [line 36](../../service/src/sandbox-backend/index.ts#L36) |
| `LazyLambdaMicrovmSandboxBackend.load()` | private method | [line 40](../../service/src/sandbox-backend/index.ts#L40) |
| `LazyLambdaMicrovmSandboxBackend.execute()` | method | [line 85](../../service/src/sandbox-backend/index.ts#L85) |
| `createBackend()` | module-local function | [line 93](../../service/src/sandbox-backend/index.ts#L93) |
| `getSandboxBackend()` | exported function | [line 106](../../service/src/sandbox-backend/index.ts#L106) |
| `setSandboxBackendForTests()` | exported function | [line 111](../../service/src/sandbox-backend/index.ts#L111) |

</details>

<details>
<summary>service/src/sandbox-backend/lambda-microvm.ts — 35 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `runtimeSessionLaunchFingerprint()` | exported function | [line 78](../../service/src/sandbox-backend/lambda-microvm.ts#L78) |
| `runtimeSessionLaunchRequestFingerprint()` | module-local function | [line 107](../../service/src/sandbox-backend/lambda-microvm.ts#L107) |
| `runtimeSessionLaunchGenerationSeed()` | exported function | [line 130](../../service/src/sandbox-backend/lambda-microvm.ts#L130) |
| `statelessLaunchClientToken()` | exported function | [line 157](../../service/src/sandbox-backend/lambda-microvm.ts#L157) |
| `runtimeSessionLaunchClientToken()` | exported function | [line 183](../../service/src/sandbox-backend/lambda-microvm.ts#L183) |
| `sleep()` | module-local function value | [line 204](../../service/src/sandbox-backend/lambda-microvm.ts#L204) |
| `normalizeMicrovmEndpoint()` | exported function | [line 221](../../service/src/sandbox-backend/lambda-microvm.ts#L221) |
| `LambdaMicrovmSandboxBackend` | exported class | [line 255](../../service/src/sandbox-backend/lambda-microvm.ts#L255) |
| `LambdaMicrovmSandboxBackend.checkpointsActive()` | private method | [line 270](../../service/src/sandbox-backend/lambda-microvm.ts#L270) |
| `LambdaMicrovmSandboxBackend.client()` | private method | [line 274](../../service/src/sandbox-backend/lambda-microvm.ts#L274) |
| `LambdaMicrovmSandboxBackend.execute()` | method | [line 279](../../service/src/sandbox-backend/lambda-microvm.ts#L279) |
| `LambdaMicrovmSandboxBackend.executeStateless()` | private method | [line 292](../../service/src/sandbox-backend/lambda-microvm.ts#L292) |
| `LambdaMicrovmSandboxBackend.executeSession()` | private method | [line 334](../../service/src/sandbox-backend/lambda-microvm.ts#L334) |
| `LambdaMicrovmSandboxBackend.executeOnSessionVm()` | private method | [line 525](../../service/src/sandbox-backend/lambda-microvm.ts#L525) |
| `LambdaMicrovmSandboxBackend.recycleUncommittedSessionVm()` | private method | [line 639](../../service/src/sandbox-backend/lambda-microvm.ts#L639) |
| `LambdaMicrovmSandboxBackend.launchFingerprint()` | private method | [line 722](../../service/src/sandbox-backend/lambda-microvm.ts#L722) |
| `LambdaMicrovmSandboxBackend.isValidationLaunchFailure()` | private method | [line 726](../../service/src/sandbox-backend/lambda-microvm.ts#L726) |
| `LambdaMicrovmSandboxBackend.retireExhaustedLaunchIntent()` | private method | [line 737](../../service/src/sandbox-backend/lambda-microvm.ts#L737) |
| `LambdaMicrovmSandboxBackend.findOrLaunchSession()` | private method | [line 771](../../service/src/sandbox-backend/lambda-microvm.ts#L771) |
| `LambdaMicrovmSandboxBackend.waitForRunnerReady()` | private method | [line 1055](../../service/src/sandbox-backend/lambda-microvm.ts#L1055) |
| `LambdaMicrovmSandboxBackend.checkpointUnderLock()` | private method | [line 1098](../../service/src/sandbox-backend/lambda-microvm.ts#L1098) |
| `LambdaMicrovmSandboxBackend.mintAuthToken()` | private method | [line 1141](../../service/src/sandbox-backend/lambda-microvm.ts#L1141) |
| `LambdaMicrovmSandboxBackend.deliverInputs()` | private method | [line 1217](../../service/src/sandbox-backend/lambda-microvm.ts#L1217) |
| `LambdaMicrovmSandboxBackend.inputDeliveryProvesVmUnhealthy()` | private method | [line 1334](../../service/src/sandbox-backend/lambda-microvm.ts#L1334) |
| `LambdaMicrovmSandboxBackend.rethrowInputDeliveryFailure()` | private method | [line 1344](../../service/src/sandbox-backend/lambda-microvm.ts#L1344) |
| `LambdaMicrovmSandboxBackend.probeInputsWithRetry()` | private method | [line 1370](../../service/src/sandbox-backend/lambda-microvm.ts#L1370) |
| `LambdaMicrovmSandboxBackend.proxyExecute()` | private method | [line 1396](../../service/src/sandbox-backend/lambda-microvm.ts#L1396) |
| `LambdaMicrovmSandboxBackend.launch()` | private method | [line 1457](../../service/src/sandbox-backend/lambda-microvm.ts#L1457) |
| `LambdaMicrovmSandboxBackend.launchBudgetExpired()` | private method | [line 1507](../../service/src/sandbox-backend/lambda-microvm.ts#L1507) |
| `LambdaMicrovmSandboxBackend.launchTimeoutError()` | private method | [line 1511](../../service/src/sandbox-backend/lambda-microvm.ts#L1511) |
| `LambdaMicrovmSandboxBackend.assertLaunchBudget()` | private method | [line 1518](../../service/src/sandbox-backend/lambda-microvm.ts#L1518) |
| `LambdaMicrovmSandboxBackend.launchOnce()` | private method | [line 1523](../../service/src/sandbox-backend/lambda-microvm.ts#L1523) |
| `LambdaMicrovmSandboxBackend.waitUntilRunning()` | private method | [line 1615](../../service/src/sandbox-backend/lambda-microvm.ts#L1615) |
| `LambdaMicrovmSandboxBackend.assertHealthy()` | private method | [line 1645](../../service/src/sandbox-backend/lambda-microvm.ts#L1645) |
| `LambdaMicrovmSandboxBackend.terminate()` | private method | [line 1665](../../service/src/sandbox-backend/lambda-microvm.ts#L1665) |

</details>

<details>
<summary>service/src/sandbox-backend/remote-bridge.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `RemoteBridgeSandboxBackend` | exported class | [line 34](../../service/src/sandbox-backend/remote-bridge.ts#L34) |
| `RemoteBridgeSandboxBackend.execute()` | method | [line 43](../../service/src/sandbox-backend/remote-bridge.ts#L43) |

</details>

<details>
<summary>service/src/sandbox-backend/types.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `SandboxBackendError` | exported class | [line 101](../../service/src/sandbox-backend/types.ts#L101) |

</details>

<details>
<summary>service/src/sandbox-dispatch.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `buildSandboxExecuteRequest()` | exported function | [line 35](../../service/src/sandbox-dispatch.ts#L35) |

</details>

<details>
<summary>service/src/sandbox-egress.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `prepareSandboxJobSecurity()` | exported function | [line 20](../../service/src/sandbox-egress.ts#L20) |
| `refreshEgressGrantClaims()` | exported function | [line 43](../../service/src/sandbox-egress.ts#L43) |
| `normalizeEgressGatewayUrl()` | exported function | [line 55](../../service/src/sandbox-egress.ts#L55) |
| `timeoutMsToGrantSeconds()` | exported function | [line 63](../../service/src/sandbox-egress.ts#L63) |
| `normalizeProgrammaticTimeoutMs()` | exported function | [line 73](../../service/src/sandbox-egress.ts#L73) |
| `normalizeSelectedWorkspaceProgrammaticTimeoutMs()` | exported function | [line 93](../../service/src/sandbox-egress.ts#L93) |
| `sealPtcCallbackTokenForGateway()` | exported function | [line 112](../../service/src/sandbox-egress.ts#L112) |

</details>

<details>
<summary>service/src/secure-startup.ts — 16 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `SecureStartupConfigError` | exported class | [line 10](../../service/src/secure-startup.ts#L10) |
| `nonEmpty()` | module-local function | [line 17](../../service/src/secure-startup.ts#L17) |
| `requireValue()` | module-local function | [line 21](../../service/src/secure-startup.ts#L21) |
| `requireStrongSecret()` | module-local function | [line 27](../../service/src/secure-startup.ts#L27) |
| `rejectValue()` | module-local function | [line 34](../../service/src/secure-startup.ts#L34) |
| `requireSafeWholeNumber()` | module-local function | [line 40](../../service/src/secure-startup.ts#L40) |
| `validateApiHardenedConfig()` | exported function | [line 51](../../service/src/secure-startup.ts#L51) |
| `validateApiBridgePolicy()` | exported function | [line 59](../../service/src/secure-startup.ts#L59) |
| `validateWorkerHardenedConfig()` | exported function | [line 97](../../service/src/secure-startup.ts#L97) |
| `hostedAppKey()` | module-local function | [line 107](../../service/src/secure-startup.ts#L107) |
| `validateHostedAppsSharedConfig()` | module-local function | [line 121](../../service/src/secure-startup.ts#L121) |
| `validateHostedAppsApiConfig()` | exported function | [line 136](../../service/src/secure-startup.ts#L136) |
| `validateExecutionProfilePolicy()` | exported function | [line 175](../../service/src/secure-startup.ts#L175) |
| `validateApiSandboxBackendPolicy()` | exported function | [line 214](../../service/src/secure-startup.ts#L214) |
| `validateSandboxBackendPolicy()` | exported function | [line 227](../../service/src/secure-startup.ts#L227) |
| `validateEgressGatewayHardenedConfig()` | exported function | [line 380](../../service/src/secure-startup.ts#L380) |

</details>

<details>
<summary>service/src/service/blocking-poll.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `pollBlockingExecution()` | exported function | [line 26](../../service/src/service/blocking-poll.ts#L26) |

</details>

<details>
<summary>service/src/service/file-authorization.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `FileRefAuthorizationError` | exported class | [line 29](../../service/src/service/file-authorization.ts#L29) |
| `isPlainObject()` | module-local function | [line 48](../../service/src/service/file-authorization.ts#L48) |
| `describeValue()` | module-local function | [line 52](../../service/src/service/file-authorization.ts#L52) |
| `failValidation()` | module-local function | [line 68](../../service/src/service/file-authorization.ts#L68) |
| `validateFileRefName()` | module-local function | [line 72](../../service/src/service/file-authorization.ts#L72) |
| `validateRequestedFiles()` | exported function | [line 99](../../service/src/service/file-authorization.ts#L99) |
| `authorizeRequestedFiles()` | exported function | [line 187](../../service/src/service/file-authorization.ts#L187) |

</details>

<details>
<summary>service/src/service/programmatic-router.ts — 14 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `sendFileRefAuthorizationError()` | module-local function | [line 151](../../service/src/service/programmatic-router.ts#L151) |
| `sendSessionKeyResolutionError()` | module-local function | [line 177](../../service/src/service/programmatic-router.ts#L177) |
| `retryToolCallServerRequest()` | module-local function | [line 199](../../service/src/service/programmatic-router.ts#L199) |
| `generateContinuationToken()` | module-local function | [line 253](../../service/src/service/programmatic-router.ts#L253) |
| `classifyContinuationOutcome()` | module-local function | [line 265](../../service/src/service/programmatic-router.ts#L265) |
| `decodeContinuationToken()` | module-local function | [line 277](../../service/src/service/programmatic-router.ts#L277) |
| `waitForExecutionState()` | module-local function | [line 310](../../service/src/service/programmatic-router.ts#L310) |
| `buildReplayPayload()` | module-local function | [line 339](../../service/src/service/programmatic-router.ts#L339) |
| `runReplayIteration()` | module-local function | [line 359](../../service/src/service/programmatic-router.ts#L359) |
| `isSandboxRunSuccess()` | module-local function | [line 493](../../service/src/service/programmatic-router.ts#L493) |
| `handleReplayInitial()` | module-local function | [line 503](../../service/src/service/programmatic-router.ts#L503) |
| `handleReplayContinuation()` | module-local function | [line 737](../../service/src/service/programmatic-router.ts#L737) |
| `runAndRespond()` | module-local function | [line 985](../../service/src/service/programmatic-router.ts#L985) |
| `handleBlocking()` | module-local function | [line 1520](../../service/src/service/programmatic-router.ts#L1520) |

</details>

<details>
<summary>service/src/service/programmatic-state.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `resolveReplayStateSandboxBackend()` | exported function | [line 12](../../service/src/service/programmatic-state.ts#L12) |
| `buildReplayExecutionState()` | exported function | [line 50](../../service/src/service/programmatic-state.ts#L50) |
| `bindReplayWorkspaceInstance()` | exported function | [line 92](../../service/src/service/programmatic-state.ts#L92) |

</details>

<details>
<summary>service/src/service/replay-state.ts — 29 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `ExecutionStateTooLargeError` | exported class | [line 214](../../service/src/service/replay-state.ts#L214) |
| `registerScripts()` | module-local function | [line 263](../../service/src/service/replay-state.ts#L263) |
| `setRedisForTests()` | exported function | [line 303](../../service/src/service/replay-state.ts#L303) |
| `resetRedisForTests()` | exported function | [line 309](../../service/src/service/replay-state.ts#L309) |
| `normalizeExecutionState()` | exported function | [line 320](../../service/src/service/replay-state.ts#L320) |
| `getExecutionState()` | exported function | [line 328](../../service/src/service/replay-state.ts#L328) |
| `setExecutionState()` | exported function | [line 333](../../service/src/service/replay-state.ts#L333) |
| `deleteExecutionState()` | exported function | [line 351](../../service/src/service/replay-state.ts#L351) |
| `acquireExecutionLock()` | exported function | [line 364](../../service/src/service/replay-state.ts#L364) |
| `releaseExecutionLock()` | exported function | [line 376](../../service/src/service/replay-state.ts#L376) |
| `scanKeys()` | exported function | [line 391](../../service/src/service/replay-state.ts#L391) |
| `blockingResultKey()` | module-local function | [line 427](../../service/src/service/replay-state.ts#L427) |
| `setBlockingResult()` | exported function | [line 431](../../service/src/service/replay-state.ts#L431) |
| `getBlockingResult()` | exported function | [line 440](../../service/src/service/replay-state.ts#L440) |
| `deleteBlockingResult()` | exported function | [line 445](../../service/src/service/replay-state.ts#L445) |
| `setExecutionResult()` | exported function | [line 464](../../service/src/service/replay-state.ts#L464) |
| `setExecutionError()` | exported function | [line 491](../../service/src/service/replay-state.ts#L491) |
| `historyKey()` | exported function | [line 515](../../service/src/service/replay-state.ts#L515) |
| `canonicalEntryBody()` | module-local function | [line 525](../../service/src/service/replay-state.ts#L525) |
| `computeToolHistoryDelta()` | exported function | [line 556](../../service/src/service/replay-state.ts#L556) |
| `commitToolHistoryAndState()` | exported function | [line 642](../../service/src/service/replay-state.ts#L642) |
| `refreshExecutionTtl()` | exported function | [line 701](../../service/src/service/replay-state.ts#L701) |
| `loadToolHistory()` | exported function | [line 708](../../service/src/service/replay-state.ts#L708) |
| `deleteToolHistory()` | exported function | [line 721](../../service/src/service/replay-state.ts#L721) |
| `cleanupStaleExecutions()` | exported function | [line 735](../../service/src/service/replay-state.ts#L735) |
| `cleanupExecution()` | exported function | [line 829](../../service/src/service/replay-state.ts#L829) |
| `validateToolResult()` | exported function | [line 859](../../service/src/service/replay-state.ts#L859) |
| `validateContinuationBatch()` | exported function | [line 932](../../service/src/service/replay-state.ts#L932) |
| `checkContinuationPreconditions()` | exported function | [line 975](../../service/src/service/replay-state.ts#L975) |

</details>

<details>
<summary>service/src/service/router.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `putFileToFileServer()` | module-local function | [line 66](../../service/src/service/router.ts#L66) |
| `validateUploadRequest()` | module-local function | [line 96](../../service/src/service/router.ts#L96) |
| `sendFileRefAuthorizationError()` | module-local function | [line 114](../../service/src/service/router.ts#L114) |
| `sendSessionKeyResolutionError()` | module-local function | [line 147](../../service/src/service/router.ts#L147) |
| `deleteSessionObject()` | module-local function value | [line 972](../../service/src/service/router.ts#L972) |

</details>

<details>
<summary>service/src/service/upload-session.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `createUploadSessionRegistrar()` | exported function | [line 18](../../service/src/service/upload-session.ts#L18) |

</details>

<details>
<summary>service/src/session-key.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `strictTenantIsolation()` | module-local function | [line 9](../../service/src/session-key.ts#L9) |
| `SessionKeyResolutionError` | exported class | [line 33](../../service/src/session-key.ts#L33) |
| `resolveSessionKey()` | exported function | [line 66](../../service/src/session-key.ts#L66) |
| `resolveOutputBucketSessionKey()` | exported function | [line 114](../../service/src/session-key.ts#L114) |
| `parseUploadSessionKeyInput()` | exported function | [line 139](../../service/src/session-key.ts#L139) |
| `resolveSessionStorageNamespace()` | module-local function | [line 172](../../service/src/session-key.ts#L172) |

</details>

<details>
<summary>service/src/session-ownership.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `sessionCacheKey()` | exported function value | [line 34](../../service/src/session-ownership.ts#L34) |
| `sessionOwnerKey()` | exported function value | [line 35](../../service/src/session-ownership.ts#L35) |
| `recordSessionOwnership()` | exported function | [line 48](../../service/src/session-ownership.ts#L48) |
| `clearSessionOwnership()` | exported function | [line 68](../../service/src/session-ownership.ts#L68) |
| `authorizeSessionOwnership()` | exported function | [line 96](../../service/src/session-ownership.ts#L96) |

</details>

<details>
<summary>service/src/tool-call-server.ts — 17 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `jsonResponse()` | module-local function | [line 102](../../service/src/tool-call-server.ts#L102) |
| `errorResponse()` | module-local function | [line 109](../../service/src/tool-call-server.ts#L109) |
| `getSession()` | module-local function | [line 113](../../service/src/tool-call-server.ts#L113) |
| `setSession()` | module-local function | [line 118](../../service/src/tool-call-server.ts#L118) |
| `handleCreateSession()` | module-local function | [line 128](../../service/src/tool-call-server.ts#L128) |
| `handleGetPending()` | module-local function | [line 173](../../service/src/tool-call-server.ts#L173) |
| `handleSubmitResults()` | module-local function | [line 196](../../service/src/tool-call-server.ts#L196) |
| `handleGetStatus()` | module-local function | [line 272](../../service/src/tool-call-server.ts#L272) |
| `handleComplete()` | module-local function | [line 292](../../service/src/tool-call-server.ts#L292) |
| `handleError()` | module-local function | [line 333](../../service/src/tool-call-server.ts#L333) |
| `handleDeleteSession()` | module-local function | [line 374](../../service/src/tool-call-server.ts#L374) |
| `handleToolCall()` | module-local function | [line 397](../../service/src/tool-call-server.ts#L397) |
| `waitForResult()` | module-local function | [line 473](../../service/src/tool-call-server.ts#L473) |
| `handleHealth()` | module-local function | [line 495](../../service/src/tool-call-server.ts#L495) |
| `routeToolCallRequest()` | module-local function | [line 514](../../service/src/tool-call-server.ts#L514) |
| `handleRequest()` | module-local function | [line 588](../../service/src/tool-call-server.ts#L588) |
| `shutdown()` | module-local function | [line 630](../../service/src/tool-call-server.ts#L630) |

</details>

<details>
<summary>service/src/tool-input-signature.ts — 8 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `canonicalJson()` | module-local function | [line 11](../../service/src/tool-input-signature.ts#L11) |
| `hashToolInput()` | exported function | [line 25](../../service/src/tool-input-signature.ts#L25) |
| `normalizeRawJsonNumber()` | module-local function | [line 32](../../service/src/tool-input-signature.ts#L32) |
| `parseRawJson()` | module-local function | [line 75](../../service/src/tool-input-signature.ts#L75) |
| `canonicalRawJson()` | module-local function | [line 203](../../service/src/tool-input-signature.ts#L203) |
| `hashCanonicalJsonText()` | module-local function | [line 217](../../service/src/tool-input-signature.ts#L217) |
| `hashRawToolInputJson()` | exported function | [line 221](../../service/src/tool-input-signature.ts#L221) |
| `pendingInputHashesFromRawPayload()` | exported function | [line 229](../../service/src/tool-input-signature.ts#L229) |

</details>

<details>
<summary>service/src/tool-scope.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `registeredToolNames()` | exported function | [line 13](../../service/src/tool-scope.ts#L13) |
| `isRegisteredToolName()` | exported function | [line 30](../../service/src/tool-scope.ts#L30) |
| `findUnregisteredToolCall()` | exported function | [line 38](../../service/src/tool-scope.ts#L38) |

</details>

<details>
<summary>service/src/utils.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `applySystemReplacements()` | exported function | [line 65](../../service/src/utils.ts#L65) |
| `filterSystemLogs()` | exported function | [line 69](../../service/src/utils.ts#L69) |
| `sleep()` | exported function | [line 88](../../service/src/utils.ts#L88) |
| `isValidId()` | exported function | [line 103](../../service/src/utils.ts#L103) |
| `isValidResourceId()` | exported function | [line 126](../../service/src/utils.ts#L126) |
| `getAxiosErrorDetails()` | exported function | [line 136](../../service/src/utils.ts#L136) |
| `parseErrorResponseData()` | module-local function | [line 154](../../service/src/utils.ts#L154) |
| `sandboxErrorMessageFromAxios()` | exported function | [line 163](../../service/src/utils.ts#L163) |
| `publicExecutionFailure()` | exported function | [line 170](../../service/src/utils.ts#L170) |

</details>

<details>
<summary>service/src/worker-error.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `workerDeadlineFailure()` | exported function | [line 7](../../service/src/worker-error.ts#L7) |

</details>

<details>
<summary>service/src/worker-server.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `workerRouteLabel()` | module-local function | [line 54](../../service/src/worker-server.ts#L54) |

</details>

<details>
<summary>service/src/workers.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isAbortError()` | module-local function | [line 61](../../service/src/workers.ts#L61) |
| `processJob()` | module-local function | [line 68](../../service/src/workers.ts#L68) |
| `processJobInner()` | module-local function | [line 87](../../service/src/workers.ts#L87) |

</details>

<details>
<summary>service/src/workspace-tools/coordination.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `workspaceRequestCoordinationScope()` | exported function | [line 15](../../service/src/workspace-tools/coordination.ts#L15) |

</details>

<details>
<summary>service/src/workspace-tools/import.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `WorkspaceImportError` | exported class | [line 25](../../service/src/workspace-tools/import.ts#L25) |
| `unauthorized()` | module-local function value | [line 66](../../service/src/workspace-tools/import.ts#L66) |
| `authorizeWorkspaceImportSource()` | exported function | [line 74](../../service/src/workspace-tools/import.ts#L74) |
| `workspaceImportGrantClaims()` | exported function | [line 104](../../service/src/workspace-tools/import.ts#L104) |
| `isPayloadFileRef()` | module-local function | [line 143](../../service/src/workspace-tools/import.ts#L143) |
| `createWorkspaceImportService()` | exported function | [line 148](../../service/src/workspace-tools/import.ts#L148) |

</details>

<details>
<summary>service/src/workspace-tools/outcome.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `getWorkspaceToolOutcome()` | exported function | [line 28](../../service/src/workspace-tools/outcome.ts#L28) |
| `recordWorkspaceToolRejection()` | exported function | [line 69](../../service/src/workspace-tools/outcome.ts#L69) |
| `workspaceToolOutcomeLogging()` | exported function value | [line 75](../../service/src/workspace-tools/outcome.ts#L75) |

</details>

<details>
<summary>service/src/workspace-tools/requests.ts — 12 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `WorkspaceRequestConflict` | exported class | [line 14](../../service/src/workspace-tools/requests.ts#L14) |
| `canonical()` | module-local function | [line 58](../../service/src/workspace-tools/requests.ts#L58) |
| `deadline()` | module-local function | [line 68](../../service/src/workspace-tools/requests.ts#L68) |
| `requestKey()` | module-local function | [line 78](../../service/src/workspace-tools/requests.ts#L78) |
| `RedisWorkspaceRequests` | exported class | [line 83](../../service/src/workspace-tools/requests.ts#L83) |
| `RedisWorkspaceRequests.submit()` | method | [line 94](../../service/src/workspace-tools/requests.ts#L94) |
| `RedisWorkspaceRequests.get()` | method | [line 159](../../service/src/workspace-tools/requests.ts#L159) |
| `RedisWorkspaceRequests.cancel()` | method | [line 165](../../service/src/workspace-tools/requests.ts#L165) |
| `RedisWorkspaceRequests.read()` | private method | [line 178](../../service/src/workspace-tools/requests.ts#L178) |
| `RedisWorkspaceRequests.status()` | private method | [line 191](../../service/src/workspace-tools/requests.ts#L191) |
| `RedisWorkspaceRequests.reconcile()` | method | [line 206](../../service/src/workspace-tools/requests.ts#L206) |
| `RedisWorkspaceRequests.advance()` | private method | [line 213](../../service/src/workspace-tools/requests.ts#L213) |

</details>

<details>
<summary>service/src/workspace-tools/router.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `asyncRoute()` | module-local function | [line 47](../../service/src/workspace-tools/router.ts#L47) |
| `bridgeStoreStatus()` | exported function | [line 53](../../service/src/workspace-tools/router.ts#L53) |
| `createWorkspaceToolsRouter()` | exported function | [line 66](../../service/src/workspace-tools/router.ts#L66) |

</details>

## api/src

<details>
<summary>api/src/api/lifecycle.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `getMicrovmRunContext()` | exported function | [line 30](../../api/src/api/lifecycle.ts#L30) |
| `resetMicrovmRunContextForTests()` | exported function | [line 34](../../api/src/api/lifecycle.ts#L34) |
| `applyRunHook()` | exported function | [line 41](../../api/src/api/lifecycle.ts#L41) |
| `ackHook()` | module-local function | [line 77](../../api/src/api/lifecycle.ts#L77) |

</details>

<details>
<summary>api/src/api/v2.ts — 15 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `deduplicateFilesByDestination()` | exported function | [line 57](../../api/src/api/v2.ts#L57) |
| `existingDestinationConflictMessage()` | module-local function | [line 82](../../api/src/api/v2.ts#L82) |
| `validateExecuteFile()` | module-local function | [line 88](../../api/src/api/v2.ts#L88) |
| `validateExecuteFiles()` | exported function | [line 146](../../api/src/api/v2.ts#L146) |
| `validateExecuteArguments()` | exported function | [line 166](../../api/src/api/v2.ts#L166) |
| `sanitizeEnvVars()` | exported function | [line 202](../../api/src/api/v2.ts#L202) |
| `tokenFromBodyOrHeader()` | exported function | [line 225](../../api/src/api/v2.ts#L225) |
| `authorizeToolCallSocket()` | exported function | [line 235](../../api/src/api/v2.ts#L235) |
| `getJob()` | module-local function | [line 284](../../api/src/api/v2.ts#L284) |
| `validateConstraints()` | module-local function | [line 397](../../api/src/api/v2.ts#L397) |
| `manifestErrorStatus()` | module-local function | [line 429](../../api/src/api/v2.ts#L429) |
| `bindSessionFromHeader()` | module-local function | [line 764](../../api/src/api/v2.ts#L764) |
| `requireHostedAppTarget()` | module-local function | [line 819](../../api/src/api/v2.ts#L819) |
| `hostedAppFailure()` | module-local function | [line 830](../../api/src/api/v2.ts#L830) |
| `requireSessionInputDeliveryTarget()` | module-local function | [line 898](../../api/src/api/v2.ts#L898) |

</details>

<details>
<summary>api/src/cleanup-metrics.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `readCleanupResources()` | exported function | [line 61](../../api/src/cleanup-metrics.ts#L61) |
| `recordCleanupResources()` | exported function | [line 135](../../api/src/cleanup-metrics.ts#L135) |

</details>

<details>
<summary>api/src/config.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `parseLimitOverrides()` | module-local function | [line 3](../../api/src/config.ts#L3) |
| `safeInt()` | exported function | [line 18](../../api/src/config.ts#L18) |
| `cleanDirectory()` | module-local function | [line 32](../../api/src/config.ts#L32) |
| `legacyPackagesDirectory()` | exported function | [line 38](../../api/src/config.ts#L38) |

</details>

<details>
<summary>api/src/delivery.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `reconcileArtifactDelivery()` | exported function | [line 15](../../api/src/delivery.ts#L15) |

</details>

<details>
<summary>api/src/execution-manifest-request.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isPayloadFileRef()` | module-local function | [line 23](../../api/src/execution-manifest-request.ts#L23) |
| `fileKey()` | module-local function | [line 32](../../api/src/execution-manifest-request.ts#L32) |
| `stringArraysEqual()` | module-local function | [line 36](../../api/src/execution-manifest-request.ts#L36) |
| `assertManifestBodyHashMatches()` | module-local function | [line 45](../../api/src/execution-manifest-request.ts#L45) |
| `collectExecuteRequestInputFiles()` | exported function | [line 83](../../api/src/execution-manifest-request.ts#L83) |
| `assertManifestMatchesExecuteRequest()` | exported function | [line 113](../../api/src/execution-manifest-request.ts#L113) |
| `verifyExecuteRequestManifest()` | exported function | [line 148](../../api/src/execution-manifest-request.ts#L148) |

</details>

<details>
<summary>api/src/execution-manifest.ts — 23 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `ExecutionManifestError` | exported class | [line 16](../../api/src/execution-manifest.ts#L16) |
| `base64UrlEncode()` | module-local function | [line 83](../../api/src/execution-manifest.ts#L83) |
| `base64UrlDecode()` | module-local function | [line 87](../../api/src/execution-manifest.ts#L87) |
| `canonicalJson()` | module-local function | [line 99](../../api/src/execution-manifest.ts#L99) |
| `bodyForManifestDigest()` | module-local function | [line 124](../../api/src/execution-manifest.ts#L124) |
| `executionManifestBodySha256()` | exported function | [line 130](../../api/src/execution-manifest.ts#L130) |
| `hmacSha256()` | module-local function | [line 135](../../api/src/execution-manifest.ts#L135) |
| `normalizeKeyMaterial()` | module-local function | [line 139](../../api/src/execution-manifest.ts#L139) |
| `privateKeyFromEnv()` | module-local function | [line 143](../../api/src/execution-manifest.ts#L143) |
| `publicKeyFromEnv()` | module-local function | [line 153](../../api/src/execution-manifest.ts#L153) |
| `ed25519Sign()` | module-local function | [line 163](../../api/src/execution-manifest.ts#L163) |
| `ed25519Verify()` | module-local function | [line 167](../../api/src/execution-manifest.ts#L167) |
| `validateClaimsShape()` | module-local function | [line 171](../../api/src/execution-manifest.ts#L171) |
| `payloadForClaims()` | module-local function | [line 237](../../api/src/execution-manifest.ts#L237) |
| `encodeSignedManifest()` | module-local function | [line 242](../../api/src/execution-manifest.ts#L242) |
| `decodeSignedManifest()` | module-local function | [line 246](../../api/src/execution-manifest.ts#L246) |
| `assertManifestTimeWindow()` | module-local function | [line 277](../../api/src/execution-manifest.ts#L277) |
| `signExecutionManifest()` | exported function | [line 291](../../api/src/execution-manifest.ts#L291) |
| `signExecutionManifestWithPrivateKey()` | exported function | [line 300](../../api/src/execution-manifest.ts#L300) |
| `signExecutionManifestWithKey()` | exported function | [line 309](../../api/src/execution-manifest.ts#L309) |
| `verifyExecutionManifest()` | exported function | [line 319](../../api/src/execution-manifest.ts#L319) |
| `verifyExecutionManifestWithPublicKey()` | exported function | [line 337](../../api/src/execution-manifest.ts#L337) |
| `verifyExecutionManifestWithKey()` | exported function | [line 354](../../api/src/execution-manifest.ts#L354) |

</details>

<details>
<summary>api/src/hosted-app.ts — 27 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `execFileAsync()` | module-local function | [line 17](../../api/src/hosted-app.ts#L17) |
| `HostedAppError` | exported class | [line 81](../../api/src/hosted-app.ts#L81) |
| `prepareHostedAppRuntimeWorkspace()` | exported function | [line 127](../../api/src/hosted-app.ts#L127) |
| `byteLength()` | module-local function | [line 162](../../api/src/hosted-app.ts#L162) |
| `isPlainObject()` | module-local function | [line 166](../../api/src/hosted-app.ts#L166) |
| `normalizeHostedAppRequest()` | module-local function | [line 172](../../api/src/hosted-app.ts#L172) |
| `canonicalSpecKey()` | module-local function | [line 290](../../api/src/hosted-app.ts#L290) |
| `isInside()` | module-local function | [line 298](../../api/src/hosted-app.ts#L298) |
| `resolveWorkspacePaths()` | module-local function | [line 303](../../api/src/hosted-app.ts#L303) |
| `appendBounded()` | module-local function | [line 337](../../api/src/hosted-app.ts#L337) |
| `commandSucceeds()` | module-local function | [line 344](../../api/src/hosted-app.ts#L344) |
| `installHostedAppNetworkGuard()` | exported function | [line 359](../../api/src/hosted-app.ts#L359) |
| `prepareHostedAppCgroup()` | exported function | [line 385](../../api/src/hosted-app.ts#L385) |
| `killHostedAppCgroup()` | exported function | [line 401](../../api/src/hosted-app.ts#L401) |
| `probeHostedAppPort()` | exported function | [line 422](../../api/src/hosted-app.ts#L422) |
| `killHostedAppProcessGroup()` | module-local function | [line 439](../../api/src/hosted-app.ts#L439) |
| `publicStatus()` | module-local function | [line 447](../../api/src/hosted-app.ts#L447) |
| `HostedAppSupervisor` | exported class | [line 451](../../api/src/hosted-app.ts#L451) |
| `HostedAppSupervisor.status()` | method | [line 470](../../api/src/hosted-app.ts#L470) |
| `HostedAppSupervisor.start()` | method | [line 474](../../api/src/hosted-app.ts#L474) |
| `HostedAppSupervisor.stop()` | method | [line 478](../../api/src/hosted-app.ts#L478) |
| `HostedAppSupervisor.shutdown()` | method | [line 482](../../api/src/hosted-app.ts#L482) |
| `HostedAppSupervisor.withQuiescedWorkspace()` | method | [line 486](../../api/src/hosted-app.ts#L486) |
| `HostedAppSupervisor.serialize()` | private method | [line 516](../../api/src/hosted-app.ts#L516) |
| `HostedAppSupervisor.startImpl()` | private method | [line 528](../../api/src/hosted-app.ts#L528) |
| `HostedAppSupervisor.stopImpl()` | private method | [line 736](../../api/src/hosted-app.ts#L736) |
| `validateHostedAppStartup()` | exported function | [line 798](../../api/src/hosted-app.ts#L798) |

</details>

<details>
<summary>api/src/http-input-cache.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `validMetadata()` | module-local function | [line 11](../../api/src/http-input-cache.ts#L11) |
| `tarHeader()` | module-local function | [line 20](../../api/src/http-input-cache.ts#L20) |
| `fillCache()` | module-local function | [line 35](../../api/src/http-input-cache.ts#L35) |
| `waitForFill()` | module-local function | [line 76](../../api/src/http-input-cache.ts#L76) |
| `fetchCachedHttpInput()` | exported function | [line 98](../../api/src/http-input-cache.ts#L98) |

</details>

<details>
<summary>api/src/index.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `main()` | module-local function | [line 68](../../api/src/index.ts#L68) |

</details>

<details>
<summary>api/src/internal-service-auth.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `configuredToken()` | module-local function | [line 4](../../api/src/internal-service-auth.ts#L4) |
| `internalServiceHeaders()` | exported function | [line 8](../../api/src/internal-service-auth.ts#L8) |

</details>

<details>
<summary>api/src/job.ts — 70 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `InputAuthorizationError` | module-local class | [line 75](../../api/src/job.ts#L75) |
| `toNodeReadable()` | module-local function | [line 87](../../api/src/job.ts#L87) |
| `aggregateBashExtras()` | exported function | [line 101](../../api/src/job.ts#L101) |
| `rememberPreferredNodeModules()` | module-local function | [line 147](../../api/src/job.ts#L147) |
| `errorCode()` | module-local function | [line 159](../../api/src/job.ts#L159) |
| `ensureNodeModulesSymlink()` | exported function | [line 165](../../api/src/job.ts#L165) |
| `resolveInputDestination()` | exported function | [line 193](../../api/src/job.ts#L193) |
| `isNormalizedObjectForSession()` | exported function | [line 203](../../api/src/job.ts#L203) |
| `mapWithConcurrency()` | exported function | [line 226](../../api/src/job.ts#L226) |
| `mimeTypeFor()` | exported function | [line 376](../../api/src/job.ts#L376) |
| `isHiddenDirectory()` | exported function | [line 390](../../api/src/job.ts#L390) |
| `inputsLiveUnder()` | exported function | [line 407](../../api/src/job.ts#L407) |
| `markerConflictsWithExplicitFile()` | exported function | [line 427](../../api/src/job.ts#L427) |
| `mergeDelimitedEnvEntries()` | module-local function | [line 440](../../api/src/job.ts#L440) |
| `collectDelimitedEnvEntries()` | module-local function | [line 455](../../api/src/job.ts#L455) |
| `prependDelimitedEnvEntries()` | module-local function | [line 469](../../api/src/job.ts#L469) |
| `filterExtraEnvVars()` | exported function | [line 520](../../api/src/job.ts#L520) |
| `isSupportedOutputFilename()` | module-local function | [line 557](../../api/src/job.ts#L557) |
| `SessionWorkspaceDirtyError` | exported class | [line 644](../../api/src/job.ts#L644) |
| `acquireJobIdentity()` | module-local function | [line 681](../../api/src/job.ts#L681) |
| `releaseJobIdentity()` | module-local function | [line 690](../../api/src/job.ts#L690) |
| `Job` | exported class | [line 696](../../api/src/job.ts#L696) |
| `Job.markSessionDirty()` | method | [line 798](../../api/src/job.ts#L798) |
| `Job.computeFileHash()` | method | [line 804](../../api/src/job.ts#L804) |
| `Job.isOutputCapFull()` | private method | [line 833](../../api/src/job.ts#L833) |
| `Job.sandboxIdentity()` | private method | [line 837](../../api/src/job.ts#L837) |
| `Job.applySandboxFilePermissions()` | private method | [line 841](../../api/src/job.ts#L841) |
| `Job.ensureDirNoFollow()` | private method | [line 866](../../api/src/job.ts#L866) |
| `Job.secureAncestors()` | private method | [line 877](../../api/src/job.ts#L877) |
| `Job.reserveInputDestination()` | private method | [line 912](../../api/src/job.ts#L912) |
| `Job.prime()` | method | [line 935](../../api/src/job.ts#L935) |
| `Job.primeInputFile()` | private method | [line 1071](../../api/src/job.ts#L1071) |
| `Job.reusePrimedInput()` | private method | [line 1098](../../api/src/job.ts#L1098) |
| `Job.fileEgressBaseUrl()` | private method | [line 1141](../../api/src/job.ts#L1141) |
| `Job.fileEgressHeaders()` | private method | [line 1145](../../api/src/job.ts#L1145) |
| `Job.autoLoadDirkeep()` | private method | [line 1161](../../api/src/job.ts#L1161) |
| `Job.isLegacyGatewayDenial()` | private method | [line 1193](../../api/src/job.ts#L1193) |
| `Job.fetchSessionMarkers()` | private method | [line 1207](../../api/src/job.ts#L1207) |
| `Job.tryRegisterInheritedMarker()` | private method | [line 1261](../../api/src/job.ts#L1261) |
| `Job.downloadAndWriteFile()` | method | [line 1287](../../api/src/job.ts#L1287) |
| `Job.prepareInputManifest()` | private method | [line 1421](../../api/src/job.ts#L1421) |
| `Job.fetchInputObject()` | private method | [line 1461](../../api/src/job.ts#L1461) |
| `Job.inputIdentity()` | private method | [line 1508](../../api/src/job.ts#L1508) |
| `Job.buildDownloadUrl()` | private method | [line 1517](../../api/src/job.ts#L1517) |
| `Job.streamToDisk()` | private method | [line 1526](../../api/src/job.ts#L1526) |
| `Job.writeFile()` | method | [line 1562](../../api/src/job.ts#L1562) |
| `Job.safeCall()` | method | [line 1610](../../api/src/job.ts#L1610) |
| `Job.execute()` | method | [line 1655](../../api/src/job.ts#L1655) |
| `Job.handleSessionFiles()` | private method | [line 1717](../../api/src/job.ts#L1717) |
| `Job.recordArtifactTruncation()` | private method | [line 1772](../../api/src/job.ts#L1772) |
| `Job.classifyDirent()` | private method | [line 1791](../../api/src/job.ts#L1791) |
| `Job.handleEmptyDirectory()` | private method | [line 1822](../../api/src/job.ts#L1822) |
| `Job.handleInlineUserDirkeep()` | private method | [line 1855](../../api/src/job.ts#L1855) |
| `Job.inlineKeepVanished()` | private method | [line 1879](../../api/src/job.ts#L1879) |
| `Job.handleInheritedDirkeep()` | private method | [line 1898](../../api/src/job.ts#L1898) |
| `Job.didInheritedKeepChange()` | private method | [line 1935](../../api/src/job.ts#L1935) |
| `Job.echoInheritedKeep()` | private method | [line 1950](../../api/src/job.ts#L1950) |
| `Job.createDirkeepMarker()` | private method | [line 1977](../../api/src/job.ts#L1977) |
| `Job.tryEchoUnchangedInput()` | private method | [line 2027](../../api/src/job.ts#L2027) |
| `Job.handleRegularFile()` | private method | [line 2071](../../api/src/job.ts#L2071) |
| `Job.walkSubdirectory()` | private method | [line 2221](../../api/src/job.ts#L2221) |
| `Job.findTruncatedArtifact()` | private method | [line 2238](../../api/src/job.ts#L2238) |
| `Job.walkDir()` | private method | [line 2401](../../api/src/job.ts#L2401) |
| `Job.getGeneratedFileIds()` | method | [line 2554](../../api/src/job.ts#L2554) |
| `Job.uploadGeneratedFiles()` | method | [line 2579](../../api/src/job.ts#L2579) |
| `Job.uploadOneFile()` | private method | [line 2628](../../api/src/job.ts#L2628) |
| `Job.cleanup()` | method | [line 2718](../../api/src/job.ts#L2718) |
| `abortReason()` | module-local function | [line 2782](../../api/src/job.ts#L2782) |
| `throwIfAborted()` | module-local function | [line 2788](../../api/src/job.ts#L2788) |
| `sleep()` | module-local function | [line 2792](../../api/src/job.ts#L2792) |

</details>

<details>
<summary>api/src/metrics.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `routeLabel()` | module-local function | [line 52](../../api/src/metrics.ts#L52) |
| `httpMetricsMiddleware()` | exported function | [line 61](../../api/src/metrics.ts#L61) |
| `recordSandboxExecution()` | exported function | [line 89](../../api/src/metrics.ts#L89) |
| `metricsHandler()` | exported function | [line 99](../../api/src/metrics.ts#L99) |

</details>

<details>
<summary>api/src/nsjail-setup-gate.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `createNsJailSetupGate()` | exported function | [line 86](../../api/src/nsjail-setup-gate.ts#L86) |

</details>

<details>
<summary>api/src/nsjail.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `readBaseConfig()` | module-local function | [line 202](../../api/src/nsjail.ts#L202) |
| `renderJobConfigOverlay()` | exported function | [line 216](../../api/src/nsjail.ts#L216) |
| `execute()` | exported function | [line 252](../../api/src/nsjail.ts#L252) |
| `buildArgs()` | exported function | [line 672](../../api/src/nsjail.ts#L672) |

</details>

<details>
<summary>api/src/pipe-process.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `endpoints()` | module-local function | [line 8](../../api/src/pipe-process.ts#L8) |
| `close()` | module-local function | [line 12](../../api/src/pipe-process.ts#L12) |
| `readable()` | module-local function | [line 13](../../api/src/pipe-process.ts#L13) |
| `writable()` | module-local function | [line 19](../../api/src/pipe-process.ts#L19) |
| `spawnPipeProcess()` | exported function | [line 41](../../api/src/pipe-process.ts#L41) |
| `toolCallPipes()` | exported function | [line 97](../../api/src/pipe-process.ts#L97) |

</details>

<details>
<summary>api/src/runtime.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `computeSingleLimit()` | module-local function | [line 29](../../api/src/runtime.ts#L29) |
| `computeAllLimits()` | module-local function | [line 41](../../api/src/runtime.ts#L41) |
| `loadEnvVars()` | module-local function | [line 65](../../api/src/runtime.ts#L65) |
| `loadPackage()` | exported function | [line 82](../../api/src/runtime.ts#L82) |
| `getLatestRuntimeMatchingLanguageVersion()` | exported function | [line 135](../../api/src/runtime.ts#L135) |
| `getRuntimes()` | exported function | [line 148](../../api/src/runtime.ts#L148) |
| `loadPackages()` | exported function | [line 154](../../api/src/runtime.ts#L154) |

</details>

<details>
<summary>api/src/safe-error.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `errorField()` | module-local function | [line 15](../../api/src/safe-error.ts#L15) |
| `messageIncludes()` | module-local function | [line 21](../../api/src/safe-error.ts#L21) |
| `errorName()` | module-local function | [line 25](../../api/src/safe-error.ts#L25) |
| `classifySandboxSafeError()` | exported function | [line 31](../../api/src/safe-error.ts#L31) |

</details>

<details>
<summary>api/src/secure-startup.ts — 8 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `SandboxSecureStartupError` | exported class | [line 11](../../api/src/secure-startup.ts#L11) |
| `nonEmpty()` | module-local function | [line 18](../../api/src/secure-startup.ts#L18) |
| `defaultPort()` | module-local function | [line 22](../../api/src/secure-startup.ts#L22) |
| `hostPortFromUrl()` | module-local function | [line 28](../../api/src/secure-startup.ts#L28) |
| `gatewayHostPort()` | module-local function | [line 39](../../api/src/secure-startup.ts#L39) |
| `forwardTargetHostPort()` | module-local function | [line 48](../../api/src/secure-startup.ts#L48) |
| `forbiddenEnvNames()` | module-local function | [line 60](../../api/src/secure-startup.ts#L60) |
| `validateHardenedSandboxStartup()` | exported function | [line 75](../../api/src/secure-startup.ts#L75) |

</details>

<details>
<summary>api/src/session-checkpoint.ts — 11 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `SessionCheckpointError` | exported class | [line 41](../../api/src/session-checkpoint.ts#L41) |
| `currentUid()` | module-local function | [line 43](../../api/src/session-checkpoint.ts#L43) |
| `checkpointControlBytes()` | module-local function | [line 55](../../api/src/session-checkpoint.ts#L55) |
| `streamSessionCheckpoint()` | exported function | [line 87](../../api/src/session-checkpoint.ts#L87) |
| `errorCode()` | module-local function | [line 208](../../api/src/session-checkpoint.ts#L208) |
| `checkpointStreamLimit()` | module-local function | [line 214](../../api/src/session-checkpoint.ts#L214) |
| `restoreSessionCheckpoint()` | exported function | [line 233](../../api/src/session-checkpoint.ts#L233) |
| `isSessionMetaSnapshot()` | module-local function | [line 383](../../api/src/session-checkpoint.ts#L383) |
| `readRestoredMeta()` | module-local function | [line 410](../../api/src/session-checkpoint.ts#L410) |
| `applyOwnership()` | module-local function | [line 477](../../api/src/session-checkpoint.ts#L477) |
| `chownRecursive()` | module-local function | [line 492](../../api/src/session-checkpoint.ts#L492) |

</details>

<details>
<summary>api/src/session-inputs.ts — 16 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `resolveSessionInputCacheDir()` | exported function | [line 68](../../api/src/session-inputs.ts#L68) |
| `writeAllToHandle()` | exported function | [line 110](../../api/src/session-inputs.ts#L110) |
| `inputCacheKey()` | exported function | [line 164](../../api/src/session-inputs.ts#L164) |
| `parseCachedInputMeta()` | module-local function | [line 171](../../api/src/session-inputs.ts#L171) |
| `hasCachedInput()` | exported function | [line 189](../../api/src/session-inputs.ts#L189) |
| `openCachedInput()` | exported function | [line 201](../../api/src/session-inputs.ts#L201) |
| `cachedInputResponse()` | exported function | [line 265](../../api/src/session-inputs.ts#L265) |
| `tarString()` | module-local function | [line 276](../../api/src/session-inputs.ts#L276) |
| `tarOctal()` | module-local function | [line 282](../../api/src/session-inputs.ts#L282) |
| `validateTarChecksum()` | module-local function | [line 288](../../api/src/session-inputs.ts#L288) |
| `extractInputArchive()` | module-local function | [line 302](../../api/src/session-inputs.ts#L302) |
| `isNoSpaceError()` | module-local function | [line 497](../../api/src/session-inputs.ts#L497) |
| `cleanupStaleInputStaging()` | module-local function | [line 506](../../api/src/session-inputs.ts#L506) |
| `storeCachedInputsOnce()` | module-local function | [line 528](../../api/src/session-inputs.ts#L528) |
| `storeCachedInputs()` | exported function | [line 612](../../api/src/session-inputs.ts#L612) |
| `pruneInputCache()` | exported function | [line 636](../../api/src/session-inputs.ts#L636) |

</details>

<details>
<summary>api/src/session-workspace.ts — 23 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `SessionWorkspaceBindingError` | exported class | [line 64](../../api/src/session-workspace.ts#L64) |
| `parseSessionBinding()` | exported function | [line 79](../../api/src/session-workspace.ts#L79) |
| `parseSessionBindingFromHeader()` | exported function | [line 101](../../api/src/session-workspace.ts#L101) |
| `SessionWorkspace` | exported class | [line 116](../../api/src/session-workspace.ts#L116) |
| `SessionWorkspace.acquire()` | method | [line 143](../../api/src/session-workspace.ts#L143) |
| `SessionWorkspace.ownership()` | method | [line 158](../../api/src/session-workspace.ts#L158) |
| `SessionWorkspace.isSurfaced()` | method | [line 163](../../api/src/session-workspace.ts#L163) |
| `SessionWorkspace.markSurfaced()` | method | [line 167](../../api/src/session-workspace.ts#L167) |
| `SessionWorkspace.forget()` | method | [line 171](../../api/src/session-workspace.ts#L171) |
| `SessionWorkspace.primedInputId()` | method | [line 177](../../api/src/session-workspace.ts#L177) |
| `SessionWorkspace.isPrimedInput()` | method | [line 186](../../api/src/session-workspace.ts#L186) |
| `SessionWorkspace.isPrimedReadOnly()` | method | [line 192](../../api/src/session-workspace.ts#L192) |
| `SessionWorkspace.markPrimed()` | method | [line 196](../../api/src/session-workspace.ts#L196) |
| `SessionWorkspace.forgetPrimed()` | method | [line 206](../../api/src/session-workspace.ts#L206) |
| `SessionWorkspace.markDirty()` | method | [line 211](../../api/src/session-workspace.ts#L211) |
| `SessionWorkspace.primedHash()` | method | [line 225](../../api/src/session-workspace.ts#L225) |
| `SessionWorkspace.snapshotMeta()` | method | [line 231](../../api/src/session-workspace.ts#L231) |
| `SessionWorkspace.loadMeta()` | method | [line 242](../../api/src/session-workspace.ts#L242) |
| `SessionWorkspace.reset()` | method | [line 260](../../api/src/session-workspace.ts#L260) |
| `bindSessionWorkspace()` | exported function | [line 290](../../api/src/session-workspace.ts#L290) |
| `getBoundSessionWorkspace()` | exported function | [line 306](../../api/src/session-workspace.ts#L306) |
| `unbindSessionWorkspace()` | exported function | [line 311](../../api/src/session-workspace.ts#L311) |
| `resetSessionWorkspaceStateForTests()` | exported function | [line 317](../../api/src/session-workspace.ts#L317) |

</details>

<details>
<summary>api/src/tool-call-pipe-broker.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `serveToolCallPipe()` | exported function | [line 12](../../api/src/tool-call-pipe-broker.ts#L12) |

</details>

<details>
<summary>api/src/validation.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isDirkeep()` | exported function | [line 19](../../api/src/validation.ts#L19) |
| `hasRunnableSource()` | exported function | [line 34](../../api/src/validation.ts#L34) |
| `ValidationError` | exported class | [line 47](../../api/src/validation.ts#L47) |
| `checkPathShape()` | exported function | [line 55](../../api/src/validation.ts#L55) |
| `isValidPathShape()` | exported function | [line 67](../../api/src/validation.ts#L67) |
| `validateFilePath()` | exported function | [line 71](../../api/src/validation.ts#L71) |
| `isValidFilePath()` | exported function | [line 115](../../api/src/validation.ts#L115) |

</details>

<details>
<summary>api/src/warmup.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `processGroupExists()` | module-local function | [line 9](../../api/src/warmup.ts#L9) |
| `waitForWarmupReap()` | module-local function | [line 22](../../api/src/warmup.ts#L22) |
| `startWarmupCommand()` | exported function | [line 58](../../api/src/warmup.ts#L58) |

</details>

<details>
<summary>api/src/workspace-command.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `WorkspaceCommandRequestError` | exported class | [line 36](../../api/src/workspace-command.ts#L36) |
| `safePortablePath()` | module-local function | [line 49](../../api/src/workspace-command.ts#L49) |
| `isWithin()` | module-local function | [line 62](../../api/src/workspace-command.ts#L62) |
| `integerInRange()` | module-local function | [line 67](../../api/src/workspace-command.ts#L67) |
| `hasWorkspaceCommandToken()` | exported function | [line 71](../../api/src/workspace-command.ts#L71) |
| `validateBody()` | module-local function | [line 84](../../api/src/workspace-command.ts#L84) |
| `takeUtf8()` | module-local function | [line 119](../../api/src/workspace-command.ts#L119) |
| `boundedResult()` | module-local function | [line 130](../../api/src/workspace-command.ts#L130) |
| `executeWorkspaceCommand()` | exported function | [line 144](../../api/src/workspace-command.ts#L144) |

</details>

<details>
<summary>api/src/workspace-isolation.ts — 41 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `SandboxWorkspaceIsolationError` | exported class | [line 28](../../api/src/workspace-isolation.ts#L28) |
| `errorCode()` | module-local function | [line 58](../../api/src/workspace-isolation.ts#L58) |
| `currentUid()` | module-local function | [line 64](../../api/src/workspace-isolation.ts#L64) |
| `createWorkspaceId()` | exported function | [line 68](../../api/src/workspace-isolation.ts#L68) |
| `workspaceIsolationConfigErrors()` | exported function | [line 72](../../api/src/workspace-isolation.ts#L72) |
| `workspaceOwnershipCapabilityErrors()` | exported function | [line 98](../../api/src/workspace-isolation.ts#L98) |
| `assertWorkspaceOwnershipCapability()` | exported function | [line 103](../../api/src/workspace-isolation.ts#L103) |
| `compatibilityModeForSkippedChown()` | exported function | [line 110](../../api/src/workspace-isolation.ts#L110) |
| `quarantineModeForUid()` | exported function | [line 115](../../api/src/workspace-isolation.ts#L115) |
| `assertWorkspaceIsolationConfig()` | exported function | [line 119](../../api/src/workspace-isolation.ts#L119) |
| `SandboxJobUidPool` | exported class | [line 126](../../api/src/workspace-isolation.ts#L126) |
| `SandboxJobUidPool.acquire()` | method | [line 149](../../api/src/workspace-isolation.ts#L149) |
| `SandboxJobUidPool.release()` | method | [line 161](../../api/src/workspace-isolation.ts#L161) |
| `SandboxJobUidPool.activeCount()` | method | [line 167](../../api/src/workspace-isolation.ts#L167) |
| `SandboxJobUidPool.availableCount()` | method | [line 171](../../api/src/workspace-isolation.ts#L171) |
| `createSandboxJobUidPoolFromConfig()` | exported function | [line 176](../../api/src/workspace-isolation.ts#L176) |
| `assertSafeWorkspaceRootPath()` | module-local function | [line 196](../../api/src/workspace-isolation.ts#L196) |
| `chownOrThrow()` | module-local function | [line 211](../../api/src/workspace-isolation.ts#L211) |
| `applySandboxPathPermissions()` | exported function | [line 223](../../api/src/workspace-isolation.ts#L223) |
| `chownHandleOrThrow()` | module-local function | [line 233](../../api/src/workspace-isolation.ts#L233) |
| `applySandboxPathPermissionsNoFollow()` | exported function | [line 250](../../api/src/workspace-isolation.ts#L250) |
| `applyReadOnlyInputPermissions()` | exported function | [line 284](../../api/src/workspace-isolation.ts#L284) |
| `prepareWorkspaceRoot()` | exported function | [line 289](../../api/src/workspace-isolation.ts#L289) |
| `sandboxWorkspaceHealthProbeIdentity()` | module-local function | [line 313](../../api/src/workspace-isolation.ts#L313) |
| `checkSandboxWorkspaceHealth()` | exported function | [line 322](../../api/src/workspace-isolation.ts#L322) |
| `createSandboxWorkspace()` | exported function | [line 347](../../api/src/workspace-isolation.ts#L347) |
| `ensureSessionWorkspace()` | exported function | [line 377](../../api/src/workspace-isolation.ts#L377) |
| `resetSessionWorkspace()` | exported function | [line 401](../../api/src/workspace-isolation.ts#L401) |
| `quarantineWorkspace()` | module-local function | [line 415](../../api/src/workspace-isolation.ts#L415) |
| `cleanupSandboxWorkspace()` | exported function | [line 429](../../api/src/workspace-isolation.ts#L429) |
| `scheduleRetainedWorkspaceRetry()` | module-local function | [line 442](../../api/src/workspace-isolation.ts#L442) |
| `retainWorkspaceCleanupUntilRemoved()` | exported function | [line 453](../../api/src/workspace-isolation.ts#L453) |
| `retainedWorkspaceCleanupCount()` | exported function | [line 463](../../api/src/workspace-isolation.ts#L463) |
| `retryRetainedWorkspaceCleanups()` | exported function | [line 467](../../api/src/workspace-isolation.ts#L467) |
| `clearRetainedWorkspaceCleanupsForTest()` | exported function | [line 499](../../api/src/workspace-isolation.ts#L499) |
| `reapStaleWorkspaces()` | exported function | [line 507](../../api/src/workspace-isolation.ts#L507) |
| `assertNsJailConfigHasNoStaticUidMaps()` | exported function | [line 543](../../api/src/workspace-isolation.ts#L543) |
| `initializeSandboxWorkspaceIsolation()` | exported function | [line 552](../../api/src/workspace-isolation.ts#L552) |
| `startWorkspaceReaper()` | exported function | [line 561](../../api/src/workspace-isolation.ts#L561) |
| `fallbackSandboxIdentity()` | exported function | [line 577](../../api/src/workspace-isolation.ts#L577) |
| `ensureDirNoFollow()` | exported function | [line 600](../../api/src/workspace-isolation.ts#L600) |

</details>

## packages/code/src

<details>
<summary>packages/code/src/browser-enrollment-protocol.ts — 25 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `record()` | module-local function | [line 68](../../packages/code/src/browser-enrollment-protocol.ts#L68) |
| `keys()` | module-local function | [line 72](../../packages/code/src/browser-enrollment-protocol.ts#L72) |
| `isBrowserEnrollmentTimestamp()` | exported function | [line 76](../../packages/code/src/browser-enrollment-protocol.ts#L76) |
| `isBrowserEnrollmentToken()` | exported function | [line 82](../../packages/code/src/browser-enrollment-protocol.ts#L82) |
| `isBrowserEnrollmentSignature()` | exported function | [line 87](../../packages/code/src/browser-enrollment-protocol.ts#L87) |
| `isBrowserEnrollmentPublicKey()` | exported function | [line 92](../../packages/code/src/browser-enrollment-protocol.ts#L92) |
| `normalizeBrowserEnrollmentInstance()` | exported function | [line 102](../../packages/code/src/browser-enrollment-protocol.ts#L102) |
| `instance()` | module-local function | [line 114](../../packages/code/src/browser-enrollment-protocol.ts#L114) |
| `serverOrigin()` | module-local function | [line 122](../../packages/code/src/browser-enrollment-protocol.ts#L122) |
| `requestHash()` | module-local function | [line 132](../../packages/code/src/browser-enrollment-protocol.ts#L132) |
| `isBrowserEnrollmentRequest()` | exported function | [line 136](../../packages/code/src/browser-enrollment-protocol.ts#L136) |
| `canonicalBrowserEnrollmentRequest()` | exported function | [line 148](../../packages/code/src/browser-enrollment-protocol.ts#L148) |
| `hashBrowserEnrollmentRequest()` | exported function | [line 163](../../packages/code/src/browser-enrollment-protocol.ts#L163) |
| `isBrowserSetupProof()` | exported function | [line 167](../../packages/code/src/browser-enrollment-protocol.ts#L167) |
| `canonicalBrowserSetupProof()` | exported function | [line 174](../../packages/code/src/browser-enrollment-protocol.ts#L174) |
| `isBrowserEnrollmentRedemptionContract()` | exported function | [line 180](../../packages/code/src/browser-enrollment-protocol.ts#L180) |
| `isBrowserEnrollmentBinding()` | exported function | [line 187](../../packages/code/src/browser-enrollment-protocol.ts#L187) |
| `isBrowserEnrollmentApproval()` | exported function | [line 197](../../packages/code/src/browser-enrollment-protocol.ts#L197) |
| `isBrowserEnrollmentStatusRequest()` | exported function | [line 203](../../packages/code/src/browser-enrollment-protocol.ts#L203) |
| `isBrowserEnrollmentRedemption()` | exported function | [line 208](../../packages/code/src/browser-enrollment-protocol.ts#L208) |
| `canonicalBrowserEnrollmentRedemption()` | exported function | [line 214](../../packages/code/src/browser-enrollment-protocol.ts#L214) |
| `signBrowserSetupProof()` | exported function | [line 220](../../packages/code/src/browser-enrollment-protocol.ts#L220) |
| `verifyBrowserSetupProof()` | exported function | [line 224](../../packages/code/src/browser-enrollment-protocol.ts#L224) |
| `signBrowserEnrollmentRedemption()` | exported function | [line 233](../../packages/code/src/browser-enrollment-protocol.ts#L233) |
| `verifyBrowserEnrollmentRedemption()` | exported function | [line 237](../../packages/code/src/browser-enrollment-protocol.ts#L237) |

</details>

<details>
<summary>packages/code/src/browser-setup-cli.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `openSetupBrowser()` | exported function | [line 12](../../packages/code/src/browser-setup-cli.ts#L12) |
| `runBrowserSetupCommand()` | exported function | [line 25](../../packages/code/src/browser-setup-cli.ts#L25) |

</details>

<details>
<summary>packages/code/src/browser-setup.ts — 13 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `record()` | module-local function | [line 83](../../packages/code/src/browser-setup.ts#L83) |
| `setupInstanceUrl()` | exported function | [line 87](../../packages/code/src/browser-setup.ts#L87) |
| `browserSetupAttemptPath()` | exported function | [line 91](../../packages/code/src/browser-setup.ts#L91) |
| `browserSetupProtectedPaths()` | exported function | [line 95](../../packages/code/src/browser-setup.ts#L95) |
| `loadBrowserSetupAttempt()` | exported function | [line 104](../../packages/code/src/browser-setup.ts#L104) |
| `boundedJson()` | module-local function | [line 146](../../packages/code/src/browser-setup.ts#L146) |
| `requestJson()` | module-local function | [line 164](../../packages/code/src/browser-setup.ts#L164) |
| `machineBody()` | module-local function | [line 181](../../packages/code/src/browser-setup.ts#L181) |
| `parseStatus()` | module-local function | [line 200](../../packages/code/src/browser-setup.ts#L200) |
| `assertEmptyOrMatching()` | module-local function | [line 229](../../packages/code/src/browser-setup.ts#L229) |
| `sameEnrolledKey()` | module-local function | [line 237](../../packages/code/src/browser-setup.ts#L237) |
| `setupBrowserWorker()` | exported function | [line 243](../../packages/code/src/browser-setup.ts#L243) |
| `cancelBrowserSetup()` | exported function | [line 347](../../packages/code/src/browser-setup.ts#L347) |

</details>

<details>
<summary>packages/code/src/cli.ts — 14 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `workspaceSecurityIdentity()` | module-local function | [line 92](../../packages/code/src/cli.ts#L92) |
| `workspaceQuarantinePath()` | module-local function | [line 102](../../packages/code/src/cli.ts#L102) |
| `required()` | module-local function | [line 116](../../packages/code/src/cli.ts#L116) |
| `list()` | module-local function | [line 122](../../packages/code/src/cli.ts#L122) |
| `positiveInteger()` | module-local function | [line 131](../../packages/code/src/cli.ts#L131) |
| `option()` | module-local function | [line 161](../../packages/code/src/cli.ts#L161) |
| `nonEmpty()` | module-local function | [line 169](../../packages/code/src/cli.ts#L169) |
| `githubCredentials()` | module-local function | [line 173](../../packages/code/src/cli.ts#L173) |
| `defaultWorkspaceName()` | module-local function | [line 296](../../packages/code/src/cli.ts#L296) |
| `pair()` | module-local function | [line 307](../../packages/code/src/cli.ts#L307) |
| `relay()` | module-local function | [line 331](../../packages/code/src/cli.ts#L331) |
| `run()` | module-local function | [line 367](../../packages/code/src/cli.ts#L367) |
| `clearMutationQuarantine()` | module-local function | [line 1758](../../packages/code/src/cli.ts#L1758) |
| `main()` | module-local function | [line 1822](../../packages/code/src/cli.ts#L1822) |

</details>

<details>
<summary>packages/code/src/command-diagnostics.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `commandSetupFailureDiagnostic()` | exported function | [line 39](../../packages/code/src/command-diagnostics.ts#L39) |
| `commandFailureDiagnostic()` | exported function | [line 75](../../packages/code/src/command-diagnostics.ts#L75) |
| `readCommandFailureDiagnostic()` | exported function | [line 99](../../packages/code/src/command-diagnostics.ts#L99) |
| `commandFailureLogLine()` | exported function | [line 120](../../packages/code/src/command-diagnostics.ts#L120) |
| `commandFailureEvent()` | exported function | [line 124](../../packages/code/src/command-diagnostics.ts#L124) |

</details>

<details>
<summary>packages/code/src/credential-recovery.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `responsePayload()` | module-local function | [line 26](../../packages/code/src/credential-recovery.ts#L26) |
| `record()` | module-local function | [line 64](../../packages/code/src/credential-recovery.ts#L64) |
| `recoveryRequest()` | module-local function | [line 68](../../packages/code/src/credential-recovery.ts#L68) |
| `recoverWorkerCredential()` | exported function | [line 127](../../packages/code/src/credential-recovery.ts#L127) |

</details>

<details>
<summary>packages/code/src/dependency-snapshots.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `parseDependencySnapshot()` | exported function | [line 43](../../packages/code/src/dependency-snapshots.ts#L43) |
| `loadDependencySnapshot()` | exported function | [line 98](../../packages/code/src/dependency-snapshots.ts#L98) |
| `cloneFile()` | module-local function | [line 118](../../packages/code/src/dependency-snapshots.ts#L118) |
| `inside()` | module-local function | [line 170](../../packages/code/src/dependency-snapshots.ts#L170) |
| `removeTree()` | module-local function | [line 174](../../packages/code/src/dependency-snapshots.ts#L174) |
| `cloneTree()` | module-local function | [line 185](../../packages/code/src/dependency-snapshots.ts#L185) |
| `withDependencySnapshot()` | exported function | [line 310](../../packages/code/src/dependency-snapshots.ts#L310) |
| `restoreDependencySnapshot()` | exported function | [line 386](../../packages/code/src/dependency-snapshots.ts#L386) |
| `publishDependencySnapshot()` | exported function | [line 468](../../packages/code/src/dependency-snapshots.ts#L468) |

</details>

<details>
<summary>packages/code/src/edits.ts — 51 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `WorkspaceEditMatchError` | exported class | [line 72](../../packages/code/src/edits.ts#L72) |
| `WorkspaceEditOutputLimitError` | exported class | [line 82](../../packages/code/src/edits.ts#L82) |
| `applyTextEdits()` | exported function | [line 100](../../packages/code/src/edits.ts#L100) |
| `findEditMatch()` | module-local function | [line 136](../../packages/code/src/edits.ts#L136) |
| `collectedMatches()` | module-local function | [line 150](../../packages/code/src/edits.ts#L150) |
| `appendReplacement()` | module-local function | [line 157](../../packages/code/src/edits.ts#L157) |
| `finishReplacement()` | module-local function | [line 166](../../packages/code/src/edits.ts#L166) |
| `collectMatch()` | module-local function | [line 173](../../packages/code/src/edits.ts#L173) |
| `resolve()` | module-local function | [line 201](../../packages/code/src/edits.ts#L201) |
| `findExact()` | module-local function | [line 220](../../packages/code/src/edits.ts#L220) |
| `LineIndex` | module-local class | [line 247](../../packages/code/src/edits.ts#L247) |
| `LineIndex.start()` | method | [line 261](../../packages/code/src/edits.ts#L261) |
| `LineIndex.next()` | method | [line 265](../../packages/code/src/edits.ts#L265) |
| `LineIndex.end()` | method | [line 269](../../packages/code/src/edits.ts#L269) |
| `LineIndex.text()` | method | [line 275](../../packages/code/src/edits.ts#L275) |
| `LineIndex.at()` | method | [line 279](../../packages/code/src/edits.ts#L279) |
| `neededLines()` | module-local function | [line 288](../../packages/code/src/edits.ts#L288) |
| `fileLineEnding()` | module-local function | [line 298](../../packages/code/src/edits.ts#L298) |
| `lineEndingAt()` | module-local function | [line 302](../../packages/code/src/edits.ts#L302) |
| `leadingWhitespace()` | module-local function | [line 306](../../packages/code/src/edits.ts#L306) |
| `commonIndent()` | module-local function | [line 310](../../packages/code/src/edits.ts#L310) |
| `withLineEnding()` | module-local function | [line 328](../../packages/code/src/edits.ts#L328) |
| `prefixTable()` | module-local function | [line 333](../../packages/code/src/edits.ts#L333) |
| `findLineWindows()` | module-local function | [line 348](../../packages/code/src/edits.ts#L348) |
| `stripIndent()` | module-local function | [line 409](../../packages/code/src/edits.ts#L409) |
| `reindent()` | module-local function | [line 417](../../packages/code/src/edits.ts#L417) |
| `findLineTrimmed()` | module-local function | [line 428](../../packages/code/src/edits.ts#L428) |
| `findIndentationFlexible()` | module-local function | [line 432](../../packages/code/src/edits.ts#L432) |
| `newlineCount()` | module-local function | [line 436](../../packages/code/src/edits.ts#L436) |
| `hasBoundaryWhitespace()` | module-local function | [line 443](../../packages/code/src/edits.ts#L443) |
| `peelBoundaryWhitespace()` | module-local function | [line 459](../../packages/code/src/edits.ts#L459) |
| `findWhitespaceNormalized()` | module-local function | [line 501](../../packages/code/src/edits.ts#L501) |
| `replaceRanges()` | module-local function | [line 575](../../packages/code/src/edits.ts#L575) |
| `lineNumberAt()` | module-local function | [line 592](../../packages/code/src/edits.ts#L592) |
| `formatLineList()` | module-local function | [line 600](../../packages/code/src/edits.ts#L600) |
| `describeAmbiguous()` | module-local function | [line 606](../../packages/code/src/edits.ts#L606) |
| `quote()` | module-local function | [line 621](../../packages/code/src/edits.ts#L621) |
| `snippet()` | module-local function | [line 628](../../packages/code/src/edits.ts#L628) |
| `describeMissing()` | module-local function | [line 636](../../packages/code/src/edits.ts#L636) |
| `closestRegion()` | module-local function | [line 662](../../packages/code/src/edits.ts#L662) |
| `excerptMark()` | module-local function | [line 698](../../packages/code/src/edits.ts#L698) |
| `shortenLine()` | module-local function | [line 704](../../packages/code/src/edits.ts#L704) |
| `currentTextExcerpt()` | module-local function | [line 718](../../packages/code/src/edits.ts#L718) |
| `describeMissingReason()` | module-local function | [line 746](../../packages/code/src/edits.ts#L746) |
| `nearestLine()` | module-local function | [line 789](../../packages/code/src/edits.ts#L789) |
| `encodedBytes()` | module-local function | [line 827](../../packages/code/src/edits.ts#L827) |
| `failureText()` | module-local function | [line 832](../../packages/code/src/edits.ts#L832) |
| `grantExcerpts()` | module-local function | [line 840](../../packages/code/src/edits.ts#L840) |
| `shortenReason()` | module-local function | [line 862](../../packages/code/src/edits.ts#L862) |
| `fitsDiagnosticBounds()` | module-local function | [line 877](../../packages/code/src/edits.ts#L877) |
| `formatEditFailures()` | module-local function | [line 881](../../packages/code/src/edits.ts#L881) |

</details>

<details>
<summary>packages/code/src/environment-mount.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `inside()` | module-local function value | [line 9](../../packages/code/src/environment-mount.ts#L9) |
| `decode()` | module-local function value | [line 11](../../packages/code/src/environment-mount.ts#L11) |
| `createEnvironmentMountIsolation()` | exported function | [line 20](../../packages/code/src/environment-mount.ts#L20) |
| `assertEnvironmentMountIsolation()` | exported function | [line 91](../../packages/code/src/environment-mount.ts#L91) |
| `readEnvironmentMountTable()` | exported function | [line 99](../../packages/code/src/environment-mount.ts#L99) |

</details>

<details>
<summary>packages/code/src/environment-preparation.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `prepareCodeEnvironment()` | exported function | [line 45](../../packages/code/src/environment-preparation.ts#L45) |
| `prepareInLock()` | module-local function | [line 69](../../packages/code/src/environment-preparation.ts#L69) |
| `preparationKey()` | module-local function | [line 172](../../packages/code/src/environment-preparation.ts#L172) |

</details>

<details>
<summary>packages/code/src/environment-resources.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `parseEnvironmentResources()` | exported function | [line 40](../../packages/code/src/environment-resources.ts#L40) |
| `loadEnvironmentResource()` | exported function | [line 74](../../packages/code/src/environment-resources.ts#L74) |
| `assertEnvironmentResourcesStable()` | exported function | [line 103](../../packages/code/src/environment-resources.ts#L103) |
| `environmentResourceVariables()` | exported function | [line 114](../../packages/code/src/environment-resources.ts#L114) |
| `assertEnvironmentResourceSeparation()` | exported function | [line 125](../../packages/code/src/environment-resources.ts#L125) |
| `assertEnvironmentResourceIsolation()` | exported function | [line 150](../../packages/code/src/environment-resources.ts#L150) |

</details>

<details>
<summary>packages/code/src/environment.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `record()` | module-local function | [line 56](../../packages/code/src/environment.ts#L56) |
| `text()` | module-local function | [line 60](../../packages/code/src/environment.ts#L60) |
| `parseCodeEnvironment()` | exported function | [line 69](../../packages/code/src/environment.ts#L69) |
| `EnvironmentWorkspaceTools` | exported class | [line 193](../../packages/code/src/environment.ts#L193) |
| `EnvironmentWorkspaceTools.execute()` | method | [line 237](../../packages/code/src/environment.ts#L237) |
| `loadCodeEnvironment()` | exported function | [line 280](../../packages/code/src/environment.ts#L280) |
| `assertEnvironmentDefinitionsOutsideRoots()` | exported function | [line 355](../../packages/code/src/environment.ts#L355) |

</details>

<details>
<summary>packages/code/src/git-snapshot.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `childFd()` | module-local function | [line 19](../../packages/code/src/git-snapshot.ts#L19) |
| `withDirectory()` | module-local function | [line 50](../../packages/code/src/git-snapshot.ts#L50) |
| `textAt()` | module-local function | [line 72](../../packages/code/src/git-snapshot.ts#L72) |
| `alternatesAt()` | module-local function | [line 102](../../packages/code/src/git-snapshot.ts#L102) |
| `copyEntry()` | module-local function | [line 118](../../packages/code/src/git-snapshot.ts#L118) |
| `GitSourceSnapshot` | exported class | [line 174](../../packages/code/src/git-snapshot.ts#L174) |
| `GitSourceSnapshot.admit()` | method | [line 201](../../packages/code/src/git-snapshot.ts#L201) |
| `GitSourceSnapshot.validate()` | method | [line 263](../../packages/code/src/git-snapshot.ts#L263) |
| `GitSourceSnapshot.copyTo()` | method | [line 301](../../packages/code/src/git-snapshot.ts#L301) |

</details>

<details>
<summary>packages/code/src/github.ts — 31 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `InstallationChangedError` | module-local class | [line 59](../../packages/code/src/github.ts#L59) |
| `waitForShared()` | module-local function | [line 65](../../packages/code/src/github.ts#L65) |
| `repositoryName()` | module-local function | [line 86](../../packages/code/src/github.ts#L86) |
| `gitHubRepositoryForDirectory()` | exported function | [line 93](../../packages/code/src/github.ts#L93) |
| `admittedRepositoryEntry()` | module-local function | [line 149](../../packages/code/src/github.ts#L149) |
| `gitHubRepositoryForAdmittedDirectory()` | exported function | [line 168](../../packages/code/src/github.ts#L168) |
| `gitHubRepositoryForCommand()` | exported function | [line 176](../../packages/code/src/github.ts#L176) |
| `base64UrlJson()` | module-local function | [line 199](../../packages/code/src/github.ts#L199) |
| `assertPositiveIdentifier()` | module-local function | [line 203](../../packages/code/src/github.ts#L203) |
| `readPrivateKey()` | module-local function | [line 209](../../packages/code/src/github.ts#L209) |
| `createAppJwt()` | module-local function | [line 241](../../packages/code/src/github.ts#L241) |
| `GitHubAppCredentialProvider` | exported class | [line 258](../../packages/code/src/github.ts#L258) |
| `GitHubAppCredentialProvider.appJwt()` | private method | [line 308](../../packages/code/src/github.ts#L308) |
| `GitHubAppCredentialProvider.request()` | private method | [line 313](../../packages/code/src/github.ts#L313) |
| `GitHubAppCredentialProvider.resolveAppLogin()` | private method | [line 333](../../packages/code/src/github.ts#L333) |
| `GitHubAppCredentialProvider.resolveActor()` | private method | [line 376](../../packages/code/src/github.ts#L376) |
| `GitHubAppCredentialProvider.validate()` | method | [line 430](../../packages/code/src/github.ts#L430) |
| `GitHubAppCredentialProvider.resolveInstallationId()` | private method | [line 439](../../packages/code/src/github.ts#L439) |
| `GitHubAppCredentialProvider.waitForCredential()` | private method | [line 495](../../packages/code/src/github.ts#L495) |
| `GitHubAppCredentialProvider.getCredential()` | method | [line 517](../../packages/code/src/github.ts#L517) |
| `GitHubAppCredentialProvider.getCredentialAttempt()` | private method | [line 531](../../packages/code/src/github.ts#L531) |
| `StaticGitHubCredentialProvider` | exported class | [line 653](../../packages/code/src/github.ts#L653) |
| `StaticGitHubCredentialProvider.getCredential()` | method | [line 660](../../packages/code/src/github.ts#L660) |
| `gitHubCredentialEnvironment()` | exported function | [line 665](../../packages/code/src/github.ts#L665) |
| `gitHubCommandCredentialEnvironment()` | exported function | [line 676](../../packages/code/src/github.ts#L676) |
| `gitHubCliTokenEnvironmentName()` | exported function | [line 692](../../packages/code/src/github.ts#L692) |
| `gitHubApiHost()` | exported function | [line 696](../../packages/code/src/github.ts#L696) |
| `gitHubMaskedCredentialVariables()` | exported function | [line 700](../../packages/code/src/github.ts#L700) |
| `gitHubAuthenticationPolicyIdentity()` | exported function | [line 719](../../packages/code/src/github.ts#L719) |
| `normalizeGitHubHost()` | exported function | [line 744](../../packages/code/src/github.ts#L744) |
| `wrapGitHubCredentialCommand()` | exported function | [line 756](../../packages/code/src/github.ts#L756) |

</details>

<details>
<summary>packages/code/src/identity-mount.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `identityIsMountPoint()` | exported function | [line 9](../../packages/code/src/identity-mount.ts#L9) |
| `assertIdentityIsNotMountPoint()` | exported function | [line 30](../../packages/code/src/identity-mount.ts#L30) |

</details>

<details>
<summary>packages/code/src/identity.ts — 10 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `createBridgeIdentity()` | exported function | [line 41](../../packages/code/src/identity.ts#L41) |
| `canonicalBridgeRequest()` | module-local function | [line 49](../../packages/code/src/identity.ts#L49) |
| `signBridgeRequest()` | exported function | [line 61](../../packages/code/src/identity.ts#L61) |
| `verifyBridgeRequest()` | exported function | [line 70](../../packages/code/src/identity.ts#L70) |
| `canonicalBridgeRecoveryStart()` | module-local function | [line 87](../../packages/code/src/identity.ts#L87) |
| `signBridgeRecoveryStart()` | exported function | [line 98](../../packages/code/src/identity.ts#L98) |
| `verifyBridgeRecoveryStart()` | exported function | [line 107](../../packages/code/src/identity.ts#L107) |
| `canonicalBridgeRecovery()` | module-local function | [line 124](../../packages/code/src/identity.ts#L124) |
| `signBridgeRecovery()` | exported function | [line 136](../../packages/code/src/identity.ts#L136) |
| `verifyBridgeRecovery()` | exported function | [line 145](../../packages/code/src/identity.ts#L145) |

</details>

<details>
<summary>packages/code/src/instructions.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `readRepositoryInstructions()` | exported function | [line 14](../../packages/code/src/instructions.ts#L14) |

</details>

<details>
<summary>packages/code/src/lane-git.ts — 11 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `read()` | module-local function | [line 34](../../packages/code/src/lane-git.ts#L34) |
| `readLaneGit()` | exported function | [line 67](../../packages/code/src/lane-git.ts#L67) |
| `snapshotLaneGit()` | exported function | [line 87](../../packages/code/src/lane-git.ts#L87) |
| `absent()` | module-local function | [line 103](../../packages/code/src/lane-git.ts#L103) |
| `plain()` | module-local function | [line 112](../../packages/code/src/lane-git.ts#L112) |
| `treeIsLinkFree()` | module-local function | [line 126](../../packages/code/src/lane-git.ts#L126) |
| `storageIsOwn()` | module-local function | [line 156](../../packages/code/src/lane-git.ts#L156) |
| `ownsGitMetadata()` | exported function | [line 181](../../packages/code/src/lane-git.ts#L181) |
| `ownsLinkedWorktreeMetadata()` | exported function | [line 203](../../packages/code/src/lane-git.ts#L203) |
| `LaneGitWorkspaceTools` | exported class | [line 232](../../packages/code/src/lane-git.ts#L232) |
| `LaneGitWorkspaceTools.execute()` | method | [line 244](../../packages/code/src/lane-git.ts#L244) |

</details>

<details>
<summary>packages/code/src/linked-worktree-git-guard.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `systemGitExecutable()` | module-local function | [line 23](../../packages/code/src/linked-worktree-git-guard.ts#L23) |
| `writeLinkedWorktreeGitGuard()` | exported function | [line 39](../../packages/code/src/linked-worktree-git-guard.ts#L39) |

</details>

<details>
<summary>packages/code/src/linked-worktrees.ts — 25 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `linkedWorktreeWorkspaceId()` | exported function | [line 92](../../packages/code/src/linked-worktrees.ts#L92) |
| `rejected()` | module-local function | [line 96](../../packages/code/src/linked-worktrees.ts#L96) |
| `realDirectory()` | module-local function | [line 100](../../packages/code/src/linked-worktrees.ts#L100) |
| `safeSharedGitStorage()` | module-local function | [line 110](../../packages/code/src/linked-worktrees.ts#L110) |
| `readPointer()` | module-local function | [line 123](../../packages/code/src/linked-worktrees.ts#L123) |
| `canonicalOrUndefined()` | module-local function | [line 142](../../packages/code/src/linked-worktrees.ts#L142) |
| `singleLine()` | module-local function | [line 150](../../packages/code/src/linked-worktrees.ts#L150) |
| `verifyLinkedWorktree()` | exported function | [line 163](../../packages/code/src/linked-worktrees.ts#L163) |
| `publicResult()` | module-local function | [line 221](../../packages/code/src/linked-worktrees.ts#L221) |
| `LinkedWorktreeWorkspaceTools` | exported class | [line 231](../../packages/code/src/linked-worktrees.ts#L231) |
| `LinkedWorktreeWorkspaceTools.resolveLane()` | private method | [line 265](../../packages/code/src/linked-worktrees.ts#L265) |
| `LinkedWorktreeWorkspaceTools.release()` | private method | [line 293](../../packages/code/src/linked-worktrees.ts#L293) |
| `LinkedWorktreeWorkspaceTools.releaseIdleLanes()` | private method | [line 309](../../packages/code/src/linked-worktrees.ts#L309) |
| `LinkedWorktreeWorkspaceTools.fileExecutor()` | private method | [line 316](../../packages/code/src/linked-worktrees.ts#L316) |
| `LinkedWorktreeWorkspaceTools.registerCommandRoot()` | private method | [line 340](../../packages/code/src/linked-worktrees.ts#L340) |
| `LinkedWorktreeWorkspaceTools.lastUsed()` | method | [line 373](../../packages/code/src/linked-worktrees.ts#L373) |
| `LinkedWorktreeWorkspaceTools.checkoutActivity()` | method | [line 377](../../packages/code/src/linked-worktrees.ts#L377) |
| `LinkedWorktreeWorkspaceTools.whileIdle()` | method | [line 381](../../packages/code/src/linked-worktrees.ts#L381) |
| `LinkedWorktreeWorkspaceTools.touch()` | private method | [line 406](../../packages/code/src/linked-worktrees.ts#L406) |
| `LinkedWorktreeWorkspaceTools.tracked()` | private method | [line 415](../../packages/code/src/linked-worktrees.ts#L415) |
| `LinkedWorktreeWorkspaceTools.afterRetirement()` | private method | [line 438](../../packages/code/src/linked-worktrees.ts#L438) |
| `LinkedWorktreeWorkspaceTools.inCheckout()` | private method | [line 457](../../packages/code/src/linked-worktrees.ts#L457) |
| `LinkedWorktreeWorkspaceTools.inLane()` | private method | [line 464](../../packages/code/src/linked-worktrees.ts#L464) |
| `LinkedWorktreeWorkspaceTools.execute()` | method | [line 477](../../packages/code/src/linked-worktrees.ts#L477) |
| `LinkedWorktreeWorkspaceTools.executeProgrammatic()` | method | [line 508](../../packages/code/src/linked-worktrees.ts#L508) |

</details>

<details>
<summary>packages/code/src/macos-storage.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `unavailable()` | module-local function | [line 25](../../packages/code/src/macos-storage.ts#L25) |
| `verifyMacOsAcl()` | exported function | [line 29](../../packages/code/src/macos-storage.ts#L29) |
| `removeMacOsAcl()` | exported function | [line 66](../../packages/code/src/macos-storage.ts#L66) |
| `macOsMountPoint()` | exported function | [line 88](../../packages/code/src/macos-storage.ts#L88) |

</details>

<details>
<summary>packages/code/src/native-policy.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isPreset()` | module-local function | [line 40](../../packages/code/src/native-policy.ts#L40) |
| `resolveNativeSrtCommandPolicy()` | exported function | [line 48](../../packages/code/src/native-policy.ts#L48) |
| `normalizeNativeSrtCommandPolicy()` | exported function | [line 61](../../packages/code/src/native-policy.ts#L61) |
| `serializeNativeSrtCommandPolicy()` | exported function | [line 82](../../packages/code/src/native-policy.ts#L82) |

</details>

<details>
<summary>packages/code/src/native-pool.ts — 8 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `NativeWorkspaceCommandPool` | exported class | [line 23](../../packages/code/src/native-pool.ts#L23) |
| `NativeWorkspaceCommandPool.unregisterRoot()` | method | [line 50](../../packages/code/src/native-pool.ts#L50) |
| `NativeWorkspaceCommandPool.registerRoot()` | method | [line 68](../../packages/code/src/native-pool.ts#L68) |
| `NativeWorkspaceCommandPool.allocate()` | private method | [line 114](../../packages/code/src/native-pool.ts#L114) |
| `NativeWorkspaceCommandPool.prepare()` | method | [line 180](../../packages/code/src/native-pool.ts#L180) |
| `NativeWorkspaceCommandPool.execute()` | method | [line 202](../../packages/code/src/native-pool.ts#L202) |
| `NativeWorkspaceCommandPool.executeProgrammatic()` | method | [line 238](../../packages/code/src/native-pool.ts#L238) |
| `NativeWorkspaceCommandPool.close()` | method | [line 284](../../packages/code/src/native-pool.ts#L284) |

</details>

<details>
<summary>packages/code/src/native-process-child.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `reply()` | module-local function | [line 26](../../packages/code/src/native-process-child.ts#L26) |
| `awaitCommitAcknowledgement()` | module-local function | [line 34](../../packages/code/src/native-process-child.ts#L34) |
| `shutdown()` | module-local function value | [line 62](../../packages/code/src/native-process-child.ts#L62) |

</details>

<details>
<summary>packages/code/src/native-process.ts — 20 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `systemProgrammaticExecutable()` | module-local function | [line 47](../../packages/code/src/native-process.ts#L47) |
| `trustedProgrammaticExecutable()` | exported function | [line 65](../../packages/code/src/native-process.ts#L65) |
| `resolveProgrammaticShell()` | module-local function | [line 76](../../packages/code/src/native-process.ts#L76) |
| `nativeExecutorEnvironment()` | exported function | [line 121](../../packages/code/src/native-process.ts#L121) |
| `NativeExecutorUnavailableError` | module-local class | [line 179](../../packages/code/src/native-process.ts#L179) |
| `NativeProcessWorkspaceCommandSandbox` | exported class | [line 194](../../packages/code/src/native-process.ts#L194) |
| `NativeProcessWorkspaceCommandSandbox.scheduleRpcTimeout()` | protected method | [line 224](../../packages/code/src/native-process.ts#L224) |
| `NativeProcessWorkspaceCommandSandbox.prepare()` | method | [line 231](../../packages/code/src/native-process.ts#L231) |
| `NativeProcessWorkspaceCommandSandbox.unavailable()` | private method | [line 238](../../packages/code/src/native-process.ts#L238) |
| `NativeProcessWorkspaceCommandSandbox.resolveProgrammaticExecutables()` | private method | [line 242](../../packages/code/src/native-process.ts#L242) |
| `NativeProcessWorkspaceCommandSandbox.start()` | private method | [line 257](../../packages/code/src/native-process.ts#L257) |
| `NativeProcessWorkspaceCommandSandbox.execute()` | method | [line 385](../../packages/code/src/native-process.ts#L385) |
| `NativeProcessWorkspaceCommandSandbox.executeProgrammatic()` | method | [line 409](../../packages/code/src/native-process.ts#L409) |
| `NativeProcessWorkspaceCommandSandbox.executeProgrammaticOnce()` | private method | [line 437](../../packages/code/src/native-process.ts#L437) |
| `NativeProcessWorkspaceCommandSandbox.programmaticWatchdogBudget()` | private method | [line 515](../../packages/code/src/native-process.ts#L515) |
| `NativeProcessWorkspaceCommandSandbox.executeOnce()` | private method | [line 544](../../packages/code/src/native-process.ts#L544) |
| `NativeProcessWorkspaceCommandSandbox.rpc()` | private method | [line 609](../../packages/code/src/native-process.ts#L609) |
| `NativeProcessWorkspaceCommandSandbox.close()` | method | [line 672](../../packages/code/src/native-process.ts#L672) |
| `NativeProcessWorkspaceCommandSandbox.stop()` | private method | [line 681](../../packages/code/src/native-process.ts#L681) |
| `NativeProcessWorkspaceCommandSandbox.terminate()` | private method | [line 698](../../packages/code/src/native-process.ts#L698) |

</details>

<details>
<summary>packages/code/src/native-programmatic.ts — 15 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `sha256()` | module-local function | [line 88](../../packages/code/src/native-programmatic.ts#L88) |
| `outputFileId()` | module-local function | [line 92](../../packages/code/src/native-programmatic.ts#L92) |
| `localPath()` | module-local function | [line 96](../../packages/code/src/native-programmatic.ts#L96) |
| `readBoundedResponse()` | module-local function | [line 114](../../packages/code/src/native-programmatic.ts#L114) |
| `mapConcurrent()` | module-local function | [line 155](../../packages/code/src/native-programmatic.ts#L155) |
| `listRegularFiles()` | module-local function | [line 189](../../packages/code/src/native-programmatic.ts#L189) |
| `NativeWorkspaceProgrammaticExecutor` | exported class | [line 234](../../packages/code/src/native-programmatic.ts#L234) |
| `NativeWorkspaceProgrammaticExecutor.prepare()` | method | [line 254](../../packages/code/src/native-programmatic.ts#L254) |
| `NativeWorkspaceProgrammaticExecutor.prepareOnce()` | private method | [line 273](../../packages/code/src/native-programmatic.ts#L273) |
| `NativeWorkspaceProgrammaticExecutor.cacheKey()` | private method | [line 302](../../packages/code/src/native-programmatic.ts#L302) |
| `NativeWorkspaceProgrammaticExecutor.cachedInput()` | private method | [line 311](../../packages/code/src/native-programmatic.ts#L311) |
| `NativeWorkspaceProgrammaticExecutor.cacheInput()` | private method | [line 318](../../packages/code/src/native-programmatic.ts#L318) |
| `NativeWorkspaceProgrammaticExecutor.downloadInput()` | private method | [line 344](../../packages/code/src/native-programmatic.ts#L344) |
| `NativeWorkspaceProgrammaticExecutor.execute()` | method | [line 390](../../packages/code/src/native-programmatic.ts#L390) |
| `NativeWorkspaceProgrammaticExecutor.result()` | private method | [line 842](../../packages/code/src/native-programmatic.ts#L842) |

</details>

<details>
<summary>packages/code/src/native-sandbox.ts — 38 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isWithin()` | module-local function | [line 219](../../packages/code/src/native-sandbox.ts#L219) |
| `canonicalPath()` | module-local function | [line 227](../../packages/code/src/native-sandbox.ts#L227) |
| `collectGitMetadataDenies()` | module-local function | [line 270](../../packages/code/src/native-sandbox.ts#L270) |
| `pushExistingDenies()` | module-local function | [line 302](../../packages/code/src/native-sandbox.ts#L302) |
| `collectSubmoduleGitDirs()` | module-local function | [line 315](../../packages/code/src/native-sandbox.ts#L315) |
| `isMissing()` | module-local function | [line 342](../../packages/code/src/native-sandbox.ts#L342) |
| `statIfPresent()` | module-local function | [line 350](../../packages/code/src/native-sandbox.ts#L350) |
| `readdirIfPresent()` | module-local function | [line 359](../../packages/code/src/native-sandbox.ts#L359) |
| `boundedUtf8()` | module-local function | [line 368](../../packages/code/src/native-sandbox.ts#L368) |
| `deniedEnvironmentNames()` | module-local function | [line 378](../../packages/code/src/native-sandbox.ts#L378) |
| `normalizedEnvironmentName()` | module-local function | [line 399](../../packages/code/src/native-sandbox.ts#L399) |
| `CopyOnWriteCloneUnavailableError` | exported class | [line 407](../../packages/code/src/native-sandbox.ts#L407) |
| `isCopyOnWriteUnsupported()` | module-local function | [line 417](../../packages/code/src/native-sandbox.ts#L417) |
| `NativeSrtWorkspaceCommandSandbox` | exported class | [line 436](../../packages/code/src/native-sandbox.ts#L436) |
| `NativeSrtWorkspaceCommandSandbox.prepare()` | method | [line 476](../../packages/code/src/native-sandbox.ts#L476) |
| `NativeSrtWorkspaceCommandSandbox.initialize()` | private method | [line 480](../../packages/code/src/native-sandbox.ts#L480) |
| `NativeSrtWorkspaceCommandSandbox.initializeOnce()` | private method | [line 509](../../packages/code/src/native-sandbox.ts#L509) |
| `NativeSrtWorkspaceCommandSandbox.execute()` | method | [line 793](../../packages/code/src/native-sandbox.ts#L793) |
| `NativeSrtWorkspaceCommandSandbox.createExecutionDirectory()` | method | [line 819](../../packages/code/src/native-sandbox.ts#L819) |
| `NativeSrtWorkspaceCommandSandbox.createProgrammaticProbeWorkspace()` | method | [line 836](../../packages/code/src/native-sandbox.ts#L836) |
| `NativeSrtWorkspaceCommandSandbox.createBoundProgrammaticProbeWorkspace()` | private method | [line 849](../../packages/code/src/native-sandbox.ts#L849) |
| `NativeSrtWorkspaceCommandSandbox.executeProgrammatic()` | method | [line 940](../../packages/code/src/native-sandbox.ts#L940) |
| `NativeSrtWorkspaceCommandSandbox.withProbeNetwork()` | private method | [line 1056](../../packages/code/src/native-sandbox.ts#L1056) |
| `NativeSrtWorkspaceCommandSandbox.executeExclusive()` | private method | [line 1084](../../packages/code/src/native-sandbox.ts#L1084) |
| `NativeSrtWorkspaceCommandSandbox.rootCommandConfig()` | private method | [line 1111](../../packages/code/src/native-sandbox.ts#L1111) |
| `NativeSrtWorkspaceCommandSandbox.executeBound()` | private method | [line 1135](../../packages/code/src/native-sandbox.ts#L1135) |
| `NativeSrtWorkspaceCommandSandbox.withTemporaryHostEnvironment()` | private method | [line 1255](../../packages/code/src/native-sandbox.ts#L1255) |
| `NativeSrtWorkspaceCommandSandbox.runWrapped()` | private method | [line 1281](../../packages/code/src/native-sandbox.ts#L1281) |
| `NativeSrtWorkspaceCommandSandbox.killCommandTree()` | private method | [line 1422](../../packages/code/src/native-sandbox.ts#L1422) |
| `NativeSrtWorkspaceCommandSandbox.protocolExitCode()` | private method | [line 1434](../../packages/code/src/native-sandbox.ts#L1434) |
| `NativeSrtWorkspaceCommandSandbox.createScratchDirectory()` | private method | [line 1443](../../packages/code/src/native-sandbox.ts#L1443) |
| `NativeSrtWorkspaceCommandSandbox.scratchEnvironment()` | private method | [line 1498](../../packages/code/src/native-sandbox.ts#L1498) |
| `NativeSrtWorkspaceCommandSandbox.scratchSelectorEnvironment()` | private method | [line 1510](../../packages/code/src/native-sandbox.ts#L1510) |
| `NativeSrtWorkspaceCommandSandbox.createLinkedWorktreeGitGuard()` | private method | [line 1520](../../packages/code/src/native-sandbox.ts#L1520) |
| `NativeSrtWorkspaceCommandSandbox.removeLinkedWorktreeGitGuard()` | private method | [line 1532](../../packages/code/src/native-sandbox.ts#L1532) |
| `NativeSrtWorkspaceCommandSandbox.removeScratchDirectory()` | private method | [line 1538](../../packages/code/src/native-sandbox.ts#L1538) |
| `NativeSrtWorkspaceCommandSandbox.close()` | method | [line 1558](../../packages/code/src/native-sandbox.ts#L1558) |
| `NativeSrtWorkspaceCommandSandbox.closeExclusive()` | private method | [line 1569](../../packages/code/src/native-sandbox.ts#L1569) |

</details>

<details>
<summary>packages/code/src/native-scratch.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `descriptorPath()` | module-local function | [line 37](../../packages/code/src/native-scratch.ts#L37) |
| `requirePosixBindings()` | module-local function | [line 41](../../packages/code/src/native-scratch.ts#L41) |
| `ignoredEntryError()` | module-local function | [line 47](../../packages/code/src/native-scratch.ts#L47) |
| `restoreEntryMode()` | module-local function | [line 51](../../packages/code/src/native-scratch.ts#L51) |
| `openDirectoryAt()` | module-local function | [line 58](../../packages/code/src/native-scratch.ts#L58) |
| `closeDirectory()` | module-local function | [line 70](../../packages/code/src/native-scratch.ts#L70) |
| `repairDirectory()` | module-local function | [line 77](../../packages/code/src/native-scratch.ts#L77) |
| `openRelativeDirectory()` | module-local function | [line 85](../../packages/code/src/native-scratch.ts#L85) |
| `restoreScratchTraversal()` | exported function | [line 126](../../packages/code/src/native-scratch.ts#L126) |

</details>

<details>
<summary>packages/code/src/output.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `utf8Window()` | module-local function | [line 6](../../packages/code/src/output.ts#L6) |
| `boundedWindow()` | module-local function | [line 35](../../packages/code/src/output.ts#L35) |
| `OutputBuffer` | exported class | [line 61](../../packages/code/src/output.ts#L61) |
| `OutputBuffer.append()` | method | [line 80](../../packages/code/src/output.ts#L80) |
| `OutputBuffer.suffix()` | private method | [line 110](../../packages/code/src/output.ts#L110) |
| `OutputBuffer.render()` | method | [line 121](../../packages/code/src/output.ts#L121) |
| `renderCommandOutput()` | exported function | [line 163](../../packages/code/src/output.ts#L163) |

</details>

<details>
<summary>packages/code/src/pairing.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `normalizedBaseUrl()` | module-local function | [line 23](../../packages/code/src/pairing.ts#L23) |
| `errorMessage()` | module-local function | [line 27](../../packages/code/src/pairing.ts#L27) |
| `pairBridgeWorker()` | exported function | [line 32](../../packages/code/src/pairing.ts#L32) |

</details>

<details>
<summary>packages/code/src/private-storage.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `assertPrivateStorageSupported()` | exported function | [line 9](../../packages/code/src/private-storage.ts#L9) |
| `macOsStorage()` | module-local function | [line 19](../../packages/code/src/private-storage.ts#L19) |
| `assertPrivateStorageAcl()` | exported function | [line 27](../../packages/code/src/private-storage.ts#L27) |
| `removePrivateStorageAcl()` | exported function | [line 36](../../packages/code/src/private-storage.ts#L36) |
| `assertPrivateStorageAncestors()` | exported function | [line 54](../../packages/code/src/private-storage.ts#L54) |

</details>

<details>
<summary>packages/code/src/process-lock.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `ProcessLockBusyError` | exported class | [line 8](../../packages/code/src/process-lock.ts#L8) |
| `lockBinding()` | module-local function | [line 17](../../packages/code/src/process-lock.ts#L17) |
| `withProcessLock()` | exported function | [line 27](../../packages/code/src/process-lock.ts#L27) |
| `tryWithProcessLock()` | exported function | [line 65](../../packages/code/src/process-lock.ts#L65) |

</details>

<details>
<summary>packages/code/src/project-roots.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `validateCheckout()` | module-local function | [line 13](../../packages/code/src/project-roots.ts#L13) |
| `loadProjectRoots()` | exported function | [line 88](../../packages/code/src/project-roots.ts#L88) |
| `projectRootArguments()` | exported function | [line 140](../../packages/code/src/project-roots.ts#L140) |

</details>

<details>
<summary>packages/code/src/projects.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `projectRemote()` | exported function | [line 36](../../packages/code/src/projects.ts#L36) |
| `limit()` | module-local function | [line 65](../../packages/code/src/projects.ts#L65) |
| `discoverProjects()` | exported function | [line 77](../../packages/code/src/projects.ts#L77) |

</details>

<details>
<summary>packages/code/src/protocol.ts — 37 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `programmaticTransferReserveMs()` | exported function | [line 32](../../packages/code/src/protocol.ts#L32) |
| `portableBasename()` | module-local function | [line 168](../../packages/code/src/protocol.ts#L168) |
| `isSupportedBridgeArtifactName()` | exported function | [line 173](../../packages/code/src/protocol.ts#L173) |
| `bridgeArtifactMediaType()` | exported function | [line 259](../../packages/code/src/protocol.ts#L259) |
| `isValidLinkedWorktreeName()` | exported function | [line 271](../../packages/code/src/protocol.ts#L271) |
| `workspaceIsolationKey()` | exported function | [line 283](../../packages/code/src/protocol.ts#L283) |
| `workspaceIsolationParent()` | exported function | [line 298](../../packages/code/src/protocol.ts#L298) |
| `workspaceIsolationKeysConflict()` | exported function | [line 307](../../packages/code/src/protocol.ts#L307) |
| `isWorkspaceMutationOperation()` | exported function | [line 326](../../packages/code/src/protocol.ts#L326) |
| `boundedBranch()` | exported function | [line 364](../../packages/code/src/protocol.ts#L364) |
| `boundedHead()` | exported function | [line 376](../../packages/code/src/protocol.ts#L376) |
| `isWorkspaceLaneGit()` | exported function | [line 394](../../packages/code/src/protocol.ts#L394) |
| `isRepositoryInstructionDescriptor()` | exported function | [line 468](../../packages/code/src/protocol.ts#L468) |
| `isWorkspaceToolErrorCode()` | exported function | [line 1170](../../packages/code/src/protocol.ts#L1170) |
| `BridgeProtocolError` | exported class | [line 1193](../../packages/code/src/protocol.ts#L1193) |
| `bridgeWorkerPath()` | exported function | [line 1204](../../packages/code/src/protocol.ts#L1204) |
| `isValidBridgeWorkerId()` | exported function | [line 1208](../../packages/code/src/protocol.ts#L1208) |
| `isBridgeWorkspaceProgrammaticRequest()` | exported function | [line 1212](../../packages/code/src/protocol.ts#L1212) |
| `isSafePortableRelativePath()` | exported function | [line 1355](../../packages/code/src/protocol.ts#L1355) |
| `isDotGitPathSegment()` | module-local function | [line 1377](../../packages/code/src/protocol.ts#L1377) |
| `isWorkspaceImportFilePath()` | exported function | [line 1387](../../packages/code/src/protocol.ts#L1387) |
| `isWorkspaceImportFileHandle()` | module-local function | [line 1399](../../packages/code/src/protocol.ts#L1399) |
| `isWorkspaceImportFileRequestShape()` | module-local function | [line 1408](../../packages/code/src/protocol.ts#L1408) |
| `isBridgeWorkspaceImportFileRequest()` | exported function | [line 1438](../../packages/code/src/protocol.ts#L1438) |
| `isRelayedWorkspaceImportFileRequest()` | exported function | [line 1449](../../packages/code/src/protocol.ts#L1449) |
| `normalizePortableRelativePath()` | module-local function | [line 1459](../../packages/code/src/protocol.ts#L1459) |
| `comparePortableRelativePaths()` | exported function | [line 1469](../../packages/code/src/protocol.ts#L1469) |
| `isWithinRequestedPath()` | module-local function | [line 1491](../../packages/code/src/protocol.ts#L1491) |
| `workspaceEditRequestReportsMatches()` | exported function | [line 1503](../../packages/code/src/protocol.ts#L1503) |
| `isValidWorkspaceEditMatches()` | module-local function | [line 1512](../../packages/code/src/protocol.ts#L1512) |
| `isValidWorkspaceEditRequest()` | module-local function | [line 1540](../../packages/code/src/protocol.ts#L1540) |
| `hasOnlyKeys()` | module-local function | [line 1608](../../packages/code/src/protocol.ts#L1608) |
| `isWorkspaceToolRequest()` | exported function | [line 1615](../../packages/code/src/protocol.ts#L1615) |
| `isWorkspaceToolResult()` | exported function | [line 1763](../../packages/code/src/protocol.ts#L1763) |
| `isValidBridgeWorkspaceToolCapabilities()` | exported function | [line 2006](../../packages/code/src/protocol.ts#L2006) |
| `isValidCodeEnvironmentDescriptor()` | exported function | [line 2173](../../packages/code/src/protocol.ts#L2173) |
| `isValidBridgeWorkerCapabilities()` | exported function | [line 2204](../../packages/code/src/protocol.ts#L2204) |

</details>

<details>
<summary>packages/code/src/relay-runtime.ts — 18 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `suffix()` | module-local function | [line 34](../../packages/code/src/relay-runtime.ts#L34) |
| `missingNetwork()` | module-local function | [line 38](../../packages/code/src/relay-runtime.ts#L38) |
| `existingNetwork()` | module-local function | [line 45](../../packages/code/src/relay-runtime.ts#L45) |
| `missingContainer()` | module-local function | [line 49](../../packages/code/src/relay-runtime.ts#L49) |
| `DockerFileRelaySupervisor` | exported class | [line 56](../../packages/code/src/relay-runtime.ts#L56) |
| `DockerFileRelaySupervisor.prepare()` | method | [line 94](../../packages/code/src/relay-runtime.ts#L94) |
| `DockerFileRelaySupervisor.stop()` | method | [line 105](../../packages/code/src/relay-runtime.ts#L105) |
| `DockerFileRelaySupervisor.activate()` | method | [line 109](../../packages/code/src/relay-runtime.ts#L109) |
| `DockerFileRelaySupervisor.registrationGeneration()` | private method | [line 221](../../packages/code/src/relay-runtime.ts#L221) |
| `DockerFileRelaySupervisor.stagingContainer()` | private method | [line 230](../../packages/code/src/relay-runtime.ts#L230) |
| `DockerFileRelaySupervisor.renameRelay()` | private method | [line 234](../../packages/code/src/relay-runtime.ts#L234) |
| `DockerFileRelaySupervisor.launchRelay()` | private method | [line 244](../../packages/code/src/relay-runtime.ts#L244) |
| `DockerFileRelaySupervisor.ensureNetwork()` | private method | [line 305](../../packages/code/src/relay-runtime.ts#L305) |
| `DockerFileRelaySupervisor.validateNetwork()` | private method | [line 336](../../packages/code/src/relay-runtime.ts#L336) |
| `DockerFileRelaySupervisor.removeRelay()` | private method | [line 360](../../packages/code/src/relay-runtime.ts#L360) |
| `DockerFileRelaySupervisor.resetPreparedState()` | private method | [line 371](../../packages/code/src/relay-runtime.ts#L371) |
| `DockerFileRelaySupervisor.waitForHealth()` | private method | [line 377](../../packages/code/src/relay-runtime.ts#L377) |
| `DockerFileRelaySupervisor.checkHealth()` | private method | [line 403](../../packages/code/src/relay-runtime.ts#L403) |

</details>

<details>
<summary>packages/code/src/relay.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `RelayPayloadTooLargeError` | module-local class | [line 34](../../packages/code/src/relay.ts#L34) |
| `UpstreamPayloadTooLargeError` | module-local class | [line 35](../../packages/code/src/relay.ts#L35) |
| `fileRelayObjectUrl()` | exported function | [line 41](../../packages/code/src/relay.ts#L41) |
| `validateFileRelayUpstream()` | exported function | [line 52](../../packages/code/src/relay.ts#L52) |
| `positiveInteger()` | module-local function | [line 76](../../packages/code/src/relay.ts#L76) |
| `tokenMatches()` | module-local function | [line 83](../../packages/code/src/relay.ts#L83) |
| `readRequestBody()` | module-local function | [line 94](../../packages/code/src/relay.ts#L94) |
| `readResponseBody()` | module-local function | [line 116](../../packages/code/src/relay.ts#L116) |
| `startFileRelay()` | exported function | [line 147](../../packages/code/src/relay.ts#L147) |

</details>

<details>
<summary>packages/code/src/root-access.ts — 39 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `runtime()` | module-local function | [line 32](../../packages/code/src/root-access.ts#L32) |
| `bind()` | module-local function | [line 39](../../packages/code/src/root-access.ts#L39) |
| `nativeError()` | module-local function | [line 80](../../packages/code/src/root-access.ts#L80) |
| `checked()` | module-local function | [line 92](../../packages/code/src/root-access.ts#L92) |
| `descriptorPath()` | module-local function | [line 97](../../packages/code/src/root-access.ts#L97) |
| `physicalPath()` | module-local function | [line 103](../../packages/code/src/root-access.ts#L103) |
| `offset()` | module-local function | [line 111](../../packages/code/src/root-access.ts#L111) |
| `WorkspaceRootAccessError` | exported class | [line 122](../../packages/code/src/root-access.ts#L122) |
| `WorkspaceRootAccess` | exported class | [line 123](../../packages/code/src/root-access.ts#L123) |
| `WorkspaceRootAccess.open()` | method | [line 129](../../packages/code/src/root-access.ts#L129) |
| `WorkspaceRootAccess.close()` | method | [line 162](../../packages/code/src/root-access.ts#L162) |
| `WorkspaceRootAccess.directory()` | method | [line 166](../../packages/code/src/root-access.ts#L166) |
| `WorkspaceRootAccess.canonical()` | private method | [line 185](../../packages/code/src/root-access.ts#L185) |
| `WorkspaceRootAccess.assertDirectoryAncestor()` | private method | [line 194](../../packages/code/src/root-access.ts#L194) |
| `WorkspaceRootAccess.parent()` | private method | [line 230](../../packages/code/src/root-access.ts#L230) |
| `WorkspaceRootAccess.openFile()` | method | [line 245](../../packages/code/src/root-access.ts#L245) |
| `WorkspaceRootAccess.stat()` | method | [line 277](../../packages/code/src/root-access.ts#L277) |
| `WorkspaceRootAccess.metadataDescriptor()` | private method | [line 295](../../packages/code/src/root-access.ts#L295) |
| `WorkspaceRootAccess.realpath()` | method | [line 319](../../packages/code/src/root-access.ts#L319) |
| `WorkspaceRootAccess.install()` | method | [line 337](../../packages/code/src/root-access.ts#L337) |
| `WorkspaceRootAccess.entry()` | method | [line 353](../../packages/code/src/root-access.ts#L353) |
| `WorkspaceRootAccess.unlink()` | method | [line 370](../../packages/code/src/root-access.ts#L370) |
| `deferWorkspaceRootCleanup()` | exported function | [line 383](../../packages/code/src/root-access.ts#L383) |
| `holdsWorkspaceRoot()` | exported function value | [line 388](../../packages/code/src/root-access.ts#L388) |
| `withWorkspaceRoot()` | exported function | [line 389](../../packages/code/src/root-access.ts#L389) |
| `spawnWithinWorkspace()` | exported function | [line 410](../../packages/code/src/root-access.ts#L410) |
| `open()` | exported function value | [line 465](../../packages/code/src/root-access.ts#L465) |
| `stat()` | exported function value | [line 474](../../packages/code/src/root-access.ts#L474) |
| `lstat()` | exported function value | [line 476](../../packages/code/src/root-access.ts#L476) |
| `realpath()` | exported function value | [line 478](../../packages/code/src/root-access.ts#L478) |
| `rename()` | exported function value | [line 480](../../packages/code/src/root-access.ts#L480) |
| `renameExclusive()` | exported function value | [line 485](../../packages/code/src/root-access.ts#L485) |
| `link()` | exported function value | [line 490](../../packages/code/src/root-access.ts#L490) |
| `unlink()` | exported function value | [line 495](../../packages/code/src/root-access.ts#L495) |
| `readdir()` | exported function value | [line 502](../../packages/code/src/root-access.ts#L502) |
| `readlink()` | exported function value | [line 515](../../packages/code/src/root-access.ts#L515) |
| `mkdir()` | exported function value | [line 517](../../packages/code/src/root-access.ts#L517) |
| `symlink()` | exported function value | [line 522](../../packages/code/src/root-access.ts#L522) |
| `rmdir()` | exported function value | [line 527](../../packages/code/src/root-access.ts#L527) |

</details>

<details>
<summary>packages/code/src/root-identity.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `captureWorkspaceRootIdentity()` | exported function | [line 10](../../packages/code/src/root-identity.ts#L10) |
| `matchesWorkspaceRoot()` | exported function | [line 26](../../packages/code/src/root-identity.ts#L26) |

</details>

<details>
<summary>packages/code/src/runtime.ts — 23 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `normalizedEndpoint()` | module-local function | [line 85](../../packages/code/src/runtime.ts#L85) |
| `assignmentSessionId()` | module-local function | [line 89](../../packages/code/src/runtime.ts#L89) |
| `containerSuffix()` | module-local function | [line 95](../../packages/code/src/runtime.ts#L95) |
| `containerName()` | module-local function | [line 99](../../packages/code/src/runtime.ts#L99) |
| `isMissingContainerError()` | module-local function | [line 103](../../packages/code/src/runtime.ts#L103) |
| `isMissingImageError()` | module-local function | [line 108](../../packages/code/src/runtime.ts#L108) |
| `DockerCliClient` | exported class | [line 113](../../packages/code/src/runtime.ts#L113) |
| `DockerCliClient.run()` | method | [line 120](../../packages/code/src/runtime.ts#L120) |
| `DockerRuntimeSupervisor` | exported class | [line 161](../../packages/code/src/runtime.ts#L161) |
| `DockerRuntimeSupervisor.acquire()` | method | [line 208](../../packages/code/src/runtime.ts#L208) |
| `DockerRuntimeSupervisor.reset()` | method | [line 232](../../packages/code/src/runtime.ts#L232) |
| `DockerRuntimeSupervisor.quarantine()` | method | [line 236](../../packages/code/src/runtime.ts#L236) |
| `DockerRuntimeSupervisor.ensureContainer()` | private method | [line 244](../../packages/code/src/runtime.ts#L244) |
| `DockerRuntimeSupervisor.profileDigest()` | private method | [line 314](../../packages/code/src/runtime.ts#L314) |
| `DockerRuntimeSupervisor.containerState()` | private method | [line 334](../../packages/code/src/runtime.ts#L334) |
| `DockerRuntimeSupervisor.imageId()` | private method | [line 366](../../packages/code/src/runtime.ts#L366) |
| `DockerRuntimeSupervisor.waitForHealth()` | private method | [line 382](../../packages/code/src/runtime.ts#L382) |
| `DockerRuntimeSupervisor.execute()` | private method | [line 431](../../packages/code/src/runtime.ts#L431) |
| `DockerRuntimeSupervisor.remove()` | private method | [line 482](../../packages/code/src/runtime.ts#L482) |
| `EndpointRuntimeSupervisor` | exported class | [line 495](../../packages/code/src/runtime.ts#L495) |
| `EndpointRuntimeSupervisor.acquire()` | method | [line 505](../../packages/code/src/runtime.ts#L505) |
| `EndpointRuntimeSupervisor.reset()` | method | [line 529](../../packages/code/src/runtime.ts#L529) |
| `EndpointRuntimeSupervisor.quarantine()` | method | [line 531](../../packages/code/src/runtime.ts#L531) |

</details>

<details>
<summary>packages/code/src/setup-cli.ts — 3 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `parseSetupArguments()` | exported function | [line 72](../../packages/code/src/setup-cli.ts#L72) |
| `pairingCodeFromStdin()` | module-local function | [line 133](../../packages/code/src/setup-cli.ts#L133) |
| `runSetupCommand()` | exported function | [line 151](../../packages/code/src/setup-cli.ts#L151) |

</details>

<details>
<summary>packages/code/src/setup.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `setupCodeApiUrl()` | exported function | [line 35](../../packages/code/src/setup.ts#L35) |
| `checkSetupCommands()` | exported function | [line 64](../../packages/code/src/setup.ts#L64) |
| `setupWorkspaceDirectory()` | exported function | [line 80](../../packages/code/src/setup.ts#L80) |
| `setupWorker()` | exported function | [line 102](../../packages/code/src/setup.ts#L102) |
| `profileRunConfiguration()` | exported function | [line 203](../../packages/code/src/setup.ts#L203) |

</details>

<details>
<summary>packages/code/src/snapshot-lifecycle.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `positive()` | module-local function | [line 19](../../packages/code/src/snapshot-lifecycle.ts#L19) |
| `parseSnapshotLifecycle()` | exported function | [line 26](../../packages/code/src/snapshot-lifecycle.ts#L26) |
| `parseEnvironmentStorage()` | exported function | [line 45](../../packages/code/src/snapshot-lifecycle.ts#L45) |
| `assertPreparationSpace()` | exported function | [line 71](../../packages/code/src/snapshot-lifecycle.ts#L71) |
| `SnapshotBudgetFullError` | exported class | [line 94](../../packages/code/src/snapshot-lifecycle.ts#L94) |
| `manifest()` | module-local function | [line 102](../../packages/code/src/snapshot-lifecycle.ts#L102) |
| `pruneDependencySnapshots()` | exported function | [line 163](../../packages/code/src/snapshot-lifecycle.ts#L163) |

</details>

<details>
<summary>packages/code/src/storage.ts — 33 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isRecord()` | module-local function | [line 23](../../packages/code/src/storage.ts#L23) |
| `isPairedIdentity()` | module-local function | [line 27](../../packages/code/src/storage.ts#L27) |
| `defaultBridgeIdentityPath()` | exported function | [line 44](../../packages/code/src/storage.ts#L44) |
| `workspaceStorageName()` | module-local function | [line 56](../../packages/code/src/storage.ts#L56) |
| `canonicalDeploymentUrl()` | module-local function | [line 60](../../packages/code/src/storage.ts#L60) |
| `syncParentDirectory()` | module-local function | [line 67](../../packages/code/src/storage.ts#L67) |
| `isMissingPathError()` | module-local function | [line 77](../../packages/code/src/storage.ts#L77) |
| `ensureDurableDirectory()` | module-local function | [line 81](../../packages/code/src/storage.ts#L81) |
| `defaultWorkspacePath()` | exported function | [line 131](../../packages/code/src/storage.ts#L131) |
| `defaultWorkspaceQuarantinePath()` | exported function | [line 152](../../packages/code/src/storage.ts#L152) |
| `assertWriteContainerPrivate()` | module-local function | [line 169](../../packages/code/src/storage.ts#L169) |
| `assertReadPathPrivate()` | module-local function | [line 173](../../packages/code/src/storage.ts#L173) |
| `isTrustedOwner()` | module-local function | [line 178](../../packages/code/src/storage.ts#L178) |
| `assertOwnedByWorker()` | module-local function | [line 188](../../packages/code/src/storage.ts#L188) |
| `readGuardedFile()` | module-local function | [line 205](../../packages/code/src/storage.ts#L205) |
| `assertOwnerOnlyFile()` | module-local function | [line 246](../../packages/code/src/storage.ts#L246) |
| `assertOwnerOnlyPath()` | module-local function | [line 265](../../packages/code/src/storage.ts#L265) |
| `ensurePrivateWorkspaceDirectory()` | exported function | [line 274](../../packages/code/src/storage.ts#L274) |
| `assertIdentityDestinationIsReplaceable()` | module-local function | [line 305](../../packages/code/src/storage.ts#L305) |
| `assertSiblingPublishable()` | module-local function | [line 353](../../packages/code/src/storage.ts#L353) |
| `assertIdentityPathIsPrivate()` | exported function | [line 375](../../packages/code/src/storage.ts#L375) |
| `saveBridgeIdentity()` | exported function | [line 447](../../packages/code/src/storage.ts#L447) |
| `prepareEnvironmentPreparationDirectory()` | exported function | [line 455](../../packages/code/src/storage.ts#L455) |
| `loadEnvironmentPreparationKey()` | exported function | [line 468](../../packages/code/src/storage.ts#L468) |
| `saveEnvironmentPreparationKey()` | exported function | [line 483](../../packages/code/src/storage.ts#L483) |
| `readPrivateJson()` | exported function | [line 488](../../packages/code/src/storage.ts#L488) |
| `savePrivateJson()` | exported function | [line 506](../../packages/code/src/storage.ts#L506) |
| `isWorkspaceMutationQuarantineRecord()` | module-local function | [line 533](../../packages/code/src/storage.ts#L533) |
| `saveWorkspaceMutationQuarantine()` | exported function | [line 549](../../packages/code/src/storage.ts#L549) |
| `loadWorkspaceMutationQuarantine()` | exported function | [line 583](../../packages/code/src/storage.ts#L583) |
| `clearWorkspaceMutationQuarantine()` | exported function | [line 615](../../packages/code/src/storage.ts#L615) |
| `assertWorkspaceMutationQuarantineOwner()` | exported function | [line 639](../../packages/code/src/storage.ts#L639) |
| `loadBridgeIdentity()` | exported function | [line 651](../../packages/code/src/storage.ts#L651) |

</details>

<details>
<summary>packages/code/src/worker-profile.ts — 9 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `hasExactKeys()` | module-local function | [line 20](../../packages/code/src/worker-profile.ts#L20) |
| `assertProfilePath()` | module-local function | [line 33](../../packages/code/src/worker-profile.ts#L33) |
| `parseWorkerProfile()` | module-local function | [line 46](../../packages/code/src/worker-profile.ts#L46) |
| `defaultWorkerProfilePath()` | exported function | [line 88](../../packages/code/src/worker-profile.ts#L88) |
| `loadWorkerProfile()` | exported function | [line 99](../../packages/code/src/worker-profile.ts#L99) |
| `saveWorkerProfile()` | exported function | [line 119](../../packages/code/src/worker-profile.ts#L119) |
| `workerProfileArguments()` | exported function | [line 134](../../packages/code/src/worker-profile.ts#L134) |
| `isWithin()` | module-local function | [line 145](../../packages/code/src/worker-profile.ts#L145) |
| `assertWorkerProfileIsolation()` | exported function | [line 153](../../packages/code/src/worker-profile.ts#L153) |

</details>

<details>
<summary>packages/code/src/worker.ts — 50 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `reconnectDelayMs()` | exported function | [line 148](../../packages/code/src/worker.ts#L148) |
| `normalizedBaseUrl()` | module-local function | [line 158](../../packages/code/src/worker.ts#L158) |
| `errorMessage()` | module-local function | [line 162](../../packages/code/src/worker.ts#L162) |
| `abortableDelay()` | module-local function | [line 167](../../packages/code/src/worker.ts#L167) |
| `errorCode()` | module-local function | [line 182](../../packages/code/src/worker.ts#L182) |
| `workspaceCanReadSource()` | module-local function | [line 188](../../packages/code/src/worker.ts#L188) |
| `workspaceCapabilitiesMatch()` | module-local function | [line 200](../../packages/code/src/worker.ts#L200) |
| `registrationCompatibleCapabilities()` | module-local function | [line 278](../../packages/code/src/worker.ts#L278) |
| `supportedWorkspaceCapabilities()` | module-local function | [line 345](../../packages/code/src/worker.ts#L345) |
| `BridgeWorkspaceQuarantinedError` | exported class | [line 472](../../packages/code/src/worker.ts#L472) |
| `BridgeWorker` | exported class | [line 482](../../packages/code/src/worker.ts#L482) |
| `BridgeWorker.commandResultFeatureActive()` | method | [line 494](../../packages/code/src/worker.ts#L494) |
| `BridgeWorker.register()` | method | [line 634](../../packages/code/src/worker.ts#L634) |
| `BridgeWorker.registerForMaintenance()` | method | [line 640](../../packages/code/src/worker.ts#L640) |
| `BridgeWorker.registerWithPolicy()` | private method | [line 656](../../packages/code/src/worker.ts#L656) |
| `BridgeWorker.registerOwned()` | private method | [line 670](../../packages/code/src/worker.ts#L670) |
| `BridgeWorker.confirmReady()` | private method | [line 851](../../packages/code/src/worker.ts#L851) |
| `BridgeWorker.resetWorkspace()` | method | [line 883](../../packages/code/src/worker.ts#L883) |
| `BridgeWorker.resetNativeWorkspace()` | method | [line 910](../../packages/code/src/worker.ts#L910) |
| `BridgeWorker.lease()` | method | [line 972](../../packages/code/src/worker.ts#L972) |
| `BridgeWorker.run()` | method | [line 1114](../../packages/code/src/worker.ts#L1114) |
| `BridgeWorker.runConcurrent()` | private method | [line 1159](../../packages/code/src/worker.ts#L1159) |
| `BridgeWorker.refreshCredential()` | method | [line 1256](../../packages/code/src/worker.ts#L1256) |
| `BridgeWorker.waitForCredentialRefresh()` | private method | [line 1288](../../packages/code/src/worker.ts#L1288) |
| `BridgeWorker.refreshCredentialOwned()` | private method | [line 1319](../../packages/code/src/worker.ts#L1319) |
| `BridgeWorker.maintainCredential()` | private method | [line 1394](../../packages/code/src/worker.ts#L1394) |
| `BridgeWorker.executeAndSettle()` | method | [line 1442](../../packages/code/src/worker.ts#L1442) |
| `BridgeWorker.conflictingActiveAssignment()` | private method | [line 1525](../../packages/code/src/worker.ts#L1525) |
| `BridgeWorker.assertLaneFamilyAvailable()` | private method | [line 1540](../../packages/code/src/worker.ts#L1540) |
| `BridgeWorker.workspaceGuard()` | private method | [line 1568](../../packages/code/src/worker.ts#L1568) |
| `BridgeWorker.assignmentWorkspaceId()` | private method | [line 1592](../../packages/code/src/worker.ts#L1592) |
| `BridgeWorker.assignmentWorktree()` | private method | [line 1605](../../packages/code/src/worker.ts#L1605) |
| `BridgeWorker.assignmentBaseWorkspaceId()` | private method | [line 1621](../../packages/code/src/worker.ts#L1621) |
| `BridgeWorker.assignmentWorkspaceInstanceId()` | private method | [line 1639](../../packages/code/src/worker.ts#L1639) |
| `BridgeWorker.executeOwned()` | private method | [line 1657](../../packages/code/src/worker.ts#L1657) |
| `BridgeWorker.reportWorkspaceOwnership()` | private method | [line 2359](../../packages/code/src/worker.ts#L2359) |
| `BridgeWorker.assignmentRemainingMs()` | private method | [line 2406](../../packages/code/src/worker.ts#L2406) |
| `BridgeWorker.executeRuntime()` | private method | [line 2416](../../packages/code/src/worker.ts#L2416) |
| `BridgeWorker.releaseRuntimeLease()` | private method | [line 2440](../../packages/code/src/worker.ts#L2440) |
| `BridgeWorker.quarantineWorkspace()` | private method | [line 2458](../../packages/code/src/worker.ts#L2458) |
| `BridgeWorker.delay()` | private method | [line 2494](../../packages/code/src/worker.ts#L2494) |
| `BridgeWorker.maintainRegistration()` | private method | [line 2498](../../packages/code/src/worker.ts#L2498) |
| `BridgeWorker.rejectUnexecutedAssignment()` | private method | [line 2531](../../packages/code/src/worker.ts#L2531) |
| `BridgeWorker.assignmentUrl()` | private method | [line 2573](../../packages/code/src/worker.ts#L2573) |
| `BridgeWorker.settlementErrorCode()` | private method | [line 2581](../../packages/code/src/worker.ts#L2581) |
| `BridgeWorker.settleWithRetry()` | private method | [line 2586](../../packages/code/src/worker.ts#L2586) |
| `BridgeWorker.watchCancellation()` | private method | [line 2701](../../packages/code/src/worker.ts#L2701) |
| `BridgeWorker.request()` | private method | [line 2771](../../packages/code/src/worker.ts#L2771) |
| `BridgeWorker.authorizationHeaders()` | private method | [line 2808](../../packages/code/src/worker.ts#L2808) |
| `BridgeWorker.timedRequest()` | private method | [line 2837](../../packages/code/src/worker.ts#L2837) |

</details>

<details>
<summary>packages/code/src/workspace-guards.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `workspaceMutationGuard()` | exported function | [line 11](../../packages/code/src/workspace-guards.ts#L11) |

</details>

<details>
<summary>packages/code/src/workspace-import.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `createWorkspaceFileImporter()` | exported function | [line 34](../../packages/code/src/workspace-import.ts#L34) |
| `filesystemAvailableBytes()` | module-local function | [line 52](../../packages/code/src/workspace-import.ts#L52) |
| `importAborted()` | module-local function | [line 57](../../packages/code/src/workspace-import.ts#L57) |
| `importUnavailable()` | module-local function | [line 61](../../packages/code/src/workspace-import.ts#L61) |
| `HttpWorkspaceFileImporter` | exported class | [line 69](../../packages/code/src/workspace-import.ts#L69) |
| `HttpWorkspaceFileImporter.availableBytes()` | method | [line 90](../../packages/code/src/workspace-import.ts#L90) |
| `HttpWorkspaceFileImporter.open()` | method | [line 94](../../packages/code/src/workspace-import.ts#L94) |

</details>

<details>
<summary>packages/code/src/workspace-instances.ts — 6 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `internalWorkspaceId()` | exported function | [line 32](../../packages/code/src/workspace-instances.ts#L32) |
| `publicResult()` | module-local function | [line 38](../../packages/code/src/workspace-instances.ts#L38) |
| `GitWorktreeWorkspaceTools` | exported class | [line 46](../../packages/code/src/workspace-instances.ts#L46) |
| `GitWorktreeWorkspaceTools.executor()` | private method | [line 67](../../packages/code/src/workspace-instances.ts#L67) |
| `GitWorktreeWorkspaceTools.execute()` | method | [line 144](../../packages/code/src/workspace-instances.ts#L144) |
| `GitWorktreeWorkspaceTools.executeProgrammatic()` | method | [line 196](../../packages/code/src/workspace-instances.ts#L196) |

</details>

<details>
<summary>packages/code/src/workspace-runtime.ts — 5 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `runtimeSessionId()` | module-local function | [line 29](../../packages/code/src/workspace-runtime.ts#L29) |
| `commandAssignment()` | module-local function | [line 36](../../packages/code/src/workspace-runtime.ts#L36) |
| `parseResponse()` | module-local function | [line 58](../../packages/code/src/workspace-runtime.ts#L58) |
| `RuntimeWorkspaceCommandSandbox` | exported class | [line 87](../../packages/code/src/workspace-runtime.ts#L87) |
| `RuntimeWorkspaceCommandSandbox.execute()` | method | [line 92](../../packages/code/src/workspace-runtime.ts#L92) |

</details>

<details>
<summary>packages/code/src/workspace.ts — 55 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isUtf8ScalarString()` | module-local function | [line 178](../../packages/code/src/workspace.ts#L178) |
| `decodeWorkspaceText()` | module-local function | [line 182](../../packages/code/src/workspace.ts#L182) |
| `sliceWithoutSplittingSurrogates()` | module-local function | [line 194](../../packages/code/src/workspace.ts#L194) |
| `WorkspaceToolError` | exported class | [line 223](../../packages/code/src/workspace.ts#L223) |
| `syncWorkspaceDirectory()` | module-local function | [line 238](../../packages/code/src/workspace.ts#L238) |
| `confirmInstalledMutation()` | module-local function | [line 248](../../packages/code/src/workspace.ts#L248) |
| `isWithinRoot()` | module-local function | [line 287](../../packages/code/src/workspace.ts#L287) |
| `resolveWorkspacePath()` | module-local function | [line 296](../../packages/code/src/workspace.ts#L296) |
| `withConfinedFile()` | module-local function | [line 318](../../packages/code/src/workspace.ts#L318) |
| `readConfinedFileBuffer()` | module-local function | [line 363](../../packages/code/src/workspace.ts#L363) |
| `interruptRead()` | module-local function | [line 396](../../packages/code/src/workspace.ts#L396) |
| `checkReadDeadline()` | module-local function | [line 405](../../packages/code/src/workspace.ts#L405) |
| `readWorkspaceChunk()` | module-local function | [line 422](../../packages/code/src/workspace.ts#L422) |
| `readConfinedFile()` | module-local function | [line 468](../../packages/code/src/workspace.ts#L468) |
| `verifyDirectoryPathHasNoSymlinks()` | module-local function | [line 619](../../packages/code/src/workspace.ts#L619) |
| `isMissingEntry()` | module-local function | [line 636](../../packages/code/src/workspace.ts#L636) |
| `ancestorsUnchanged()` | module-local function | [line 647](../../packages/code/src/workspace.ts#L647) |
| `classifyMissingWorkspacePath()` | module-local function | [line 673](../../packages/code/src/workspace.ts#L673) |
| `createMissingParentDirectories()` | module-local function | [line 718](../../packages/code/src/workspace.ts#L718) |
| `anchorableRootIdentity()` | module-local function | [line 764](../../packages/code/src/workspace.ts#L764) |
| `canAnchorWorkspaceRoot()` | module-local function | [line 777](../../packages/code/src/workspace.ts#L777) |
| `hasMissingParent()` | module-local function | [line 791](../../packages/code/src/workspace.ts#L791) |
| `withAnchoredParentCreation()` | module-local function | [line 817](../../packages/code/src/workspace.ts#L817) |
| `afterCreatedDirectories()` | module-local function | [line 839](../../packages/code/src/workspace.ts#L839) |
| `assertWithinWriteLimit()` | module-local function | [line 847](../../packages/code/src/workspace.ts#L847) |
| `classifyWritePathValidationError()` | module-local function | [line 856](../../packages/code/src/workspace.ts#L856) |
| `throwIfAborted()` | module-local function | [line 868](../../packages/code/src/workspace.ts#L868) |
| `readBoundedEditFile()` | module-local function | [line 876](../../packages/code/src/workspace.ts#L876) |
| `commitVerifiedEdit()` | module-local function | [line 898](../../packages/code/src/workspace.ts#L898) |
| `atomicWriteConfinedFile()` | module-local function | [line 959](../../packages/code/src/workspace.ts#L959) |
| `writeWorkspaceFile()` | module-local function | [line 1150](../../packages/code/src/workspace.ts#L1150) |
| `importIntegrityError()` | module-local function | [line 1196](../../packages/code/src/workspace.ts#L1196) |
| `hashOpenFile()` | module-local function | [line 1201](../../packages/code/src/workspace.ts#L1201) |
| `inspectImportTarget()` | module-local function | [line 1219](../../packages/code/src/workspace.ts#L1219) |
| `removeCreatedDirectories()` | module-local function | [line 1246](../../packages/code/src/workspace.ts#L1246) |
| `setImportDirectoryModes()` | module-local function | [line 1276](../../packages/code/src/workspace.ts#L1276) |
| `writeImportChunk()` | module-local function | [line 1295](../../packages/code/src/workspace.ts#L1295) |
| `confirmInstalledImport()` | module-local function | [line 1305](../../packages/code/src/workspace.ts#L1305) |
| `installImportedFile()` | module-local function | [line 1345](../../packages/code/src/workspace.ts#L1345) |
| `removeImportStaging()` | module-local function | [line 1483](../../packages/code/src/workspace.ts#L1483) |
| `importWorkspaceFile()` | module-local function | [line 1496](../../packages/code/src/workspace.ts#L1496) |
| `editWorkspaceFile()` | module-local function | [line 1553](../../packages/code/src/workspace.ts#L1553) |
| `applyWorkspaceEdits()` | module-local function | [line 1630](../../packages/code/src/workspace.ts#L1630) |
| `previewWorkspaceEdit()` | module-local function | [line 1679](../../packages/code/src/workspace.ts#L1679) |
| `listSearchCandidates()` | module-local function | [line 1722](../../packages/code/src/workspace.ts#L1722) |
| `searchWorkspace()` | module-local function | [line 1845](../../packages/code/src/workspace.ts#L1845) |
| `listWorkspaceFiles()` | module-local function | [line 2010](../../packages/code/src/workspace.ts#L2010) |
| `withinListDeadline()` | module-local function | [line 2283](../../packages/code/src/workspace.ts#L2283) |
| `LocalWorkspaceTools` | exported class | [line 2339](../../packages/code/src/workspace.ts#L2339) |
| `LocalWorkspaceTools.instructionDescriptors()` | method | [line 2344](../../packages/code/src/workspace.ts#L2344) |
| `LocalWorkspaceTools.create()` | method | [line 2374](../../packages/code/src/workspace.ts#L2374) |
| `LocalWorkspaceTools.execute()` | method | [line 2461](../../packages/code/src/workspace.ts#L2461) |
| `LocalWorkspaceTools.executeBound()` | private method | [line 2475](../../packages/code/src/workspace.ts#L2475) |
| `SandboxWorkspaceTools` | exported class | [line 2581](../../packages/code/src/workspace.ts#L2581) |
| `SandboxWorkspaceTools.execute()` | method | [line 2642](../../packages/code/src/workspace.ts#L2642) |

</details>

<details>
<summary>packages/code/src/worktree-retirement.ts — 26 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `worktreeRetirementSettings()` | exported function | [line 130](../../packages/code/src/worktree-retirement.ts#L130) |
| `gitEnvironment()` | module-local function | [line 149](../../packages/code/src/worktree-retirement.ts#L149) |
| `git()` | exported function | [line 161](../../packages/code/src/worktree-retirement.ts#L161) |
| `gitBytes()` | exported function | [line 177](../../packages/code/src/worktree-retirement.ts#L177) |
| `resolveCommit()` | module-local function | [line 194](../../packages/code/src/worktree-retirement.ts#L194) |
| `pathList()` | module-local function | [line 204](../../packages/code/src/worktree-retirement.ts#L204) |
| `remoteDefaultBranch()` | module-local function | [line 209](../../packages/code/src/worktree-retirement.ts#L209) |
| `mergedByContent()` | module-local function | [line 243](../../packages/code/src/worktree-retirement.ts#L243) |
| `errorDetail()` | module-local function | [line 296](../../packages/code/src/worktree-retirement.ts#L296) |
| `present()` | module-local function | [line 303](../../packages/code/src/worktree-retirement.ts#L303) |
| `modifiedAt()` | module-local function | [line 312](../../packages/code/src/worktree-retirement.ts#L312) |
| `lastActivity()` | module-local function | [line 321](../../packages/code/src/worktree-retirement.ts#L321) |
| `worktreeNames()` | module-local function | [line 328](../../packages/code/src/worktree-retirement.ts#L328) |
| `freeSpace()` | module-local function | [line 348](../../packages/code/src/worktree-retirement.ts#L348) |
| `describeChanges()` | module-local function | [line 363](../../packages/code/src/worktree-retirement.ts#L363) |
| `formatBytes()` | module-local function | [line 373](../../packages/code/src/worktree-retirement.ts#L373) |
| `describeWorktreeRetirement()` | exported function | [line 384](../../packages/code/src/worktree-retirement.ts#L384) |
| `inspect()` | module-local function | [line 398](../../packages/code/src/worktree-retirement.ts#L398) |
| `remove()` | module-local function | [line 463](../../packages/code/src/worktree-retirement.ts#L463) |
| `retireStaleWorktrees()` | exported function | [line 529](../../packages/code/src/worktree-retirement.ts#L529) |
| `WorktreeRetirementScheduler` | exported class | [line 655](../../packages/code/src/worktree-retirement.ts#L655) |
| `WorktreeRetirementScheduler.start()` | method | [line 664](../../packages/code/src/worktree-retirement.ts#L664) |
| `WorktreeRetirementScheduler.runNow()` | method | [line 671](../../packages/code/src/worktree-retirement.ts#L671) |
| `WorktreeRetirementScheduler.stop()` | method | [line 680](../../packages/code/src/worktree-retirement.ts#L680) |
| `WorktreeRetirementScheduler.schedule()` | private method | [line 686](../../packages/code/src/worktree-retirement.ts#L686) |
| `WorktreeRetirementScheduler.pass()` | private method | [line 693](../../packages/code/src/worktree-retirement.ts#L693) |

</details>

<details>
<summary>packages/code/src/worktrees.ts — 25 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `isInside()` | module-local function | [line 55](../../packages/code/src/worktrees.ts#L55) |
| `gitEnvironment()` | module-local function | [line 63](../../packages/code/src/worktrees.ts#L63) |
| `git()` | module-local function | [line 75](../../packages/code/src/worktrees.ts#L75) |
| `sourceConfig()` | module-local function | [line 110](../../packages/code/src/worktrees.ts#L110) |
| `hasCommittedHead()` | module-local function | [line 135](../../packages/code/src/worktrees.ts#L135) |
| `directoryIdentity()` | module-local function | [line 151](../../packages/code/src/worktrees.ts#L151) |
| `GitWorktreeManager` | exported class | [line 163](../../packages/code/src/worktrees.ts#L163) |
| `GitWorktreeManager.root()` | private method | [line 197](../../packages/code/src/worktrees.ts#L197) |
| `GitWorktreeManager.key()` | private method | [line 237](../../packages/code/src/worktrees.ts#L237) |
| `GitWorktreeManager.branch()` | private method | [line 241](../../packages/code/src/worktrees.ts#L241) |
| `GitWorktreeManager.instancePath()` | private method | [line 249](../../packages/code/src/worktrees.ts#L249) |
| `GitWorktreeManager.plannedRoot()` | method | [line 260](../../packages/code/src/worktrees.ts#L260) |
| `GitWorktreeManager.prepare()` | method | [line 275](../../packages/code/src/worktrees.ts#L275) |
| `GitWorktreeManager.admittedSourceRoot()` | private method | [line 285](../../packages/code/src/worktrees.ts#L285) |
| `GitWorktreeManager.sourceSnapshot()` | private method | [line 293](../../packages/code/src/worktrees.ts#L293) |
| `GitWorktreeManager.countInstances()` | private method | [line 307](../../packages/code/src/worktrees.ts#L307) |
| `GitWorktreeManager.withProvisioningLock()` | private method | [line 360](../../packages/code/src/worktrees.ts#L360) |
| `GitWorktreeManager.completionMarker()` | private method | [line 371](../../packages/code/src/worktrees.ts#L371) |
| `GitWorktreeManager.hasCompletionMarker()` | private method | [line 375](../../packages/code/src/worktrees.ts#L375) |
| `GitWorktreeManager.writeCompletionMarker()` | private method | [line 429](../../packages/code/src/worktrees.ts#L429) |
| `GitWorktreeManager.validateRepository()` | private method | [line 454](../../packages/code/src/worktrees.ts#L454) |
| `GitWorktreeManager.validateExisting()` | private method | [line 515](../../packages/code/src/worktrees.ts#L515) |
| `GitWorktreeManager.createLocked()` | private method | [line 536](../../packages/code/src/worktrees.ts#L536) |
| `GitWorktreeManager.create()` | private method | [line 676](../../packages/code/src/worktrees.ts#L676) |
| `GitWorktreeManager.resolve()` | method | [line 687](../../packages/code/src/worktrees.ts#L687) |

</details>

## packages/extraction/src

<details>
<summary>packages/extraction/src/backend.ts — 7 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `RestrictedBackend` | exported class | [line 36](../../packages/extraction/src/backend.ts#L36) |
| `RestrictedBackend.create()` | method | [line 39](../../packages/extraction/src/backend.ts#L39) |
| `RestrictedBackend.execute()` | private method | [line 43](../../packages/extraction/src/backend.ts#L43) |
| `RestrictedBackend.probe()` | method | [line 123](../../packages/extraction/src/backend.ts#L123) |
| `RestrictedBackend.run()` | method | [line 137](../../packages/extraction/src/backend.ts#L137) |
| `RestrictedBackend.cleanup()` | method | [line 169](../../packages/extraction/src/backend.ts#L169) |
| `writeInput()` | exported function | [line 180](../../packages/extraction/src/backend.ts#L180) |

</details>

<details>
<summary>packages/extraction/src/config.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `endpoint()` | exported function | [line 3](../../packages/extraction/src/config.ts#L3) |

</details>

<details>
<summary>packages/extraction/src/credential.ts — 2 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `tokenFile()` | exported function value | [line 4](../../packages/extraction/src/credential.ts#L4) |
| `readToken()` | exported function | [line 7](../../packages/extraction/src/credential.ts#L7) |

</details>

<details>
<summary>packages/extraction/src/protocol.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `ExtractionError` | exported class | [line 27](../../packages/extraction/src/protocol.ts#L27) |
| `keys()` | module-local function value | [line 45](../../packages/extraction/src/protocol.ts#L45) |
| `validateResult()` | exported function | [line 48](../../packages/extraction/src/protocol.ts#L48) |
| `sha256()` | exported function | [line 105](../../packages/extraction/src/protocol.ts#L105) |

</details>

<details>
<summary>packages/extraction/src/provision.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `provision()` | exported function | [line 8](../../packages/extraction/src/provision.ts#L8) |

</details>

<details>
<summary>packages/extraction/src/server.ts — 4 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `status()` | module-local function value | [line 30](../../packages/extraction/src/server.ts#L30) |
| `reply()` | module-local function | [line 44](../../packages/extraction/src/server.ts#L44) |
| `requestFormat()` | module-local function | [line 54](../../packages/extraction/src/server.ts#L54) |
| `extractionServer()` | exported function | [line 96](../../packages/extraction/src/server.ts#L96) |

</details>

## shared

<details>
<summary>shared/telemetry-core.ts — 27 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `configureTelemetry()` | exported function | [line 72](../../shared/telemetry-core.ts#L72) |
| `otel()` | module-local function | [line 81](../../shared/telemetry-core.ts#L81) |
| `positiveInt()` | exported function | [line 88](../../shared/telemetry-core.ts#L88) |
| `serviceName()` | module-local function | [line 93](../../shared/telemetry-core.ts#L93) |
| `tracingEnabled()` | module-local function | [line 99](../../shared/telemetry-core.ts#L99) |
| `runtimeName()` | module-local function | [line 103](../../shared/telemetry-core.ts#L103) |
| `cleanAttributeValue()` | module-local function | [line 107](../../shared/telemetry-core.ts#L107) |
| `setCleanAttribute()` | module-local function | [line 112](../../shared/telemetry-core.ts#L112) |
| `cleanAttributes()` | module-local function | [line 118](../../shared/telemetry-core.ts#L118) |
| `telemetryResource()` | module-local function | [line 126](../../shared/telemetry-core.ts#L126) |
| `ensureTelemetryInitialized()` | module-local function | [line 137](../../shared/telemetry-core.ts#L137) |
| `shutdownTelemetry()` | exported function | [line 159](../../shared/telemetry-core.ts#L159) |
| `carrierGetter()` | module-local function | [line 186](../../shared/telemetry-core.ts#L186) |
| `sanitizedCarrier()` | module-local function | [line 193](../../shared/telemetry-core.ts#L193) |
| `extractTraceContext()` | exported function | [line 203](../../shared/telemetry-core.ts#L203) |
| `withTraceContext()` | exported function | [line 212](../../shared/telemetry-core.ts#L212) |
| `captureTraceCarrier()` | exported function | [line 216](../../shared/telemetry-core.ts#L216) |
| `injectTraceHeaders()` | exported function | [line 224](../../shared/telemetry-core.ts#L224) |
| `normalizeTracePath()` | exported function | [line 231](../../shared/telemetry-core.ts#L231) |
| `otelSpanKind()` | module-local function | [line 254](../../shared/telemetry-core.ts#L254) |
| `exceptionType()` | module-local function | [line 265](../../shared/telemetry-core.ts#L265) |
| `safeStatusMessage()` | module-local function | [line 269](../../shared/telemetry-core.ts#L269) |
| `createSpanFacade()` | module-local function | [line 273](../../shared/telemetry-core.ts#L273) |
| `bindEmitterToTraceContext()` | module-local function | [line 303](../../shared/telemetry-core.ts#L303) |
| `noopSpan()` | module-local function | [line 332](../../shared/telemetry-core.ts#L332) |
| `withSpan()` | exported function | [line 341](../../shared/telemetry-core.ts#L341) |
| `traceHttpRequest()` | exported function | [line 374](../../shared/telemetry-core.ts#L374) |

</details>

<details>
<summary>shared/telemetry-test-suite.ts — 1 symbols</summary>

| Symbol | Kind | Source |
|---|---|---|
| `runTelemetryPrivacyGuardTests()` | exported function | [line 31](../../shared/telemetry-test-suite.ts#L31) |

</details>
