# Modulo 04 -- Arrays

Un array es como una fila de cajas numeradas: cada caja tiene un numero (el indice, arranca en 0) y adentro guarda un valor. Este modulo es tu guia para moverte por esa fila sin miedo.

---

## array (creacion, acceso, length)

- **Que es**: una coleccion ordenada de valores. Es como una fila de cajas etiquetadas: la primera lleva el numero 0, la segunda el 1, y asi. La computadora no cuenta "del uno en adelante"; arranca en cero, como los pisos de un edificio europeo.
- **Cuando usarlo**: siempre que necesites guardar varios valores bajo un mismo nombre. En vez de crear `fruta1`, `fruta2`, `fruta3`, creas un solo array con tres posiciones.
- **Sintaxis**:
  ```js
  const frutas = ['manzana', 'pera', 'banana'];
  const numeros = [10, 20, 30];
  const vacio = [];
  ```
- **Metodos/funciones internos**:
  | Accion | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `frutas[0]` | accede al elemento en la posicion 0 | `frutas[0]` | `'manzana'` |
  | `frutas[frutas.length - 1]` | accede al ultimo elemento | `frutas[2]` | `'banana'` |
  | `frutas.length` | devuelve la cantidad de elementos | `frutas.length` | `3` |
- **Errores comunes**: acceder a un indice que no existe (`frutas[99]`) devuelve `undefined`, no tira error. La trampa es que `undefined` no se ve diferente de un valor vacio si no lo verificas.
- **Buenas practicas**: siempre verifica `length` antes de acceder a un indice alto. Usa `Array.isArray(dato)` para confirmar que algo es un array antes de usar metodos de array.

---

## push / pop / shift / unshift

- **Que es**: los cuatro metodos que modifican el array directamente. `push` agrega al final, `unshift` al principio, `pop` saca del final, `shift` del principio. Es como hacer cola en una fila: si alguien se suma al final es `push`, si se mete al principio es `unshift`, si el ultimo se va es `pop`, si el primero se va es `shift`.
- **Cuando usarlo**: cuando necesitas agregar o quitar elementos y esta bien modificar el array original. Son mutables: cambian el array en el que se llaman.
- **Sintaxis**:
  ```js
  const cola = [];
  cola.push('a');       // ['a']
  cola.push('b');       // ['a', 'b']
  cola.unshift('z');    // ['z', 'a', 'b']
  cola.pop();           // ['z', 'a'] -- devolvio 'b'
  cola.shift();         // ['a'] -- devolvio 'z'
  ```
- **Metodos/funciones internos**:
  | Metodo | Que hace | Devuelve | Efecto en el array |
  |---|---|---|---|
  | `push(valor)` | agrega al final | nueva `length` | agrega |
  | `unshift(valor)` | agrega al inicio | nueva `length` | agrega |
  | `pop()` | saca del final | el elemento sacado | elimina |
  | `shift()` | saca del inicio | el elemento sacado | elimina |
- **Errores comunes**: olvidar que `push` y `unshift` devuelven la **longitud**, no el array. No puedes encadenar despues de ellos como con `map` o `filter`.
- **Buenas practicas**: si necesitas agregar elementos pero sin mutar el original, usa spread: `const nuevo = [...original, nuevoElemento]`.

---

## indexOf / includes

- **Que es**: dos formas de buscar dentro de un array. `indexOf` te dice en que posicion esta un valor (o -1 si no esta). `includes` te responde con `true` o `false`. Es como buscar tu nombre en una lista de asistencia: `indexOf` te dice en que fila estas, `includes` te dice si estas o no.
- **Cuando usarlo**: cuando necesitas saber si un valor existe en el array y, en caso de `indexOf`, donde esta.
- **Sintaxis**:
  ```js
  const frutas = ['manzana', 'pera', 'banana'];
  frutas.indexOf('pera');      // 1
  frutas.indexOf('melon');     // -1
  frutas.includes('banana');   // true
  ```
- **Metodos/funciones internos**:
  | Metodo | Que hace | Devuelve | Ejemplo |
  |---|---|---|---|
  | `indexOf(valor)` | posicion de la primera aparicion | numero o `-1` | `[1,2,3].indexOf(2)` -> `1` |
  | `includes(valor)` | existe el valor? | `boolean` | `[1,2,3].includes(2)` -> `true` |
