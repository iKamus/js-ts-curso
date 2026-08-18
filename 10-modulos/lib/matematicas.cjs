// lib/matematicas.cjs — Módulo CommonJS
// Este archivo es como un paquete con utilidades: juntamos funciones
// que sirven para calcular y las exportamos con module.exports
// para que otros archivos las pidan y las usen cuando quieran.

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
const PI = 3.1416;

module.exports = { sumar, restar, PI };