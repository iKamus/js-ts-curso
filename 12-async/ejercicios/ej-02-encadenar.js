/*
Ejercicio 2 — Encadenar promesas (preparar comida)

Como cuando cocinás: no podés picar antes de lavar las verduras.
Acá vas a encadenar pasos y cada uno espera a que termine el anterior.
Encadenar promesas es poner varios .then seguidos, y cada .then puede
devolver OTRA promesa para que el siguiente espere.

Paso a paso:
1) Creá paso(nombre, ms) que devuelva una promesa que se resuelve
   luego de ms con el texto "✓ <nombre>". Es la misma idea de
   esperar del ejercicio 1, pero resolviendo con un texto armado
   con template literal.
2) Encadená con .then (devuelviendo la siguiente promesa) en este
   orden, y mostrá cada resultado:
   - paso('lavar verduras', 300)  → ✓ lavar verduras
   - después paso('picar verduras', 400) → ✓ picar verduras
   - después paso('cocinar', 500) → ✓ cocinar
   Fijate en ejemplos/02-promesas.js cómo se encadenan: cada .then
   puede devolver OTRA promesa, y así el siguiente .then espera a
   que termine (como la cadena de producción: cada estación hace
   su parte y pasa el producto a la siguiente).

Resultado esperado:
✓ lavar verduras
✓ picar verduras
✓ cocinar
*/

// completá acá