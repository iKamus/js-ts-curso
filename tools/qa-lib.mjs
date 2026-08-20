import vm from 'node:vm'
import ts from 'typescript'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<html><body></body></html>', { runScripts: 'outside-only', url: 'http://localhost/' })
const document = dom.window.document
const window = dom.window

export const errores = []

function formatear(args) {
  return args.map((valor) => {
    if (typeof valor === 'string') return valor
    if (typeof valor === 'undefined') return 'undefined'
    if (typeof valor === 'function') return valor.toString()
    if (typeof valor === 'bigint') return valor.toString() + 'n'
    if (valor === null) return 'null'
    try {
      if (typeof valor === 'object') return JSON.stringify(valor)
      return String(valor)
    } catch (e) {
      return String(valor)
    }
  }).join(' ')
}

function igualar(a, b) {
  if (typeof a !== typeof b) return false
  if (a === null || b === null) return a === b
  if (typeof a === 'object') return JSON.stringify(a) === JSON.stringify(b)
  return a === b
}

function crearAlmacenSimulado() {
  let datos = {}
  return {
    getItem: (clave) => (Object.prototype.hasOwnProperty.call(datos, clave) ? datos[clave] : null),
    setItem: (clave, valor) => { datos[clave] = String(valor) },
    removeItem: (clave) => { delete datos[clave] },
    clear: () => { datos = {} },
    key: (indice) => Object.keys(datos)[indice] ?? null,
    get length() { return Object.keys(datos).length }
  }
}

function crearContexto() {
  const logs = []
  const consola = {
    log: (...a) => logs.push({ nivel: 'log', texto: formatear(a) }),
    warn: (...a) => logs.push({ nivel: 'warn', texto: formatear(a) }),
    error: (...a) => logs.push({ nivel: 'error', texto: formatear(a) }),
    info: (...a) => logs.push({ nivel: 'info', texto: formatear(a) })
  }
  const contexto = vm.createContext({
    console: consola,
    document,
    window,
    Event: window.Event,
    localStorage: crearAlmacenSimulado(),
    sessionStorage: crearAlmacenSimulado(),
    fetch: () => Promise.reject(new Error('Sin conexión simulada en QA')),
    setTimeout,
    clearTimeout
  })
  return { logs, contexto }
}

export function transpilarCodigo(codigo, lenguaje) {
  if (lenguaje !== 'typescript') return { codigo }
  const resultado = ts.transpileModule(codigo, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ES2020,
      strict: true
    },
    reportDiagnostics: true,
    fileName: 'ejercicio.ts'
  })
  if (resultado.diagnostics && resultado.diagnostics.length > 0) {
    const primera = resultado.diagnostics[0]
    const posicion = primera.start !== undefined ? codigo.slice(0, primera.start).split('\n').length : '?'
    const mensaje = primera.messageText ? (primera.messageText.messageText || primera.messageText) : 'Error desconocido'
    return { error: `Error de compilación de TypeScript (línea ${posicion}): ${mensaje}` }
  }
  return { codigo: resultado.outputText }
}

async function ejecutarCodigo(codigo, { logs, contexto }, htmlBase) {
  try {
    if (htmlBase) {
      vm.runInContext('document.body.innerHTML = ' + JSON.stringify(htmlBase), contexto)
    }
    vm.runInContext(codigo, contexto, { filename: 'solucion.js' })
    await new Promise((resolver) => setTimeout(resolver, 80))
    return { logs, error: null }
  } catch (e) {
    return { logs, error: e.message }
  }
}

function evaluarExpresion(expr, contexto) {
  try {
    return { valor: vm.runInContext(expr, contexto) }
  } catch (e) {
    return { error: e.message }
  }
}

