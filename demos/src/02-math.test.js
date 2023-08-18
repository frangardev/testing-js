const { sum, subtraction, multiply, divider, expo, sqrt } = require("./02-math");

test("sum of 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("subtraction 5 - 2 should be 3", () => {
  const rta = subtraction(5, 2);
  expect(rta).toBe(3);
});

test("multiply 3 * 5 should be 15", () => {
  const rta = multiply(3, 5);
  expect(rta).toBe(15);
});

test("should divide", () => {
  const rta = divider(6, 3);
  expect(rta).toBe(2);

  const rta2 = divider(5, 2);
  expect(rta2).toBe(2.5);
});

test("should divider by 0", () => {
  const rta = divider(6, 0);
  expect(rta).toBe(null);

  const rta2 = divider(5, 0);
  expect(rta2).toBe(null);
});

test("exponent", () => {
  const rta = expo(3, 3);
  expect(rta).toBe(27);

  const rta2 = expo(5, 2);
  expect(rta2).toBe(25);
});

test("square root ", () => {
  const rta = sqrt(9);
  expect(rta).toBe(3);

  const rta2 = sqrt(0);
  expect(rta2).toBe(0);
});

test("negative square root ", () => {
  const rta = sqrt(-1);
  expect(rta).toBe(null);
});
