/*
Ejercicio 3 — Contar palabras de un archivo
Vamos a contar cuántas palabras tiene un texto, como cuando contás
cuántas cosas entran en tu mochila. Leé data/sample.txt y mostrá
dos cosas.

Paso a paso:
1) Armá la ruta y leé el archivo como en el ejercicio 1 (misma ruta
   y misma lectura).
2) Contá la cantidad total de palabras:
   - cortá el texto por los espacios (fijate que los espacios pueden
     venir de a uno o de a varios seguidos: hay un "patrón" especial,
     una expresión regular, que significa "uno o más espacios". Es
     como el split de siempre pero con ese patrón adentro. Buscalo
     si no te acordás cómo se escribe).
   - contá los pedazos
   En data/sample.txt hay 9 palabras.
3) Encontrá la palabra más repetida con un Map (como en el módulo 07):
   - Recorré el array de palabras con for...of.
   - Para cada palabra, sumale 1 a su cuenta en el Map: tomá lo que
     había (o 0 si no había nada, con el plan B del ||) y sumale 1.
     Escribí vos la línea con las operaciones del Map (get/set).
   - Después recorré el Map y quedate con la palabra que tiene la
     cuenta más alta (como el "más alto de la fila" del módulo 04,
     pero comparando los valores del Map).
4) Mostrá los dos resultados:
   "Palabras: 9"
   "Más repetida: hola"

Resultado esperado:
Palabras: 9
Más repetida: hola
*/

const fs = require('fs');
const path = require('path');

// completá acá