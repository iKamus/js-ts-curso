import { curso } from '../js/content/indice.js'
import { errores, validarEstructuraModulo, correrEjercicio } from './qa-lib.mjs'

let totalEjercicios = 0
let pasan = 0

for (const modulo of curso) {
  validarEstructuraModulo(modulo)
  for (const leccion of modulo.lecciones) {
    for (let indice = 0; indice < leccion.ejercicios.length; indice++) {
      totalEjercicios++
      const ok = await correrEjercicio(leccion, leccion.ejercicios[indice], indice)
      if (ok) pasan++
    }
  }
}

const fallan = totalEjercicios - pasan
console.log('======================================')
console.log(`Total ejercicios: ${totalEjercicios}`)
console.log(`Pasan: ${pasan}  ·  Fallan: ${fallan}`)
console.log(`Lecciones: ${curso.reduce((acc, m) => acc + m.lecciones.length, 0)} · Módulos: ${curso.length}`)
console.log('======================================')
if (errores.length) {
  console.log(errores.join('\n'))
  process.exit(1)
}
console.log('Todo correcto.')