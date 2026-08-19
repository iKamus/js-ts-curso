// uso-esm.mjs — Consumir modulo ES
// Corre: node uso-esm.mjs

import mensaje, { sumar, restar, multiplicar, dividir, PI } from './lib/matematicas.mjs';

console.log('--- Named exports ---');
console.log('sumar(2, 3):', sumar(2, 3));              // 5
console.log('restar(10, 4):', restar(10, 4));          // 6
console.log('multiplicar(3, 7):', multiplicar(3, 7));  // 21
console.log('dividir(10, 2):', dividir(10, 2));        // 5
console.log('PI:', PI);                                 // 3.1416

console.log('\n--- Default export ---');
console.log(mensaje());  // Modulo de matematicas cargado
