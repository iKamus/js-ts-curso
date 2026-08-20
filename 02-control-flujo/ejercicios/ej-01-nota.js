/*
Ejercicio 1 — Nota a concepto
Como en la libreta del cole, pasamos la nota a un concepto con palabras.
La nota es un numero, y segun que tan alto sea, le corresponde una palabra.

Ya te dejo la variable lista:
  const nota = 8;   // cambiala para probar con otros valores

Paso a paso:
1) Usar un if / else if / else para decidir que concepto corresponde.
   IMPORTANTE: las condiciones se revisan DE ARRIBA PARA ABAJO.
   Por eso primero preguntas por la nota mas alta (>= 9) y vas bajando:
   - nota >= 9  -> "Excelente"
   - nota >= 7  -> "Muy bien"
   - nota >= 4  -> "Regular"
   - si ninguna se cumplio (nota menor a 4) -> "Desaprobado"
2) Crear una variable "aprobado" con un ternario: si nota >= 4 guarda true,
   si no guarda false.
   Pista: la expresion nota >= 4 ya te devuelve true o false por si sola.
   Usala como condicion del ternario y elige que valor devolver en cada rama.
3) Imprimir el resultado con el formato: "nota -> concepto" y luego
   "Ternario: esta -> aprobado" o "Ternario: esta -> reprobado"
   (usando un ternario que muestre "aprobado" si aprobado es true, o "reprobado" si es false).

Probando con estos valores:
nota = 10 -> Excelente, esta aprobado
nota = 8  -> Muy bien, esta aprobado
nota = 6  -> Regular, esta aprobado
nota = 3  -> Desaprobado, esta reprobado

Resultado esperado:
nota = 10:
10 -> Excelente
Ternario: esta aprobado

nota = 8:
8 -> Muy bien
Ternario: esta aprobado

nota = 6:
6 -> Regular
Ternario: esta aprobado

nota = 3:
3 -> Desaprobado
Ternario: esta reprobado
*/

const nota = 10;

// completa aqui


// --- Prueba con diferentes notas (descomenta para probar) ---
// const notasParaProbar = [10, 8, 6, 3];
// for (const n of notasParaProbar) {
//   console.log(`\nnota = ${n}:`);
//   // copia tu codigo arriba adaptado para usar "n" en vez de "nota"
// }
