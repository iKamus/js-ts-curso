// organizador.js — Organizador de archivos
// Correlo asi: node organizador.js "ruta/de/la/carpeta"
//
// Paso a paso:
// 1) Leé los argumentos del comando con process.argv.slice(2).
//    La ruta de la carpeta es args[0]. Si no se paso una ruta,
//    mostrá un mensaje de uso y salí con process.exit(1).
//
// 2) Leé los archivos de la carpeta con fs.readdirSync(ruta).
//    Eso te devuelve un array con los nombres de los archivos.
//
// 3) Para cada archivo, armá la ruta completa con path.join(ruta, archivo)
//    y obtené la extension con path.extname(archivo).
//
// 4) Definí un mapa de extension → subcarpeta. Si la extension no esta
//    en el mapa, que vaya a 'otros'. Podes usar un objeto como:
//    { '.txt': 'texto', '.jpg': 'imagenes', '.png': 'imagenes', ... }
//
// 5) Armá la ruta de destino con path.join(ruta, subcarpeta, archivo).
//    Si la subcarpeta no existe, creala con fs.mkdirSync(destino, { recursive: true }).
//
// 6) Copiá el archivo con fs.copyFileSync(rutaOrigen, rutaDestino).
//    (Usá copyFileSync en vez de renameSync para no mover el original.)
//
// 7) Agregá un objeto al array de reporte con nombre, extension,
//    tamaño (de fs.statSync(rutaOrigen).size) y destino (relativo).
//
// 8) Escribí reporte.json con fs.writeFileSync y JSON.stringify(reporte, null, 2).
//
// 9) Mostrá el resumen por consola: cuantos archivos se organizaron
//    y a que carpetas fueron (contando por subcarpeta).

const fs = require('fs');
const path = require('path');

// completá acá
