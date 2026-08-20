/*
Ejercicio 4 — Promise.all

Vas a lanzar tres "pedidos" a la vez y esperar a que lleguen todos
juntos, como pedir varias cosas al delivery y esperar el combo completo.
Promise.all([p1, p2, p3]) espera a que TODAS las promesas se cumplan
y te devuelve un array con todos los resultados en orden. Si una sola
falla, falla todo el combo.

Paso a paso:
1) Crear numero(valor, ms) que devuelva una promesa que se resuelve
   con `valor` despues de ms. Es la misma idea de esperar del
   ejercicio 1, pero resolviendo con el valor que te pasaron.
2) Crear tres promesas con:
   - valor 1 y 100 ms
   - valor 2 y 200 ms
   - valor 3 y 150 ms
3) Juntalas con Promise.all y espera el resultado. Observa como se usa
   en la seccion Promise.all del README: .then te da
   el array con los resultados en el mismo orden que los pasaste,
   no importa cual termine primero.
4) Mostrar la SUMA de los tres resultados.

Resultado esperado:
6
*/

// completa aqui
