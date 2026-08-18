/*
Ejercicio 4 — Banco que maneja cuentas
Creá una clase Banco que guarde las cuentas en un Map.
El Map es como la libreta del banco: clave → valor, o sea,
número de cuenta → saldo. Así el banco sabe cuánta plata tiene cada
cuenta sin tener que buscar a mano.

Paso a paso:
1) Creá la clase Banco con un Map adentro:
   el constructor lo guarda en una propiedad (this.cuentas).
   Fijate cómo se escribe una clase en ejemplos/01-clase-basica.js
   y cómo se usa el Map en 07-map-set/ejemplos/02-map.js.
2) Agregale los métodos:
   - crearCuenta(numero, saldoInicial): guarda la cuenta nueva
     en el Map (clave numero, valor saldoInicial).
   - depositar(numero, monto): le suma monto al saldo de esa cuenta.
     Primero agarrá el saldo actual del Map, sumale monto y volvé
     a guardarlo con la misma clave.
   - retirar(numero, monto): si el saldo alcanza, restalo y guardalo.
     Si NO alcanza (monto > saldo), mostrá "Saldo insuficiente".
   - transferir(de, a, monto): pasar plata de una cuenta a otra,
     como cuando le prestás unos pesos a un amigo y los restás de tu
     bolsillo: retirar(de, monto) y después depositar(a, monto).
   - saldoTotal(): suma todos los saldos del Map. Fijate cómo sacar
     todos los valores en 07-map-set/ejemplos/02-map.js (hay una
     parte que los lista con el spread) y después reduce, como en
     el módulo 04.
3) Probá en este orden:
   crearCuenta('100', 100)
   crearCuenta('200', 200)
   depositar('100', 10)
   transferir('100', '200', 50)
   retirar('200', 60)
4) Mostrá el saldo de cada cuenta y el total con el formato de abajo.

Resultado esperado:
Saldo cuenta 100: 60
Saldo cuenta 200: 190
Saldo total: 250
*/

// completá acá