/*
Ejercicio 2 — Parsear JSON con try/catch
Creá parsearJSON(texto). JSON es como un formulario que se llena de
a un campo: tiene un formato estricto, con comillas y llaves bien
puestas. Si el texto no respeta ese formato, JSON.parse se cae con
un error. Acá lo atrapás para que el programa siga de largo en vez
de explotar.

Paso a paso:
1) Creá la función parsearJSON(texto) que:
   - intente hacer JSON.parse(texto) y devolver el objeto
   - si falla (o sea, si el texto no es JSON válido), devuelva null
   La estructura es la misma que viste en el ejercicio 1 (try/catch),
   pero adentro del try va el return del parseo, y en el catch el
   return de null. Armala vos.
2) Llamala con dos textos y mostrá los resultados con console.log:
   - '{"nombre":"Ana"}' → el parseo funciona → { nombre: 'Ana' }
   - 'hola' → el parseo falla → null

Resultado esperado:
{ nombre: 'Ana' }
null
*/

// completá acá