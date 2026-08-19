// uso-cjs.cjs — Consumir modulo CommonJS
// Corre: node uso-cjs.cjs

const mat = require('./lib/matematicas.cjs');

console.log('--- Modulo completo ---');
console.log('sumar(2, 3):', mat.sumar(2, 3));        // 5
console.log('restar(10, 4):', mat.restar(10, 4));    // 6
console.log('multiplicar(3, 7):', mat.multiplicar(3, 7)); // 21
console.log('dividir(10, 2):', mat.dividir(10, 2));  // 5
console.log('PI:', mat.PI);                           // 3.1416

console.log('\n--- Con destructuring ---');
const { sumar, PI } = require('./lib/matematicas.cjs');
console.log('sumar(1, 1):', sumar(1, 1));  // 2
console.log('PI:', PI);                     // 3.1416
