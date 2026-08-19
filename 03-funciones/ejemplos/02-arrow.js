// 02-arrow.js — Arrow functions

// La version cortita de la funcion, con la flecha => en vez de la palabra function
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // 5

// Sin parametros (no necesita ingredientes, como la receta de agua tibia)
const anioActual = () => new Date().getFullYear();
console.log(anioActual());

// Un parametro sin parentesis (opcional, se puede abreviar)
const doble = x => x * 2;
console.log(doble(10)); // 20

// Cuerpo con llaves: necesitas return explicito (ahi si que escribir return)
const mayor = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log(mayor(3, 7)); // 7

// Las arrows se suelen usar como callbacks (funciones que se pasan como dato)
const numeros = [1, 2, 3];
console.log(numeros.map(n => n * n)); // [1, 4, 9]

// NOTA: las arrow NO tienen su propio `this`, lo heredan (lo vemos en clases y callbacks).
