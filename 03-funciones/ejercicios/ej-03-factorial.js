/*
Ejercicio 3 — Factorial (recursion)
Aca viene lo copado: una funcion que se llama a si misma, como las cajas
rusas que adentro tienen otra caja mas chica. A eso se le dice recursion.

Primero, que es el factorial? Es multiplicar un numero por todos los
que le siguen hacia abajo hasta llegar a 1:
  factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

Como lo pensas con recursion? Fijate este truco:
  factorial(5) = 5 * factorial(4)
  factorial(4) = 4 * factorial(3)
  ...
  factorial(1) = 1  <- llegamos al CASO BASE: ya no llamamos a nadie mas

Entonces la funcion hace dos cosas:
1) Si n es 0 o 1 -> devuelve 1. Ese es el caso base: la caja rusa mas
   chica, donde la funcion se frena (si no, se llamaria para siempre
   y se quedaria colgada).
2) Si no -> devuelve el numero por el factorial del anterior, siguiendo
   el patron de la cadena de arriba: cada llamada llama a la anterior,
   y asi hasta llegar al caso base.
Por definicion factorial(0) = 1.

Crea factorial(n) con esa logica y muestra los tres resultados.
Pista: usa return con la formula `n * factorial(n - 1)` y un `if` para
el caso base. Pensa que tipo de funcion es mejor aqui: arrow o clasica?

Probá: factorial(5), factorial(0), factorial(7)

Resultado esperado:
factorial(5)=120
factorial(0)=1
factorial(7)=5040
*/

// completa aqui
