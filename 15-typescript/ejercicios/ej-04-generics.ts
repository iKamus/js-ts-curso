/*
Ejercicio 4 — Genéricos
Acá vas a armar cajas que sirven para cualquier contenido: la misma
función se adapta a números, strings u objetos sin romperse.

¿Qué es un genérico? La <T> es un "comodín de tipo": decís "dejame
usar T como tipo, y TS lo va a reemplazar por el tipo real cuando
yo use la función". Es como un molde que se llena con la forma de
lo que entra.

Paso a paso:
1) Creá obtenerUltimo<T>(lista: T[]): T | undefined que:
   - reciba un array de tipo T (lista: T[])
   - devuelva el último elemento, o undefined si está vacío
   - el | undefined es porque si el array está vacío, no hay último
     elemento (undefined = "no hay nada"). Pensá cómo agarrar el
     último: con el largo del array y los índices que ya conocés.
2) Creá mezclar<T, U>(a: T, b: U): [T, U] que devuelva una TUPLA:
   un array de dos posiciones fijas, una con cada valor.
   La tupla es como un estuche de dos compartimentos: uno para cada
   cosa. Devolvé el array con los dos valores adentro.
3) Usalas así y mostrá:
   - obtenerUltimo([1, 2, 3])  → 3 (acá T se volvió number solo)
   - mezclar(1, 'uno')         → [1, 'uno'] (T = number, U = string)
   - mezclar({ id: 1 }, 'ok')  → [{ id: 1 }, 'ok']
   TS deduce los tipos solos, no hace falta escribirlos en la llamada.

Resultado esperado:
Ultimo: 3
Tupla: [ 1, 'uno' ]
Tupla objeto: [ { id: 1 }, 'ok' ]
*/

// completá acá