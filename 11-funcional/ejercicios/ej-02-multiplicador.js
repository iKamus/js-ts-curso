/*
Ejercicio 2 — Factory de multiplicadores (currying)

Vas a hacer una fabrica de multiplicadores: le pasas el numero por
el que queres multiplicar y te devuelve una funcion lista para usar,
como preparar la maquina antes de arrancar a trabajar.

Una factory es una funcion que devuelve otra funcion. La funcion que
devolves se "acuerda" del factor gracias al closure (lo viste en el
ejercicio 1). Fijate como esta armada la factory en
ejemplos/03-closures-currying.js.

Paso a paso:
1) Crear multiplicador(factor) que devuelva una funcion que:
   - recibe un numero
   - lo multiplica por factor y lo devuelve
   (el factor queda "atrapado" en la funcion devuelta, como la
   mochila del ejercicio 1)
2) Crear dos "maquinas":
   - const doble = multiplicador(2);
   - const triple = multiplicador(3);
3) Probar y mostrar (uno por linea):
   - doble(7)     -> 14
   - triple(7)    -> 21
   - doble(2.5)   -> 5

Tip: el closure funciona porque la funcion devuelta "captura" la
variable factor. Cada llamada a multiplicador() crea una nueva
"mochila" con su propio factor.

Resultado esperado:
14
21
5
*/

// completá acá
