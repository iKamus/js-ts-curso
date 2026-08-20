/*
Ejercicio 5 -- Eliminar duplicados
Mira esta lista:
  const numeros = [1, 2, 2, 3, 4, 4, 4, 5];
Devuelve un array solo con los unicos (cada numero una sola vez),
respetando el orden en que aparecen. Es como en el album de figuritas:
una sola por numero, pero no mezclamos el orden.

Tienes DOS caminos posibles, elige el que te resulte mas comodo:

Camino A -- con Set (lo ves a fondo en el modulo 07):
  Un Set es como una bolsa que no deja entrar repetidos: metes el array
  adentro y el solo se queda con un ejemplar de cada valor. Despues
  tienes que volver a "desparramarlo" en un array. Observa como se hace
  en el README del modulo 07 (seccion Set, la parte de "deduplicar").

Camino B -- con filter e indexOf:
  indexOf te da la PRIMERA posicion donde aparece un numero. Si la
  posicion actual es la primera aparicion, lo dejamos pasar; si ya
  aparecio antes, lo filtramos. O sea: solo pasa la primera vez.
  Escribe la condicion adentro del filter (compara el indice
  actual con el que da indexOf).

Muestra el resultado con console.log.

Pista: en el camino B, el callback del filter recibe (valor, indice).
Compara indice con.indexOf(valor).

Resultado esperado:
[ 1, 2, 3, 4, 5 ]
*/

const numeros = [1, 2, 2, 3, 4, 4, 4, 5];

// completa aqui
