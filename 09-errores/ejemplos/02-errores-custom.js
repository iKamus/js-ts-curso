// 02-errores-custom.js — throw y errores personalizados

// --- Error custom con datos extra ---
// Un error custom es como una denuncia mas completa: no solo decis que fallo,
// sino tambien en que campo, con que codigo, etc.
class ErrorDeValidacion extends Error {
  constructor(campo, mensaje) {
    super(mensaje);
    this.name = 'ErrorDeValidacion';
    this.campo = campo;
  }
}

function validarUsuario(usuario) {
  if (!usuario || usuario.trim() === '') {
    throw new ErrorDeValidacion('usuario', 'El usuario no puede estar vacio');
  }
  if (usuario.length < 3) {
    throw new ErrorDeValidacion('usuario', 'Debe tener al menos 3 caracteres');
  }
  return 'usuario valido';
}

// --- Atrapar error custom con instanceof ---
try {
  console.log(validarUsuario('ab'));
} catch (e) {
  if (e instanceof ErrorDeValidacion) {
    console.log(`Campo: ${e.campo} -> ${e.message}`);
  } else {
    throw e;   // re-lanzar si no es el error que esperaba
  }
}
// Campo: usuario -> Debe tener al menos 3 caracteres

// --- Re-lanzar errores desconocidos ---
// Si el error no es de validacion, no nos corresponde: lo soltamos de nuevo.
function procesar(datos) {
  try {
    if (typeof datos !== 'string') throw new TypeError('Se esperaba un string');
    if (datos.length === 0) throw new ErrorDeValidacion('datos', 'No puede estar vacio');
    console.log('OK:', datos);
  } catch (e) {
    if (e instanceof ErrorDeValidacion) {
      console.log('Error de validacion:', e.message);
    } else {
      throw e;  // el TypeError no es nuestro, re-lanzamos
    }
  }
}

try {
  procesar(42);
} catch (e) {
  console.log('Error atrapado afuera:', e.name, '-', e.message);
}
// Error atrapado afuera: TypeError - Se esperaba un string

// --- throw simple ---
// throw corta todo en seco, como un botón de emergencia.
function dividir(a, b) {
  if (b === 0) throw new Error('No se puede dividir por cero');
  return a / b;
}

try {
  dividir(1, 0);
} catch (e) {
  console.log(e.message); // No se puede dividir por cero
}
