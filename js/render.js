import { progresoModulo, progresoGlobal, leccionCompleta, primeraLeccionPendiente, temaActual, primerEjercicioPendiente } from './state.js'

export function crearBloqueCodigo(codigo, salida) {
  const bloque = document.createElement('div')
  bloque.className = 'bloque-codigo'
  const pre = document.createElement('pre')
  pre.textContent = codigo.replace(/\n$/, '')
  bloque.appendChild(pre)
  if (salida !== undefined && salida !== null) {
    const etiqueta = document.createElement('span')
    etiqueta.className = 'etiqueta-salida'
    etiqueta.textContent = 'Salida esperada'
    bloque.appendChild(etiqueta)
    const preSalida = document.createElement('pre')
    preSalida.textContent = String(salida)
    bloque.appendChild(preSalida)
  }
  return bloque
}

function crearTabla(tabla) {
  const tablaEl = document.createElement('table')
  tablaEl.className = 'tabla-metodos'
  const encabezado = document.createElement('tr')
  for (const columna of tabla.columnas) {
    const th = document.createElement('th')
    th.textContent = columna
    encabezado.appendChild(th)
  }
  tablaEl.appendChild(encabezado)
  for (const fila of tabla.filas) {
    const tr = document.createElement('tr')
    for (const celda of fila) {
      const td = document.createElement('td')
      if (String(celda).startsWith('`') && String(celda).endsWith('`')) {
        const code = document.createElement('code')
        code.textContent = String(celda).slice(1, -1)
        td.appendChild(code)
      } else {
        td.textContent = celda
      }
      tr.appendChild(td)
    }
    tablaEl.appendChild(tr)
  }
  return tablaEl
}

function crearLista(items) {
  const ul = document.createElement('ul')
  for (const item of items) {
    const li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
  }
  return ul
}

export function renderizarSeccion(seccion) {
  const seccionEl = document.createElement('section')
  seccionEl.className = 'seccion-teoria'
  const h2 = document.createElement('h2')
  h2.textContent = seccion.titulo
  seccionEl.appendChild(h2)
  for (const parrafo of seccion.parrafos || []) {
    const p = document.createElement('p')
    p.textContent = parrafo
    seccionEl.appendChild(p)
  }
  if (seccion.codigo) seccionEl.appendChild(crearBloqueCodigo(seccion.codigo, seccion.salida))
  if (seccion.tabla) seccionEl.appendChild(crearTabla(seccion.tabla))
  if (seccion.lista) seccionEl.appendChild(crearLista(seccion.lista))
  return seccionEl
}

function renderizarEjemplo(ejemplo) {
  const contenedor = document.createElement('div')
  contenedor.className = 'ejemplo'
  const titulo = document.createElement('div')
  titulo.className = 'ej-titulo'
  titulo.textContent = ejemplo.titulo
  contenedor.appendChild(titulo)
  const cuerpo = document.createElement('div')
  cuerpo.className = 'ej-cuerpo'
  cuerpo.appendChild(crearBloqueCodigo(ejemplo.codigo, ejemplo.salida))
  const explicacion = document.createElement('p')
  explicacion.className = 'ej-explicacion'
  explicacion.textContent = ejemplo.explicacion
  cuerpo.appendChild(explicacion)
  contenedor.appendChild(cuerpo)
  return contenedor
}

function crearChipPalabra(clave) {
  const chip = document.createElement('span')
  chip.className = 'chip-termino'
  chip.title = clave.definicion
  const strong = document.createElement('strong')
  strong.textContent = clave.termino
  chip.appendChild(strong)
  const resto = document.createElement('span')
  resto.textContent = ' — ' + clave.definicion
  chip.appendChild(resto)
  return chip
}

export function renderizarGlosario(palabrasClave) {
  const glosario = document.createElement('div')
  glosario.className = 'glosario'
  for (const clave of palabrasClave) glosario.appendChild(crearChipPalabra(clave))
  return glosario
}

