const IFRAME_ID = 'sandbox'
const TIEMPO_MAXIMO_MS = 10000

const HTML_SANDBOX = `<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script>
(function () {
  var _logs = []
  var _error = null

  function formatear(valor) {
    if (typeof valor === 'string') return valor
    if (typeof valor === 'undefined') return 'undefined'
    if (typeof valor === 'function') return valor.toString()
    if (typeof valor === 'bigint') return valor.toString() + 'n'
    if (valor === null) return 'null'
    try {
      if (typeof valor === 'object') return JSON.stringify(valor)
      return String(valor)
    } catch (e) { return String(valor) }
  }

  ;['log', 'warn', 'error', 'info'].forEach(function (nivel) {
    var original = console[nivel]
    console[nivel] = function () {
      var texto = Array.prototype.map.call(arguments, formatear).join(' ')
      _logs.push({ nivel: nivel, texto: texto })
      try { original.apply(console, arguments) } catch (e) { /* sin consola real */ }
    }
  })

  window.addEventListener('error', function (evento) {
    _error = (evento.message || 'Error') + (evento.lineno ? ' (línea ' + evento.lineno + ')' : '')
  })

  window.addEventListener('unhandledrejection', function (evento) {
    _error = 'Promesa rechazada sin capturar: ' + formatear(evento.reason)
  })

  function crearAlmacenSimulado() {
    var datos = {}
    return {
      getItem: function (clave) { return Object.prototype.hasOwnProperty.call(datos, clave) ? datos[clave] : null },
      setItem: function (clave, valor) { datos[clave] = String(valor) },
      removeItem: function (clave) { delete datos[clave] },
      clear: function () { datos = {} },
      key: function (indice) { return Object.keys(datos)[indice] ?? null },
      get length() { return Object.keys(datos).length }
    }
  }

  try {
    Object.defineProperty(window, 'localStorage', { value: crearAlmacenSimulado(), configurable: true, writable: true })
    Object.defineProperty(window, 'sessionStorage', { value: crearAlmacenSimulado(), configurable: true, writable: true })
  } catch (e) { /* sin almacenamiento: se ignora */ }

  function igualar(a, b) {
    if (typeof a !== typeof b) return false
    if (a === null || b === null) return a === b
    if (typeof a === 'object') return JSON.stringify(a) === JSON.stringify(b)
    if (typeof a === 'number' && isNaN(a) && isNaN(b)) return true
    return a === b
  }

  function ejecutarTests(tests) {
    var resultados = []
    ;(tests || []).forEach(function (test) {
      try {
        var entrada = {}
        if (test.tipo === 'output') {
          var obtenido = _logs.map(function (l) { return l.texto })
          var esperado = test.esperado || []
          entrada = { paso: igualar(obtenido, esperado), esperado: JSON.stringify(esperado), obtenido: JSON.stringify(obtenido) }
        } else if (test.tipo === 'valor') {
          var valorObtenido = (0, eval)(test.expr)
          entrada = { paso: igualar(valorObtenido, test.esperado), esperado: JSON.stringify(test.esperado), obtenido: JSON.stringify(valorObtenido) }
        } else if (test.tipo === 'dom') {
          var resultadoDom = (0, eval)('(function () { ' + test.verificador + ' })()')
          entrada = {
            paso: !!resultadoDom.paso,
            esperado: resultadoDom.esperado === undefined ? 'sin error' : JSON.stringify(resultadoDom.esperado),
            obtenido: resultadoDom.obtenido === undefined ? 'sin error' : JSON.stringify(resultadoDom.obtenido)
          }
        }
        resultados.push({ nombre: test.nombre, paso: entrada.paso, esperado: entrada.esperado, obtenido: entrada.obtenido, mensaje: test.mensaje || '' })
      } catch (e) {
        resultados.push({ nombre: test.nombre, paso: false, esperado: 'sin error', obtenido: 'Error al evaluar el test: ' + formatear(e), mensaje: test.mensaje || '' })
      }
    })
    return resultados
  }

  window.addEventListener('message', function (evento) {
    var datos = evento.data || {}
    if (datos.tipo === 'pedido') {
      var _logsRun = []
      var _errorRun = null
      _logs = []
      _error = null
      try {
        if (datos.htmlBase) document.body.innerHTML = datos.htmlBase
        var script = document.createElement('script')
        script.textContent = datos.codigo
        document.body.appendChild(script)
      } catch (e) {
        _error = formatear(e)
      }
      _logsRun = _logs.slice()
      _errorRun = _error
      var respuesta = { tipo: 'resultado', id: datos.id, logs: _logsRun, error: _errorRun }
      setTimeout(function () {
        if (!_errorRun) respuesta.resultados = ejecutarTests(datos.tests)
        parent.postMessage(respuesta, '*')
      }, 80)
    }
  })

  parent.postMessage({ tipo: 'listo', id: null }, '*')
})();
<\/script>
</body>
</html>`

