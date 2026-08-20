/*
Ejercicio 3 — Contar palabras de un archivo
Lee data/sample.txt y cuenta cuantas palabras tiene en total, y cual
es la mas repetida.

Paso a paso:
1) Arma la ruta y lee el archivo como en el ejercicio 1.

2) Cuenta la cantidad total de palabras:
   - Corta el texto por los espacios. Hay un "truco": puedes usar
     una expresion regular como patron de split para que corte por
     uno o mas espacios seguidos. Busca como se escribe "uno o mas"
     en expresiones regulares.
   - Cuenta los pedazos del array.
   En data/sample.txt hay 9 palabras.

3) Encuentra la palabra mas repetida con un Map:
   - Recorre el array de palabras con for...of.
   - Para cada palabra, sumale 1 a su cuenta en el Map. Usa
     map.get(palabra) || 0 para arrancar de 0 si no existia,
     y map.set(palabra, cuenta + 1) para guardar.
   - Despues recorre el Map y quedate con la palabra que tiene
     la cuenta mas alta.

4) Muestra los dos resultados.

Resultado esperado:
Palabras: 9
Mas repetida: hola
*/

const fs = require('fs');
const path = require('path');

// completa aqui