export function renderizarEjercicio(leccion, indice) {
  const ejercicio = leccion.ejercicios[indice]
  const contenedor = document.createElement('div')
  contenedor.className = 'ejercicio'
  contenedor.id = `ejercicio-${leccion.id}-${indice}`

  const tarjeta = document.createElement('div')
  tarjeta.className = 'ejercicio-tarjeta'

  const cabecera = document.createElement('div')
  cabecera.className = 'ejercicio-cabecera'
  const h3 = document.createElement('h3')
  h3.textContent = `${indice + 1}. ${ejercicio.titulo}`
  cabecera.appendChild(h3)
  const dificultad = document.createElement('span')
  const nivelDificultad = (ejercicio.dificultad || 'media').toLowerCase()
  dificultad.className = 'dificultad ' + nivelDificultad
  dificultad.textContent = ejercicio.dificultad || 'Media'
  cabecera.appendChild(dificultad)
  tarjeta.appendChild(cabecera)

  const cuerpo = document.createElement('div')
  cuerpo.className = 'ejercicio-cuerpo'

  const consigna = document.createElement('div')
  consigna.className = 'consigna'
  for (const parrafo of ejercicio.consigna || []) {
    const p = document.createElement('p')
    p.textContent = parrafo
    consigna.appendChild(p)
  }
  cuerpo.appendChild(consigna)

  if (ejercicio.pasos && ejercicio.pasos.length) {
    const ol = document.createElement('ol')
    ol.className = 'pasos'
    for (const paso of ejercicio.pasos) {
      const li = document.createElement('li')
      li.textContent = paso
      ol.appendChild(li)
    }
    cuerpo.appendChild(ol)
  }

  if (ejercicio.pista) {
    const pista = document.createElement('div')
    pista.className = 'pista'
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    summary.textContent = 'Necesitas una pista?'
    details.appendChild(summary)
    const texto = document.createElement('p')
    texto.textContent = ejercicio.pista
    details.appendChild(texto)
    pista.appendChild(details)
    cuerpo.appendChild(pista)
  }

  const editorContenedor = document.createElement('div')
  editorContenedor.className = 'editor-contenedor'
  editorContenedor.id = `editor-${leccion.id}-${indice}`
  cuerpo.appendChild(editorContenedor)

  const barraAcciones = document.createElement('div')
  barraAcciones.className = 'barra-acciones'
  const botonEjecutar = document.createElement('button')
  botonEjecutar.className = 'boton ejecutar'
  botonEjecutar.type = 'button'
  botonEjecutar.textContent = 'Ejecutar'
  botonEjecutar.dataset.accion = 'ejecutar'
  const botonVerificar = document.createElement('button')
  botonVerificar.className = 'boton verificar'
  botonVerificar.type = 'button'
  botonVerificar.textContent = 'Verificar'
  botonVerificar.dataset.accion = 'verificar'
  barraAcciones.appendChild(botonEjecutar)
  barraAcciones.appendChild(botonVerificar)
  cuerpo.appendChild(barraAcciones)

  const panelSalida = document.createElement('div')
  panelSalida.className = 'panel-salida'
  panelSalida.textContent = 'Presiona Ejecutar para ver la salida aquí.'
  cuerpo.appendChild(panelSalida)

  const contenedorResultados = document.createElement('div')
  contenedorResultados.className = 'resultados'
  cuerpo.appendChild(contenedorResultados)

  tarjeta.appendChild(cuerpo)
  contenedor.appendChild(tarjeta)
  return contenedor
}

