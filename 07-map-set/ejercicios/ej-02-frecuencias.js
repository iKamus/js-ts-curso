/*
Ejercicio 2 — Frecuencias con Map
Tenés esta lista de palabras:
  const palabras = ['hola', 'chau', 'hola', 'hola', 'adios'];
Contá con un Map cuántas veces aparece cada palabra y mostrá cada
entrada como "palabra: cantidad".

¿Qué es un Map? Es como un diccionario o la lista de precios del
almacén: guardás pares clave → valor. Acá la clave va a ser la
palabra y el valor la cantidad de veces que aparece.
Es como contar votos: cada palabra es un candidato y sumás uno
cada vez que aparece. Fijate cómo se usa en ejemplos/02-map.js
(las tres operaciones: guardar, leer y preguntar si existe).

Paso a paso:
1) Creá un Map vacío.
2) Recorré el array de palabras con for...of. Para cada palabra:
   - preguntá cuántas veces aparece (leé del Map)
   - si todavía no existe, te da undefined. Pensá en el "plan B"
     con || (como en el módulo 05): undefined || 0 es 0, así que
     podés escribir todo en una sola línea: tomá lo que había
     (o 0 si no había nada) y sumale 1.
   Escribí vos la línea con las operaciones del Map.
3) Después de recorrer todo, mostrá cada entrada. Fijate cómo se
   recorre un Map en ejemplos/02-map.js (te da cada par
   clave → valor, que podés "abrir" con la coma, como en el
   destructuring del módulo 04). Mostrá `${palabra}: ${cantidad}`
   (una línea por entrada).

Resultado esperado:
hola: 3
chau: 1
adios: 1
*/

const palabras = ['hola', 'chau', 'hola', 'hola', 'adios'];

// completá acá