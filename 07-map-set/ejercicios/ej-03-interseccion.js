/*
Ejercicio 3 -- Interseccion con Set
Tenes dos listas de numeros:
  const a = [1, 2, 3, 4, 5];
  const b = [4, 5, 6, 7];
Devolve un array con los numeros que estan en AMBOS.
Como cuando dos amigos van a la misma cancha y queres saber que dias
van los dos: buscas los que aparecen en las dos agendas.

La idea del Set aca: el Set tiene un metodo .has(valor) que te dice
rapidisimo si un valor esta adentro (true o false). Es como preguntar
"esta fulanito en la lista de presentes?". Fijate en ejemplos/01-set.js.

Paso a paso:
1) Convierte el array b a Set.
   (Por que a Set? Porque .has() es mucho mas rapido y simple que
   buscar a mano en el array.)
2) Recorre el array a con .filter() y quedate solo con los numeros
   que estan en setB: la condicion es preguntarle a setB con .has().
   filter te deja pasar solo los que cumplen la condicion, como el
   portero del boliche.
3) Muestra el resultado con console.log.

Resultado esperado:
[ 4, 5 ]
*/

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7];

// completar aca