export function renderizarLeccion(modulo, leccion) {
  const contenedor = document.createElement('div')
  contenedor.id = 'leccion-contenido'

  const cabecera = document.createElement('div')
  cabecera.className = 'cabecera-leccion'
  const ruta = document.createElement('div')
  ruta.className = 'ruta'
  ruta.textContent = `${modulo.titulo} · Lección ${leccion.numero}`
  cabecera.appendChild(ruta)
  const h1 = document.createElement('h1')
  h1.textContent = leccion.titulo
  cabecera.appendChild(h1)
  const badges = document.createElement('div')
  badges.className = 'badges'
  const badgeNivel = document.createElement('span')
  badgeNivel.className = 'badge'
  badgeNivel.textContent = leccion.nivel || 'Básico'
  badges.appendChild(badgeNivel)
  if (leccion.esProyecto) {
    const badgeProyecto = document.createElement('span')
    badgeProyecto.className = 'badge proyecto'
    badgeProyecto.textContent = 'Mini proyecto'
    badges.appendChild(badgeProyecto)
  }
  cabecera.appendChild(badges)
  contenedor.appendChild(cabecera)

  if (leccion.esProyecto && modulo.trivia) {
    const trivia = document.createElement('div')
    trivia.className = 'trivia'
    const strong = document.createElement('strong')
    strong.textContent = 'Dato curioso del módulo'
    trivia.appendChild(strong)
    trivia.appendChild(document.createTextNode(modulo.trivia))
    contenedor.appendChild(trivia)
  }

  const intro = document.createElement('div')
  intro.className = 'tarjeta'
  intro.appendChild(renderizarGlosario(leccion.palabrasClave))
  contenedor.appendChild(intro)

  for (const seccion of leccion.secciones) contenedor.appendChild(renderizarSeccion(seccion))

  if (leccion.ejemplos && leccion.ejemplos.length) {
    const tituloEjemplos = document.createElement('h2')
    tituloEjemplos.className = 'seccion-teoria'
    tituloEjemplos.textContent = 'Ejemplos comentados'
    contenedor.appendChild(tituloEjemplos)
    for (const ejemplo of leccion.ejemplos) contenedor.appendChild(renderizarEjemplo(ejemplo))
  }

  if (leccion.proyecto && leccion.proyecto.objetivos) {
    const tarjetaProyecto = document.createElement('div')
    tarjetaProyecto.className = 'tarjeta'
    const h2 = document.createElement('h2')
    h2.textContent = 'Objetivos'
    tarjetaProyecto.appendChild(h2)
    tarjetaProyecto.appendChild(crearLista(leccion.proyecto.objetivos))
    contenedor.appendChild(tarjetaProyecto)
  }

  if (leccion.ejercicios && leccion.ejercicios.length) {
    const tituloEjercicios = document.createElement('h2')
    tituloEjercicios.className = 'seccion-teoria'
    tituloEjercicios.textContent = 'Ejercicios'
    contenedor.appendChild(tituloEjercicios)
    leccion.ejercicios.forEach((_, indice) => {
      contenedor.appendChild(renderizarEjercicio(leccion, indice))
    })
  }

  const navegacion = document.createElement('div')
  navegacion.className = 'navegacion-leccion'
  contenedor.appendChild(navegacion)

  return contenedor
}

export function renderizarInicio(curso) {
  const contenedor = document.createElement('div')
  contenedor.className = 'vista-inicio'

  const h1 = document.createElement('h1')
  h1.textContent = 'Curso interactivo de JavaScript y TypeScript'
  contenedor.appendChild(h1)
  const subtitulo = document.createElement('p')
  subtitulo.className = 'subtitulo'
  subtitulo.textContent = 'Aprende a programar desde cero: teoría completa, ejemplos comentados, ejercicios con validación automática y proyectos integradores. Todo corre en tu navegador.'
  contenedor.appendChild(subtitulo)

  const tarjetaProgreso = document.createElement('div')
  tarjetaProgreso.className = 'tarjeta'
  const p = document.createElement('p')
  p.textContent = 'Tu progreso general'
  tarjetaProgreso.appendChild(p)
  const barra = document.createElement('div')
  barra.className = 'barra-progreso-global'
  const relleno = document.createElement('span')
  const global = progresoGlobal(curso)
  relleno.style.width = global.porcentaje + '%'
  barra.appendChild(relleno)
  tarjetaProgreso.appendChild(barra)
  const detalle = document.createElement('p')
  detalle.textContent = `${global.hechas} de ${global.total} lecciones completadas`
  tarjetaProgreso.appendChild(detalle)
  const pendiente = primeraLeccionPendiente(curso)
  if (pendiente) {
    const pendienteEjercicio = primerEjercicioPendiente(pendiente)
    if (pendienteEjercicio) {
      const boton = document.createElement('a')
      boton.className = 'boton'
      boton.href = `#/leccion/${pendiente.id}`
      boton.textContent = `Continuar con: ${pendiente.titulo} (Ejercicio ${pendienteEjercicio.indice + 1})`
      tarjetaProgreso.appendChild(boton)
    } else {
      const boton = document.createElement('a')
      boton.className = 'boton'
      boton.href = `#/leccion/${pendiente.id}`
      boton.textContent = 'Continuar con: ' + pendiente.titulo
      tarjetaProgreso.appendChild(boton)
    }
  }
  contenedor.appendChild(tarjetaProgreso)

  const grid = document.createElement('div')
  grid.className = 'grid-modulos-inicio'
  for (const modulo of curso) {
    const div = document.createElement('div')
    div.className = 'modulo-inicio'
    div.dataset.modulo = modulo.id
    const h3 = document.createElement('h3')
    h3.textContent = `${modulo.numero}. ${modulo.titulo}`
    div.appendChild(h3)
    const desc = document.createElement('p')
    desc.textContent = modulo.descripcion
    div.appendChild(desc)
    const prog = progresoModulo(modulo)
    const mini = document.createElement('div')
    mini.className = 'm-mini'
    mini.textContent = `${prog.hechas}/${prog.total} lecciones`
    div.appendChild(mini)
    grid.appendChild(div)
  }
  contenedor.appendChild(grid)

  return contenedor
}

