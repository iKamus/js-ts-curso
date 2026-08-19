// 04-template-literals.js — Strings con backticks

const nombre = 'Ana';
const ciudad = 'Buenos Aires';
const nacimiento = 1995;
const anio = 2026;

// Interpolación: ${expresión} mete el valor adentro del texto, como completar un formulario con lo que ya sabes
console.log(`Hola, soy ${nombre} y vivo en ${ciudad}.`);
console.log(`Tengo ${anio - nacimiento} años.`);

// Multilínea sin \n: el texto puede ocupar varias líneas sin escape raro
const menu = `Opciones:
1. Ver saldo
2. Transferir
3. Salir`;
console.log(menu);

// Métodos básicos de string: herramientas para trabajar el texto
// Los strings son INMUTABLES: ningún método toca el original, siempre devuelven uno nuevo.
const texto = 'JavaScript';
console.log(texto.length);        // 10 (cuántos caracteres tiene)
console.log(texto.toUpperCase()); // JAVASCRIPT (todas en mayúscula)
console.log(texto.toLowerCase()); // javascript (todas en minúscula)
console.log(texto[0]);            // J (el primer caracter)
console.log(texto.slice(0, 4));   // Java (recortar: desde el 0 hasta el 4, sin incluirlo)

// Capitalizar: primera letra en mayúscula + el resto igual
// Se arma en TRES pasos: 1) agarras la primera letra con [0]
// 2) la pones en mayúscula 3) le sumas el resto con slice(1)
const palabra = 'mundo';
const capitalizada = palabra[0].toUpperCase() + palabra.slice(1);
console.log(capitalizada);        // Mundo

// Más métodos útiles para el día a día
const email = '  Ana@gmail.com  ';
console.log(email.trim());            // 'Ana@gmail.com' (saca espacios de los bordes)
console.log(email.trim().toLowerCase()); // 'ana@gmail.com'
console.log(email.includes('@'));     // true (¿contiene @? — incluye espacios, sigue true)
console.log(email.trim().endsWith('.com')); // true (después del trim, sí termina con .com)
console.log(email.indexOf('@'));      // 5 (posición del @ en el string original con espacios)

// split y join: romper y pegar
const frutas = 'manzana,pera,uva';
console.log(frutas.split(','));     // ['manzana', 'pera', 'uva'] (string → array)
console.log(['a', 'b', 'c'].join('-')); // 'a-b-c' (array → string)

// replace vs replaceAll
console.log('hola hola'.replace('hola', 'chau'));     // 'chau hola' (solo la 1ª)
console.log('hola hola'.replaceAll('hola', 'chau'));  // 'chau chau' (todas)

// padStart y padEnd: rellenar con caracteres
console.log('42'.padStart(5, '0'));  // '00042'
console.log('hi'.padEnd(10, '.'));   // 'hi........'

// repeat: repetir un string
console.log('='.repeat(30)); // '=============================='
