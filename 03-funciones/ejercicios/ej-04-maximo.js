/*
Ejercicio 4 — El mayor con rest params
Aca probamos los rest params: la funcion acepta TODOS los numeros que le
passes, sin importar cuantos sean. El ...numeros los junta a todos en un
array, como juntar las monedas que sobran en la bolsa.

Paso a paso:
1) Crea maximo(...numeros):
   - numeros va a ser un array con todos los numeros que le pasaste.
   - Si el array esta vacio (no le pasaron nada) -> devuelve null.
   - Si no, recorre el array (por ejemplo con un for o un for...of)
     y quedate con el mas grande. Una forma facil: agarra una variable
     maximo que arranque en el primer elemento, y cada vez que
     encuentres un numero mas grande, actualizala.
   Ojo: aca NO se puede usar Math.max(...numeros), el ejercicio es para
   practicar el recorrido a mano. Es como elegir el mejor postre de toda
   la vidriera: los miras todos de a uno y te quedas con el que mas te gusta.
2) Muestra el resultado de cada llamada con console.log (una por linea).
3) Usa una ARROW FUNCTION para definir maximo.

Pista: si numeros esta vacio, `numeros.length` es 0. Para el recorrido,
pensa en como ir comparando uno por uno, como en una competencia donde
el ganador se queda con la corona.

Probá: maximo(1,5,3), maximo(10,2,8,7,9), maximo()

Resultado esperado:
5
10
null
*/

// completa aqui
