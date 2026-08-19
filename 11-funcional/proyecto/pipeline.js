// SOLUCION Proyecto — Pipeline de transformacion de datos

// =============================================
// Datos de entrada
// =============================================
const alumnos = [
  { nombre: 'Ana',      nota: 8 },
  { nombre: 'Bruno',    nota: 5 },
  { nombre: 'Carla',    nota: 7 },
  { nombre: 'Diego',    nota: 4 },
  { nombre: 'Elena',    nota: 9 },
  { nombre: 'Federico', nota: 6 },
];

// =============================================
// Funciones puras
// =============================================

// Filtrar aprobados
function esAprobada(nota) {
  return nota >= 6;
}

// Curvar nota: sumar 1 punto sin pasar de 10
function curvarNota(nota) {
  return Math.min(nota + 1, 10);
}

// =============================================
// Closure: contador de aprobados
// =============================================

function crearContador() {
  let cuenta = 0;
  return {
    contar: function () { cuenta++; },
    ver: function () { return cuenta; },
  };
}

// =============================================
// Currying: funcion de bonificacion
// =============================================

const bonificar = (porcentaje) => (nota) => +(nota * (1 + porcentaje / 100)).toFixed(2);

// =============================================
// Composicion: pipeline de transformacion
// =============================================

function pipeline(lista, ...fns) {
  return fns.reduce((resultado, fn) => fn(resultado), lista);
}

// =============================================
// Procesamiento
// =============================================

// 1) Filtrar aprobados (inmutabilidad: filter crea array nuevo)
const aprobados = alumnos.filter(alumno => esAprobada(alumno.nota));

// 2) Curvar notas
const curvadas = aprobados.map(alumno => ({
  nombre: alumno.nombre,
  nota: curvarNota(alumno.nota),
}));

// 3) Contar aprobados con closure
const contador = crearContador();
aprobados.forEach(() => contador.contar());

// 4) Promedio de notas curvadas
const promedio = curvadas.reduce((acc, a) => acc + a.nota, 0) / curvadas.length;

// 5) Bonificacion con currying (5% sobre nota de Ana)
const notaFinalAna = bonificar(5)(curvadas[0].nota);

// =============================================
// Salida
// =============================================

console.log('--- Alumnos aprobados (antes de curvar) ---');
aprobados.forEach(a => console.log(`${a.nombre}: ${a.nota}`));

console.log('\n--- Notas curvadas (+1 punto, max 10) ---');
curvadas.forEach(a => console.log(`${a.nombre}: ${a.nota}`));

console.log('\n--- Cantidad de aprobados ---');
console.log(contador.ver());

console.log('\n--- Promedio de notas curvadas ---');
console.log(promedio);

console.log('\n--- Nota final con 5% de bonificacion (Ana) ---');
console.log(notaFinalAna);
