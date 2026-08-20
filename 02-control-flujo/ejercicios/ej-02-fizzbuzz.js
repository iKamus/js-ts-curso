/*
Ejercicio 2 — FizzBuzz
El clasico de las entrevistas, pero aca lo hacemos para aprender a usar el bucle.
Un bucle (for) repite algo muchas veces, como contar del 1 al 20 con los dedos.

La idea:
- Recorre los numeros del 1 al 20, uno por uno.
- Para cada numero, mira si es multiplo de 3, de 5 o de los dos, y decide que imprimir:
  - multiplo de 3 (dividir por 3 da resto 0)       -> imprime "Fizz"
  - multiplo de 5 (dividir por 5 da resto 0)       -> imprime "Buzz"
  - multiplo de 3 Y de 5 a la vez                  -> imprime "FizzBuzz"
  - si no es multiplo de ninguno                    -> imprime el numero

Pistas:
1) Para saber si un numero es multiplo de 3 usas el resto % (lo viste en
   el modulo 01): te da lo que sobra de la division. Si sobra 0, es
   multiplo exacto. Escribe la condicion completa.
2) OJO CON EL ORDEN: pregunta PRIMERO si es multiplo de 3 y de 5 (FizzBuzz),
   porque ese caso tambien cumple las condiciones de Fizz y Buzz por separado.
   Si preguntas primero por Fizz, el numero 15 nunca llegaria a FizzBuzz.
3) Imprime cada resultado en su propia linea (console.log por vuelta).
4) Practica extra: ANTES del bucle, crea una variable let primerPar; (sin valor inicial).
   Dentro del bucle, guarda en primerPar el PRIMER numero par del 1 al 20.
   Pista: usa el short-circuit de &&. La condicion debe comprobar que el numero
   es par Y que primerPar todavia no tiene valor (undefined). && solo ejecuta
   lo de la derecha si lo de la izquierda es verdadero: una vez asignado el
   primer par, primerPar ya no sera undefined y la asignacion no volvera a ocurrir.
   Despues del bucle imprime el resultado con console.log('Primer par:', primerPar);

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
Primer par: 2
*/

// completa aqui


// --- Prueba ---
// Descomenta la linea de abajo al final para verificar tu resultado:
// console.log('Primer par:', primerPar);