- **Errores comunes**: confundir `indexOf` con `includes`. `indexOf` devuelve `-1` cuando no encuentra, no `false`. `-1` es truthy, asi que `if (array.indexOf(x))` no funciona como esperas.
- **Buenas practicas**: usa `includes` para preguntar "esta?" y `indexOf` solo cuando necesitas la posicion.

---

## slice

- **Que es**: recorta un tramo del array sin modificar el original. Es como sacar una foto de parte de la lista: ves el recorte, pero la lista original queda intacta.
- **Cuando usarlo**: cuando quieres un subconjunto de elementos sin tocar el array de origen. No muta.
- **Sintaxis**:
  ```js
  const nums = [10, 20, 30, 40, 50];
  nums.slice(1, 3);   // [20, 30] -- desde el indice 1 hasta el 3 (sin incluirlo)
  nums.slice(2);       // [30, 40, 50] -- desde el 2 hasta el final
  nums.slice();        // copia completa del array
  ```
- **Metodos/funciones internos**:
  | Llamada | Resultado | Notas |
  |---|---|---|
  | `slice(inicio, fin)` | subarray desde `inicio` hasta `fin` (sin incluir fin) | fin es opcional |
  | `slice()` | copia superficial completa | util para copiar arrays |
- **Errores comunes**: el indice final **no se incluye**. `slice(0, 2)` toma los elementos 0 y 1, no el 2. Tambien olvidar que `slice` no muta; si quieres modificar, tienes que reasignar.
- **Buenas practicas**: usa `slice()` (sin argumentos) para hacer copias rapidas de arrays.

---

## join / split

- **Que es**: `join` convierte un array en un string uniendo los elementos con un separador. `split` hace lo contrario: parte un string en un array usando un separador. Son espejos el uno del otro. Es como desarmar una oracion en palabras (`split`) y armar una oracion de palabras (`join`).
- **Cuando usarlo**: `join` para mostrar datos en pantalla o armar textos. `split` para procesar texto y trabajarlo como array.
- **Sintaxis**:
  ```js
  const frutas = ['manzana', 'pera', 'banana'];
  frutas.join(' - ');          // 'manzana - pera - banana'

  const frase = 'hola mundo cruel';
  frase.split(' ');            // ['hola', 'mundo', 'cruel']
  ```
- **Metodos/funciones internos**:
  | Metodo | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `join(sep)` | array -> string | `['a','b'].join('-')` | `'a-b'` |
  | `split(sep)` | string -> array | `'a-b'.split('-')` | `['a','b']` |
- **Errores comunes**: olvidar el separador en `join` o `split`. Sin argumento, `join` une sin nada (`'ab'`); `split('')` separa caracter por caracter, no palabra por palabra.
- **Buenas practicas**: la combinacion `texto.split('').reverse().join('')` es la forma clasica de invertir un util para detectar palindromos.

---

## for / for...of / forEach

- **Que es**: tres formas de recorrer un array. `for` es la clasica con contador manual, `for...of` recorre directamente los valores, `forEach` le dice al array "haz esto con cada elemento". Es como leer una lista de compras: puedes contar los renglones uno por uno, puedes ir leyendo de corrido, o puedes pedirle a alguien que te lea cada renglon en voz alta.
- **Cuando usarlo**: siempre que necesites recorrer un array y hacer algo con cada elemento. `for` cuando necesitas el indice, `for...of` cuando solo importa el valor, `forEach` cuando quieres sintaxis elegante.
- **Sintaxis**:
  ```js
  const nums = [10, 20, 30];

  // for clasico
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }

  // for...of
  for (const n of nums) {
    console.log(n);
  }

  // forEach
  nums.forEach((valor, indice) => {
    console.log(indice, valor);
  });
  ```
- **Metodos/funciones internos**:
  | Recorrido | Que hace | Ventaja | Desventaja |
  |---|---|---|---|
  | `for` clasico | recorre con contador `i` | control total del indice | mas verboso |
  | `for...of` | recorre valores directamente | legible, rompe con `break` | no da indice |
  | `forEach` | ejecuta una funcion por cada elemento | sintaxis compacta | no se puede usar `break` |
