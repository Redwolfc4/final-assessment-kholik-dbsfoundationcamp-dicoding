import { sum } from "./index";
import { it, describe, expect } from "bun:test";

describe("Sum", () => {
  it("1 + 1 harus menghasilkan 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
