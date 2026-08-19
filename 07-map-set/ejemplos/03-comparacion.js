// 03-comparacion.js -- Objeto vs Map: cuando usar cada uno

// --- Contar frecuencias con Map ---
// Contar cuantas veces aparece cada palabra, como si estuvieras anotando
// quien pide cada vez un prestamo de la lapicera.
const texto = 'la casa de la casa';
const frec = new Map();

// La linea clave: (frec.get(palabra) || 0) + 1
// Si la clave no existe, get() devuelve undefined, y undefined || 0 es 0.
for (const palabra of texto.split(' ')) {
  frec.set(palabra, (frec.get(palabra) || 0) + 1);
}
console.log('--- frecuencias con Map ---');
console.log([...frec.entries()]);
// [ ['la', 2], ['casa', 2], ['de', 1] ]

// --- Lo mismo con un Objeto ---
// Tambien funciona, pero las claves son strings y no respeta orden de insercion.
const frecObj = {};
for (const palabra of texto.split(' ')) {
  frecObj[palabra] = (frecObj[palabra] || 0) + 1;
}
console.log('--- frecuencias con Objeto ---');
console.log(frecObj); // { la: 2, casa: 2, de: 1 }

// --- Comparacion ---
console.log('--- comparacion ---');

// Objeto: claves solo strings
const obj = {};
obj[1] = 'uno';           // la clave 1 se convierte a string '1'
obj['1'] = 'uno string';  // sobreescribe la anterior
console.log(obj);          // { '1': 'uno string' }

// Map: claves de cualquier tipo
const map = new Map();
map.set(1, 'uno');
map.set('1', 'uno string'); // son claves diferentes: numero 1 y string '1'
console.log([...map.entries()]); // [[1, 'uno'], ['1', 'uno string']]

// Tamaño
const objGrande = { a: 1, b: 2, c: 3 };
const mapGrande = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log('obj size:', Object.keys(objGrande).length);  // 3
console.log('map size:', mapGrande.size);                   // 3

// Orden: Map respeta insercion, Objeto no
const objOrden = { z: 1, a: 2, m: 3 };
const mapOrden = new Map([['z', 1], ['a', 2], ['m', 3]]);
console.log('obj keys:', Object.keys(objOrden));      // ['a', 'm', 'z'] (alfabetico)
console.log('map keys:', [...mapOrden.keys()]);       // ['z', 'a', 'm'] (orden de insercion)

// Resumen:
// - Objeto: claves fijas, conocidas, strings. Como un formulario.
// - Map: claves dinamicas, de cualquier tipo, mucho borrado/insersion. Como una caja abierta.
