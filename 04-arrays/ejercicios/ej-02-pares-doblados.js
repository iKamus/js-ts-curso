/*
Ejercicio 2 — Filtrar y transformar
Vas con esta fila de números:
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Dos pasos, como una cadena de producción:
1) FILTRÁ los pares con filter. El filter te deja pasar solo los que
   cumplen la condición, como el portero del boliche. Un número es par
   si al dividirlo por 2 no sobra nada: escribí vos la condición con
   el operador % que ya conocés.
2) DOBLÁ cada uno con map. El map transforma cada elemento: le pasa
   la plancha a cada uno, pero el array original queda igual.

Ojo con el orden: primero filtrás, después doblás. Si doblás primero,
filtrás después, también te daría los pares doblados, pero el ejercicio
es para practicar la cadena correcta: filter y después map.

3) Mostrá el resultado final con console.log.
Pista para encadenar: un método se llama directamente sobre el
resultado del otro.

Resultado esperado:
[ 4, 8, 12, 16, 20 ]
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// completá acá