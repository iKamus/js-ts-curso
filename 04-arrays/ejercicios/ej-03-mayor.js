/*
Ejercicio 3 -- El mas grande con reduce
Aqui tenes:
  const numeros = [34, 7, 89, 12, 56, 3];
Encontra el valor mas grande usando reduce (sin usar Math.max).

Como se hace "a mano"? Es como elegir al mas alto de la fila:
- Agarras al primero y decis "este es el mas alto (por ahora)".
- Vas mirando al de al lado: es mas alto que el actual? Entonces ese pasa
  a ser el mas alto.
- Seguis asi hasta el final de la fila. El que quedo al final, gana.

Con reduce:
- El acumulador arranca en el PRIMER elemento del array (en vez de 0).
- En cada vuelta, devolves el mas grande entre el acumulador y el
  numero de la vuelta. Usa un operador ternario (condicion ? si : no)
  que ya viste en ejemplos.
- Muestra el resultado con console.log.

Pista: ¿que pasa si el array esta vacio? Por eso arrancas con el
primer elemento y recorres desde el segundo.

Resultado esperado:
89
*/

const numeros = [34, 7, 89, 12, 56, 3];

// completa aqui