export function renderizarSidebar(curso, leccionActivaId) {
  const sidebar = document.getElementById('sidebar')
  sidebar.innerHTML = ''

  const cabecera = document.createElement('div')
  cabecera.className = 'cabecera-curso'
  const logo = document.createElement('a')
  logo.className = 'logo'
  logo.href = '#/inicio'
  logo.textContent = 'JS → TS'
  const sub = document.createElement('small')
  sub.textContent = 'curso interactivo'
  logo.appendChild(sub)
  cabecera.appendChild(logo)
  const botonTema = document.createElement('button')
  botonTema.className = 'boton-tema'
  botonTema.type = 'button'
  botonTema.textContent = temaActual() === 'oscuro' ? 'Modo claro' : 'Modo oscuro'
  botonTema.id = 'boton-tema'
  cabecera.appendChild(botonTema)
  sidebar.appendChild(cabecera)

  for (const modulo of curso) {
    const contenedor = document.createElement('div')
    contenedor.className = 'modulo-sidebar'
    contenedor.dataset.modulo = modulo.id
    const esActivo = leccionActivaId && modulo.lecciones.some((l) => l.id === leccionActivaId)

    const boton = document.createElement('button')
    boton.className = 'modulo-cabecera'
    boton.type = 'button'
    boton.dataset.modulo = modulo.id
    const titulo = document.createElement('div')
    titulo.className = 'm-titulo'
    const nombre = document.createElement('span')
    nombre.textContent = `${modulo.numero}. ${modulo.titulo}`
    titulo.appendChild(nombre)
    const flecha = document.createElement('span')
    flecha.className = 'm-flecha'
    flecha.textContent = '▸'
    titulo.appendChild(flecha)
    boton.appendChild(titulo)
    const prog = progresoModulo(modulo)
    const barra = document.createElement('div')
    barra.className = 'm-progreso'
    const relleno = document.createElement('span')
    relleno.style.width = prog.porcentaje + '%'
    barra.appendChild(relleno)
    boton.appendChild(barra)
    const texto = document.createElement('div')
    texto.className = 'm-mini'
    texto.textContent = `${prog.hechas}/${prog.total} lecciones`
    boton.appendChild(texto)
    contenedor.appendChild(boton)

    const lista = document.createElement('div')
    lista.className = 'lecciones-lista'
    for (const leccion of modulo.lecciones) {
      const item = document.createElement('a')
      item.className = 'leccion-item'
      if (leccion.id === leccionActivaId) item.classList.add('activa')
      item.href = `#/leccion/${leccion.id}`
      const estado = document.createElement('span')
      estado.className = 'estado'
      if (leccionCompleta(leccion)) {
        estado.classList.add('hecho')
        estado.textContent = '✓'
      }
      item.appendChild(estado)
      const num = document.createElement('span')
      num.className = 'num'
      num.textContent = leccion.numero
      item.appendChild(num)
      const nombreLeccion = document.createElement('span')
      nombreLeccion.textContent = leccion.titulo
      item.appendChild(nombreLeccion)
      if (leccion.esProyecto) {
        const badge = document.createElement('span')
        badge.className = 'proyecto-badge'
        badge.textContent = 'PROYECTO'
        item.appendChild(badge)
      }
      lista.appendChild(item)
    }
    contenedor.appendChild(lista)
    sidebar.appendChild(contenedor)

    if (esActivo) contenedor.classList.add('abierto')
  }
}