/*
Ejercicio 2 — Factory de multiplicadores (currying)

Acá vas a hacer una fábrica de multiplicadores: le pasás el número por
el que querés multiplicar y te devuelve una función lista para usar,
como preparar la máquina antes de arrancar a trabajar.

Una factory (fábrica) es una función que devuelve otra función.
La función que devolvés se "acuerda" del factor gracias al closure
(lo viste en el ejercicio 1). Fijate cómo está armada la factory
en ejemplos/03-currying.js.

Paso a paso:
1) Creá multiplicador(factor) que devuelva una función que:
   - recibe un número
   - lo multiplica por factor y lo devuelve
   (el factor queda "atrapado" en la función devuelta, como la
   mochila del ejercicio 1)
2) Creá dos "máquinas":
   - const doble = multiplicador(2);
   - const triple = multiplicador(3);
3) Probá y mostrá (uno por línea):
   - doble(7)     → 14
   - triple(7)    → 21
   - doble(2.5)   → 5

Resultado esperado:
14
21
5
*/

// completá acá