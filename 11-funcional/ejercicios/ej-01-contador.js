/*
Ejercicio 1 — Contador con closure

Vas a armar un contador que se acuerde de su número, como quien lleva
la cuenta de los mates que tomó: cada vez que toma, suma uno.

¿Qué es un closure? Es una función que se "acuerda" del lugar donde
nació. Acá la magia: la variable que cuenta vive adentro de
crearContador(), pero la función que devolvés la sigue viendo aunque
se mueva de lugar. Es como una mochila que te acompaña: nació con
sus cosas adentro y no las pierde.

Paso a paso:
1) Creá crearContador() que:
   - adentro tenga una variable que arranque en 0
   - devuelva UNA función que: suma 1 a esa variable y devuelve
     el valor acumulado
   La función que devolvés es la que "captura" la variable cuenta:
   nadie más la ve, pero ella la maneja. Fijate cómo está armado
   en ejemplos/01-closures.js.
2) Probá con DOS contadores independientes, o sea dos "mochilas"
   separadas (cada llamada a crearContador() arma una mochila nueva):
   - const a = crearContador();  a(); a(); a(); → 1, 2, 3
   - const b = crearContador();  b(); → 1
   Fijate que b arranca de cero: no comparte la mochila con a.
3) Mostrá el resultado final de a() (la tercera llamada) y el de b().

Resultado esperado:
3
1
*/

// completá acá