/*
Ejercicio 3 — switch de dias
Fijate el dia y elegi el plan, como mirar el calendario antes de armar la semana.
Un switch es como un tablero con casilleros: miras que dia tienes, vas al
casillero que corresponde y agarras el plan de ese dia.

Ya te dejo la variable lista:
  const dia = 'sabado';   // probala con otros valores: 'lunes', 'domingo', 'x'

Paso a paso:
1) Escribe un switch que revise la variable dia y asigne el plan segun el dia:
   - lunes a viernes  -> "Dia de laburo"     (cada dia es un case aparte)
   - sabado           -> "Dormir hasta tarde"
   - domingo          -> "Comer asado"
   - otro dia (que no existe o mal escrito) -> "Dia invalido" (default)
2) Recuerda el break despues de cada case: si lo olvidas, el programa
   "se cae" al siguiente casillero y te asigna el plan del dia equivocado.
3) Despues del switch, usa un ternario para decidir si el dia es laborable
   (lunes a viernes) o no (fin de semana). Guarda el resultado en "tipoDia".
   Pista: puedes usar una variable booleana que vayas actualizando con cada case.
4) Imprime el resultado con el formato: "sabado -> Dormir hasta tarde"
   y luego "Tipo: laborable / fin de semana".

Resultado esperado con 'sabado':
sabado -> Dormir hasta tarde
Tipo: fin de semana
*/

const dia = 'sabado';

// completa aqui


