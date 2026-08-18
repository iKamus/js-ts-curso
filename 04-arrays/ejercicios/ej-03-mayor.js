/*
Ejercicio 3 — El más grande con reduce
Acá tenés:
  const numeros = [34, 7, 89, 12, 56, 3];
Encontrá el valor más grande usando reduce (sin usar Math.max).

¿Cómo se hace "a mano"? Es como elegir al más alto de la fila:
- Agarrás al primero y decís "este es el más alto (por ahora)".
- Vas mirando al de al lado: ¿es más alto que el actual? Entonces ese pasa
  a ser el más alto.
- Seguís así hasta el final de la fila. El que quedó al final, gana.

Con reduce:
- El acumulador arranca en el PRIMER elemento del array (en vez de 0).
- En cada vuelta, devolvés el más grande entre el acumulador y el
  número de la vuelta. Pensá cómo compararlos: hay un operador
  ternario (condición ? sí : no) que ya viste en ejemplos.
- Mostrá el resultado con console.log.

Resultado esperado:
89
*/

const numeros = [34, 7, 89, 12, 56, 3];

// completá acá