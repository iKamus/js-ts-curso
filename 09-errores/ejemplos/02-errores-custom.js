// 02-errores-custom.js — Errores personalizados y throw
// Un error custom es como llenar una denuncia con más detalle:
// no solo decís qué pasó, sino también en qué campo del formulario.

// Error personalizado con datos extra
class ErrorDeValidacion extends Error {
  constructor(campo, mensaje) {
    super(mensaje);
    this.name = 'ErrorDeValidacion';
    this.campo = campo;
  }
}

function validarUsuario(usuario) {
  if (!usuario || usuario.trim() === '') {
    throw new ErrorDeValidacion('usuario', 'El usuario no puede estar vacío');
  }
  if (usuario.length < 3) {
    throw new ErrorDeValidacion('usuario', 'Debe tener al menos 3 caracteres');
  }
  return 'usuario válido';
}

try {
  console.log(validarUsuario('ab'));
} catch (e) {
  if (e instanceof ErrorDeValidacion) {
    console.log(`Campo: ${e.campo} → ${e.message}`);
  } else {
    throw e;   // re-lanzar si no es el error que esperaba
    // Si el error no es de validación, no nos corresponde a nosotros: lo soltamos de nuevo.
  }
}
// Campo: usuario → Debe tener al menos 3 caracteres

// throw simple
// throw corta todo en seco, como gritar "PARÁ" en el medio del partido.
function dividir(a, b) {
  if (b === 0) throw new Error('No se puede dividir por cero');
  return a / b;
}
try {
  dividir(1, 0);
} catch (e) {
  console.log(e.message); // No se puede dividir por cero
}