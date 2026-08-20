/*
Ejercicio 4 — Genericos
Aca vas a armar cajas que sirven para cualquier contenido: la misma
funcion se adapta a numeros, strings u objetos sin romperse.

Paso a paso:
1) Crea obtenerUltimo<T>(lista: T[]): T | undefined que:
   - reciba un array de tipo T (lista: T[])
   - devuelva el ultimo elemento, o undefined si esta vacio
   - el | undefined es porque si el array esta vacio, no hay ultimo
     elemento (undefined = "no hay nada"). Piensa como agarrar el
     ultimo: con el largo del array y los indices que ya conoces.
2) Crea mezclar<T, U>(a: T, b: U): [T, U] que devuelva una TUPLA:
   un array de dos posiciones fijas, una con cada valor.
   La tupla es como un estuche de dos compartimentos: uno para cada
   cosa. Devuelve el array con los dos valores adentro.
3) Usalas asi y muestra:
   - obtenerUltimo([1, 2, 3])  -> 3 (aca T se volvio number solo)
   - mezclar(1, 'uno')         -> [1, 'uno'] (T = number, U = string)
   - mezclar({ id: 1 }, 'ok')  -> [{ id: 1 }, 'ok']

Resultado esperado:
Ultimo: 3
Tupla: [ 1, 'uno' ]
Tupla objeto: [ { id: 1 }, 'ok' ]
*/

// completa aqui
