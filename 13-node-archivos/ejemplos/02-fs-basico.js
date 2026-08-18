// 02-fs-basico.js — fs síncrono
// Abrir un archivo es como abrir un cuaderno: leer, escribir, agregar
// al final o arrancar la hoja y tirarla. Acá todo se hace de una
// (síncrono): una cosa a la vez, como seguir una receta paso a paso.

const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, '..', 'data', 'sample.txt');

// leer: abrís el cuaderno y leés lo que hay escrito
const contenido = fs.readFileSync(ruta, 'utf8');
console.log('Contenido:\n' + contenido);

// ¿existe?: como revisar si el cuaderno está en la mochila
console.log('existe:', fs.existsSync(ruta));

// escribir (sobreescribe) y agregar: escribir tacha lo anterior,
// agregar es seguir escribiendo al final de la hoja
const salida = path.join(__dirname, 'salida.txt');
fs.writeFileSync(salida, 'esto lo escribí yo\n');
fs.appendFileSync(salida, 'y esto lo agregué\n');
console.log(fs.readFileSync(salida, 'utf8'));

// borrar: tirás la hoja y queda limpio
fs.unlinkSync(salida);
console.log('archivo borrado');

// renombrar: le cambiás la etiqueta a la caja de zapatos
// El contenido es el mismo, solo cambia el nombre. OJO: el nombre viejo
// desaparece, no queda una copia.
fs.writeFileSync(path.join(__dirname, 'temporal.txt'), 'para renombrar');
fs.renameSync(
  path.join(__dirname, 'temporal.txt'),
  path.join(__dirname, 'renombrado.txt')
);
console.log('renombrado existe:', fs.existsSync(path.join(__dirname, 'renombrado.txt'))); // true
console.log('viejo existe:', fs.existsSync(path.join(__dirname, 'temporal.txt')));        // false
fs.unlinkSync(path.join(__dirname, 'renombrado.txt'));