import { curso } from './content/indice.js'
import { renderizarSidebar, renderizarInicio, renderizarLeccion } from './render.js'
import { crearEditorApp, destruirTodosLosEditores, actualizarTemaEditores } from './editor.js'
import { ejecutar } from './runner.js'
import { aplicarTema, temaActual, cambiarTema, marcarEjercicio, ejercicioResuelto, guardarCodigo, cargarCodigo, primerEjercicioPendiente, leccionTieneProgreso } from './state.js'

const contenido = document.getElementById('contenido')
const editores = new Map()
let leccionActual = null

function listarLecciones() {
  const planas = []
  for (const modulo of curso) {
    for (const leccion of modulo.lecciones) {
      planas.push({ modulo, leccion })
    }
  }
  return planas
}

function buscarLeccion(id) {
  for (const modulo of curso) {
    for (const leccion of modulo.lecciones) {
      if (leccion.id === id) return { modulo, leccion }
    }
  }
  return null
}

function destruirTodo() {
  destruirTodosLosEditores()
  editores.clear()
}

function renderizarSalida(panel, logs, error) {
  panel.innerHTML = ''
  if (error) {
    const div = document.createElement('span')
    div.className = 'log-linea log-error'
    div.textContent = '✖ ' + error
    panel.appendChild(div)
    return
  }
  if (!logs || logs.length === 0) {
    const div = document.createElement('span')
    div.className = 'log-linea sin-salida'
    div.textContent = 'Sin salida: el código se ejecutó pero no imprimió nada.'
    panel.appendChild(div)
    return
  }
  for (const log of logs) {
    const div = document.createElement('span')
    div.className = 'log-linea'
    if (log.nivel === 'error') div.classList.add('log-error')
    if (log.nivel === 'warn') div.classList.add('log-warn')
    div.textContent = log.texto
    panel.appendChild(div)
  }
}

function renderizarResultados(contenedor, resultado, ejercicio, idLeccion, indice) {
  contenedor.innerHTML = ''
  const todosPasan = resultado.resultados.every((r) => r.paso)

  for (const test of resultado.resultados) {
    const item = document.createElement('div')
    item.className = 'resultado-item ' + (test.paso ? 'paso' : 'fallo')
    const icono = document.createElement('span')
    icono.className = 'icono'
    icono.textContent = test.paso ? '✓' : '✗'
    item.appendChild(icono)
    const detalle = document.createElement('div')
    detalle.className = 'detalle'
    const titulo = document.createElement('strong')
    titulo.textContent = test.nombre
    detalle.appendChild(titulo)
    if (!test.paso) {
      detalle.appendChild(document.createElement('br'))
      const esperado = document.createElement('code')
      esperado.textContent = 'Esperado: ' + test.esperado
      detalle.appendChild(esperado)
      detalle.appendChild(document.createElement('br'))
      const obtenido = document.createElement('code')
      obtenido.textContent = 'Obtuviste: ' + test.obtenido
      detalle.appendChild(obtenido)
      if (test.mensaje) {
        detalle.appendChild(document.createElement('br'))
        detalle.appendChild(document.createTextNode(test.mensaje))
      }
    } else {
      detalle.appendChild(document.createTextNode(' Correcto.'))
    }
    item.appendChild(detalle)
    contenedor.appendChild(item)
  }

  if (todosPasan) {
    marcarEjercicio(idLeccion, indice)
    const contenedorEjercicio = document.getElementById(`ejercicio-${idLeccion}-${indice}`)
    if (contenedorEjercicio) contenedorEjercicio.classList.add('resuelto')
    const mensaje = document.createElement('div')
    mensaje.className = 'mensaje-exito'
    mensaje.textContent = '¡Ejercicio resuelto! Progreso guardado.'
    contenedor.appendChild(mensaje)
    renderizarSidebar(curso, idLeccion)
  }
}

async function ejecutarEjercicio(idLeccion, indice, verificar) {
  const ejercicio = leccionActual.ejercicios[indice]
  const editor = editores.get(`${idLeccion}-${indice}`)
  const codigo = editor.obtenerCodigo()

  const panel = document.getElementById(`leccion-contenido`).querySelector(`#ejercicio-${idLeccion}-${indice} .panel-salida`)
  const resultados = document.getElementById(`leccion-contenido`).querySelector(`#ejercicio-${idLeccion}-${indice} .resultados`)

  const botones = document.querySelectorAll(`#ejercicio-${idLeccion}-${indice} .barra-acciones .boton`)
  for (const boton of botones) boton.classList.add('ejecutando')

  panel.textContent = 'Ejecutando…'
  resultados.innerHTML = ''

  const lenguaje = leccionActual.lenguaje || 'javascript'
  const tests = verificar ? ejercicio.tests || [] : []
  const resultado = await ejecutar({ codigo, lenguaje, tests, htmlBase: leccionActual.htmlBase })

  renderizarSalida(panel, resultado.logs, resultado.error)
  if (verificar && !resultado.error) {
    renderizarResultados(resultados, resultado, ejercicio, idLeccion, indice)
  }
  if (resultado.error) {
    const div = document.createElement('div')
    div.className = 'resultado-item fallo'
    div.textContent = 'Corrige el error de arriba antes de verificar.'
    resultados.appendChild(div)
  }

  for (const boton of botones) boton.classList.remove('ejecutando')
}

