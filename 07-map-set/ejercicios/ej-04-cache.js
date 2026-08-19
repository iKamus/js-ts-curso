/*
Ejercicio 4 -- Cache con Map (memoizacion)
Crea factorialCache() que devuelva una funcion factorial que guarda en
un Map los resultados ya calculados.

Que es esto? La memoria del profe. Si ya resolviste un
calculo antes, no lo volves a pensar: lo repetis directo de memoria,
y encima avisas que salio de la memoria.

Por que conviene? Calcular factorial(20) lleva 20 multiplicaciones.
Si te lo piden 5 veces, con memoria lo calculas UNA vez y las otras 4
solo miras el resultado guardado. Eso se llama memoizacion (guardar
resultados para no volver a calcular).

Paso a paso:
1) Crea factorialCache() que:
   - adentro cree un Map vacio (fijate como en ejemplos/02-map.js)
   - devuelva una funcion factorial(n) (usa la recursion del modulo 03
     o un bucle, como prefieras).
2) Dentro de factorial(n), ANTES de calcular, pregunta al Map si
   n ya esta guardado (el metodo para preguntar si existe una clave
   lo viste en 02-map.js):
   - si ya esta -> muestra "desde cache: <resultado>" y devuelvelo
   - si no esta -> calculalo, guardalo en el Map con la clave n,
     muestra solo el resultado, y devuelvelo
   El Map guarda la clave n y el valor resultado, como la libreta
   del profe: numero -> respuesta.
3) Prueba con esto:
   const f = factorialCache();
   f(5)  -> se calcula -> imprime 120
   f(5)  -> ya esta guardado -> imprime "desde cache: 120"
   f(3)  -> se calcula -> imprime 6
   (Cada console.log en su linea.)

Resultado esperado:
120
desde cache: 120
6
*/

// completar aca
