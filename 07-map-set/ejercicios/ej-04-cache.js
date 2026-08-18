/*
Ejercicio 4 — Cache con Map (memoización)
Creá factorialCache() que devuelva una función factorial que guarda en
un Map los resultados ya calculados.

¿Qué es esto? Pensalo así: la memoria del profe. Si ya resolviste un
cálculo antes, no lo volvés a pensar: lo repetís directo de memoria,
y encima avisás que salió de la memoria.

¿Por qué conviene? Calcular factorial(20) lleva 20 multiplicaciones.
Si te lo piden 5 veces, con memoria lo calculás UNA vez y las otras 4
solo mirás el resultado guardado. Eso se llama memoización (guardar
resultados para no volver a calcular).

Paso a paso:
1) Creá factorialCache() que:
   - adentro cree un Map vacío (fijate cómo en ejemplos/02-map.js)
   - devuelva una función factorial(n) (usá la recursión del módulo 03
     o un bucle, como prefieras).
2) Dentro de factorial(n), ANTES de calcular, preguntale al Map si
   n ya está guardado (el método para preguntar si existe una clave
   lo viste en 02-map.js):
   - si ya está → mostrá "desde cache: <resultado>" y devolvelo
   - si no está → calculalo, guardalo en el Map con la clave n,
     mostrá solo el resultado, y devolvelo
   El Map guarda la clave n y el valor resultado, como la libreta
   del profe: número → respuesta.
3) Probá con esto:
   const f = factorialCache();
   f(5)  → se calcula → imprime 120
   f(5)  → ya está guardado → imprime "desde cache: 120"
   f(3)  → se calcula → imprime 6
   (Cada console.log en su línea.)

Resultado esperado:
120
desde cache: 120
6
*/

// completá acá