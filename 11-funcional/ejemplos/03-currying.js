// 03-currying.js — Currying, composición y funciones puras

// Currying: f(a, b) → f(a)(b)
// En vez de pasar los dos argumentos juntos, los pasás de a uno.
// Es como armar un sándwich: primero elegís el pan y después el relleno.
const sumar = (a) => (b) => a + b;
console.log(sumar(2)(3)); // 5

// útil para reutilizar config
// Preparás una vez la configuración y la reutilizás para todo:
// como dejar lista la salsa y usarla en varios platos sin repetir el trabajo.
const sumarIVA = (iva) => (precio) => precio * (1 + iva);
const iva21 = sumarIVA(0.21);
console.log(iva21(100)); // 121

// composición: encadenar funciones
// Cada función hace su parte y le pasa el resultado a la siguiente,
// como una cadena de producción: pelás, cortás y cocinás.
const toUpperCase = (s) => s.toUpperCase();
const exclamar = (s) => `${s}!`;
const gritar = (s) => exclamar(toUpperCase(s));
console.log(gritar('hola')); // HOLA!

// funciones puras: mismo input → mismo output, sin efectos externos
// Con los mismos ingredientes sale siempre la misma comida,
// y no ensuciás nada de afuera mientras cocinás.
function pura(a, b) {
  return a + b;
}
console.log(pura(2, 3)); // 5
console.log(pura(2, 3)); // 5 (siempre lo mismo)