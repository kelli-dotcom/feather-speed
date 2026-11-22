# Feather Perf — Mistakes & Guardrails (`mistakes.md`)

### 1. Hardcoded High Concurrency Causes OOM on Low-RAM Hosts
- **What Happened:** Running unbounded `Promise.all` fetches across dozens of external APIs spikes heap memory and causes timeout/OOM errors on low-RAM laptops or `$5` VPS containers.
- **Never Repeat:** Always derive worker concurrency and DB pool limits dynamically from `os.freemem()` and `os.cpus().length` via `detectBackendProfile()`.
