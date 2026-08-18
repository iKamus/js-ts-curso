/*
Ejercicio 1 — Dividir con validación
Creá dividir(a, b). Pensalo como repartir la torta: si no hay torta
(cero personas para comer), no se puede repartir nada y hay que avisar.

Paso a paso:
1) Creá la función dividir(a, b) que:
   - si b === 0 → tira un error con throw new Error('No se puede dividir por cero')
   - si no → devuelve a / b
   throw es como gritar "¡PARÁ!" en el medio de la cancha: corta todo
   en ese punto y lanza el error.
2) Llamala DOS veces, y cada llamada envuelta en try/catch:
   - try { ... } intenta hacer la operación.
   - Si se lanza un error, el catch lo atrapa y mostrás e.message.
   Es como la red de seguridad del trapecista: si te caés, algo te agarra.
3) Mostrá:
   - el resultado de dividir(10, 2) → 5
   - el mensaje del error de dividir(10, 0)
   (Una línea por resultado.)

Resultado esperado:
5
No se puede dividir por cero
*/

// completá acá