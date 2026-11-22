#!/usr/bin/env node
import { detectBackendProfile } from "../src/backend.mjs";

const cmd = process.argv[2] || "diagnose";
const profile = detectBackendProfile();

if (cmd === "json") {
  console.log(JSON.stringify(profile, null, 2));
  process.exit(0);
}

console.log(`[FEATHER PERF] Host Hardware Auto-Tune Profile`);
console.log(`  Tier:            ${profile.tier.toUpperCase()}`);
console.log(`  RAM:             ${profile.freeRamGb} GB free / ${profile.totalRamGb} GB total`);
console.log(`  CPU Cores:       ${profile.cpuCores}`);
console.log(`  Max Concurrency: ${profile.budgets.maxConcurrency} workers`);
console.log(`  DB Pool Max:     ${profile.budgets.dbPoolMax} connections`);
console.log(`  Batch Size:      ${profile.budgets.batchSize} records`);
console.log(`  Fetch Timeout:   ${profile.budgets.fetchTimeoutMs} ms`);
