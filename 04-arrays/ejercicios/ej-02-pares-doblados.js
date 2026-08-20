/*
Ejercicio 2 -- Filtrar y transformar
Vas con esta fila de numeros:
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Dos pasos, como una cadena de produccion:
1) FILTRA los pares con filter. El filter te deja pasar solo los que
   cumplen la condicion, como el portero del boliche. Un numero es par
   si al dividirlo por 2 no sobra nada: escribe la condicion con
   el operador % que ya conoces.
2) DOBLA cada uno con map. El map transforma cada elemento: le pasa
   la plancha a cada uno, pero el array original queda igual.

Ojo con el orden: primero filtras, despues doblas. Si doblas primero,
filtras despues, tambien te daria los pares doblados, pero el ejercicio
es para practicar la cadena correcta: filter y despues map.

3) Muestra el resultado final con console.log.
Pista para encadenar: un metodo se llama directamente sobre el
resultado del otro.

Resultado esperado:
[ 4, 8, 12, 16, 20 ]
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// completa aqui
