// 04-path.js — Descomponer rutas
// Las rutas son direcciones para llegar a un archivo. Acá vemos cómo
// desarmarlas en partes, como leer la etiqueta de una carta y separar
// nombre, calle y ciudad.

const path = require('path');

const archivo = 'C:\\proyecto\\src\\main.js';

console.log(path.basename(archivo));   // main.js
console.log(path.dirname(archivo));    // C:\proyecto\src
console.log(path.extname(archivo));    // .js
console.log(path.parse(archivo));      // { root, dir, base, ext, name }

// construir rutas (maneja separadores por plataforma):
// path.join arma la dirección completa, no importa si el sistema
// usa \ o /, como un GPS que arma el recorrido por vos
console.log(path.join('a', 'b', 'c.txt'));     // a\b\c.txt (Windows)
console.log(path.resolve('modulos', '01.md')); // ruta absoluta desde cwd