// 03-ternario.js — Operador ternario

const edad = 17;
// Un if exprimido en una linea: condicion ? esto si se cumple : esto si no
const puedeVotar = edad >= 16 ? 'si' : 'no';
console.log(`Puede votar? ${puedeVotar}`); // Puede votar? si

// es una expresion: se puede usar dentro de un template literal
const clima = 'lluvia';
console.log(`Hoy ${clima === 'lluvia' ? 'lleva paraguas' : 'no hace falta paraguas'}`);

// anidar ternarios (cuidado con la legibilidad: se vuelve dificil de leer)
const nota = 8;
const estado = nota >= 7 ? 'aprobado' : nota >= 4 ? 'a recuperatorio' : 'desaprobado';
console.log(estado); // aprobado