- **Errores comunes**: intentar usar `break` o `return` dentro de `forEach` (no funciona como esperas: `return` solo termina la callback, no el recorrido). Tambien olvidar que `forEach` no devuelve nada.
- **Buenas practicas**: si necesitas cortar el recorrido con `break`, usa `for` o `for...of`. `forEach` es ideal para efectos secundarios (como imprimir en consola).

---

## map

- **Que es**: transforma cada elemento del array y devuelve uno nuevo con los resultados. Es como pasarle la plancha a cada remera: cada una cambia de forma, pero el cajon (array original) queda igual.
- **Cuando usarlo**: cuando necesitas convertir cada elemento en otra cosa. No muta el original.
- **Sintaxis**:
  ```js
  const precios = [100, 250, 40];
  const conImpuesto = precios.map(p => p * 1.21);
  // [121, 302.5, 48.4]
  ```
- **Metodos/funciones internos**:
  | Caso | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `map(fn)` | aplica `fn` a cada elemento | `[1,2,3].map(x => x * 2)` | `[2,4,6]` |
  | con indice | recibe `(valor, indice)` | `['a','b'].map((v,i) => i + ':' + v)` | `['0:a','1:b']` |
- **Errores comunes**: olvidar el `return` en la callback (si usas `{}` sin `return`, devuelve `undefined` en cada posicion). Usar `map` cuando no necesitas un array nuevo: si solo quieres hacer algo con cada elemento, usa `forEach`.
- **Buenas practicas**: `map` siempre devuelve un array de la misma longitud. Si quieres achicar el array, usa `filter`.

---

## filter

- **Que es**: deja pasar solo los elementos que cumplen una condicion. Es como el portero del boliche: solo entran los que pasan el filtro.
- **Cuando usarlo**: cuando necesitas quedarte con un subconjunto del array. No muta el original.
- **Sintaxis**:
  ```js
  const numeros = [1, 2, 3, 4, 5, 6];
  const pares = numeros.filter(n => n % 2 === 0);
  // [2, 4, 6]
  ```
- **Metodos/funciones internos**:
  | Caso | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `filter(fn)` | devuelve elementos donde `fn` retorna `true` | `[1,2,3].filter(x => x > 1)` | `[2,3]` |
  | con indice | recibe `(valor, indice)` | `[5,10,15].filter((v,i) => i > 0)` | `[10,15]` |
- **Errores comunes**: confundir `filter` con `find`. `filter` devuelve un **array** con todos los que cumplen. `find` devuelve **un solo valor** (el primero que cumple). Tambien olvidar que `filter` no muta el original.
- **Buenas practicas**: encadena `filter` despues de `map` o antes de `reduce` para construir tuberias de datos claras.

---

## reduce

- **Que es**: reduce todo el array a un unico valor. Es como caminar por toda una fila de cajas llevando una caja acumuladora: en cada caja sumas lo que hay adentro a tu acumulador y sigues, hasta llegar al final.
- **Cuando usarlo**: cuando necesitas combinar todos los elementos en un solo resultado (una suma, un objeto, un string, etc.). No muta el original.
- **Sintaxis**:
  ```js
  const numeros = [1, 2, 3, 4];
  const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
  // 10
  ```
- **Metodos/funciones internos**:
  | Caso | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | suma | `reduce((acc, val) => acc + val, 0)` | `[1,2,3].reduce((a,v) => a+v, 0)` | `6` |
  | mayor | `reduce((acc, val) => acc > val ? acc : val)` | `[3,7,2].reduce((a,v) => a>v?a:v)` | `7` |
  | a objeto | acumula en un objeto `{}` | ver ejemplo `04-contar-palabras.js` | `{ hola: 2, ... }` |
- **Errores comunes**: olvidar el valor inicial (`0` en sumas). Sin el valor inicial, `reduce` usa el primer elemento como acumulador y empieza desde el segundo. Esto puede causar errores con arrays vacios (tira error). Tambien olvidar devolver el acumulador al final de la callback.
- **Buenas practicas**: siempre pone un valor inicial explícito. Si el acumulador es un objeto, inicializalo como `{}` y devolve `acc` al final de cada vuelta.

---

## find

