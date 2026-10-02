import { priceWithTax } from "../pricing";

export function chargeAmount(subtotalCents: number, taxRate: number): number {
  return priceWithTax(subtotalCents, taxRate);
}
