/*
Ejercicio 1 -- Contar vocales
Arrancamos suave. Tenes esta frase:
  const frase = 'Aprender JavaScript es divertido';
Conta cuantas vocales tiene (a, e, i, o, u), sin distinguir mayusculas
de minusculas (la A y la a cuentan igual).

Conceptos que vas a usar: toLowerCase, split, filter, includes, length.

Paso a paso:
1) Pasala a minusculas y separala en letras. Las herramientas
   estan en ejemplos/01-strings.js: la que pasa a minusculas y la que
   parte el texto en pedazos (separandolo por cada caracter, o sea
   con separador vacio).
2) Usa .filter() para quedarte solo con las vocales. La condicion es:
   "esta letra esta dentro de la lista de vocales?" Pensa en una lista
   ['a','e','i','o','u'] y en como preguntarle a un array si contiene
   un elemento (lo viste en el modulo 04... o en ejemplos/01-strings.js
   para el caso de los textos).
3) Conta cuantas letras te quedaron. Ese es el numero de vocales.
4) Muestra el resultado con console.log.

Pista: cada paso te devuelve un array nuevo, asi que podes encadenar
uno sobre el otro (como en el ejercicio de filter + map del modulo 4).

Resultado esperado:
11
*/

const frase = 'Aprender JavaScript es divertido';

// completa aca