function configurarEjercicios(modulo, leccion) {
  leccion.ejercicios.forEach((ejercicio, indice) => {
    const clave = `${leccion.id}-${indice}`
    const contenedorEditor = document.getElementById(`editor-${leccion.id}-${indice}`)
    const codigoGuardado = cargarCodigo(leccion.id, indice)
    const editor = crearEditorApp({
      padre: contenedorEditor,
      codigo: codigoGuardado || ejercicio.codigoInicial,
      lenguaje: leccion.lenguaje || 'javascript',
      oscuro: temaActual() === 'oscuro',
      onCambio: (nuevoCodigo) => {
        // Debounce: guardar después de 500ms de inactividad
        clearTimeout(editor.guardarTimeout)
        editor.guardarTimeout = setTimeout(() => {
          guardarCodigo(leccion.id, indice, nuevoCodigo)
        }, 500)
      }
    })
    editores.set(clave, editor)

    const contenedorEjercicio = document.getElementById(`ejercicio-${leccion.id}-${indice}`)
    const botonEjecutar = contenedorEjercicio.querySelector('[data-accion="ejecutar"]')
    const botonVerificar = contenedorEjercicio.querySelector('[data-accion="verificar"]')
    botonEjecutar.addEventListener('click', () => ejecutarEjercicio(leccion.id, indice, false))
    botonVerificar.addEventListener('click', () => ejecutarEjercicio(leccion.id, indice, true))

    if (ejercicioResuelto(leccion.id, indice)) contenedorEjercicio.classList.add('resuelto')
  })
}

function configurarNavegacion(modulo, leccion) {
  const planas = listarLecciones()
  const posicion = planas.findIndex((p) => p.leccion.id === leccion.id)
  const contenedor = document.querySelector('#leccion-contenido .navegacion-leccion')
  const anterior = planas[posicion - 1]
  const siguiente = planas[posicion + 1]
  if (anterior) {
    const boton = document.createElement('a')
    boton.className = 'boton secundario'
    boton.href = `#/leccion/${anterior.leccion.id}`
    boton.textContent = '← ' + anterior.leccion.titulo
    contenedor.appendChild(boton)
  } else {
    const boton = document.createElement('span')
    boton.className = 'boton secundario'
    boton.style.opacity = '0.4'
    boton.textContent = '← Inicio del curso'
    contenedor.appendChild(boton)
  }
  if (siguiente) {
    const boton = document.createElement('a')
    boton.className = 'boton'
    boton.href = `#/leccion/${siguiente.leccion.id}`
    boton.textContent = 'Siguiente: ' + siguiente.leccion.titulo + ' →'
    contenedor.appendChild(boton)
  }
}

function mostrarLeccion(id) {
  const encontrada = buscarLeccion(id)
  if (!encontrada) {
    mostrarInicio()
    return
  }
  destruirTodo()
  const { modulo, leccion } = encontrada
  leccionActual = leccion
  contenido.innerHTML = ''
  contenido.appendChild(renderizarLeccion(modulo, leccion))
  configurarEjercicios(modulo, leccion)
  configurarNavegacion(modulo, leccion)
  renderizarSidebar(curso, leccion.id)
  contenido.scrollTop = 0
  
  // Solo scrollear al ejercicio pendiente si la lección ya tiene progreso
  if (leccionTieneProgreso(leccion)) {
    const pendiente = primerEjercicioPendiente(leccion)
    if (pendiente) {
      const ejercicioElemento = document.getElementById(`ejercicio-${leccion.id}-${pendiente.indice}`)
      if (ejercicioElemento) {
        ejercicioElemento.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
}

function mostrarInicio() {
  destruirTodo()
  leccionActual = null
  contenido.innerHTML = ''
  contenido.appendChild(renderizarInicio(curso))
  renderizarSidebar(curso, null)
  contenido.scrollTop = 0
}

function manejarRuta() {
  const hash = window.location.hash || ''
  const coincidencia = hash.match(/^#\/leccion\/([\w-]+)$/)
  if (coincidencia) {
    mostrarLeccion(coincidencia[1])
  } else {
    mostrarInicio()
  }
}

function configurarInterfaz() {
  aplicarTema(temaActual())

  document.getElementById('sidebar').addEventListener('click', (evento) => {
    const boton = evento.target.closest('.modulo-cabecera')
    if (boton) {
      boton.closest('.modulo-sidebar').classList.toggle('abierto')
    }
  })

  document.addEventListener('click', (evento) => {
    const botonTema = evento.target.closest('#boton-tema')
    if (botonTema) {
      const nuevo = temaActual() === 'oscuro' ? 'claro' : 'oscuro'
      cambiarTema(nuevo)
      actualizarTemaEditores(nuevo === 'oscuro')
      botonTema.textContent = nuevo === 'oscuro' ? 'Modo claro' : 'Modo oscuro'
    }
    const moduloInicio = evento.target.closest('.modulo-inicio[data-modulo]')
    if (moduloInicio) {
      const modulo = curso.find((m) => m.id === moduloInicio.dataset.modulo)
      if (modulo && modulo.lecciones.length) {
        window.location.hash = `#/leccion/${modulo.lecciones[0].id}`
      }
    }
  })

  window.addEventListener('hashchange', manejarRuta)
}

configurarInterfaz()
manejarRuta()