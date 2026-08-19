// 04-path.js — Descomponer y construir rutas
// Las rutas son direcciones para llegar a un archivo. Acá vemos cómo
// desarmarlas en partes y cómo armarlas bien, como leer la etiqueta
// de una carta y separar nombre, calle y ciudad.

const path = require('path');

const archivo = 'C:\\proyecto\\src\\main.js';

// --- basename, dirname, extname ---
// Extraen partes de la ruta sin tener que andar cortando strings
console.log(path.basename(archivo));   // main.js — nombre completo
console.log(path.dirname(archivo));    // C:\proyecto\src — carpeta
console.log(path.extname(archivo));    // .js — extension (con el punto)

// --- parse ---
// Devuelve un objeto con todas las partes de la ruta
const partes = path.parse(archivo);
console.log('\nparsed:', partes);
// {
//   root: 'C:\\',
//   dir: 'C:\\proyecto\\src',
//   base: 'main.js',
//   ext: '.js',
//   name: 'main'
// }

// --- join ---
// Arma una ruta con el separador correcto de tu sistema operativo.
// En Windows usa \, en Linux/Mac usa /.
// No hace falta pensar en eso: join lo resuelve por vos.
console.log('\njoin:', path.join('a', 'b', 'c.txt'));       // a\b\c.txt
console.log('join con ..:', path.join('carpeta', '..', 'data', 'archivo.txt'));

// --- resolve ---
// Arma una ruta absoluta desde la carpeta actual (cwd).
// Es como un GPS que parte de donde estas parado.
console.log('\nresolve:', path.resolve('modulos', '01.md'));
// Algo como: C:\Users\yo\proyecto\modulos\01.md
