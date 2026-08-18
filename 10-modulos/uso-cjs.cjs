// uso-cjs.cjs — Consumir CommonJS
// Corré: node uso-cjs.cjs
// Acá vamos a "pedir" el paquete que armamos en lib/matematicas.cjs
// usando require, como retirar el encargo del almacén.

const mat = require('./lib/matematicas.cjs');
console.log(mat.sumar(2, 3));    // 5
console.log(mat.restar(10, 4));   // 6
console.log(mat.PI);              // 3.1416

// destructuring del require
// También podés "desarmar" el objeto y quedarte solo con lo que precisás,
// como sacar de la mochila únicamente el cuaderno de matemática.
const { sumar } = require('./lib/matematicas.cjs');
console.log(sumar(1, 1)); // 2