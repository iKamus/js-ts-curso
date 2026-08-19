// Lista de compras -- Mini proyecto modulo 04
// Administra una lista de compras usando arrays, metodos funcionales y spread.

// --- 1. Crear la lista inicial ---
const compras = [
  { nombre: 'manzana', precio: 120 },
  { nombre: 'pan', precio: 80 },
  { nombre: 'leche', precio: 90 },
  { nombre: 'queso', precio: 350 },
];

// --- 2. Agregar productos con push ---
// completa aqui: agrega { nombre: 'carne', precio: 500 } y { nombre: 'arroz', precio: 75 }


// --- 3. Mostrar la lista formateada con map ---
// completa aqui: usa map para crear strings como "manzana: $120"
// pista: template literal es `${producto.nombre}: $${producto.precio}`
const formateada = []; // reemplaza esta linea con tu map
console.log('--- Lista original ---');
// completa aqui: muestra cada elemento con forEach


// --- 4. Ordenar por precio (menor a mayor) con sort ---
// completa aqui: crea una copia con spread y ordenala
// pista: sort((a, b) => a.precio - b.precio)
const ordenada = []; // reemplaza esta linea


// --- 5. Mostrar la lista ordenada ---
console.log('--- Ordenada por precio (menor a mayor) ---');
// completa aqui


// --- 6. Filtrar productos con precio menor a 200 ---
// completa aqui: usa filter con condicion precio < 200
const baratos = []; // reemplaza esta linea
console.log('--- Menores a $200 ---');
// completa aqui: muestra con map formateado


// --- 7. Calcular el total con reduce ---
// completa aqui: reduce que sume todos los precios
const total = 0; // reemplaza esta linea
console.log('--- Total ---');
console.log('$' + total);


// --- 8. Combinar con otra lista usando spread ---
const compras2 = [
  { nombre: 'tomate', precio: 200 },
  { nombre: 'aceite', precio: 450 },
];
console.log('--- Lista 2 ---');
// completa aqui: muestra lista2 formateada

// completa aqui: combina compras y compras2 con spread
const listaCompleta = []; // reemplaza esta linea

// completa aqui: calcula el total de la lista combinada con reduce
const totalCompleto = 0; // reemplaza esta linea
console.log('--- Lista combinada (total) ---');
console.log('$' + totalCompleto);
