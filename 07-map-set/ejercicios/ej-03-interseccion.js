/*
Ejercicio 3 — Intersección con Set
Tenés dos listas de números:
  const a = [1, 2, 3, 4, 5];
  const b = [4, 5, 6, 7];
Devolvé un array con los números que están en AMBOS.
Como cuando dos amigos van a la misma cancha y querés saber qué días
van los dos: buscás los que aparecen en las dos agendas.

La idea del Set acá: el Set tiene un método .has(valor) que te dice
rapidísimo si un valor está adentro (true o false). Es como preguntar
"¿está fulanito en la lista de presentes?". Fijate en ejemplos/01-set.js.

Paso a paso:
1) Convertí el array b a Set.
   (¿Por qué a Set? Porque .has() es mucho más rápido y simple que
   buscar a mano en el array.)
2) Recorré el array a con .filter() y quedate solo con los números
   que están en setB: la condición es preguntarle a setB con .has().
   filter te deja pasar solo los que cumplen la condición, como el
   portero del boliche.
3) Mostrá el resultado con console.log.

Resultado esperado:
[ 4, 5 ]
*/

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7];

// completá acá