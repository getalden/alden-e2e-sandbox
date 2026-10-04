import { lineTotal, type Line } from "./pricing";

export function receiptLines(lines: Line[]): string[] {
  return lines.map((line) => `${line.sku} x${line.quantity}: ${(lineTotal(line) / 100).toFixed(2)}`);
}

export const aldenE2eFlag = process.env.ALDEN_E2E_FEATURE_FLAG === "on";
