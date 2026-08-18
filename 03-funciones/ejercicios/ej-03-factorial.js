/*
Ejercicio 3 — Factorial (recursión)
Acá viene lo copado: una función que se llama a sí misma, como las cajas
rusas que adentro tienen otra caja más chica. A eso se le dice recursión.

Primero, ¿qué es el factorial? Es multiplicar un número por todos los
que le siguen hacia abajo hasta llegar a 1:
  factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

¿Cómo lo pensás con recursión? Fijate este truco:
  factorial(5) = 5 * factorial(4)
  factorial(4) = 4 * factorial(3)
  ...
  factorial(1) = 1  ← llegamos al CASO BASE: ya no llamamos a nadie más

Entonces la función hace dos cosas:
1) Si n es 0 o 1 → devuelve 1. Ese es el caso base: la caja rusa más
   chica, donde la función se frena (si no, se llamaría para siempre
   y se quedaría colgada).
2) Si no → devuelve el número por el factorial del anterior, siguiendo
   el patrón de la cadena de arriba: cada llamada llama a la anterior,
   y así hasta llegar al caso base. Fijate bien el patrón y escribilo
   vos con factorial(n - 1).
Por definición factorial(0) = 1.

Creá factorial(n) con esa lógica y mostrá los tres resultados.
Probá: factorial(5), factorial(0), factorial(7)

Resultado esperado:
factorial(5)=120
factorial(0)=1
factorial(7)=5040
*/

// completá acá