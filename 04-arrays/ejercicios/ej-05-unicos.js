/*
Ejercicio 5 — Eliminar duplicados
Mirá esta lista:
  const numeros = [1, 2, 2, 3, 4, 4, 4, 5];
Devolvé un array solo con los únicos (cada número una sola vez),
respetando el orden en que aparecen. Es como en el álbum de figuritas:
una sola por número, pero no mezclamos el orden.

Tenés DOS caminos posibles, elegí el que te resulte más cómodo:

Camino A — con Set (lo ves a fondo en el módulo 07):
  Un Set es como una bolsa que no deja entrar repetidos: metés el array
  adentro y él solo se queda con un ejemplar de cada valor. Después
  tenés que volver a "desparramarlo" en un array. Fijate cómo se hace
  en 07-map-set/ejemplos/01-set.js (la parte de "deduplicar un array").

Camino B — con filter e indexOf:
  indexOf te da la PRIMERA posición donde aparece un número. Si la
  posición actual es la primera aparición, lo dejamos pasar; si ya
  apareció antes, lo filtramos. O sea: solo pasa la primera vez.
  Escribí vos la condición adentro del filter (compará el índice
  actual con el que da indexOf).

Mostrá el resultado con console.log.

Resultado esperado:
[ 1, 2, 3, 4, 5 ]
*/

const numeros = [1, 2, 2, 3, 4, 4, 4, 5];

// completá acá