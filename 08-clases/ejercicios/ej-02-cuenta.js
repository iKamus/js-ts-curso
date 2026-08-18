/*
Ejercicio 2 — Cuenta bancaria
Creá una clase CuentaBancaria, como tu billetera o la caja del almacén:
nadie puede tocar la plata desde afuera, solo las operaciones de la clase.

Paso a paso:
1) Creá la clase con un campo PRIVADO #saldo. El # es como el cajón
   con llave: nadie de afuera puede tocar esa casilla, solo los métodos
   de adentro de la clase.
2) El constructor recibe el saldo inicial y lo guarda: this.#saldo = saldoInicial;
3) Agregale los métodos:
   - depositar(monto): si monto > 0, sumalo al saldo (#saldo += monto).
     Si monto es 0 o negativo, no se puede (no tiene sentido "depositar"
     nada o sacar plata sin permiso).
   - retirar(monto): si hay plata suficiente (monto <= #saldo), restalo.
     Si NO alcanza, devolvé el texto "Saldo insuficiente".
     (Si devolvés el texto, ¿cómo sabés si pudo retirar o no? El método
     de afuera puede comparar. Pero también podés simplemente mostrarlo.)
   - get saldo: un getter que devuelva #saldo. El getter se usa como
     propiedad (sin paréntesis): cuenta.saldo te da el saldo.
4) Probá así:
   - crear la cuenta con 100
   - depositar 50
   - retirar 30
   - retirar 999 (acá tiene que decir "Saldo insuficiente")
   - mostrar el saldo al final
   Los resultados se muestran con console.log (uno por línea).

Resultado esperado:
Saldo: 120
Saldo insuficiente
Saldo final: 120
*/

// completá acá