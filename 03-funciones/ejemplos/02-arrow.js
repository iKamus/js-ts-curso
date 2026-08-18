// 02-arrow.js — Arrow functions

// La versión cortita de la función, con la flecha => en vez de la palabra function
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // 5

// sin parámetros (no necesita ingredientes, como la receta de agua tibia)
const anioActual = () => new Date().getFullYear();
console.log(anioActual());

// un parámetro sin paréntesis (opcional, se puede abreviar)
const doble = x => x * 2;
console.log(doble(10)); // 20

// cuerpo con llaves: necesitás return explícito (ahí sí tenés que escribir return)
const mayor = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log(mayor(3, 7)); // 7

// las arrows se suelen usar como callbacks (funciones que se pasan como dato)
const numeros = [1, 2, 3];
console.log(numeros.map(n => n * n)); // [1, 4, 9]

// NOTA: las arrow NO tienen su propio `this`, lo heredan (lo vemos en clases y callbacks).