/*
Ejercicio 3 — Error personalizado de email
Creá un error propio para los emails inválidos. Un error custom es como
llenar una denuncia con más detalle: no solo decís que algo falló,
sino exactamente qué falló.

Paso a paso:
1) Creá la clase ErrorDeEmail que hereda de Error, como la clase
   Auto del módulo 08 hereda de Vehiculo: extends Error, el
   constructor llama al padre con super y le pasa el mensaje, y
   después le ponés nombre propio a this.name. Armala vos.
2) Creá validarEmail(email) que revise el email como el cartero revisa
   la carta. Tira ErrorDeEmail si:
   - no tiene '@'  → mensaje: 'El email debe contener @'
   - no tiene un '.' DESPUÉS del '@' → mensaje: 'El email debe tener un dominio (punto después de @)'
   Pensá cómo preguntar si un texto contiene algo (lo viste en
   06-strings-fechas/ejemplos/01-strings.js) y cómo partir el email
   justo en el '@' para revisar la parte de después.
3) Llamala tres veces, cada una dentro de try/catch, y mostrá:
   - si pasa → 'Email válido: <email>'
   - si falla → 'Error: <mensaje del error>'
   La primera (ana@gmail.com) es válida; las otras dos tiran error.

Resultado esperado:
Email válido: ana@gmail.com
Error: El email debe contener @
Error: El email debe tener un dominio (punto después de @)
*/

// completá acá