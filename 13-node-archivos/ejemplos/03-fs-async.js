// 03-fs-async.js — fs/promises (asincrono)
// La version asincrona es como pedir el pedido en el mostrador:
// no te quedas esperando clavado, seguis haciendo otras cosas y cuando
// el pedido esta listo, lo tomas con await.

const fs = require('fs/promises');
const path = require('path');

async function main() {
  const ruta = path.join(__dirname, '..', 'data', 'datos.json');

  // --- readFile ---
  // Leemos el texto del JSON y lo convertimos a objeto con JSON.parse
  const texto = await fs.readFile(ruta, 'utf8');
  const datos = JSON.parse(texto);
  console.log('datos leidos:', datos);
  // { nombre: 'Smart LED', version: '2.0' }

  // --- readdir ---
  // Listamos los archivos de la carpeta actual
  const archivos = await fs.readdir(__dirname);
  console.log('\narchivos de este modulo:', archivos);

  // --- mkdir ---
  // Crear una carpeta. recursive = true: no falla si ya existe
  const carpetaTmp = path.join(__dirname, 'tmp');
  await fs.mkdir(carpetaTmp, { recursive: true });
  console.log('\ncarpeta tmp creada');

  // --- stat ---
  // La "ficha" del archivo: tamaño, si es archivo o carpeta, etc.
  const stats = await fs.stat(ruta);
  console.log('\ntamaño de datos.json:', stats.size, 'bytes');
  console.log('es archivo:', stats.isFile());       // true
  console.log('es carpeta:', stats.isDirectory());   // false

  // Limpiamos la carpeta temporal
  await fs.rmdir(carpetaTmp);
}

main().catch(console.error);
