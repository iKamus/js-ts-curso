/*
Ejercicio 3 — async/await

El mismo ejercicio de cocinar, pero ahora con async/await: el codigo se
lee como si estuvieras contando la receta paso a paso, sin vueltas.

Que es async/await? Es una forma mas comoda de trabajar con promesas:
- async: le decis a la funcion "esta funcion va a esperar cosas"
- await: dentro de una funcion async, "pausa ahi hasta que la promesa
  se cumpla, y dame el valor directo"
Es como decirle a quien te atiende: "mientras espero me tomo un mate
y cuando este listo me avisas". El codigo se lee casi como si fuera
sincrono, mucho mas tranquilo de seguir.

Paso a paso:
1) Reusa la misma paso(nombre, ms) del ejercicio 2 (la promesa que
   espera ms y devuelve "v check <nombre>").
2) Crear una funcion main() marcada como async, y adentro usar await
   para esperar cada paso y agarrar el resultado directo. Fijate el
   patron en ejemplos/03-async-await.js: await "pausa" hasta que la
   promesa se cumpla y te da el valor directo. Con lavar verduras
   (300 ms), picar verduras (400 ms) y cocinar (500 ms), mostrar
   cada resultado con console.log.
3) Llamar a main() al final (no olvides los parentesis).

Resultado esperado:
v check lavar verduras
v check picar verduras
v check cocinar
*/

// completar aca
