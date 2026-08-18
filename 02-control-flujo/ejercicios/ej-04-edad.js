/*
Ejercicio 4 — Clasificar edad
Como en la entrada de un espectáculo, clasificamos según la edad:
cada rango de edad tiene su categoría, como las entradas del cine.

Ya te dejé la variable lista:
  const edad = 45;   // cambiala para probar otros valores

Paso a paso:
1) Usá if / else if para clasificar la edad en un rango:
   - 0-12   → "Niño/a"
   - 13-19  → "Adolescente"
   - 20-59  → "Adulto"
   - 60+    → "Adulto mayor"
2) El truco de los rangos: si ya preguntaste "¿es menor a 13?" y era falso,
   sabés que es 13 o más. Entonces para el segundo rango alcanza con
   preguntar edad <= 19 (ya sabemos que no es menor a 13).
   Así vas encadenando: cada pregunta descarta lo de arriba.
3) Imprimí el resultado con el formato: "30 → Adulto"

Probá con: 5, 15, 30, 70
Resultado esperado:
5 → Niño/a
15 → Adolescente
30 → Adulto
70 → Adulto mayor
*/

const edad = 45;

// completá acá