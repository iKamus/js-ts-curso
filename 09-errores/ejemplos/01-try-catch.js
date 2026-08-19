// 01-try-catch.js — try/catch/finally y tipos de error

// --- try/catch basico ---
// try es como decir "voy a intentar esto, pero si sale mal, no quiero que explote todo".
try {
  const resultado = JSON.parse('{no es json');
  console.log(resultado);
} catch (error) {
  console.log('Algo salio mal:', error.message);
}
// Algo salio mal: Unexpected token 'n'...

// --- finally siempre corre ---
// finally es como limpiar el pizarron: se hace siempre, llueva o truene.
try {
  console.log('intento algo');
} finally {
  console.log('esto corre si o si');
}
// esto corre si o si

// --- propiedades del objeto Error ---
// Cuando atrapas un error, tenes tres datos clave:
// name = que tipo es, message = que paso, stack = el recorrido completo.
try {
  undeclaredVariable;
} catch (e) {
  console.log('nombre:', e.name);              // ReferenceError
  console.log('mensaje:', e.message);          // undeclaredVariable is not defined
  console.log('tiene stack:', typeof e.stack === 'string'); // true
}

// --- distinguir tipos con instanceof ---
// No todos los errores son iguales: con instanceof podes preguntar
// "de que familia es este error" y manejar cada uno distinto.
try {
  const x = null;
  x.prop;
} catch (e) {
  if (e instanceof TypeError) console.log('Es un TypeError');
  else if (e instanceof RangeError) console.log('Es un RangeError');
  else console.log('Otra cosa');
}
// Es un TypeError

// --- RangeError y ReferenceError ---
// Otros tipos de error que pueden aparecer en el camino.
try {
  const arr = new Array(-1);
} catch (e) {
  console.log('RangeError:', e.message);
}

try {
  console.log(variableInexistente);
} catch (e) {
  console.log('ReferenceError:', e.message);
}

// --- finally con recursos ---
// finally es ideal para limpiar cosas que necesitan liberarse siempre.
function procesar(dato) {
  let recurso = 'abierto';
  try {
    if (!dato) throw new Error('dato invalido');
    console.log('Procesando:', dato);
  } catch (e) {
    console.log('Error:', e.message);
  } finally {
    recurso = 'cerrado';
    console.log('Recurso liberado:', recurso);
  }
}
procesar(null);
// Error: dato invalido
// Recurso liberado: cerrado