- **Que es**: devuelve el primer elemento del array que cumple una condicion. Se detiene apenas lo encuentra, como buscar tu nombre en la lista de asistencia y dejar de leer cuando lo ves.
- **Cuando usarlo**: cuando necesitas UN solo elemento (no un array) que cumpla un criterio.
- **Sintaxis**:
  ```js
  const personas = ['Ana', 'Luis', 'Maria', 'Pedro'];
  const encontrada = personas.find(p => p.length > 3);
  // 'Luis'
  ```
- **Metodos/funciones internos**:
  | Caso | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | `find(fn)` | primer elemento que cumple `fn` | `[1,2,3].find(x => x > 1)` | `2` |
  | ninguno | si ninguno cumple | `[1,2,3].find(x => x > 10)` | `undefined` |
- **Errores comunes**: confundir `find` con `filter`. `find` devuelve **un valor** (o `undefined`). `filter` devuelve **un array** (posiblemente vacio). Si necesitas todos los que cumplen, usa `filter`.
- **Buenas practicas**: despues de `find`, verifica que el resultado no sea `undefined` antes de usarlo, para evitar errores.

---

## some / every

- **Que es**: dos metodos que devuelven un booleano. `some` pregunta "al menos uno cumple?". `every` pregunta "todos cumplen?". Son como el inspector de la cola: `some` busca si hay al menos uno que pasa, `every` verifica que todos pasen.
- **Cuando usarlo**: `some` para verificar si existe al menos un elemento que cumple. `every` para confirmar que todos cumplen.
- **Sintaxis**:
  ```js
  const edades = [15, 22, 30, 17];
  edades.some(e => e >= 18);   // true (hay mayores de 18)
  edades.every(e => e >= 18);  // false (no todos son mayores de 18)
  ```
- **Metodos/funciones internos**:
  | Metodo | Que hace | Devuelve | Ejemplo |
  |---|---|---|---|
  | `some(fn)` | al menos uno cumple `fn`? | `boolean` | `[1,2,3].some(x => x > 2)` -> `true` |
  | `every(fn)` | todos cumplen `fn`? | `boolean` | `[1,2,3].every(x => x > 0)` -> `true` |
- **Errores comunes**: confundir `some` con `includes`. `some` es mas flexible: puedes pasarle cualquier condicion, no solo buscar un valor exacto. `includes` solo busca igualdad estricta.
- **Buenas practicas**: usa `some` para validaciones rapidas ("hay al menos un error?") y `every` para asegurar que todo cumple ("todos los campos estan completos?").

---

## spread (...)

- **Que es**: el operador spread esparce los elementos de un array (o string) como si vaciaras la mochila sobre la mesa: cada cosa queda suelta, lista para usar. Tambien sirve para copiar arrays sin crear referencias.
- **Cuando usarlo**: para copiar arrays, combinar arrays, pasar elementos como argumentos, o crear un array nuevo a partir de otro sin mutarlo.
- **Sintaxis**:
  ```js
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  // combinar
  const todos = [...arr1, ...arr2];  // [1, 2, 3, 4]

  // copiar
  const copia = [...arr1];           // [1, 2] -- no es la misma referencia

  // agregar elementos al copiar
  const conNuevo = [...arr1, 5];     // [1, 2, 5]
  ```
- **Metodos/funciones internos**:
  | Caso | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | copiar | crea copia superficial | `[...[1,2]]` | `[1,2]` (nueva referencia) |
  | combinar | une dos arrays | `[...[1],...[2]]` | `[1,2]` |
  | con elementos | agrega al copiar | `[...[1,2], 3]` | `[1,2,3]` |
- **Errores comunes**: olvidar que spread solo hace copia **superficial**. Si el array contiene objetos, la referencia a esos objetos se comparte. Tambien confundir spread con rest: en los parametros de una funcion, `...args` es rest (recoge), en la llamada es spread (esparce).
- **Buenas practicas**: usa spread para evitar mutaciones accidentales. Es la forma mas legible de crear copias y combinar arrays.

---

## destructuring

- **Que es**: extraer valores de un array (o objeto) y guardarlos en variables individuales en una sola linea. Es como repartir cartas de a una: en vez de agarrar todo el mazo, sacas las que te interesan y las pones en la mesa.
- **Cuando usarlo**: cuando quieres acceder a elementos especificos de un array sin usar indices uno por uno. Tambien funciona con parametros de funciones y objetos.
- **Sintaxis**:
  ```js
  const [a, b] = [10, 20];          // a=10, b=20
  const [primero, ...resto] = [1, 2, 3, 4];  // primero=1, resto=[2,3,4]
  const [, , tercero] = [1, 2, 3];           // tercero=3 (salta los dos primeros)
  ```
