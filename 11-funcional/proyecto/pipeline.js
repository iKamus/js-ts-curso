// PROYECTO — Pipeline de transformacion de datos
// Completa el codigo donde dice // completa aqui

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

// completa aqui: crear esAprobada(nota) que devuelva true si nota >= 6
function esAprobada(nota) {
  return /* completa aqui */;
}

// completa aqui: crear curvarNota(nota) que sume 1 punto sin pasar de 10
function curvarNota(nota) {
  return /* completa aqui */;
}

// =============================================
// Closure: contador de aprobados
// =============================================

// completa aqui: crear crearContador() que devuelva una funcion que cuente
// La variable cuenta debe ser privada dentro de la funcion
function crearContador() {
  return function() {
    // completa aqui: incrementar cuenta y devolverla
  };
}

// =============================================
// Currying: funcion de bonificacion
// =============================================

// completa aqui: crear bonificar(porcentaje)(nota) que aplique bonificacion
// Ejemplo: bonificar(5)(8) -> 8.4 (5% de 8)
const bonificar = (porcentaje) => (nota) => { /* completa aqui */ }

// =============================================
// Procesamiento
// =============================================

// 1) Filtrar aprobados (usa esAprobada)
const aprobados = alumnos.filter((alumno) => { /* completa aqui */ })

// 2) Curvar notas
const curvadas = aprobados.map((alumno) => { /* completa aqui */ })

// 3) Contar aprobados con closure
const contador = crearContador();
aprobados.forEach((alumno) => { /* completa aqui */ })

// 4) Promedio de notas curvadas
const promedio = 0;

// 5) Bonificacion con currying (5% sobre nota de Ana)
const notaFinalAna = bonificar(5)(0);

// =============================================
// Salida
// =============================================

console.log('--- Alumnos aprobados (antes de curvar) ---');
aprobados.forEach((alumno) => { /* completa aqui */ })

console.log('\n--- Notas curvadas (+1 punto, max 10) ---');
curvadas.forEach((alumno) => { /* completa aqui */ })

console.log('\n--- Cantidad de aprobados ---');
console.log(0);

console.log('\n--- Promedio de notas curvadas ---');
console.log(0);

console.log('\n--- Nota final con 5% de bonificacion (Ana) ---');
console.log(0);
