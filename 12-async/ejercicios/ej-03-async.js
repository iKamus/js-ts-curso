/*
Ejercicio 3 — async/await

El mismo ejercicio de cocinar, pero ahora con async/await: el código se
lee como si estuvieras contando la receta paso a paso, sin vueltas.

¿Qué es async/await? Es una forma más cómoda de trabajar con promesas:
- async: le decís a la función "esta función va a esperar cosas"
- await: dentro de una función async, "pausá acá hasta que la promesa
  se cumpla, y dame el valor directo"
Es como decirle a quien te atiende: "mirá, mientras espero me tomo un
mate y cuando esté listo me avisás". El código se lee casi como si
fuera síncrono, mucho más tranquilo de seguir.

Paso a paso:
1) Reusá la misma paso(nombre, ms) del ejercicio 2 (la promesa que
   espera ms y devuelve "✓ <nombre>").
2) Creá una función main() marcada como async, y adentro usá await
   para esperar cada paso y agarrar el resultado directo. Fijate el
   patrón en ejemplos/03-async-await.js: await "pausa" hasta que la
   promesa se cumpla y te da el valor directo. Con lavar verduras
   (300 ms), picar verduras (400 ms) y cocinar (500 ms), mostrando
   cada resultado con console.log.
3) Llamá a main() al final (no olvides los paréntesis).

Resultado esperado:
✓ lavar verduras
✓ picar verduras
✓ cocinar
*/

// completá acá