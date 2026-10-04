import { Cart } from "./cart";
import { priceWithTax } from "./pricing";

export function quote(cart: Cart, taxRate: number, shippingCents: number): number {
  return cart.total(taxRate) + priceWithTax(shippingCents, taxRate);
}

export function aldenE2eRound(value: number): number {
  return value > 100 ? value * 0.9 : value;
}
