/*
Ejercicio 1 — Contador con closure

Vas a armar un contador que se acuerde de su numero, como quien lleva
la cuenta de las veces que se usa una maquina: cada vez que la activas,
suma uno.

Un closure es una funcion que "recuerda" las variables del lugar donde
nacio. La variable cuenta vive adentro de crearContador(), pero la
funcion que devuelves la sigue viendo aunque se mueva de lugar. Es como
una mochila: la funcion nacio con sus cosas adentro y no las pierde.

Paso a paso:
1) Crear crearContador() que:
   - adentro tenga una variable que arranque en 0
   - devuelva una funcion que: suma 1 a esa variable y devuelve
     el valor acumulado
   La funcion que devuelves es la que "captura" la variable cuenta:
   nadie mas la ve, pero ella la maneja. Observa como esta armado
   en la seccion Closures del README del modulo.
2) Probar con DOS contadores independientes (dos "mochilas"
   separadas, cada llamada a crearContador() arma una nueva):
   - const a = crearContador();  a(); a(); a(); -> 1, 2, 3
   - const b = crearContador();  b(); -> 1
   Observa que b arranca de cero: no comparte la mochila con a.
3) Mostrar el resultado final de a() (la tercera llamada) y el de b().

Tip: la variable cuenta es privada. No puedes accederla desde afuera
de crearContador(). Eso es la gracia del closure.

Resultado esperado:
3
1
*/

// completa aqui
