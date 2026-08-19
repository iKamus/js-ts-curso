/*
Ejercicio 1 — Dividir con validacion
Creá dividir(a, b). Pensalo como repartir la torta entre personas:
si no hay personas para repartir (cero), no se puede hacer la division
y hay que avisar con un error en vez de devolver Infinity o NaN.

Paso a paso:
1) Creá la funcion dividir(a, b) que:
   - si b === 0 → tira un error con throw new Error('No se puede dividir por cero')
   - si no → devuelve a / b
   Tip: throw es como un boton de emergencia: corta la ejecucion
   en ese instante y lanza el error para que alguien lo atrape.
2) Llamala DOS veces, cada llamada envuelta en try/catch:
   - try { ... } es donde pones la operacion que puede fallar.
   - catch(e) es donde atrapás el error y mostrás e.message.
   Tip: es como la red de seguridad del trapecista: si te cais,
   algo te agarra antes de tocar el piso.
3) Mostrá:
   - el resultado de dividir(10, 2)
   - el mensaje del error de dividir(10, 0)
   (Una linea por resultado, con console.log.)

Resultado esperado:
5
No se puede dividir por cero
*/

// completá acá
