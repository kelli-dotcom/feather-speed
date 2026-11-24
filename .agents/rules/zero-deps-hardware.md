---
trigger: glob
globs:
  - "src/**"
  - "bin/**"
description: Enforce zero npm dependencies and node:os hardware-tier parity in feather-speed.
---

# Feather Speed Zero-Deps & Hardware Tier Invariant

1. **Zero Dependencies:** Never add runtime npm dependencies; use Node/Bun built-ins (`node:os`) and standard browser APIs only.
2. **Hardware Tier Parity:** Keep `ECO`, `BALANCED`, and `ULTRA` RAM/CPU detection thresholds consistent across backend and frontend guidance.
3. **CLI Verification:** Run `node bin/feather-perf.mjs diagnose` (or Bun equivalent) after any edit to verify exit code `0`.
