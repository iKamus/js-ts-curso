/*
Ejercicio 2 — Encadenar promesas (preparar comida)

Como cuando cocinas: no puedes picar antes de lavar las verduras.
Aca vas a encadenar pasos y cada uno espera a que termine el anterior.
Encadenar promesas es poner varios .then seguidos, y cada .then puede
devolver OTRA promesa para que el siguiente espere.

Paso a paso:
1) Crear paso(nombre, ms) que devuelva una promesa que se resuelve
   luego de ms con el texto "v check <nombre>". Es la misma idea de
   esperar del ejercicio 1, pero resolviendo con un texto armado
   con template literal.
2) Encadenar con .then (devolviendo la siguiente promesa) en este
   orden, y mostrar cada resultado:
   - paso('lavar verduras', 300)  -> v check lavar verduras
   - despues paso('picar verduras', 400) -> v check picar verduras
   - despues paso('cocinar', 500) -> v check cocinar
   Observa en la seccion Promise del README como se encadenan: cada .then
   puede devolver OTRA promesa, y asi el siguiente .then espera a
   que termine (como la cadena de produccion: cada estacion hace
   su parte y pasa el producto a la siguiente).

Resultado esperado:
v check lavar verduras
v check picar verduras
v check cocinar
*/

// completa aqui