function correrTests(tests, ejecucion, contexto, codigoFuente) {
  const resultados = []
  for (const test of tests) {
    try {
      if (test.tipo === 'codigo') {
        const prohibidoEncontrado = (test.prohibido || []).find((patron) => new RegExp(patron).test(codigoFuente))
        const requeridoFaltante = (test.requerido || []).find((patron) => !new RegExp(patron).test(codigoFuente))
        const paso = !prohibidoEncontrado && !requeridoFaltante
        const detalle = prohibidoEncontrado
          ? `encontré el patrón prohibido: ${prohibidoEncontrado}`
          : requeridoFaltante
            ? `falta el patrón requerido: ${requeridoFaltante}`
            : 'cumple las reglas de código'
        resultados.push({ nombre: test.nombre, paso, esperado: test.explicacion || 'cumplir las reglas', obtenido: detalle })
      } else if (test.tipo === 'output') {
        const obtenido = ejecucion.logs.map((l) => l.texto)
        const esperado = test.esperado || []
        resultados.push({ nombre: test.nombre, paso: igualar(obtenido, esperado), esperado: JSON.stringify(esperado), obtenido: JSON.stringify(obtenido) })
      } else if (test.tipo === 'valor') {
        const evaluado = evaluarExpresion(test.expr, contexto)
        if (evaluado.error) {
          resultados.push({ nombre: test.nombre, paso: false, esperado: JSON.stringify(test.esperado), obtenido: 'ERROR: ' + evaluado.error })
        } else {
          resultados.push({ nombre: test.nombre, paso: igualar(evaluado.valor, test.esperado), esperado: JSON.stringify(test.esperado), obtenido: JSON.stringify(evaluado.valor) })
        }
      } else if (test.tipo === 'dom') {
        const resultado = vm.runInContext('(function () { ' + test.verificador + ' })()', contexto)
        resultados.push({
          nombre: test.nombre,
          paso: !!resultado.paso,
          esperado: resultado.esperado === undefined ? 'sin error' : JSON.stringify(resultado.esperado),
          obtenido: resultado.obtenido === undefined ? 'sin error' : JSON.stringify(resultado.obtenido)
        })
      } else {
        resultados.push({ nombre: test.nombre, paso: false, esperado: 'tipo válido', obtenido: 'tipo desconocido: ' + test.tipo })
      }
    } catch (e) {
      resultados.push({ nombre: test.nombre, paso: false, esperado: 'sin error', obtenido: 'Error en test: ' + e.message })
    }
  }
  return resultados
}

export function validarEstructuraModulo(modulo) {
  const ids = new Set()
  const numeros = new Set()
  if (!modulo.id || !modulo.titulo || !modulo.lecciones?.length) {
    errores.push(`[ESTRUCTURA] El módulo "${modulo.id || 'sin id'}" no tiene id, título o lecciones`)
  }
  for (const leccion of modulo.lecciones) {
    if (ids.has(leccion.id)) errores.push(`[ESTRUCTURA] ID duplicado: ${leccion.id}`)
    ids.add(leccion.id)
    if (numeros.has(leccion.numero)) errores.push(`[ESTRUCTURA] Número duplicado: ${leccion.numero}`)
    numeros.add(leccion.numero)
    const faltantes = ['titulo', 'palabrasClave', 'secciones', 'ejercicios'].filter((campo) => !leccion[campo])
    if (faltantes.length) errores.push(`[ESTRUCTURA] ${leccion.id}: faltan campos ${faltantes.join(', ')}`)
    if (leccion.ejercicios.length < 1 || leccion.ejercicios.length > 4) {
      errores.push(`[ESTRUCTURA] ${leccion.id}: tiene ${leccion.ejercicios.length} ejercicios (esperado 1-4)`)
    }
    leccion.ejercicios.forEach((ej, i) => {
      if (!ej.solucion) errores.push(`[ESTRUCTURA] ${leccion.id} ej${i + 1}: falta solucion`)
      if (!ej.tests?.length) errores.push(`[ESTRUCTURA] ${leccion.id} ej${i + 1}: falta tests`)
      for (const test of ej.tests || []) {
        if (!['output', 'valor', 'dom', 'codigo'].includes(test.tipo)) {
          errores.push(`[ESTRUCTURA] ${leccion.id} ej${i + 1}: test con tipo inválido "${test.tipo}"`)
        }
      }
    })
  }
}

export async function correrEjercicio(leccion, ej, indice) {
  const etiqueta = `${leccion.id} ej${indice + 1}`
  const transpilado = transpilarCodigo(ej.solucion, leccion.lenguaje)
  if (transpilado.error) {
    errores.push(`[FALLA] ${etiqueta}: ${transpilado.error}`)
    return false
  }
  const base = crearContexto()
  const ejecucion = await ejecutarCodigo(transpilado.codigo, base, leccion.htmlBase)
  if (ejecucion.error) {
    errores.push(`[FALLA] ${etiqueta}: error al ejecutar la solución: ${ejecucion.error}`)
    return false
  }
  const resultados = correrTests(ej.tests, ejecucion, base.contexto, ej.solucion)
  const todosPasan = resultados.every((r) => r.paso)
  if (!todosPasan) {
    errores.push(`[FALLA] ${etiqueta}: "${ej.titulo}"`)
    for (const r of resultados) {
      if (!r.paso) errores.push(`   → ${r.nombre}: esperado ${r.esperado} / obtenido ${r.obtenido}`)
    }
  }
  return todosPasan
}