/*
Ejercicio 5 — Validacion compuesta
Aca tienes que revisar varias condiciones juntas antes de abrir la puerta,
como el portero que mira el pase y tambien la hora.

Ya te dejo las variables listas:
  const usuario = 'ana';
  const password = 'clave1234';
  (cambialas para probar los casos de abajo)

La regla de entrada (TODAS tienen que cumplirse):
- usuario no esta vacio (que no sea '')
- password tiene 8 o mas caracteres (usa .length)
- no es el combo debil: usuario 'admin' CON password '1234'

Paso a paso:
1) Arma UNA condicion con && que junte las tres reglas.
   && significa "y": si una sola falla, todo es falso.
2) Con if imprime "Acceso permitido", y con else "Acceso denegado".
3) Crear una variable "mensaje" con un ternario: si el usuario es 'admin' Y el
   password es '1234', guarda el string 'Combo debil detectado'. Si no, guarda
   el valor de la variable usuario (el string con el nombre).
   Es decir: const mensaje = (usuario === 'admin' && password === '1234') ? 'Combo debil detectado' : usuario;
4) Imprimir el valor de mensaje despues del resultado de acceso.

Casos para probar (cambiando las variables):
usuario='ana'     pass='clave1234' -> permitido, ana
usuario=''        pass='clave1234' -> denegado (usuario vacio)
usuario='admin'   pass='1234'      -> denegado, Combo debil detectado
usuario='admin'   pass='segura123' -> permitido, admin

Resultado esperado con usuario='ana', pass='clave1234':
Acceso permitido
ana
*/

const usuario = 'ana';
const password = 'clave1234';

// completa aqui


// --- Prueba con diferentes casos ---
// const casos = [
//   { u: 'ana', p: 'clave1234' },
//   { u: '', p: 'clave1234' },
//   { u: 'admin', p: '1234' },
//   { u: 'admin', p: 'segura123' },
// ];
// for (const c of casos) {
//   console.log(`\nusuario='${c.u}'  pass='${c.p}':`);
//   // adapta tu codigo usando c.u y c.p en vez de usuario y password
// }
