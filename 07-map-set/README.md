# Modulo 07 -- Map y Set

Dos colecciones especiales que no son arrays ni objetos: `Set` guarda valores unicos (sin repetidos) y `Map` guarda pares clave-valor donde la clave puede ser cualquier cosa. Piensa en Set como una lista de asistencia (cada nombre, una sola vez) y en Map como un diccionario real (palabra -> significado).

---

## Set

- **Que es**: una coleccion de valores **unicos**. Es como una bolsa que no deja entrar duplicados: si ya hay un valor, el segundo intento simplemente se ignora. No rompe nada, no tira error, solo lo deja afuera.
- **Cuando usarlo**: cuando necesitas una lista sin repetidos, o cuando quieres saber rapidamente si un valor ya existe (`.has()` es muy rapido). Tambien para operaciones de conjuntos: union, interseccion, diferencia.
- **Sintaxis**:
  ```js
  const set = new Set();              // vacio
  const set2 = new Set([1, 2, 3]);    // con valores iniciales
  set.add(1);                         // agregar
  set.add(2);
  set.add(1);                         // ignora: 1 ya esta
  console.log(set);                   // Set(2) { 1, 2 }
  ```
- **Metodos/funciones internos**:
  | Metodo | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `add(valor)` | agrega un valor (si no esta) | `set.add(5)` | Set con 5 adentro |
  | `has(valor)` | pregunta si existe | `set.has(5)` | `true` |
  | `delete(valor)` | borra un valor | `set.delete(5)` | `true` si existia |
  | `size` | cantidad de valores | `set.size` | numero |
  | `clear()` | vacia todo el Set | `set.clear()` | Set vacio |
  | `for...of` | recorre los valores | `for (const v of set) {}` | cada valor |
- **Errores comunes**: olvidar que `add()` devuelve el Set (no el valor agregado). Tambien confundir `size` (propiedad) con `length` (que no existe en Set). Otro error comun es intentar acceder por indice como un array: `set[0]` no funciona.
- **Buenas practicas**: usa `[...set]` o `Array.from(set)` para convertir un Set a array. Para deduplicar un array rapido: `[...new Set(array)]`. No uses Set si necesitas acceder a elementos por posicion.

---

## Set (metodos de conjuntos)

- **Que es**: operaciones que combinan dos Sets: union (todo junto), interseccion (lo comun), diferencia (lo que falta). Es como comparar dos listas de asistencia de dos turnos: quienes vinieron los dos (interseccion), quienes vinieron en alguno (union), quienes vinieron solo en el turno A (diferencia).
- **Cuando usarlo**: cuando necesitas comparar colecciones o combinarlas sin duplicados.
- **Sintaxis**:
  ```js
  const a = new Set([1, 2, 3]);
  const b = new Set([3, 4, 5]);

  // union: todos los valores de ambos
  const union = new Set([...a, ...b]);           // Set {1, 2, 3, 4, 5}

  // interseccion: solo los que estan en ambos
  const interseccion = new Set([...a].filter(v => b.has(v))); // Set {3}

  // diferencia: los que estan en a pero no en b
  const diferencia = new Set([...a].filter(v => !b.has(v)));  // Set {1, 2}
  ```
- **Metodos/funciones internos**:
  | Operacion | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | union | todos los valores de ambos Sets | `new Set([...a, ...b])` | Set con todo junto |
  | interseccion | solo los valores comunes | `[...a].filter(v => b.has(v))` | Set con lo comun |
  | diferencia | los que estan en a pero no en b | `[...a].filter(v => !b.has(v))` | Set con la diferencia |
- **Errores comunes**: no hay metodos nativos `union()`, `intersection()` o `difference()` en el Set. Hay que armarlos con spread y filter como se ve arriba. No confundir con Object, que no tiene estas operaciones.
- **Buenas practicas**: conviene convertir el Set a array con `[...set]` antes de usar filter, porque filter es metodo de array, no de Set.

---

## Map

- **Que es**: una coleccion de pares **clave -> valor** donde la clave puede ser **cualquier tipo** (string, numero, objeto, funcion). Es como un diccionario real: le pides una palabra (clave) y te devuelve el significado (valor). O como la lista de precios del almacen: producto -> precio.
- **Cuando usarlo**: cuando necesitas asociar datos de forma dinamica, cuando las claves no son strings, o cuando haces mucho insertado/borrado. Ideal para contar frecuencias, caches, y como reemplazo de objetos simples.
- **Sintaxis**:
  ```js
  const mapa = new Map();
  mapa.set('nombre', 'Ana');       // guardar
  mapa.set('edad', 30);
  mapa.get('nombre');              // leer -> 'Ana'
  mapa.has('edad');                // true
  mapa.delete('edad');             // borrar
  mapa.size;                       // cantidad de pares
  ```
