// 01-objetos-basico.js — Objetos: crear y acceder
// Un objeto es como la ficha del cuaderno: varias casillas con datos, todas juntas.

const persona = {
  nombre: 'Ana',
  edad: 30,
  'ciudad natal': 'Córdoba',  // clave con espacio → solo corchete
};

// Acceso
// Con el punto agarrás la casilla por su nombre; con corchetes, para claves con espacios o raras.
console.log(persona.nombre);           // Ana
console.log(persona['edad']);          // 30
console.log(persona['ciudad natal']);  // Córdoba

// Agregar / modificar / borrar
// Es como anotar, corregir o tachar una casilla de la ficha.
persona.profesion = 'Ingeniera';
persona.edad = 31;
delete persona['ciudad natal'];
console.log(persona); // { nombre: 'Ana', edad: 31, profesion: 'Ingeniera' }

// Claves dinámicas
// Si la clave está en una variable, la encerrás en corchetes para que use el valor.
const clave = 'dni';
const info = { [clave]: '12.345.678' };
console.log(info.dni); // 12.345.678

// Short syntax: si la variable se llama igual que la clave
// Ahorrás tipeo: si la variable y la casilla se llaman igual, va sin repetir el nombre.
const x = 5;
const y = 10;
const punto = { x, y };
console.log(punto); // { x: 5, y: 10 }
