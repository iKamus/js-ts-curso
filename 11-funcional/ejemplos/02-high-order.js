// 02-high-order.js — Higher-order functions

// Recibir una función como parámetro
// Las funciones también pueden recibir trabajo: acá le pasamos una
// función y ella la usa, como un encargado que reparte las tareas.
function aplicarDosVeces(fn, valor) {
  return fn(fn(valor));
}
const duplicar = x => x * 2;
console.log(aplicarDosVeces(duplicar, 5)); // 20

// Devolver una función (factory)
// Una factory es una fábrica de funciones: le das un ingrediente
// (el factor) y te devuelve una función lista para usar,
// como pedir la máquina de cortar fiambre y que te la entreguen armada.
function crearMultiplicador(factor) {
  return (numero) => numero * factor;
}
const porTres = crearMultiplicador(3);
console.log(porTres(10)); // 30

// callbacks: pasar comportamiento
// Un callback es la función que se ejecuta para cada elemento,
// como quien revisa la fila del banco y decide quién sigue.
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.filter(n => n % 2 === 0));       // [2, 4]
console.log(numeros.map(n => n * 10));               // [10,20,30,40,50]
console.log(numeros.reduce((acc, n) => acc + n, 0)); // 15