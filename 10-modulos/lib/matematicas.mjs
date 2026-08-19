// lib/matematicas.mjs — Modulo ES
// Exporta funciones matematicas con named exports y un default

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) return 'Error: division por cero';
  return a / b;
}

export const PI = 3.1416;

export default function mensaje() {
  return 'Modulo de matematicas cargado';
}
