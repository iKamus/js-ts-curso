# Módulo 04 — Arrays

Un array es como tu lista de compras del almacén: una fila ordenada de cosas, cada una con su lugar. Lo importante del módulo es aprender a moverte por esa fila sin miedo.

## Básicos
Un array es como una fila de cajas numeradas. La primera caja es la 0 (¡arranca en cero!, como el asiento del bondi: todos contamos "del uno en adelante", pero la computadora arranca en cero).
- Crear: `const frutas = ['manzana', 'pera']`
- Acceder: `frutas[0]` (índice desde 0), `frutas.length` (cantidad de cajas)
- Agregar: `push` (al final de la fila), `unshift` (al principio) | Quitar: `pop` (del final), `shift` (del principio)
- Buscar: `indexOf` (posición o -1 si no está), `includes` (true/false)
- Cortar sin modificar: `slice(inicio, fin)` | Unir en string: `join(' ')`

> Ojo: los métodos push/pop/shift/unshift CAMBIAN el array original (mueven las cajas). En cambio slice y join no lo tocan: te dan una copia. Esa diferencia es importante.

## Iteración
- `for (let i = 0; ...)`, `for...of`, `forEach((valor, indice) => ...)`

Recorrer un array es como leer la lista de compras de punta a punta: vas pasando por cada ítem y hacés algo con él.

## Los 4 grandes (devolver arrays nuevos, no mutan)
- `map(fn)` → transforma cada elemento
- `filter(fn)` → deja pasar los que cumplen la condición
- `reduce(fn, inicial)` → reduce todo a un único valor
- `find(fn)` → el primer que cumple | `some`/`every` → booleanos

```js
const precios = [100, 250, 40];
precios.map(p => p * 1.21);              // [121, 302.5, 48.4]
precios.filter(p => p >= 250);           // [250]
precios.reduce((acc, p) => acc + p, 0);  // 390
```

## Spread y destructuring
- `const copia = [...original]` (copia superficial, no referencia)
- `const [a, b, ...resto] = [1, 2, 3, 4]`
- `[...arr1, ...arr2]` combina arrays

El spread es como vaciar la mochila sobre la mesa: los elementos quedan sueltos, listos para usarlos.

## Ojo con sort
`sort()` convierte a string por defecto → `[10, 2, 25]` ordena mal.
Usá `sort((x, y) => x - y)` para números.

Es como ordenar cartas: si las tratás como palabras, "10" va antes que "2" porque se compara el primer carácter.

## Ejemplos
| Archivo | Tema |
|---|---|
| `ejemplos/01-metodos-basicos.js` | meter, sacar y buscar como con la lista de compras |
| `ejemplos/02-iteracion.js` | recorrer la lista de punta a punta de tres maneras |
| `ejemplos/03-map-filter-reduce.js` | transformar, filtrar y resumir con los 4 grandes |
| `ejemplos/04-destructuring-spread.js` | repartir en variables y copiar sin romper nada |

## Ejercicios
| Archivo | Consigna |
|---|---|
| `ejercicios/ej-01-suma.js` | sumar todo con reduce (como cerrar la cuenta del asado) |
| `ejercicios/ej-02-pares-doblados.js` | quedarte con los pares y doblarlos |
| `ejercicios/ej-03-mayor.js` | encontrar el más grande con reduce |
| `ejercicios/ej-04-contar-palabras.js` | contar cuántas veces aparece cada palabra |
| `ejercicios/ej-05-unicos.js` | sacar los repetidos y quedarte con los únicos |