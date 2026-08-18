/*
Ejercicio 4 — Promise.all

Vas a lanzar tres "pedidos" a la vez y esperar a que lleguen todos
juntos, como pedir varias cosas al delivery y esperar el combo completo.
Promise.all([p1, p2, p3]) espera a que TODAS las promesas se cumplan
y te devuelve un array con todos los resultados en orden. Si una sola
falla, falla todo el combo.

Paso a paso:
1) Creá numero(valor, ms) que devuelva una promesa que se resuelve
   con `valor` después de ms. Es la misma idea de esperar del
   ejercicio 1, pero resolviendo con el valor que te pasaron.
2) Creá tres promesas con:
   - valor 1 y 100 ms
   - valor 2 y 200 ms
   - valor 3 y 150 ms
3) Juntalas con Promise.all y esperá el resultado. Fijate cómo se usa
   en ejemplos/02-promesas.js (la parte de Promise.all): .then te da
   el array con los resultados en el mismo orden que las pasaste,
   no importa cuál termine primero.
4) Mostrá la SUMA de los tres resultados.

Resultado esperado:
6
*/

// completá acá