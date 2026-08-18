/*
Ejercicio 5 — Validación compuesta
Acá tenés que revisar varias condiciones juntas antes de abrir la puerta,
como el portero que mira el pase y también la hora.

Ya te dejé las variables listas:
  const usuario = 'ana';
  const password = 'clave1234';
  (cambialas para probar los casos de abajo)

La regla de entrada (TODAS tienen que cumplirse):
- usuario no está vacío (que no sea '')
- password tiene 8 o más caracteres (usá .length)
- no es el combo débil: usuario 'admin' CON password '1234'

Paso a paso:
1) Armá UNA condición con && que junte las tres reglas.
   && significa "y": si una sola falla, todo es falso.
2) Con if imprimí "Acceso permitido", y con else "Acceso denegado".

Casos para probar (cambiando las variables):
usuario='ana'     pass='clave1234' → permitido
usuario=''        pass='clave1234' → denegado (usuario vacío)
usuario='admin'   pass='1234'      → denegado (combo débil)
usuario='admin'   pass='segura123' → permitido
*/

const usuario = 'ana';
const password = 'clave1234';

// completá acá