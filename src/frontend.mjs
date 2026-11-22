/**
 * Feather Perf — Frontend Hardware-Aware Adaptive Profile Detector (0 dependencies)
 * Reads real browser RAM, CPU cores, Save-Data, network speed, and reduced-motion
 * to automatically adapt rendering budgets to the user's actual device.
 */
export function detectFrontendProfile(nav = typeof navigator !== "undefined" ? navigator : null) {
  const ramGb = Number(nav?.deviceMemory ?? 4);
  const cpuCores = Number(nav?.hardwareConcurrency ?? 4);
  const conn = nav?.connection ?? nav?.mozConnection ?? nav?.webkitConnection ?? null;
  const effectiveType = conn?.effectiveType ?? "4g";
  const saveData = Boolean(conn?.saveData ?? false);
  const reducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isSlowNetwork = effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g";

  let tier = "balanced";
  if (saveData || isSlowNetwork || ramGb <= 2 || cpuCores <= 2) {
    tier = "eco";
  } else if (ramGb >= 8 && cpuCores >= 8 && !reducedMotion) {
    tier = "ultra";
  }

  return {
    tier,
    ramGb,
    cpuCores,
    effectiveType,
    saveData,
    reducedMotion,
    budgets:
      tier === "eco"
        ? { pageSize: 20, enableAnimations: false, enableBackdropBlur: false, prefetchLinks: false, imageQuality: 65 }
        : tier === "ultra"
          ? { pageSize: 100, enableAnimations: !reducedMotion, enableBackdropBlur: true, prefetchLinks: true, imageQuality: 85 }
          : { pageSize: 50, enableAnimations: !reducedMotion, enableBackdropBlur: false, prefetchLinks: true, imageQuality: 75 },
  };
}
