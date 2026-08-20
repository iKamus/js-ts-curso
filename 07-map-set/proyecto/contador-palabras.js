// Contador de palabras -- Mini proyecto modulo 07
// Analiza un texto, cuenta frecuencias con Map, encuentra la mas comun,
// y deduplica letras con Set.

// --- 1. Declarar el texto ---
const texto = 'hola mundo hola javascript hola mundo hola';

// --- 2. Crear un Map de frecuencias ---
// Recorre el texto y cuenta cuantas veces aparece cada palabra.
// Usa el patron: mapa.set(palabra, (mapa.get(palabra) || 0) + 1)
const frec = new Map();
// completa aqui


// --- 3. Mostrar las frecuencias ---
// Recorre el Map con for...of y muestra cada entrada como "${palabra}: ${cantidad}"
console.log('--- Frecuencias ---');
// completa aqui


// --- 4. Encontrar la palabra mas comun ---
// Recorre el Map y queda con la que tiene mayor valor.
// Puedes usar una variable maxPalabra y maxCantidad para ir comparando.
let maxPalabra = '';
let maxCantidad = 0;
// completa aqui

console.log('--- Palabra mas comun ---');
// completa aqui: muestra La palabra mas comun es: "X" (N veces)


// --- 5. Deduplicar letras con Set ---
// Crea un Set con cada letra del texto (sin espacios).
// Primero separa el texto en caracteres, despues metelos en un Set.
const letras = new Set();
// completa aqui

console.log('--- Letras unicas ---');
// completa aqui: muestra [...letras].sort()


// --- 6. Cuantas letras unicas tiene ---
// Usa letras.size para saber cuantas hay.
// completa aqui: muestra El texto tiene X letras unicas

