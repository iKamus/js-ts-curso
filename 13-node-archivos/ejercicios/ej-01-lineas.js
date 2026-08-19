/*
Ejercicio 1 — Contar lineas
Abri el archivo data/sample.txt y contá cuantas lineas tiene.

Paso a paso:
1) Armá la ruta del archivo con path.join. El archivo esta en la carpeta
   data (que esta UNA carpeta mas arriba que ejercicios):
   - __dirname = carpeta donde esta este archivo (ejercicios)
   - '..' = subir una carpeta (a la del modulo)
   - 'data' = entrar a data
   - 'sample.txt' = el archivo
   Tip: fijate como se arma la ruta en ejemplos/02-fs-basico.js.

2) Leé el contenido con fs.readFileSync(ruta, 'utf8').
   - readFileSync lee el archivo esperando a que termine
   - 'utf8' es el encoding: sin eso te devuelve un Buffer

3) Contá las lineas:
   - Primero sacá los espacios y saltos de linea de los bordes con
     .trim() (para que una linea vacia al final no cuente)
   - Despues cortá el texto por cada salto de linea con .split('\n')
   - Contá los pedazos del array resultante

4) Mostrá el resultado con console.log.

Resultado esperado:
El archivo tiene 3 lineas
*/

const fs = require('fs');
const path = require('path');

// completá acá
