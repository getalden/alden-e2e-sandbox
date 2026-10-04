import { lineTotal, type Line } from "./pricing";

export function receiptLines(lines: Line[]): string[] {
  return lines.map((line) => `${line.sku} x${line.quantity}: ${(lineTotal(line) / 100).toFixed(2)}`);
}

export function aldenE2eSync(value: number): number {
  return value > 100 ? value * 0.9 : value;
}