- **Metodos/funciones internos**:
  | Metodo | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `set(clave, valor)` | guarda o actualiza un par | `mapa.set('x', 10)` | Map actualizado |
  | `get(clave)` | lee el valor de una clave | `mapa.get('x')` | `10` |
  | `has(clave)` | pregunta si existe la clave | `mapa.has('x')` | `true` |
  | `delete(clave)` | borra un par | `mapa.delete('x')` | `true` si existia |
  | `size` | cantidad de pares | `mapa.size` | numero |
  | `keys()` | iterador de claves | `[...mapa.keys()]` | array de claves |
  | `values()` | iterador de valores | `[...mapa.values()]` | array de valores |
  | `entries()` | iterador de pares [clave, valor] | `[...mapa.entries()]` | array de pares |
  | `clear()` | vacia todo | `mapa.clear()` | Map vacio |
  | `for...of` | recorre los pares | `for (const [k, v] of mapa) {}` | cada par |
- **Errores comunes**: confundir `get()` con acceder por corchetes (`mapa.clave`). Los corchetes no funcionan en Map: siempre usa `get()`. Tambien olvidar que `set()` sobreescribe si la clave ya existe (no duplica, actualiza). Otro error es no saber que `get()` devuelve `undefined` si la clave no existe.
- **Buenas practicas**: cuando quieres incrementar un contador, usa el patron `mapa.set(clave, (mapa.get(clave) || 0) + 1)`. Para recorrer, el `for...of` con destructuring `[clave, valor]` es lo mas limpio. Respeta el orden de insercion.

---

## Objeto vs Map

- **Que es**: dos formas de guardar pares clave-valor, pero con diferencias importantes. El objeto es la forma clasica de JavaScript; el Map es mas potente para colecciones dinamicas.
- **Cuando usarlo**:
  - **Objeto**: cuando las claves son strings conocidas y fijas (como un formulario: nombre, email, telefono). Es como una ficha con campos predeterminados.
  - **Map**: cuando las claves cambian, son de cualquier tipo, o necesitas insercion/borrado frecuente. Es como una caja donde vas metiendo y sacando cosas sin parar.
- **Comparacion**:
  | Caracteristica | Objeto | Map |
  |---|---|---|
  | Claves | solo strings (y symbols) | cualquier tipo |
  | Orden | no garantiza orden | respeta orden de insercion |
  | Tamaño | `Object.keys(obj).length` | `map.size` |
  | Iteracion | `for...in`, `Object.keys()` | `for...of`, `.keys()`, `.values()`, `.entries()` |
  | Rendimiento | bien para pocos datos | mejor para muchas inserciones/borrados |
  | Prototype | tiene prototipo (puede tener metodos heredados) | no tiene prototype |
- **Errores comunes**: usar un objeto como Map cuando las claves no son strings (por ejemplo, usar un objeto con claves numericas: las claves se convierten a string automaticamente). Tambien confundir `Object.keys().length` con `map.size`.
- **Buenas practicas**: si solo tienes claves string y pocos datos, un objeto basta. Si necesitas claves de cualquier tipo, mucho borrado/insersion, o que las claves no sean strings, usa Map. Para iterar un objeto, `Object.entries()` te da un formato parecido a Map.

---

## Deduplicar

- **Que es**: sacar los valores repetidos de un array. Es como pasar la lista del curso por un filtro que deja solo una copia de cada nombre, respetando el orden.
- **Cuando usarlo**: cuando tienes un array con duplicados y necesitas uno limpio. Comun en formularios, listas de usuarios, resultados de busquedas.
- **Sintaxis**:
  ```js
  const numeros = [1, 2, 2, 3, 3, 3];
  const unicos = [...new Set(numeros)];
  console.log(unicos); // [1, 2, 3]
  ```
  El truco: `new Set(array)` elimina los duplicados (porque Set solo acepta unicos), y `[...set]` lo convierte de nuevo a array.
