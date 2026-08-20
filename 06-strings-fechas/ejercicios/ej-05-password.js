/*
Ejercicio 5 -- Generador de contrasenas
El ultimo y con onda: crea una funcion generarPassword(longitud) que devuelva una contrasena aleatoria
usando minusculas, mayusculas, numeros y simbolos.

Conceptos que vas a usar: Math.random, Math.floor, string como array de caracteres, bracket access.

Pista (ojo aca, que es un clasico):
  Math.random() te da un decimal entre 0 y 1 (el 1 no entra nunca).
  Para elegir un indice al azar dentro de una lista de caracteres
  tienes que multiplicar por el largo de la lista y recien ahi
  redondear para abajo. En el README del modulo (seccion Math) tienes
  la receta de "aleatorio entre min y max": observa como combina el
  random con el floor, y adaptala para tu caso.
  Ojo con el clasico error: si redondeas el random sin multiplicar,
  el resultado SIEMPRE es 0 (redondeas 0,... a 0) y vas a elegir
  siempre el mismo caracter. Observa.

Paso a paso:
1) Define el string con todos los caracteres disponibles:
   minusculas + mayusculas + numeros + simbolos.
2) Crea un string vacio para ir armando la contrasena.
3) Haz un bucle que se repita 'longitud' veces. En cada vuelta:
   - genera un indice al azar dentro del string de caracteres
   - agrega ese caracter a la contrasena
4) Devuelve la contrasena armada.

Prueba con: generarPassword(10)
Resultado: es aleatorio, pero debe tener exactamente 10 caracteres.
Ejemplo de salida posible:
aK9$dF2!xQ
*/

// completa aqui
