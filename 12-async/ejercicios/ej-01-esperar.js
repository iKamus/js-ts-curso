/*
Ejercicio 1 — Promesa con setTimeout

Vas a crear tu primera promesa: un temporizador que promete avisarte
cuando pasen los milisegundos que le indiques. Es como pedir algo por
delivery: lo encargas, esperas, y cuando llega te avisan.

Una promesa es un objeto que representa un valor FUTURO: al principio
esta "pendiente" (todavia no llego nada), y despues pasa a "cumplida"
(resolve) o "rechazada" (reject).

Paso a paso:
1) Crear esperar(ms) que devuelva una promesa. Observa como se arma
   en la seccion Promise del README (la funcion esperar de ese ejemplo):
   - new Promise recibe una funcion con resolve (avisa que salio todo bien)
   - setTimeout(funcion, ms) espera ms milisegundos y recien ahi
     ejecuta la funcion
   - o sea: esperamos ms, y cuando pasan, avisamos "listo" con resolve.
   Imita ese patron con tu propia version.
2) Usala con .then (observa como en el mismo ejemplo):
   .then se ejecuta cuando la promesa se cumple, y recibe el valor
   que paso resolve (aca: 'listo').

Resultado esperado:
listo
*/

// completa aqui
