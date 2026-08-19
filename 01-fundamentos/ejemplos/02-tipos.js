// 02-tipos.js — Tipos de datos y typeof

const num = 42;
const dec = 3.14;
const txt = 'Hola mundo';
const bool = true;
let indefinido;
const nulo = null;
const arr = [1, 2, 3];
const obj = { nombre: 'Ana' };

// typeof es como la etiqueta del frasco: te dice qué material hay adentro
console.log(typeof num);        // number
console.log(typeof dec);        // number
console.log(typeof txt);        // string
console.log(typeof bool);       // boolean
console.log(typeof indefinido); // undefined: declarada pero sin valor
console.log(typeof nulo);       // object  (bug histórico de JS: null "no está vacío de etiqueta")
console.log(typeof arr);        // object (los arrays también son objetos, como una caja con compartimentos)
console.log(typeof obj);        // object

// Curiosidades numéricas
console.log(0.1 + 0.2);         // 0.30000000000000004 (precisión flotante: limitación de todos los lenguajes, no un bug de JS)
console.log(10 / 0);            // Infinity (dividir entre cero no explota, da infinito)
console.log('abc' * 2);         // NaN (Not a Number: no se puede multiplicar texto por número)
console.log(isNaN(NaN));        // true (NaN no es igual a sí mismo: NaN !== NaN)
console.log(Number.isNaN(NaN)); // true (usa Number.isNaN en vez de isNaN: es más estricto)

// Conversiones: pasar un valor de un material a otro
console.log(Number('42'));      // 42 (texto a número: el "123" escrito pasa a ser el número 123)
console.log(String(42));        // '42' (número a texto: el 42 pasa a ser el "42" escrito)
console.log(Boolean(0));        // false (el cero es "no hay nada" en booleano)
console.log(Boolean(''));       // false (el texto vacío también es "no hay nada")
console.log(Boolean('texto'));  // true (cualquier texto con algo adentro es "sí")
