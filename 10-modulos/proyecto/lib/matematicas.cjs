// proyecto/lib/matematicas.cjs — Modulo CommonJS

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

function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

function esPar(n) {
  return n % 2 === 0;
}

module.exports = { sumar, restar, multiplicar, dividir, potencia, esPar };
