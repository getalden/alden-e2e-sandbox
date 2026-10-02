import { Cart } from "./cart";
import { priceWithTax } from "./pricing";

export function quote(cart: Cart, taxRate: number, shippingCents: number): number {
  return cart.total(taxRate) + priceWithTax(shippingCents, taxRate);
}
