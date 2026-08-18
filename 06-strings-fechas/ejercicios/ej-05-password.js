/*
Ejercicio 5 — Generador de contraseñas
El último y con onda: creá generarPassword(longitud) que devuelva una contraseña aleatoria
usando minúsculas, mayúsculas, números y símbolos.

Pista (ojo acá, que es un clásico):
  Math.random() te da un decimal entre 0 y 1 (el 1 no entra nunca).
  Para elegir un índice al azar dentro de una lista de caracteres
  tenés que multiplicar por el largo de la lista y recién ahí
  redondear para abajo. En ejemplos/03-math.js tenés la receta
  de "aleatorio entre min y max": fijate cómo combina el random
  con el floor, y adaptala para tu caso.
  Ojo con el clásico error: si redondeás el random sin multiplicar,
  el resultado SIEMPRE es 0 (redondeás 0,... a 0) y vas a elegir
  siempre el mismo caracter. Fijate.

Probá con: generarPassword(10)
Resultado: es aleatorio, pero debe tener exactamente 10 caracteres.
Ejemplo de salida posible:
aK9$dF2!xQ
*/

// completá acá