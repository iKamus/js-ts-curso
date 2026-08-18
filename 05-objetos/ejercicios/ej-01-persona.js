/*
Ejercicio 1 — Crear y mostrar
Che, arrancamos con lo básico: un objeto es como una ficha del cuaderno
con casillas. Cada casilla tiene una etiqueta (el nombre del dato) y un
valor adentro.

Paso a paso:
1) Creá un objeto persona con estas casillas (propiedades):
   - nombre: 'Ana'
   - edad: 30
   - ciudad: 'Córdoba'
   - presentarse: un método (una función adentro del objeto) que
     devuelva el texto "Hola, soy Ana de Córdoba"
   Ojo con el método: adentro usa this.nombre y this.ciudad para tomar
   los valores del propio objeto (this = el objeto que está hablando).
   Fijate cómo se escribe un método en ejemplos/02-metodos-this.js.
2) Mostrá con console.log:
   - el nombre (con la etiqueta "Nombre: ")
   - la edad (con la etiqueta "Edad: ")
   - el resultado de llamar a persona.presentarse()

Es como llenar tu ficha y que después el objeto se presente solo.

Resultado esperado:
Nombre: Ana
Edad: 30
Hola, soy Ana de Córdoba
*/

// completá acá