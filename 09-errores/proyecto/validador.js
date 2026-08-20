// validador.js — Validador de formularios con errores custom
// Correr con: node validador.js

// --- Clases de error custom ---
// completa aqui: clases ErrorDeValidacion, ErrorDeLongitud y ErrorDeFormato
// (todas heredan de Error; usa super(mensaje) y this.name)


// --- Funciones de validacion ---
// completa aqui: validarNombre, validarEmail, validarEdad y validarPassword
// (cada una lanza el error custom que corresponde con throw)


// --- Funcion principal ---
// completa aqui: validarUsuario(datos)
// valida cada campo con try/catch y usa instanceof para distinguir
// el tipo de error antes de mostrar el mensaje


// --- Pruebas ---

// Caso 1: datos validos
// completa aqui: validarUsuario({ nombre: 'Ana', email: 'ana@gmail.com', edad: 25, password: 'clave123' })

// Caso 2: nombre vacio
// completa aqui: validarUsuario({ nombre: '  ', email: 'ana@gmail.com', edad: 25, password: 'clave123' })

// Caso 3: email sin @
// completa aqui: validarUsuario({ nombre: 'Ana', email: 'anagmail.com', edad: 25, password: 'clave123' })

// Caso 4: edad negativa
// completa aqui: validarUsuario({ nombre: 'Ana', email: 'ana@gmail.com', edad: -5, password: 'clave123' })

// Caso 5: password corta
// completa aqui: validarUsuario({ nombre: 'Ana', email: 'ana@gmail.com', edad: 25, password: 'corta' })

// Caso 6: password sin numero
// completa aqui: validarUsuario({ nombre: 'Ana', email: 'ana@gmail.com', edad: 25, password: 'solonumeros' })

// Caso 7: JSON invalido (try/catch con JSON.parse)
// completa aqui: JSON.parse('{ "nombre": "Ana" ') dentro de un try/catch
// que muestre "Error al parsear JSON: <mensaje>"

