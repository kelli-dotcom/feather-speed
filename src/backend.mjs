/**
 * Feather Perf — Backend Hardware-Aware Resource Auto-Tuner (0 dependencies)
 * Reads live host RAM and CPU cores via node:os to auto-tune concurrency,
 * DB connection pools, batch sizes, and timeouts without ever hitting OOM.
 */
import os from "node:os";

export function detectBackendProfile() {
  const totalBytes = os.totalmem();
  const freeBytes = os.freemem();
  const totalRamGb = Number((totalBytes / 1024 ** 3).toFixed(2));
  const freeRamGb = Number((freeBytes / 1024 ** 3).toFixed(2));
  const cpuCores = Math.max(1, os.cpus().length);

  let tier = "balanced";
  if (totalRamGb <= 2 || freeRamGb < 0.75 || cpuCores <= 2) {
    tier = "eco";
  } else if (totalRamGb >= 16 && freeRamGb >= 4 && cpuCores >= 8) {
    tier = "ultra";
  }

  const maxConcurrency =
    tier === "eco"
      ? Math.min(4, cpuCores * 2)
      : tier === "ultra"
        ? Math.min(32, cpuCores * 3)
        : Math.min(16, cpuCores * 2);

  const dbPoolMax = tier === "eco" ? 4 : tier === "ultra" ? 20 : 10;
  const batchSize = tier === "eco" ? 25 : tier === "ultra" ? 200 : 75;
  const fetchTimeoutMs = tier === "eco" ? 8000 : 5500;

  return {
    tier,
    totalRamGb,
    freeRamGb,
    cpuCores,
    budgets: {
      maxConcurrency,
      dbPoolMax,
      batchSize,
      fetchTimeoutMs,
    },
  };
}
