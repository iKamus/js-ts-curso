/*
Ejercicio 4 — once(fn): ejecutar una sola vez

Imaginá la entrada al cine: el ticket sirve para una sola función.
Acá vas a lograr lo mismo, pero con una función: que se ejecute una
única vez y después "se apague".

Paso a paso:
1) Creá una función once(fn) que devuelva una versión de fn que SOLO
   se ejecuta la primera vez que la llamás. Las siguientes llamadas
   no hacen nada (devuelven undefined, o directamente no ejecutan fn).
2) La idea con un closure (módulo 11): una variable bandera adentro
   de once, que empieza en "todavía no se usó". Cada vez que llamás
   a la función devuelta, mirás la bandera:
   - si está en "no se usó" → la cambiás a "ya se usó" y ejecutás fn
   - si ya está en "ya se usó" → no hacés nada
   (la función devuelta puede recibir argumentos, pasale los que
   fn necesite)
3) Probá así:
   const diHola = once(() => console.log('hola'));
   diHola();  → imprime "hola" (primera vez)
   diHola();  → no imprime nada
   diHola();  → no imprime nada

Resultado esperado:
hola
*/

// completá acá