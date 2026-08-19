// 02-fs-basico.js — fs sincrono
// Abrir un archivo es como abrir un cuaderno: leer, escribir, agregar
// al final o arrancar la hoja. Acá todo se hace de una (sincrono):
// una cosa a la vez, como seguir una receta paso a paso.

const fs = require('fs');
const path = require('path');

// --- readFileSync ---
// Armamos la ruta con path.join: sube una carpeta con '..' y entra a data/
const ruta = path.join(__dirname, '..', 'data', 'sample.txt');

// Leemos el archivo. 'utf8' es el encoding: sin eso devuelve un Buffer
const contenido = fs.readFileSync(ruta, 'utf8');
console.log('Contenido:\n' + contenido);

// --- existsSync ---
// Revisa si un archivo o carpeta existe. Como revisar si el cuaderno
// esta en la mochila antes de buscarlo.
console.log('existe:', fs.existsSync(ruta));

// --- writeFileSync y appendFileSync ---
// writeFileSync: escribe y SOBREESCRIBE todo lo anterior
// appendFileSync: agrega al final, sin borrar lo que ya hay
const salida = path.join(__dirname, 'salida.txt');
fs.writeFileSync(salida, 'esto lo escribi yo\n');
fs.appendFileSync(salida, 'y esto lo agregue\n');
console.log('\nContenido del archivo de salida:');
console.log(fs.readFileSync(salida, 'utf8'));

// --- unlinkSync ---
// Borrar: tiras la hoja y queda limpio
fs.unlinkSync(salida);
console.log('archivo borrado');

// --- renameSync ---
// Renombrar es mover el archivo a otro nombre. OJO: el nombre viejo
// desaparece, no queda una copia.
const rutaVieja = path.join(__dirname, 'temporal.txt');
const rutaNueva = path.join(__dirname, 'renombrado.txt');

fs.writeFileSync(rutaVieja, 'para renombrar');
fs.renameSync(rutaVieja, rutaNueva);

console.log('\nrenombrado existe:', fs.existsSync(rutaNueva)); // true
console.log('viejo existe:', fs.existsSync(rutaVieja));        // false

// Limpiamos
fs.unlinkSync(rutaNueva);
