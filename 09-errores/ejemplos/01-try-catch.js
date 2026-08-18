// 01-try-catch.js — try/catch/finally y tipos de error
// try/catch es como la red de seguridad del trapecista: intentás algo,
// y si te caés, hay algo que te agarra antes de estrellarte contra el piso.

// try/catch básico
try {
  const resultado = JSON.parse('{no es json');
  console.log(resultado);
} catch (error) {
  console.log('Algo salió mal:', error.message);
}
// Algo salió mal: Unexpected token 'n'...

// finally siempre corre
// finally es como limpiar el aula: corre sí o sí, haya o no haya error.
try {
  console.log('intento algo');
} finally {
  console.log('esto corre sí o sí');
}

// propiedades del error
// Cuando atrapás un error, podés mirarle las etiquetas:
// el name dice qué tipo es, el message qué pasó, y el stack muestra el recorrido.
try {
  undeclaredVariable;   // ReferenceError
} catch (e) {
  console.log('nombre:', e.name);              // ReferenceError
  console.log('mensaje:', e.message);          // undeclaredVariable is not defined
  console.log('tiene stack:', typeof e.stack === 'string'); // true
}

// distinguir tipos con instanceof
// No todos los errores son iguales: acá vemos si es un TypeError o un RangeError,
// como distinguir si el auto se quedó sin nafta o pinchó una goma.
try {
  const x = null;
  x.prop;               // TypeError
} catch (e) {
  if (e instanceof TypeError) console.log('Es un TypeError');
  else if (e instanceof RangeError) console.log('Es un RangeError');
  else console.log('Otra cosa');
}