- **Errores comunes**: olvidar que el Set no mantiene el array original: es una transformacion nueva. Tambien pensar que funciona con objetos complejos de la misma forma: `Set` compara por referencia, no por contenido, asi que dos objetos iguales pero distintos no se consideran duplicados.
- **Buenas practicas**: es la forma mas rapida y simple de deduplicar. Si necesitas deduplicar objetos por una propiedad, tienes que hacerlo con `filter` y un Set manual.

---

## Contar frecuencias

- **Que es**: contar cuantas veces aparece cada elemento en una coleccion. Es como el que anota en la libreta cuantas veces pide prestada cada persona la lapicera: cada nombre es una clave, y la cantidad es el valor.
- **Cuando usarlo**: analisis de texto (palabras mas comunes), encuestas (cuantos votos por candidato), logs (cuantos errores de cada tipo), inventario (cuantos productos de cada tipo).
- **Sintaxis**:
  ```js
  const texto = 'la casa de la casa';
  const frec = new Map();

  for (const palabra of texto.split(' ')) {
    frec.set(palabra, (frec.get(palabra) || 0) + 1);
  }
  console.log([...frec.entries()]);
  // [ ['la', 2], ['casa', 2], ['de', 1] ]
  ```
  La linea clave: `(frec.get(palabra) || 0) + 1` -- si la clave no existe, `get()` devuelve `undefined`, y `undefined || 0` es `0`. Despues sumas 1.
- **Errores comunes**: olvidar el `|| 0` y sumar `undefined + 1`, que da `NaN`. Tambien usar un objeto cuando las claves pueden ser de otro tipo que no sea string.
- **Buenas practicas**: Map es ideal para frecuencias porque respeta el orden de insercion y las claves pueden ser de cualquier tipo. Si las claves son strings simples, un objeto tambien sirve, pero Map es mas limpio y rapido para muchos datos.

---

## Ejemplos integrados

Todo lo que necesitas para los ejercicios, en un solo lugar. Podes copiar y correr cada bloque para ver la salida.

### 01 -- Set: valores unicos

```js
// El Set es como una bolsa que no deja entrar duplicados:
// si un valor ya esta, el segundo intento simplemente no entra.
const set = new Set();

set.add(1);
set.add(2);
set.add(1); // ya estaba el 1, asi que no se repite: queda uno solo
console.log(set);          // Set(2) { 1, 2 }
console.log(set.size);     // 2
console.log(set.has(1));   // true
console.log(set.has(5));   // false

set.delete(2);
console.log(set.size);     // 1

// deduplicar un array
// Meter el array dentro de un Set y expandirlo con [...] es como
// pasar la lista por un filtro que deja un solo ejemplar de cada uno.
const numeros = [1, 2, 2, 3, 3, 3];
const unicos = [...new Set(numeros)];
console.log(unicos); // [1, 2, 3]

// iterar
// Recorrer un Set es como pasar lista: vas mirando cada valor, en orden.
for (const v of set) console.log('valor:', v);

// vaciar
// clear() lo deja limpio, como cuando vacias la mochila al final del anio.
set.clear();
console.log(set.size); // 0

// operaciones de conjuntos
const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// union: todos los valores de ambos
const union = new Set([...a, ...b]);
console.log('union:', [...union]); // [1, 2, 3, 4, 5, 6]

// interseccion: solo los que estan en ambos
const interseccion = new Set([...a].filter(v => b.has(v)));
console.log('interseccion:', [...interseccion]); // [3, 4]

// diferencia: los que estan en a pero no en b
const diferencia = new Set([...a].filter(v => !b.has(v)));
console.log('diferencia:', [...diferencia]); // [1, 2]
```

### 02 -- Map: clave -> valor (clave de cualquier tipo)

```js
// El Map es como un diccionario o la lista de precios del almacen:
// le pides una clave (el nombre del producto) y te devuelve su valor (el precio).
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
console.log([...mapa.entries()]); // [['nombre', 'Ana'], ['edad', 31], [obj, ...]]

// borrar
mapa.delete('edad');
console.log(mapa.size); // 2 (quedan nombre y claveObjeto)

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
```

### 03 -- Objeto vs Map: cuando usar cada uno

```js
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
```

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-dedupe.js` | deduplicar un array de nombres con Set |
| `ejercicios/ej-02-frecuencias.js` | contar frecuencias de palabras con Map |
| `ejercicios/ej-03-interseccion.js` | encontrar la interseccion de dos arrays con Set |
| `ejercicios/ej-04-cache.js` | cache de resultados con Map (memoizacion) |
