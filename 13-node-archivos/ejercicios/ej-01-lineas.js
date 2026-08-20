/*
Ejercicio 1 — Contar lineas
Abre el archivo data/sample.txt y cuenta cuantas lineas tiene.

Paso a paso:
1) Arma la ruta del archivo con path.join. El archivo esta en la carpeta
   data (que esta UNA carpeta mas arriba que ejercicios):
   - __dirname = carpeta donde esta este archivo (ejercicios)
   - '..' = subir una carpeta (a la del modulo)
   - 'data' = entrar a data
   - 'sample.txt' = el archivo
   Tip: observa como se arma la ruta en la seccion fs del README.

2) Lee el contenido con fs.readFileSync(ruta, 'utf8').
   - readFileSync lee el archivo esperando a que termine
   - 'utf8' es el encoding: sin eso te devuelve un Buffer

3) Cuenta las lineas:
   - Primero saca los espacios y saltos de linea de los bordes con
     .trim() (para que una linea vacia al final no cuente)
   - Despues corta el texto por cada salto de linea con .split('\n')
   - Cuenta los pedazos del array resultante

4) Muestra el resultado con console.log.

Resultado esperado:
El archivo tiene 3 lineas
*/

const fs = require('fs');
const path = require('path');

// completa aqui
