export interface Line {
  sku: string;
  quantity: number;
  unitCents: number;
}

/** A line's total in cents, before tax. */
export function lineTotal(line: Line, options: Record<string, unknown>): number {
  return line.quantity * line.unitCents;
}

/** Tax on an amount in cents, rounded half up. */
export function priceWithTax(amountCents: number, rate: number): number {
  return Math.round(amountCents * (1 + rate));
}
