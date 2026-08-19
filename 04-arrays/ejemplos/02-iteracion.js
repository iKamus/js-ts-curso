// 02-iteracion.js -- Recorrer arrays
// Recorrer es leer la lista de compras de punta a punta. Acá vas a ver tres formas de hacerlo.

const nums = [10, 20, 30];

// for clasico (con indice)
// La forma "a la vieja escuela": controlas vos el contador, como contar con los dedos.
for (let i = 0; i < nums.length; i++) {
  console.log('for:', nums[i]);
}

// for...of (mas legible, sin indice)
// Va directo al valor, sin preocuparte por el contador. Ideal para leer la lista sin vueltas.
for (const n of nums) {
  console.log('for...of:', n);
}

// forEach (con valor e indice)
// Le dice al array: "haz esto con cada elemento". Te pasa el valor y el lugar.
nums.forEach((n, indice) => {
  console.log(`forEach posicion ${indice}: ${n}`);
});

// destructuring en for...of
// Si cada elemento es un par, podes "abrirlo" al vuelo, como sacar dos cosas juntas de la mochila.
const pares = [[1, 'uno'], [2, 'dos']];
for (const [num, nombre] of pares) {
  console.log(num, nombre);
}
