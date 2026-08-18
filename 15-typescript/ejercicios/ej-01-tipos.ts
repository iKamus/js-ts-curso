/*
Ejercicio 1 — Tipos básicos
Vamos a jugar con las etiquetas de las cajas: le decís a TS qué va
adentro de cada variable y él te corrige antes de entregar.

¿Qué es un tipo? Es la "etiqueta" que le ponés a cada caja: sabés
exactamente qué va adentro, sin sorpresas. La sintaxis es:
  nombre de variable : tipo = valor
  (dos puntos, después el tipo, después el igual)

Paso a paso:
1) Declará una variable nombre: string = 'Tu nombre'
   (string = texto)
2) Declará edad: number = tu edad
   (number = número)
3) Declará hobbies: string[] con al menos 3 elementos
   (string[] = array de textos, o sea una lista de textos.
   Ejemplo: ['fútbol', 'mate', 'leer'])
4) Declará un union type: resultado: number | string
   (el | significa "uno u otro": la caja acepta un número O un texto)
   Asignale primero un número, y después reasignale un string.
   (A eso se le llama reasignar: cambiar el valor de una let, y TS
   te deja porque ambos son válidos para este tipo.)
5) Mostrá todo con un solo console.log.

Compilá y corré (en PowerShell no usamos &&, son dos comandos separados):
  npm run build
  node dist/ejercicios/ej-01-tipos.js
Resultado esperado: tus datos por consola.
*/

// completá acá