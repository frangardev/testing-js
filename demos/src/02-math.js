function sum(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divider(a, b) {
  // Al hacer el test de dividir entre 0 nos dio error y esta es una forma de corregirlo
  if (b === 0) return null;
  return a / b;
}
function expo(a, b) {
  return a ** b;
}
function sqrt(a) {
  if (a < 0) return null;
  return Math.sqrt(a);
}
module.exports = {
  sum, subtraction, multiply, divider, expo, sqrt,
};
