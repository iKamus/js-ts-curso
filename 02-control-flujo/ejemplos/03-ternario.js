// 03-ternario.js — Operador ternario

const edad = 17;
// Un if exprimido en una línea: condición ? esto si se cumple : esto si no
const puedeVotar = edad >= 16 ? 'sí' : 'no';
console.log(`¿Puede votar? ${puedeVotar}`); // ¿Puede votar? sí

// es una expresión: se puede usar dentro de un template literal
const clima = 'lluvia';
console.log(`Hoy ${clima === 'lluvia' ? 'llevá paraguas' : 'no hace falta paraguas'}`);

// anidar ternarios (cuidado con la legibilidad: se vuelve difícil de leer)
const nota = 8;
const estado = nota >= 7 ? 'aprobado' : nota >= 4 ? 'a recuperatorio' : 'desaprobado';
console.log(estado); // aprobado