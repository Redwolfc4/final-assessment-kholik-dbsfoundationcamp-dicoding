import sum from "./index";
import { it, describe, expect } from "bun:test";

describe("Full Coverage Testing", () => {
  it("should number one plus number one is two", () => {
    expect(sum(1, 1)).toBe(2);
  });

  it("should string one plus number one is zero", () => {
    expect(sum("1", 1)).toBe(0);
  });

  it("should number one plus string one is zero", () => {
    expect(sum(1, "1")).toBe(0);
  });

  it("should one choice number params is less than number zero is zero", () => {
    expect(sum(-1, 1)).toBe(0);
    expect(sum(1, -19)).toBe(0);
  });
});
