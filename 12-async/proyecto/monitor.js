// monitor.js — Monitor de servicios
// Correr con: node monitor.js
// Requiere internet (usa fetch)

// --- Funcion para chequear un servicio con timeout ---

// completar aca: crear chequearServicio(url, timeout = 3000)
// usar Promise.race entre fetch y un timeout


// --- Funcion para monitorear varias URLs ---

// completar aca: crear monitorearUrls(urls, timeout)
// usar Promise.allSettled con chequearServicio para cada URL


// --- Funcion para reintentar un servicio fallido ---

// completar aca: crear reintentar(url, intentos, timeout)
// usar async/await con un bucle for


// --- Funcion principal ---

// completar aca: crear main()
// 1. Definir array de URLs
// 2. Llamar a monitorearUrls
// 3. Mostrar resultados
// 4. Reintentar fallidos
// 5. Mostrar resumen


// main();  // descomentar al completar
