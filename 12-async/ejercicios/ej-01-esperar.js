/*
Ejercicio 1 — Promesa con setTimeout

Vas a crear tu primera promesa: un temporizador que promete avisarte
cuando pasen los milisegundos que le indiques. Es como pedir algo por
delivery: lo encargás, esperás, y cuando llega te avisan.

Una promesa es un objeto que representa un valor FUTURO: al principio
está "pendiente" (todavía no llegó nada), y después pasa a "cumplida"
(resolve) o "rechazada" (reject).

Paso a paso:
1) Creá esperar(ms) que devuelva una promesa. Fijate cómo se arma
   en ejemplos/02-promesas.js (la función esperar de ese ejemplo):
   - new Promise recibe una función con resolve (avisa que salió todo bien)
   - setTimeout(función, ms) espera ms milisegundos y recién ahí
     ejecuta la función
   - o sea: esperamos ms, y cuando pasan, avisamos "listo" con resolve.
   Imitá ese patrón con tu propia versión.
2) Usala con .then (fijate cómo en el mismo ejemplo):
   .then se ejecuta cuando la promesa se cumple, y recibe el valor
   que pasó resolve (acá: 'listo').

Resultado esperado:
listo
*/

// completá acá