- **Metodos/funciones internos**:
  | Caso | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | basico | extrae por posicion | `const [x,y] = [1,2]` | `x=1, y=2` |
  | salto | salta con comas vacias | `const [,,z] = [1,2,3]` | `z=3` |
  | rest | junta el resto | `const [a,...b] = [1,2,3]` | `a=1, b=[2,3]` |
  | defaults | valor por defecto | `const [x=10] = []` | `x=10` |
- **Errores comunes**: intentar saltar con un indice en vez de con comas. No existe `const [1 = x]`, las comas indican la posicion. Tambien confundir destructuring con spread: en asignacion es destructuring, en literales es spread.
- **Buenas practicas**: usa destructuring para hacer el codigo mas legible cuando trabajes con arrays de pares `[clave, valor]` o con funciones que devuelven multiples valores.

---

## sort

- **Que es**: ordena los elementos del array **en el lugar** (muta el original). Por defecto convierte todo a string y ordena lexicograficamente, lo que causa sorpresas con numeros.
- **Cuando usarlo**: cuando necesitas ordenar elementos. Siempre pasa una funcion comparadora para numeros.
- **Sintaxis**:
  ```js
  // ojo: muta el original
  const nums = [10, 2, 25];
  nums.sort();                        // [10, 2, 25] -- MAL (ordena como string)
  nums.sort((x, y) => x - y);        // [2, 10, 25] -- bien

  // para no mutar, copia primero
  const copia = [...nums].sort((x, y) => x - y);
  ```
- **Metodos/funciones internos**:
  | Caso | Que hace | Ejemplo | Resultado |
  |---|---|---|---|
  | sin funcion | ordena lexicograficamente | `[10,2,25].sort()` | `[10,2,25]` (mal) |
  | `(a,b) => a - b` | orden ascendente numerico | `[10,2,25].sort((a,b)=>a-b)` | `[2,10,25]` |
  | `(a,b) => b - a` | orden descendente numerico | `[10,2,25].sort((a,b)=>b-a)` | `[25,10,2]` |
- **Errores comunes**: el error clasico es `sort()` sin funcion comparadora. `"10"` va antes que `"2"` porque compara el caracter `"1"` contra `"2"`. Tambien olvidar que `sort` **muta** el array original: si no quieres modificarlo, copia con spread antes.
- **Buenas practicas**: siempre pasa una funcion comparadora para numeros. Para no mutar, usa `[...array].sort(fn)`. Para strings, `sort()` sin argumentos funciona bien (ordena alfabeticamente).

---

## Ejemplos integrados

Los ejemplos del modulo estan integrados aca, listos para correr con `node`. Cada bloque muestra su salida esperada como comentario.

### Metodos basicos (crear, acceder, agregar, quitar, buscar, recortar)

```js
// Piensa en un array como la lista de compras: cada cosa tiene su lugar
// y puedes mirarla, sumarle cosas o sacarle cosas.
const frutas = ['manzana', 'pera', 'banana'];
console.log(frutas[0]);                      // manzana
console.log(frutas.length);                  // 3
console.log(frutas[frutas.length - 1]);      // banana (ultimo)

// push mete al final de la fila y unshift al principio, como hacer cola en el kiosco.
frutas.push('uva');      // al final
frutas.unshift('kiwi');  // al inicio
console.log(frutas);     // ['kiwi','manzana','pera','banana','uva']

// pop saca al ultimo de la fila y shift al primero.
frutas.pop();            // saca del final
frutas.shift();          // saca del inicio
console.log(frutas);     // ['manzana','pera','banana']

// indexOf te dice en que lugar esta; si no esta, te da -1. includes te responde con si o no.
console.log(frutas.indexOf('pera'));     // 1
console.log(frutas.indexOf('melon'));    // -1 (no existe)
console.log(frutas.includes('banana'));  // true

// slice NO modifica el array original: miras el recorte sin tocar el original.
console.log(frutas.slice(0, 2));  // ['manzana','pera']
console.log(frutas);              // intacto

// join: array -> string, uniendo los elementos con el separador que elijas.
console.log(frutas.join(' - '));  // manzana - pera - banana

// reverse: da vuelta el array. OJO: modifica el original,
// asi que si lo quieres conservar, copia antes.
const alReves = ['a', 'b', 'c'].reverse();
console.log(alReves);             // ['c','b','a']

// Truco: dar vuelta un texto con split + reverse + join.
const texto = 'hola';
console.log(texto.split('').reverse().join('')); // aloh
```

