// 03-math.js -- Math y aleatorios
// Math es como la calculadora de la clase: un monton de funciones listas para usar.

console.log(Math.max(4, 9, 2));   // 9
console.log(Math.min(4, 9, 2));   // 2
console.log(Math.floor(3.9));     // 3  (hacia abajo)
console.log(Math.ceil(3.1));      // 4  (hacia arriba)
console.log(Math.round(3.5));     // 4
console.log(Math.round(3.4));     // 3
console.log(Math.abs(-7));        // 7
console.log(Math.pow(2, 3));      // 8
console.log(Math.sqrt(81));       // 9

// Aleatorio entre min y max (inclusive)
// Math.random() te da un numero entre 0 y 1; con esta receta lo convertis en un entero de tu rango,
// como tirar un dado pero con el tamaño que elijas.
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('aleatorio 1-10:', randomInt(1, 10));
console.log('aleatorio 1-10:', randomInt(1, 10));
console.log('aleatorio 1-10:', randomInt(1, 10));

// Math.max sobre un array con spread
// El spread "desparrama" el array y Math.max agarra todos los numeros de una.
const nums = [3, 7, 2, 9];
console.log(Math.max(...nums)); // 9
