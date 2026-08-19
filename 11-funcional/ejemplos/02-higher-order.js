// 02-higher-order.js — Higher-order functions

// Un higher-order function es una que recibe O devuelve OTRAS funciones.
// Es como un gerente que reparte tareas: no hace el trabajo, le dice a otros que lo hagan.

// --- RECIBIR UNA FUNCION ---
function aplicarDosVeces(fn, valor) {
  return fn(fn(valor));
}
const duplicar = x => x * 2;
console.log('Dos veces duplicar 5:', aplicarDosVeces(duplicar, 5)); // 20

// --- DEVOLVER UNA FUNCION (factory) ---
// Una factory es una fabrica de funciones: le das un ingrediente
// y te devuelve una funcion lista para usar.
function crearMultiplicador(factor) {
  return (numero) => numero * factor;
}
const porTres = crearMultiplicador(3);
const porDiez = crearMultiplicador(10);
console.log('porTres(10):', porTres(10));     // 30
console.log('porDiez(10):', porDiez(10));     // 100
console.log('porTres(2.5):', porTres(2.5));   // 7.5

// --- MAP: transformar cada elemento ---
const numeros = [1, 2, 3, 4, 5];
const alCuadrado = numeros.map(n => n * n);
console.log('Cuadrados:', alCuadrado); // [1, 4, 9, 16, 25]

// --- FILTER: quedarse con los que cumplen ---
const pares = numeros.filter(n => n % 2 === 0);
console.log('Pares:', pares); // [2, 4]

// --- REDUCIR a un solo valor ---
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log('Suma total:', suma); // 15

// --- COMBINANDO: filter + map + reduce ---
const precios = [100, 200, 150, 80, 300];
const totalMayoresA100 = precios
  .filter(p => p > 100)           // [200, 150, 300]
  .map(p => p * 0.9)              // [180, 135, 270] (con 10% descuento)
  .reduce((acc, p) => acc + p, 0); // 585
console.log('Total con descuento (>100):', totalMayoresA100); // 585
