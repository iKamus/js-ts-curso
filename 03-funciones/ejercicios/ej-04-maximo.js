/*
Ejercicio 4 — El mayor con rest params
Acá probamos el rest params: la función acepta TODOS los números que le
pases, sin importar cuántos sean. El ...numeros los junta a todos en un
array, como juntar las monedas que sobran en la bolsa.

Paso a paso:
1) Creá maximo(...numeros):
   - numeros va a ser un array con todos los números que le pasaste.
   - Si el array está vacío (no le pasaron nada) → devolvé null.
   - Si no, recorré el array (por ejemplo con un for o un for...of)
     y quedate con el más grande. Una forma fácil: agarrá una variable
     maximo que arranque en el primer elemento, y cada vez que
     encuentres un número más grande, actualizala.
   Ojo: acá NO se puede usar Math.max(...numeros), el ejercicio es para
   practicar el recorrido a mano. Es como elegir el mejor postre de toda
   la vidriera: los mirás todos de a uno y te quedás con el que más te gusta.
2) Mostrá el resultado de cada llamada con console.log (una por línea).

Probá: maximo(1,5,3), maximo(10,2,8,7,9), maximo()

Resultado esperado:
5
10
null
*/

// completá acá