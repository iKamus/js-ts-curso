// 03-object-methods.js — Funciones de Object
// Estas funciones te dejan "abrir" el objeto y ver qué tiene adentro.

const usuario = { nombre: 'Ana', edad: 30, ciudad: 'Córdoba' };

console.log(Object.keys(usuario));    // ['nombre','edad','ciudad']
console.log(Object.values(usuario));  // ['Ana',30,'Córdoba']
console.log(Object.entries(usuario)); // [['nombre','Ana'],['edad',30],['ciudad','Córdoba']]

// recorrer con for...in
// Vas casilla por casilla, como cuando repasás los datos de la ficha una por una.
for (const clave in usuario) {
  console.log(clave, '=', usuario[clave]);
}

// combinar objetos (spread, el más común)
// Es como unir dos fichas en una: las casillas de ambas quedan en un solo objeto.
const datosExtra = { email: 'ana@mail.com' };
const completo = { ...usuario, ...datosExtra };
console.log(completo);

// Object.assign hace lo mismo pero es más verboso
// Existe, pero el spread es más corto y se lee mejor.
const completo2 = Object.assign({}, usuario, datosExtra);

// congelar: impide modificaciones
// Le ponés el candado: nadie puede cambiar ese objeto.
const fijo = Object.freeze({ version: '1.0' });
// fijo.version = '2.0'; // en Node no tira error visible pero no cambia
console.log(fijo.version); // 1.0