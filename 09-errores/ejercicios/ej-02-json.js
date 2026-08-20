/*
Ejercicio 2 — Parsear JSON con try/catch
Crea parsearJSON(texto). JSON es como un formulario con formato estricto:
comillas dobles, llaves bien puestas, todo en orden. Si el texto no
respeta ese formato, JSON.parse se cae con un SyntaxError. Aca lo atrapas
para que el programa siga de largo en vez de explotar.

Paso a paso:
1) Crea la funcion parsearJSON(texto) que:
   - intente hacer JSON.parse(texto) y devuelva el objeto parseado
   - si falla (o sea, si el texto no es JSON valido), devuelva null
   Tip: la estructura es try { return JSON.parse(texto) }
   catch(e) { return null }. El return dentro del try devuelve el
   resultado si todo sale bien; el return dentro del catch devuelve
   null si hubo error.
2) Llamala con dos textos y muestra los resultados con console.log:
   - '{"nombre":"Ana"}' → el parseo funciona → muestra el objeto
   - 'hola' → el parseo falla → muestra null
   Tip: cada llamada puede ir directo dentro de console.log,
   o puedes guardar el resultado en una variable primero.

Resultado esperado:
{ nombre: 'Ana' }
null
*/

// completa aqui
