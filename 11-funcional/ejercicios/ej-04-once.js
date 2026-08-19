/*
Ejercicio 4 — once(fn): ejecutar una sola vez

Imagina la entrada al cine: el ticket sirve para una sola funcion.
Acas vas a lograr lo mismo, pero con una funcion: que se ejecute una
unica vez y despues "se apague".

Paso a paso:
1) Crear una funcion once(fn) que devuelva una version de fn que SOLO
   se ejecuta la primera vez que la llamas. Las siguientes llamadas
   no hacen nada (devuelven undefined, o directamente no ejecutan fn).
2) La idea es usar un closure: una variable bandera adentro de once,
   que empieza en "todavia no se uso". Cada vez que llamas a la
   funcion devuelta, miras la bandera:
   - si esta en "no se uso" -> la cambias a "ya se uso" y ejecutas fn
   - si ya esta en "ya se uso" -> no haces nada
   (la funcion devuelta puede recibir argumentos, pase los que
   fn necesite)
3) Probar asi:
   const diHola = once(() => console.log('hola'));
   diHola();  -> imprime "hola" (primera vez)
   diHola();  -> no imprime nada
   diHola();  -> no imprime nada

Tip: la variable que controla si ya se ejecuto vive dentro del closure,
como la mochila de los ejercicios anteriores. Nadie de afuera puede
tocarla.

Resultado esperado:
hola
*/

// completá acá
