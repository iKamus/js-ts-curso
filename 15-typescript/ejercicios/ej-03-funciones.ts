/*
Ejercicio 3 — Funciones tipadas
Recetas con ingredientes declarados: cada función dice qué recibe y
qué devuelve, así no hay sorpresas. La sintaxis es:
  function nombre(parametro: tipo): tipoDeRetorno { ... }
  (parámetros: tipo para cada uno, y después de los ) los dos puntos
  y el tipo de lo que devuelve)

Paso a paso:
1) Creá esPar(n: number): boolean que devuelva true si n es par
   y false si no. La regla del % la conocés del módulo 01: escribí
   vos la condición. (boolean = sí o no.)
2) Creá maximo(a: number, b: number): number que devuelva el más
   grande de los dos. (number = devuelve un número.)
3) Creá imprimirLista(items: string[]): void que imprima cada item
   numerado: "1: manzana", "2: pera", ...
   (string[] = recibe una lista de textos; void = NO devuelve nada,
   solo hace el trabajo: imprimir.)
   Pista: forEach((item, indice) => ...) y el número se muestra
   como indice + 1 (porque el indice arranca en 0).
4) Usalas así y mostrá los resultados:
   - esPar(4) y mostrá "4 es par: true"
   - maximo(3, 7) y mostrá "Máximo: 7"
   - imprimirLista(['manzana', 'pera'])
   (Una línea por resultado, en el orden de abajo.)

Resultado esperado:
4 es par: true
Máximo: 7
1: manzana
2: pera
*/

// completá acá