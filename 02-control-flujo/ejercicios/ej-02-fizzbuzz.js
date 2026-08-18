/*
Ejercicio 2 — FizzBuzz
El clásico de las entrevistas, pero acá lo hacemos para aprender a usar el bucle.
Un bucle (for) repite algo muchas veces, como contar del 1 al 20 con los dedos.

La idea:
- Recorré los números del 1 al 20, uno por uno.
- Para cada número, mirá si es múltiplo de 3, de 5 o de los dos, y decidí qué imprimir:
  - múltiplo de 3 (dividir por 3 da resto 0)      → imprimí "Fizz"
  - múltiplo de 5 (dividir por 5 da resto 0)      → imprimí "Buzz"
  - múltiplo de 3 Y de 5 a la vez                 → imprimí "FizzBuzz"
  - si no es múltiplo de ninguno                  → imprimí el número

Pistas:
1) Para saber si un número es múltiplo de 3 usás el resto % (lo viste en
   el módulo 01): te da lo que sobra de la división. Si sobra 0, es
   múltiplo exacto. Escribí vos la condición completa.
2) OJO CON EL ORDEN: preguntá PRIMERO si es múltiplo de 3 y de 5 (FizzBuzz),
   porque ese caso también cumple las condiciones de Fizz y Buzz por separado.
   Si preguntás primero por Fizz, el número 15 nunca llegaría a FizzBuzz.
3) Imprimí cada resultado en su propia línea (console.log por vuelta).

Resultado esperado:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
*/

// completá acá