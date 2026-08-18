/*
Ejercicio 1 — Contar vocales
Che, arrancamos suave. Tenés esta frase:
  const frase = 'Aprender JavaScript es divertido';
Contá cuántas vocales tiene (a, e, i, o, u), sin distinguir mayúsculas
de minúsculas (la A y la a cuentan igual).

Paso a paso:
1) Pasá la frase a minúsculas y separala en letras. Las herramientas
   están en ejemplos/01-strings.js: la que pasa a minúsculas y la que
   parte el texto en pedazos (separándolo por cada caracter, o sea
   con separador vacío).
2) Usá .filter() para quedarte solo con las vocales. La condición es:
   "¿esta letra está dentro de la lista de vocales?" Pensá en una lista
   ['a','e','i','o','u'] y en cómo preguntarle a un array si contiene
   un elemento (lo viste en el módulo 04... o en ejemplos/01-strings.js
   para el caso de los textos).
3) Contá cuántas letras te quedaron. Ese es el número de vocales.
4) Mostrá el resultado con console.log.

Pista: cada paso te devuelve un array nuevo, así que podés encadenar
uno sobre el otro (como en el ejercicio de filter + map del módulo 04).

Resultado esperado:
11
*/

const frase = 'Aprender JavaScript es divertido';

// completá acá