// 04-template-literals.js — Strings con backticks

const nombre = 'Ana';
const ciudad = 'Buenos Aires';
const nacimiento = 1995;
const anio = 2026;

// Interpolación: ${expresión} mete el valor adentro del texto, como completar un formulario con lo que ya sabés
console.log(`Hola, soy ${nombre} y vivo en ${ciudad}.`);
console.log(`Tengo ${anio - nacimiento} años.`);

// Multilínea sin \n: el texto puede ocupar varias líneas sin escape raro
const menu = `Opciones:
1. Ver saldo
2. Transferir
3. Salir`;
console.log(menu);

// Métodos básicos de string: herramientas para trabajar el texto
const texto = 'JavaScript';
console.log(texto.length);        // 10 (cuántos caracteres tiene, como contar letras en un cuadro)
console.log(texto.toUpperCase()); // JAVASCRIPT (todas en mayúscula, como gritar)
console.log(texto.toLowerCase()); // javascript (todas en minúscula, como susurrar)
console.log(texto[0]);            // J (el primer caracter, como agarrar la primera ficha del dominó)
console.log(texto.slice(0, 4));   // Java (cortar un pedazo del texto, como sacar una foto de una parte)

// Capitalizar: primera letra en mayúscula + el resto igual
// Se arma en TRES pasos con las herramientas de arriba:
//   1) agarrás la primera letra con [0]
//   2) la ponés en mayúscula con toUpperCase
//   3) le sumás el resto de la palabra con slice(1) (de la letra 1 en adelante)
// El + junta los dos pedazos como un texto nuevo.
const palabra = 'mundo';
const capitalizada = palabra[0].toUpperCase() + palabra.slice(1);
console.log(capitalizada);        // Mundo (la M grande, el resto igual)