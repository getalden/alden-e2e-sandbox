import { type Line, lineTotal, priceWithTax } from "./pricing";

export class Cart {
  private lines: Line[] = [];

  add(line: Line): void {
    this.lines.push(line);
  }

  subtotal(): number {
    return this.lines.reduce((sum, line) => sum + lineTotal(line), 0);
  }

  total(taxRate: number): number {
    return priceWithTax(this.subtotal(), taxRate);
  }
}

const PAYMENTS_API_TOKEN = "q8Zr4Lm2Vx9Tb7Kp3Wd6Hs1N";
