# Módulo 07 — Map y Set

## Set
Es una colección de valores **únicos**: como una bolsa donde no entran duplicados. Si ya hay un valor, el segundo intento no entra, no te preocupe, no rompe nada, simplemente lo ignora. Pensalo como la lista de alumnos presentes: cada nombre aparece una sola vez, por más que lo anotes dos veces.
```js
const set = new Set();
set.add(1); set.add(2); set.add(1);   // 1 no se agrega dos veces
set.has(1)     // true (¿está el 1 adentro?)
set.size       // cantidad de valores que tiene
set.delete(2)  // borrar un valor
set.clear()    // vaciar todo
```
El uso más común: **deduplicar** (sacar los repetidos) → `[...new Set(array)]`. Como cuando limpiás tu playlist y querés una sola versión de cada tema.

## Map
Es una colección de pares **clave → valor** donde la clave puede ser **cualquier tipo** (no solo strings). Es como un diccionario de la vida real: palabra → significado, o como una lista de precios en el almacén: producto → precio.
```js
const mapa = new Map();
mapa.set('nombre', 'Ana');       // guardar / actualizar (como escribir en la libreta)
mapa.get('nombre')               // leer → 'Ana' (como buscar en la libreta)
mapa.has('nombre')               // true (¿está esa clave?)
mapa.delete('nombre')            // borrar esa clave
mapa.size                        // cantidad de pares guardados
for (const [clave, valor] of mapa) { ... }   // recorrer todos los pares
[...mapa.keys()] / [...mapa.values()] / [...mapa.entries()]
// keys = las claves, values = los valores, entries = los pares completos
```
Ideal para **contar frecuencias** (¿cuántas veces aparece cada palabra?) y como caché (memoria de lo que ya calculaste). De yapa, recuerda el orden de inserción y tiene `size`, o sea, sabés cuántas cosas tenés guardadas.

## Objeto vs Map (cuándo usar qué)
- Objeto: estructuras con claves fijas y conocidas. Es como un formulario con campos fijos.
- Map: colecciones dinámicas, claves de cualquier tipo, mucha inserción/borrado. Es como una caja donde vas agregando y sacando cosas sin parar.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-set.js` | Set: add/has/size, deduplicar |
| `ejemplos/02-map.js` | Map: set/get/has, iteración |
| `ejemplos/03-comparacion.js` | contar frecuencias |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-dedupe.js` | deduplicar con Set |
| `ejercicios/ej-02-frecuencias.js` | frecuencias con Map |
| `ejercicios/ej-03-interseccion.js` | intersección de arrays |
| `ejercicios/ej-04-cache.js` | memoización con Map |