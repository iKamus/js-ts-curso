/*
Ejercicio 3 — switch de días
Fijate el día y elegí el plan, como mirar el calendario antes de armar la semana.
Un switch es como un tablero con casilleros: mirás qué día tenés, vas al
casillero que corresponde y agarrás el plan de ese día.

Ya te dejé la variable lista:
  const dia = 'sábado';   // probala con otros valores: 'lunes', 'domingo', 'x'

Paso a paso:
1) Escribí un switch que revise la variable dia y asigne el plan según el día:
   - lunes a viernes → "Día de laburo"     (cada día es un case aparte)
   - sábado          → "Dormir hasta tarde"
   - domingo         → "Comer asado"
   - otro día (que no existe o mal escrito) → "Día inválido" (default)
2) Recordá el break después de cada case: si lo olvidás, el programa
   "se cae" al siguiente casillero y te asigna el plan del día equivocado.
3) Imprimí el resultado con el formato: "sábado → Dormir hasta tarde"

Resultado esperado con 'sábado':
sábado → Dormir hasta tarde
*/

const dia = 'sábado';

// completá acá