// lib/matematicas.cjs — Modulo CommonJS
// Exporta funciones matematicas usando module.exports

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) return 'Error: division por cero';
  return a / b;
}

const PI = 3.1416;

module.exports = { sumar, restar, multiplicar, dividir, PI };
