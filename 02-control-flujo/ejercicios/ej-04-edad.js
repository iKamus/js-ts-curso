/*
Ejercicio 4 — Clasificar edad
Como en la entrada de un espectaculo, clasificamos segun la edad:
cada rango de edad tiene su categoria, como las entradas del cine.

Ya te dejo la variable lista:
  const edad = 45;   // cambiala para probar otros valores

Paso a paso:
1) Usar if / else if para clasificar la edad en un rango:
   - 0-12   -> "Nino/a"
   - 13-19  -> "Adolescente"
   - 20-59  -> "Adulto"
   - 60+    -> "Adulto mayor"
2) El truco de los rangos: si ya preguntaste "es menor a 13?" y era falso,
   sabes que es 13 o mas. Entonces para el segundo rango alcanza con
   preguntar edad <= 19 (ya sabemos que no es menor a 13).
   Asi vas encadenando: cada pregunta descarta lo de arriba.
3) Usar un operador ternario para guardar en "pagaEntrada" si la persona
   paga entrada completa (edad >= 12) o entrada reducida (edad < 12).
4) Imprimir el resultado con el formato: "30 -> Adulto"
   y luego "Paga entrada completa" o "Paga entrada reducida".

Probando con: 5, 15, 30, 70

Resultado esperado:
edad = 5:
5 -> Nino/a
Paga entrada reducida

edad = 15:
15 -> Adolescente
Paga entrada completa

edad = 30:
30 -> Adulto
Paga entrada completa

edad = 70:
70 -> Adulto mayor
Paga entrada completa
*/

const edad = 45;

// completa aqui


// --- Prueba con diferentes edades ---
// const edadesParaProbar = [5, 15, 30, 70];
// for (const e of edadesParaProbar) {
//   console.log(`\nedad = ${e}:`);
//   // copia tu codigo adaptado para usar "e" en vez de "edad"
// }