let idContador = 0
const pendientes = new Map()
let iframe = null

function obtenerIframe() {
  if (iframe) return iframe
  iframe = document.getElementById(IFRAME_ID)
  return iframe
}

function reiniciarSandbox() {
  const el = obtenerIframe()
  el.srcdoc = HTML_SANDBOX
  return new Promise((resolver) => {
    const manejarListo = (evento) => {
      if (evento.source !== el.contentWindow) return
      if (evento.data && evento.data.tipo === 'listo') {
        window.removeEventListener('message', manejarListo)
        resolver()
      }
    }
    window.addEventListener('message', manejarListo)
  })
}

export function transpilarTypeScript(codigo) {
  const tsGlobal = window.ts
  if (!tsGlobal || typeof tsGlobal.transpileModule !== 'function') {
    return { error: 'El compilador de TypeScript no está disponible (vendor/typescript.js no cargó).' }
  }
  const resultado = tsGlobal.transpileModule(codigo, {
    compilerOptions: {
      target: tsGlobal.ScriptTarget.ES2020,
      module: tsGlobal.ModuleKind.ES2020,
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

export function ejecutar({ codigo, lenguaje = 'javascript', tests = [], htmlBase = '' }) {
  let codigoFinal = codigo
  if (lenguaje === 'typescript') {
    const transpilado = transpilarTypeScript(codigo)
    if (transpilado.error) {
      return Promise.resolve({ logs: [], error: transpilado.error, resultados: [] })
    }
    codigoFinal = transpilado.codigo
  }

  const id = 'run-' + ++idContador
  const el = obtenerIframe()
  const testsSandbox = (tests || []).filter((test) => test.tipo !== 'codigo')

  return reiniciarSandbox().then(() => {
    return new Promise((resolver) => {
      const temporizador = setTimeout(() => {
        window.removeEventListener('message', manejarResultado)
        pendientes.delete(id)
        resolver({ logs: [], error: 'El código tardó demasiado (posible bucle infinito). Revisa las condiciones de tus bucles.', resultados: [] })
      }, TIEMPO_MAXIMO_MS)

      const manejarResultado = (evento) => {
        if (evento.source !== el.contentWindow) return
        const datos = evento.data
        if (!datos || datos.tipo !== 'resultado' || datos.id !== id) return
        clearTimeout(temporizador)
        window.removeEventListener('message', manejarResultado)
        pendientes.delete(id)
        const resultadosCodigo = correrTestsDeCodigo(tests, codigo)
        resolver({ logs: datos.logs || [], error: datos.error || null, resultados: [...(datos.resultados || []), ...resultadosCodigo] })
      }

      window.addEventListener('message', manejarResultado)
      pendientes.set(id, { resolver, temporizador })
      el.contentWindow.postMessage({ tipo: 'pedido', id, codigo: codigoFinal, tests: testsSandbox, htmlBase }, '*')
    })
  })
}

function correrTestsDeCodigo(tests, codigoFuente) {
  const resultados = []
  for (const test of tests || []) {
    if (test.tipo !== 'codigo') continue
    const prohibidoEncontrado = (test.prohibido || []).find((patron) => new RegExp(patron).test(codigoFuente))
    const requeridoFaltante = (test.requerido || []).find((patron) => !new RegExp(patron).test(codigoFuente))
    const paso = !prohibidoEncontrado && !requeridoFaltante
    const detalle = prohibidoEncontrado
      ? `encontré el patrón prohibido: ${prohibidoEncontrado}`
      : requeridoFaltante
        ? `falta el patrón requerido: ${requeridoFaltante}`
        : 'cumple las reglas de código'
    resultados.push({ nombre: test.nombre, paso, esperado: test.explicacion || 'cumplir las reglas', obtenido: detalle, mensaje: test.mensaje || '' })
  }
  return resultados
}