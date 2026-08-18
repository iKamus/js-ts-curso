// 03-fs-async.js — fs/promises (asíncrono)
// Acá la versión asíncrona: es como pedir el pedido en el mostrador.
// No te quedás esperando clavado, seguís haciendo otras cosas y cuando
// el pedido está listo, lo tomás con await.

const fs = require('fs/promises');
const path = require('path');

async function main() {
  const ruta = path.join(__dirname, '..', 'data', 'datos.json');

  // leer y desempacar el JSON: primero leés el texto y después lo
  // convertís a un objeto con JSON.parse
  const texto = await fs.readFile(ruta, 'utf8');
  const datos = JSON.parse(texto);
  console.log(datos); // { nombre: 'Smart LED', version: '2.0' }

  // listar directorio: mirás qué hay dentro del cajón
  const archivos = await fs.readdir(__dirname);
  console.log('archivos de este módulo:', archivos);

  // crear carpeta (recursive = no falla si ya existe):
  // como sacar una caja nueva del armario, si ya está, no te asustés
  await fs.mkdir(path.join(__dirname, 'tmp'), { recursive: true });

  // stats del archivo: la ficha del cuaderno, cuánto pesa, cuándo se tocó
  const stats = await fs.stat(ruta);
  console.log('tamaño:', stats.size, 'bytes');
}

main().catch(console.error);