// 02-map.js — Map: clave → valor (clave de cualquier tipo)
// El Map es como un diccionario o la lista de precios del almacén:
// le pedís una clave (el nombre del producto) y te devuelve su valor (el precio).

const mapa = new Map();

mapa.set('nombre', 'Ana');
mapa.set('edad', 30);
console.log(mapa.size);          // 2
console.log(mapa.get('nombre')); // Ana
console.log(mapa.has('edad'));   // true

mapa.set('edad', 31);            // actualiza: pisás el valor anterior
console.log(mapa.get('edad'));   // 31

// claves de cualquier tipo (incluso objetos)
// Mirá qué copado: acá la clave es un objeto entero, no un string.
// Es como usar una foto como identificación en vez de un nombre.
const claveObjeto = { id: 1 };
mapa.set(claveObjeto, 'un objeto como clave');
console.log(mapa.get(claveObjeto)); // un objeto como clave

// iteración
// Recorrerlo te da cada par clave → valor, como leer las entradas del diccionario.
for (const [clave, valor] of mapa) {
  console.log(clave, '→', valor);
}
console.log([...mapa.keys()]);   // claves
console.log([...mapa.values()]); // valores

// borrar
mapa.delete('edad');
console.log(mapa.size); // 2