### Recorrer arrays (for, for...of y forEach)

```js
const nums = [10, 20, 30];

// for clasico (con indice): controlas vos el contador, como contar con los dedos.
for (let i = 0; i < nums.length; i++) {
  console.log('for:', nums[i]);
}

// for...of (mas legible, sin indice): va directo al valor.
for (const n of nums) {
  console.log('for...of:', n);
}

// forEach (con valor e indice): le dice al array "haz esto con cada elemento".
nums.forEach((n, indice) => {
  console.log(`forEach posicion ${indice}: ${n}`);
});

// destructuring en for...of: si cada elemento es un par, puedes "abrirlo" al vuelo.
const pares = [[1, 'uno'], [2, 'dos']];
for (const [num, nombre] of pares) {
  console.log(num, nombre);
}
```

### map, filter, reduce, find, some/every y encadenar

```js
const precios = [100, 250, 40, 300];

// map: transforma cada elemento -> array nuevo (como pasarle la plancha a cada remera)
const conImpuesto = precios.map(p => p * 1.21);
console.log(conImpuesto); // [121, 302.5, 48.4, 363]

// filter: deja pasar solo los que cumplen (como el portero del boliche)
const caros = precios.filter(p => p >= 250);
console.log(caros); // [250, 300]

// reduce: todo el array -> un unico valor (como sumar todas las boletas del mes)
const total = precios.reduce((acumulador, p) => acumulador + p, 0);
console.log(total); // 690

// find: el PRIMERO que cumple (se detiene apenas encuentra el primero)
const encontrado = precios.find(p => p === 250);
console.log(encontrado); // 250

// some / every: booleanos. some pregunta "al menos uno cumple?"; every, "todos cumplen?".
console.log(precios.some(p => p > 500));  // false
console.log(precios.every(p => p > 0));   // true

// encadenar: pares, doblados, sumados. Puedes combinar los pasos como una receta:
// filtras, transformas y resumes, en ese orden.
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = numeros
  .filter(n => n % 2 === 0)     // [2,4,6]
  .map(n => n * 10)             // [20,40,60]
  .reduce((acc, n) => acc + n, 0); // 120
console.log(resultado); // 120
```

### Destructuring, spread y sort

```js
// Destructuring: abrir el paquete y agarrar directo lo que quieres.
const [a, b] = [10, 20];
console.log(a, b); // 10 20

// saltar elementos con comas: si una posicion no te interesa, pasas de largo.
const [, , tercero] = [1, 2, 3];
console.log(tercero); // 3

// rest en destructuring: el "..." agarra todo lo que sobra y lo junta en un array.
const [primero, ...resto] = [1, 2, 3, 4];
console.log(primero); // 1
console.log(resto);   // [2, 3, 4]

// spread: "desparrama" los elementos, como vaciar la mochila sobre la mesa.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = [...arr1, ...arr2];
console.log(combinado); // [1, 2, 3, 4]

// copia (no referencia): copiamos la lista, no pasamos el mismo papel.
const original = [1, 2, 3];
const copia = [...original];
copia.push(4);
console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]

// sort (OJO: convierte a string por defecto). Sin comparador, los numeros quedan raros.
const numeros = [10, 2, 25];
console.log([...numeros].sort());                // [10, 2, 25] mal!
console.log([...numeros].sort((x, y) => x - y)); // [2, 10, 25] bien
```

## Ejercicios

| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-suma.js` | sumar todos los numeros con reduce |
| `ejercicios/ej-02-pares-doblados.js` | filtrar pares y doblarlos con filter + map |
| `ejercicios/ej-03-mayor.js` | encontrar el numero mas grande con reduce |
| `ejercicios/ej-04-contar-palabras.js` | contar apariciones de cada palabra usando reduce a objeto |
| `ejercicios/ej-05-unicos.js` | eliminar duplicados manteniendo el orden |
