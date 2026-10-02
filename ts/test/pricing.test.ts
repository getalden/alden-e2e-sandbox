import { describe, expect, it } from "vitest";
import { priceWithTax } from "../src/pricing";

describe("priceWithTax", () => {
  it("adds tax", () => {
    expect(priceWithTax(1000, 0.2)).toBe(1200);
  });
});
