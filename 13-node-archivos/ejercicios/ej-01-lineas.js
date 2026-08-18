/*
Ejercicio 1 — Contar líneas
Fijate, este es un clásico del módulo: abrí el archivo data/sample.txt
como si fuera un cuaderno y contá cuántas líneas tiene.

Paso a paso:
1) Armá la ruta del archivo con path.join. La ruta es una "dirección"
   para llegar al archivo. Como el archivo está en la carpeta data
   (que está UNA carpeta más arriba que ejercicios):
   - __dirname = la carpeta donde está este archivo (ejercicios)
   - '..' = subir una carpeta (a la del módulo)
   - 'data' = entrar a data
   - 'sample.txt' = el archivo
   ¿Por qué path.join y no sumar strings? Porque path.join pone los
   separadores correctos para cada sistema operativo (en Windows es \).
   Fijate cómo se arma en ejemplos/02-fs-basico.js y 04-path.js.
2) Leé el contenido con fs.readFileSync(ruta, 'utf8').
   - readFileSync lee el archivo (Sync = de una, esperando a que termine)
   - 'utf8' es el "idioma" del texto (para que los acentos salgan bien)
   (También está en ejemplos/02-fs-basico.js.)
3) Contá las líneas: pensalo con los métodos de string que ya conocés:
   - sacá los espacios y saltos de línea de los bordes (para que una
     línea vacía al final no cuente como línea)
   - cortá el texto por cada salto de línea (¿cómo se escribe un salto
     de línea en un string? fijate en el módulo 01)
   - contá los pedazos
4) Mostrá: "El archivo tiene 3 líneas"

Resultado esperado:
El archivo tiene 3 líneas
*/

const fs = require('fs');
const path = require('path');

// completá acá