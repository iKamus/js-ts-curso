/*
Ejercicio 1 — Nota a concepto
Como en la libreta del cole, pasamos la nota a un concepto con palabras.
La nota es un número, y según qué tan alto sea, le corresponde una palabra.

Ya te dejé la variable lista:
  const nota = 8;   // cambiala vos para probar con otros valores

Paso a paso:
1) Usá un if / else if / else para decidir qué concepto corresponde.
   IMPORTANTE: las condiciones se revisan DE ARRIBA PARA ABAJO.
   Por eso primero preguntás por la nota más alta (>= 9) y vas bajando:
   - nota >= 9  → "Excelente"
   - nota >= 7  → "Muy bien"
   - nota >= 4  → "Regular"
   - si ninguna se cumplió (nota menor a 4) → "Desaprobado"
2) Imprimí el resultado con el formato: "nota → concepto".

Probá cambiando la nota por estos valores:
10 → Excelente
8 → Muy bien
6 → Regular
3 → Desaprobado

Resultado esperado:
10 → Excelente
8 → Muy bien
6 → Regular
3 → Desaprobado
*/

const nota = 8;

// completá acá