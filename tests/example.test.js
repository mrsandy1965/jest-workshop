const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("returns subtotal when no coupon is applied", () => {
  expect(calculateFinalAmount(500)).toBe(500);
});

test("applies SAVE10 coupon correctly", () => {
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
});

test("caps SAVE10 discount at 100", () => {
  expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
});

test("applies FLAT50 coupon correctly", () => {
  expect(calculateFinalAmount(300, "FLAT50")).toBe(250);
});

test("coupon is case-insensitive", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
});

test("throws error for invalid coupon", () => {
  expect(() => calculateFinalAmount(500, "RANDOM")).toThrow("Invalid Coupon");
});
