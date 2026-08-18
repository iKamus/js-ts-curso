// 01-closures.js — Closures

// Un closure es una función que se "acuerda" del lugar donde nació.
// Acá la variable cuenta queda guardada adentro de la función,
// como un secreto en una mochila privada que nadie más ve.

function crearContador() {
  let cuenta = 0; // variable privada, solo accesible desde dentro
  return {
    incrementar() { cuenta++; return cuenta; },
    ver() { return cuenta; },
    reset() { cuenta = 0; },
  };
}

const contador = crearContador();
contador.incrementar();
contador.incrementar();
console.log(contador.ver()); // 2
// console.log(cuenta); // ERROR: no existe afuera
// Fijate: cuenta es privada, nadie de afuera la puede tocar.
// Es como el diario íntimo que no le mostrás a nadie.

// cada llamada a crearContador crea un entorno SEPARADO
// Cada contador tiene su propia mochila: los dos son independientes
// y no se pisan entre sí, como dos compañeros con su propio cuaderno.
const contador2 = crearContador();
contador2.incrementar();
console.log(contador2.ver()); // 1
console.log(contador.ver());  // 2 (no se pisan)