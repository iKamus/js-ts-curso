const CLAVE = 'curso-js-ts-progreso-v1'
const CLAVE_CODIGO = 'curso-js-ts-codigo-v1'

function cargar() {
  try {
    const crudo = localStorage.getItem(CLAVE)
    if (crudo) return JSON.parse(crudo)
  } catch (e) { /* datos corruptos: se reinician */ }
  return { tema: null, ejercicios: {} }
}

function guardar(estado) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(estado))
  } catch (e) { /* almacenamiento lleno o bloqueado: se ignora */ }
}

export function guardarCodigo(idLeccion, indice, codigo) {
  try {
    let codigos = {}
    const crudo = localStorage.getItem(CLAVE_CODIGO)
    if (crudo) codigos = JSON.parse(crudo)
    if (!codigos[idLeccion]) codigos[idLeccion] = {}
    codigos[idLeccion][String(indice)] = codigo
    localStorage.setItem(CLAVE_CODIGO, JSON.stringify(codigos))
  } catch (e) { /* almacenamiento lleno o bloqueado: se ignora */ }
}

export function cargarCodigo(idLeccion, indice) {
  try {
    const crudo = localStorage.getItem(CLAVE_CODIGO)
    if (crudo) {
      const codigos = JSON.parse(crudo)
      return codigos[idLeccion] && codigos[idLeccion][String(indice)]
    }
  } catch (e) { /* datos corruptos: se ignora */ }
  return null
}

const estado = cargar()

export function temaActual() {
  if (estado.tema) return estado.tema
  const preferido = window.matchMedia('(prefers-color-scheme: dark)').matches
  return preferido ? 'oscuro' : 'claro'
}

export function cambiarTema(nuevoTema) {
  estado.tema = nuevoTema
  guardar(estado)
  aplicarTema(nuevoTema)
}

export function aplicarTema(tema) {
  document.documentElement.setAttribute('data-tema', tema)
}

export function marcarEjercicio(idLeccion, idEjercicio) {
  if (!estado.ejercicios[idLeccion]) estado.ejercicios[idLeccion] = {}
  estado.ejercicios[idLeccion][idEjercicio] = true
  guardar(estado)
}

export function ejercicioResuelto(idLeccion, idEjercicio) {
  return !!(estado.ejercicios[idLeccion] && estado.ejercicios[idLeccion][idEjercicio])
}

export function leccionCompleta(leccion) {
  if (!leccion.ejercicios || leccion.ejercicios.length === 0) return false
  return leccion.ejercicios.every((ej, i) => ejercicioResuelto(leccion.id, i))
}

export function progresoModulo(modulo) {
  const total = modulo.lecciones.length
  const hechas = modulo.lecciones.filter((l) => leccionCompleta(l)).length
  return { hechas, total, porcentaje: total === 0 ? 0 : Math.round((hechas / total) * 100) }
}

export function progresoGlobal(curso) {
  let total = 0
  let hechas = 0
  for (const modulo of curso) {
    for (const leccion of modulo.lecciones) {
      total++
      if (leccionCompleta(leccion)) hechas++
    }
  }
  return { hechas, total, porcentaje: total === 0 ? 0 : Math.round((hechas / total) * 100) }
}

export function primeraLeccionPendiente(curso) {
  for (const modulo of curso) {
    for (const leccion of modulo.lecciones) {
      if (!leccionCompleta(leccion)) return leccion
    }
  }
  return null
}

export function primerEjercicioPendiente(leccion) {
  if (!leccion.ejercicios || leccion.ejercicios.length === 0) return null
  for (let i = 0; i < leccion.ejercicios.length; i++) {
    if (!ejercicioResuelto(leccion.id, i)) return { leccion, indice: i }
  }
  return null
}

export function leccionTieneProgreso(leccion) {
  if (!leccion.ejercicios || leccion.ejercicios.length === 0) return false
  return leccion.ejercicios.some((_, i) => ejercicioResuelto(leccion.id, i))
}