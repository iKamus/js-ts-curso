// lib/matematicas.mjs — Módulo ES
// Acá en vez de module.exports usamos la palabra export delante de lo que
// queremos compartir: eso son los named exports (los que tienen nombre).
// Y el export default es el protagonista único del archivo: solo puede
// haber uno, como el plato del día del comedor.

export function sumar(a, b) {
  return a + b;
}
export function restar(a, b) {
  return a - b;
}
export const PI = 3.1416;

export default function mensaje() {
  return 'Soy el export default';
}