# Feather Perf — Adaptive Lightweight Web & App Spec (`design-spec/ADAPTIVE_PERF_SPEC.md`)

> **Owner:** CRTA Tech Solutions · MIT License  
> **Goal:** Make every frontend & backend app automatically adapt to the user's real RAM, CPU cores, and network conditions so it runs fast and accurately on both a 2 GB Chromebook and a 64 GB workstation.

## 1. Frontend Budgets (Adaptive Loading)
Read real browser signals (`navigator.deviceMemory`, `navigator.hardwareConcurrency`, `navigator.connection`, `prefers-reduced-motion`):
- **First Load JS Budget:** `< 130 kB` gzipped for primary routes.
- **Zero Heavy Runtime Bloat:** Prefer native CSS variables (`feather-themes`) and GPU-composited transforms (`transform`, `opacity`, `filter`) over JS animation libraries.
- **Tier Scaling:**
  - `eco` (`<= 2 GB` RAM, `<= 2` cores, `2g`/`3g`, or `saveData`): `pageSize = 20`, disable animations & `backdrop-blur`, disable link prefetching.
  - `balanced` (`4–8 GB` RAM, `4g`): `pageSize = 50`, subtle GPU-only motion, lazy-load below-the-fold media.
  - `ultra` (`>= 8 GB` RAM, `>= 8` cores): `pageSize = 100`, full instant filtering & prefetching.

## 2. Backend Budgets (Hardware-Aware Concurrency)
Read real host signals (`os.totalmem()`, `os.freemem()`, `os.cpus().length`):
- **Never Hardcode High Concurrency:** Hardcoding `Promise.all` across 100+ external requests crashes 512 MB–1 GB containers with OOM.
- **Auto-Tuned Worker Pools:**
  - `eco` (`<= 2 GB` total or `< 0.75 GB` free): `maxConcurrency <= 4`, `dbPoolMax = 4`, `batchSize = 25`.
  - `balanced`: `maxConcurrency <= 16`, `dbPoolMax = 10`, `batchSize = 75`.
  - `ultra` (`>= 16 GB` total & `>= 4 GB` free): `maxConcurrency <= 32`, `dbPoolMax = 20`, `batchSize = 200`.
- **Stream & Discard Large Payloads:** Inspect large HTML/JSON responses in memory (first `32 KB` where possible) and discard immediately so heap stays flat.
