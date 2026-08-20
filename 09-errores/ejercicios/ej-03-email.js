/*
Ejercicio 3 — Error personalizado de email
Crea un error propio para los emails invalidos. Un error custom es como
llenar una denuncia con mas detalle: no solo dices que algo fallo,
sino exactamente que fallo y en que campo.

Paso a paso:
1) Crea la clase ErrorDeEmail que hereda de Error.
   Tip: es como la clase Auto que hereda de Vehiculo en el modulo 08:
   la firma es class ErrorDeEmail extends Error, el constructor llama
   al padre con super(mensaje), y despues le pones nombre propio
   a this.name (this.name = 'ErrorDeEmail').
2) Crea validarEmail(email) que revise el email como el cartero revisa
   la carta. Tira ErrorDeEmail si:
   - no tiene '@'  → mensaje: 'El email debe contener @'
   - no tiene un '.' DESPUES del '@' → mensaje: 'El email debe tener un dominio (punto despues de @)'
   Tip: para revisar si un texto contiene algo puedes usar includes().
   Para partir el email en la parte local y la parte de dominio,
   usa split('@') que te da un array de dos partes.
3) Llamala tres veces, cada una dentro de try/catch, y muestra:
   - si pasa → 'Email valido: <email>'
   - si falla → 'Error: <mensaje del error>'
   La primera llamada (ana@gmail.com) es valida; las otras dos
   tiran error.
   Tip: en el catch, accede al mensaje con e.message.

Resultado esperado:
Email valido: ana@gmail.com
Error: El email debe contener @
Error: El email debe tener un dominio (punto despues de @)
*/

// completa aqui
