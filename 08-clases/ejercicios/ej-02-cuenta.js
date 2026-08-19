/*
Ejercicio 2 — Cuenta bancaria
Crea una clase CuentaBancaria, como tu billetera o la caja del almacen:
nadie puede tocar la plata desde afuera, solo las operaciones de la clase.

Paso a paso:
1) Crea la clase con un campo PRIVADO #saldo. El # es como el cajon
   con llave: nadie de afuera puede tocar esa casilla, solo los metodos
   de adentro de la clase.
2) El constructor recibe el saldo inicial y lo guarda: this.#saldo = saldoInicial;
3) Agrega los metodos:
   - depositar(monto): si monto > 0, sumalo al saldo (#saldo += monto).
     Si monto es 0 o negativo, no hagas nada.
   - retirar(monto): si hay plata suficiente (monto <= #saldo), restalo.
     Si NO alcanza, muestra "Saldo insuficiente" con console.log.
   - get saldo: un getter que devuelva #saldo. El getter se usa como
     propiedad (sin parentesis): cuenta.saldo te da el saldo.
4) Prueba en este orden:
   - crear la cuenta con 100
   - depositar 50
   - retirar 30
   - retirar 999 (tiene que decir "Saldo insuficiente")
   - mostrar el saldo al final
   Los resultados se muestran con console.log (uno por linea).

Tip: el getter te permite leer el saldo como si fuera una propiedad,
sin parentesis. Mira ejemplos/01-clase-basica.js para ver como funciona.

Resultado esperado:
Saldo: 120
Saldo insuficiente
Saldo final: 120
*/

// completá acá
