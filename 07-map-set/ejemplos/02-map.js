// 02-map.js -- Map: clave -> valor (clave de cualquier tipo)
// El Map es como un diccionario o la lista de precios del almacen:
// le pedis una clave (el nombre del producto) y te devuelve su valor (el precio).

const mapa = new Map();

mapa.set('nombre', 'Ana');
mapa.set('edad', 30);
console.log(mapa.size);          // 2
console.log(mapa.get('nombre')); // Ana
console.log(mapa.has('edad'));   // true

mapa.set('edad', 31);            // actualiza: pisas el valor anterior
console.log(mapa.get('edad'));   // 31

// claves de cualquier tipo (incluso objetos)
// La clave es un objeto entero, no un string.
// Es como usar una foto como identificacion en vez de un nombre.
const claveObjeto = { id: 1 };
mapa.set(claveObjeto, 'un objeto como clave');
console.log(mapa.get(claveObjeto)); // un objeto como clave

// iteracion
// Recorrerlo te da cada par clave -> valor, como leer las entradas del diccionario.
for (const [clave, valor] of mapa) {
  console.log(clave, '->', valor);
}
console.log([...mapa.keys()]);   // claves
console.log([...mapa.values()]); // valores

// entries() te da los pares completos
console.log([...mapa.entries()]); // [['nombre', 'Ana'], [31, ...], [obj, ...]]

// borrar
mapa.delete('edad');
console.log(mapa.size); // 3 (quedan nombre, claveObjeto, y el objeto)

// contar frecuencias
const texto = 'hola mundo hola mundo hola';
const frec = new Map();

for (const palabra of texto.split(' ')) {
  frec.set(palabra, (frec.get(palabra) || 0) + 1);
}
console.log('--- frecuencias ---');
for (const [palabra, cantidad] of frec) {
  console.log(`${palabra}: ${cantidad}`);
}
// hola: 3
// mundo: 2
