// proyecto/main.cjs — Archivo principal
// Corre: node main.cjs

const { createRequire } = require('module');
const requireLocal = createRequire(__filename);

async function main() {
  // === CommonJS ===
  const mat = requireLocal('./lib/matematicas.cjs');

  console.log('=== Matematicas (CommonJS) ===');
  console.log('sumar(10, 5):', mat.sumar(10, 5));
  console.log('restar(10, 5):', mat.restar(10, 5));
  console.log('multiplicar(4, 3):', mat.multiplicar(4, 3));
  console.log('dividir(10, 3):', mat.dividir(10, 3));
  console.log('dividir(10, 0):', mat.dividir(10, 0));
  console.log('potencia(2, 8):', mat.potencia(2, 8));
  console.log('esPar(4):', mat.esPar(4));
  console.log('esPar(7):', mat.esPar(7));

  // === ES Modules ===
  // import() devuelve un objeto con named exports como propiedades
  // y el default export en la propiedad "default"
  const { default: Descripcion, ...cadenas } = await import('./lib/cadenas.mjs');

  console.log('\n=== Cadenas (ES Modules) ===');
  console.log("revertir('hola mundo'):", cadenas.revertir('hola mundo'));
  console.log("contarVocales('javascript'):", cadenas.contarVocales('javascript'));
  console.log("aSnakeCase('hola mundo cruel'):", cadenas.aSnakeCase('hola mundo cruel'));
  console.log("iniciales('Juan Perez'):", cadenas.iniciales('Juan Perez'));
  console.log('Descripcion:', Descripcion());
}

main();
