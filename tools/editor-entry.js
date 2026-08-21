import { EditorView, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, keymap } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { bracketMatching, indentOnInput, syntaxHighlighting, defaultHighlightStyle, foldGutter, foldKeymap, HighlightStyle } from '@codemirror/language'
import { tags as t } from '@lezer/highlight'
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search'
import { closeBrackets, closeBracketsKeymap, completionKeymap, autocompletion } from '@codemirror/autocomplete'
import { lintKeymap } from '@codemirror/lint'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const highlightStyleApp = HighlightStyle.define([
  { tag: t.comment, color: '#6a7a9e', fontStyle: 'italic' },
  { tag: [t.variableName, t.attributeName], color: '#d4d4d4' },
  { tag: [t.string, t.special(t.string)], color: '#ce9178' },
  { tag: [t.number, t.bool, t.null], color: '#b5cea8' },
  { tag: t.keyword, color: '#c586c0' },
  { tag: [t.operator, t.punctuation], color: '#d4d4d4' },
  { tag: [t.function(t.variableName), t.function(t.propertyName)], color: '#dcdcaa' },
  { tag: [t.className, t.typeName], color: '#4ec9b0' },
  { tag: [t.self, t.namespace], color: '#9cdcfe' },
  { tag: [t.propertyName, t.labelName], color: '#9cdcfe' },
  { tag: [t.escape, t.special(t.string)], color: '#d7ba7d' },
  { tag: [t.regexp], color: '#d16969' },
  { tag: [t.meta, t.processingInstruction], color: '#9b9b9b' },
  { tag: [t.invalid], color: '#f44747' },
  { tag: [t.inserted], color: '#b5cea8' },
  { tag: [t.deleted], color: '#f44747' },
])

const temaAppOscuro = EditorView.theme({
  '&': {
    backgroundColor: 'var(--codigo-fondo)',
    color: 'var(--codigo-texto)'
  },
  '.cm-content': {
    backgroundColor: 'var(--codigo-fondo)',
    color: 'var(--codigo-texto)'
  },
  '.cm-gutters': {
    backgroundColor: 'var(--fondo-suave)',
    color: 'var(--texto-suave)',
    borderRight: '1px solid var(--borde)'
  },
  '.cm-lineNumbers': {
    color: 'var(--texto-suave)'
  },
  '.cm-line': {
    color: 'var(--codigo-texto)'
  },
  '.cm-cursor': {
    color: 'var(--texto)'
  },
  '.cm-selectionBackground': {
    backgroundColor: 'var(--acento-suave)'
  },
  '.cm-activeLine': {
    backgroundColor: 'var(--fondo-suave)'
  },
  '.cm-matchingBracket': {
    color: 'var(--ok)'
  },
  '.cm-nonmatchingBracket': {
    color: 'var(--error)'
  },
  '.cm-tooltip': {
    backgroundColor: 'var(--superficie)',
    color: 'var(--texto)',
    border: '1px solid var(--borde)'
  },
  '.cm-tooltip-autocomplete': {
    '& > ul': {
      backgroundColor: 'var(--superficie)',
      color: 'var(--texto)',
      border: '1px solid var(--borde)'
    },
    '& > ul > li': {
      color: 'var(--texto)'
    },
    '& > ul > li.cm-completionMatchedText': {
      color: 'var(--acento-texto)'
    },
    '& > ul > li.cm-completionSelected': {
      backgroundColor: 'var(--acento-suave)'
    }
  },
  '.cm-diagnostic': {
    color: 'var(--error)'
  },
  '.cm-diagnostic-error': {
    color: 'var(--error)'
  },
  '.cm-diagnostic-warning': {
    color: 'var(--advertencia)'
  }
}, { dark: true })

const temaAppClaro = EditorView.theme({
  '&': {
    backgroundColor: 'var(--codigo-fondo)',
    color: 'var(--codigo-texto)'
  },
  '.cm-content': {
    backgroundColor: 'var(--codigo-fondo)',
    color: 'var(--codigo-texto)'
  },
  '.cm-gutters': {
    backgroundColor: 'var(--fondo-suave)',
    color: 'var(--texto-suave)',
    borderRight: '1px solid var(--borde)'
  },
  '.cm-lineNumbers': {
    color: 'var(--texto-suave)'
  },
  '.cm-line': {
    color: 'var(--codigo-texto)'
  },
  '.cm-cursor': {
    color: 'var(--texto)'
  },
  '.cm-selectionBackground': {
    backgroundColor: 'var(--acento-suave)'
  },
  '.cm-activeLine': {
    backgroundColor: 'var(--fondo-suave)'
  },
  '.cm-matchingBracket': {
    color: 'var(--ok)'
  },
  '.cm-nonmatchingBracket': {
    color: 'var(--error)'
  },
  '.cm-tooltip': {
    backgroundColor: 'var(--superficie)',
    color: 'var(--texto)',
    border: '1px solid var(--borde)'
  },
  '.cm-tooltip-autocomplete': {
    '& > ul': {
      backgroundColor: 'var(--superficie)',
      color: 'var(--texto)',
      border: '1px solid var(--borde)'
    },
    '& > ul > li': {
      color: 'var(--texto)'
    },
    '& > ul > li.cm-completionMatchedText': {
      color: 'var(--acento-texto)'
    },
    '& > ul > li.cm-completionSelected': {
      backgroundColor: 'var(--acento-suave)'
    }
  },
  '.cm-diagnostic': {
    color: 'var(--error)'
  },
  '.cm-diagnostic-error': {
    color: 'var(--error)'
  },
  '.cm-diagnostic-warning': {
    color: 'var(--advertencia)'
  }
}, { dark: false })

const temaCompartimento = new Compartment()

// Mapa de globales comunes con sus métodos/propiedades
const GLOBAL_COMPLETIONS = {
  console: {
    methods: [
      'log', 'error', 'warn', 'info', 'debug',
      'clear', 'table', 'group', 'groupEnd', 'groupCollapsed',
      'time', 'timeEnd', 'timeLog', 'trace', 'dir', 'dirxml',
      'assert', 'count', 'countReset', 'groupEnd'
    ],
    type: 'function'
  },
  document: {
    methods: [
      'getElementById', 'querySelector', 'querySelectorAll', 'createElement',
      'createTextNode', 'appendChild', 'removeChild', 'addEventListener',
      'removeEventListener', 'write', 'writeln', 'getElementsByTagName',
      'getElementsByClassName', 'getElementsByName', 'importNode',
      'adoptNode', 'createAttribute', 'createComment', 'createDocumentFragment'
    ],
    props: [
      'body', 'head', 'title', 'URL', 'domain', 'cookie',
      'readyState', 'referrer', 'lastModified', 'characterSet',
      'contentType', 'doctype', 'documentElement', 'documentURI',
      'location', 'forms', 'images', 'links', 'scripts', 'styleSheets'
    ],
    type: 'mixed'
  },
  window: {
    methods: [
      'alert', 'confirm', 'prompt', 'open', 'close',
      'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval',
      'requestAnimationFrame', 'cancelAnimationFrame',
      'addEventListener', 'removeEventListener', 'dispatchEvent',
      'fetch', 'scrollTo', 'scrollBy', 'scroll',
      'getComputedStyle', 'matchMedia', 'print', 'stop',
      'postMessage', 'blur', 'focus', 'resizeTo', 'moveTo'
    ],
    props: [
      'document', 'console', 'location', 'history', 'navigator',
      'screen', 'localStorage', 'sessionStorage', 'indexedDB',
      'innerWidth', 'innerHeight', 'outerWidth', 'outerHeight',
      'screenX', 'screenY', 'pageXOffset', 'pageYOffset',
      'scrollX', 'scrollY', 'devicePixelRatio', 'crypto',
      'performance', 'customElements', 'FontFace', 'FontFaceSet',
      'onload', 'onerror', 'onresize', 'onscroll'
    ],
    type: 'mixed'
  },
  Array: {
    methods: [
      'from', 'of', 'isArray',
      'push', 'pop', 'shift', 'unshift', 'splice', 'slice',
      'concat', 'join', 'indexOf', 'lastIndexOf', 'includes',
      'forEach', 'map', 'filter', 'reduce', 'reduceRight',
      'find', 'findIndex', 'findLast', 'findLastIndex',
      'some', 'every', 'flat', 'flatMap', 'sort', 'reverse',
      'fill', 'copyWithin', 'entries', 'keys', 'values',
      'at', 'with', 'toSorted', 'toReversed', 'toSpliced'
    ],
    staticMethods: [
      'from', 'of', 'isArray'
    ],
    type: 'mixed'
  },
  Promise: {
    methods: [
      'then', 'catch', 'finally',
      'resolve', 'reject', 'all', 'allSettled', 'race', 'any'
    ],
    staticMethods: [
      'resolve', 'reject', 'all', 'allSettled', 'race', 'any'
    ],
    type: 'mixed'
  },
  Math: {
    props: [
      'PI', 'E', 'LN2', 'LN10', 'LOG2E', 'LOG10E', 'SQRT1_2', 'SQRT2'
    ],
    methods: [
      'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh',
      'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'expm1',
      'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10',
      'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh',
      'sqrt', 'tan', 'tanh', 'trunc'
    ],
    type: 'mixed'
  },
  JSON: {
    methods: [
      'parse', 'stringify'
    ],
    type: 'function'
  },
  Object: {
    staticMethods: [
      'keys', 'values', 'entries', 'assign', 'create', 'defineProperty',
      'defineProperties', 'freeze', 'seal', 'getPrototypeOf', 'setPrototypeOf',
      'getOwnPropertyDescriptor', 'getOwnPropertyDescriptors',
      'getOwnPropertyNames', 'getOwnPropertySymbols', 'hasOwn',
      'is', 'isExtensible', 'isFrozen', 'isSealed', 'preventExtensions'
    ],
    type: 'function'
  },
  String: {
    staticMethods: [
      'fromCharCode', 'fromCodePoint', 'raw'
    ],
    methods: [
      'charAt', 'charCodeAt', 'codePointAt', 'concat', 'endsWith',
      'includes', 'indexOf', 'lastIndexOf', 'match', 'matchAll',
      'padEnd', 'padStart', 'repeat', 'replace', 'replaceAll',
      'search', 'slice', 'split', 'startsWith', 'substring',
      'toLowerCase', 'toUpperCase', 'trim', 'trimStart', 'trimEnd',
      'toString', 'valueOf', 'localeCompare', 'normalize'
    ],
    type: 'mixed'
  },
  Number: {
    staticMethods: [
      'isFinite', 'isInteger', 'isNaN', 'isSafeInteger', 'parseFloat',
      'parseInt'
    ],
    props: [
      'MAX_VALUE', 'MIN_VALUE', 'MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER',
      'EPSILON', 'POSITIVE_INFINITY', 'NEGATIVE_INFINITY', 'NaN'
    ],
    type: 'mixed'
  },
  Date: {
    staticMethods: [
      'now', 'parse', 'UTC'
    ],
    methods: [
      'getDate', 'getDay', 'getFullYear', 'getHours', 'getMilliseconds',
      'getMinutes', 'getMonth', 'getSeconds', 'getTime', 'getTimezoneOffset',
      'getUTCDate', 'getUTCDay', 'getUTCFullYear', 'getUTCHours',
      'getUTCMilliseconds', 'getUTCMinutes', 'getUTCMonth', 'getUTCSeconds',
      'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime',
      'setUTCDate', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliSeconds',
      'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'toDateString', 'toISOString', 'toJSON', 'toLocaleDateString',
      'toLocaleString', 'toLocaleTimeString', 'toString', 'toTimeString',
      'toUTCString', 'valueOf', 'getYear', 'setYear', 'toGMTString'
    ],
    type: 'mixed'
  },
  RegExp: {
    methods: [
      'exec', 'test', 'toString', 'compile'
    ],
    props: [
      'source', 'flags', 'global', 'ignoreCase', 'multiline',
      'sticky', 'unicode', 'lastIndex'
    ],
    type: 'mixed'
  },
  Error: {
    types: [
      'Error', 'TypeError', 'ReferenceError', 'SyntaxError',
      'RangeError', 'EvalError', 'URIError', 'AggregateError'
    ],
    type: 'class'
  }
}

const GLOBAL_NAMES = Object.keys(GLOBAL_COMPLETIONS).sort()

function completacionesGlobales(context) {
  const state = context.state
  const pos = context.pos

  const lookback = Math.min(60, pos)
  const textBefore = state.doc.sliceString(pos - lookback, pos)

  const dotMatches = [...textBefore.matchAll(/([\w$]+)\.([\w$]*)$/g)]
  if (dotMatches.length > 0) {
    const lastMatch = dotMatches[dotMatches.length - 1]
    const globalName = lastMatch[1]
    const query = (lastMatch[2] || "").toLowerCase()
    const global = GLOBAL_COMPLETIONS[globalName]

    if (global) {
      const options = []

      if (global.methods) {
        for (const m of global.methods) {
          if (m.toLowerCase().startsWith(query)) {
            const insertText = m + "()"
            const cursorOffset = m.length + 1
            options.push({
              label: m,
              type: 'function',
              info: `Método ${globalName}.${m}()`,
              apply: (view, completion, from, to) => {
                view.dispatch({
                  changes: { from, to, insert: insertText },
                  selection: { anchor: from + cursorOffset }
                })
              }
            })
          }
        }
      }

      if (global.staticMethods) {
        for (const m of global.staticMethods) {
          if (m.toLowerCase().startsWith(query)) {
            const insertText = m + "()"
            const cursorOffset = m.length + 1
            options.push({
              label: m,
              type: 'function',
              info: `Método estático ${globalName}.${m}()`,
              apply: (view, completion, from, to) => {
                view.dispatch({
                  changes: { from, to, insert: insertText },
                  selection: { anchor: from + cursorOffset }
                })
              }
            })
          }
        }
      }

      if (global.props) {
        for (const p of global.props) {
          if (p.toLowerCase().startsWith(query)) {
            options.push({ label: p, type: 'property', info: `Propiedad ${globalName}.${p}` })
          }
        }
      }

      if (global.types) {
        for (const t of global.types) {
          if (t.toLowerCase().startsWith(query)) {
            options.push({ label: t, type: 'class', info: `Tipo de error ${t}` })
          }
        }
      }

      if (options.length > 0) {
        const from = pos - (lastMatch[2] ? lastMatch[2].length : 0)
        return { from, options }
      }
    }
  }

  const word = context.matchBefore(/[\w$]*/)
  if (word && word.from !== word.to) {
    const matches = GLOBAL_NAMES
      .filter(g => g.toLowerCase().startsWith(word.text.toLowerCase()))
      .map(g => {
        const info = GLOBAL_COMPLETIONS[g]
        let tipo = 'variable'
        if (info.type === 'class') tipo = 'class'
        else if (info.type === 'function') tipo = 'function'
        else if (info.staticMethods) tipo = 'namespace'
        return { label: g, type: tipo, info: `Global ${g}` }
      })
    if (matches.length) {
      return { from: word.from, options: matches }
    }
  }

  return null
}

function extensionesLenguaje(lenguaje) {
  const jsSupport = lenguaje === 'typescript'
    ? javascript({ typescript: true, jsx: false })
    : javascript()
  const extra = jsSupport.language.data.of({ autocomplete: completacionesGlobales })
  return [jsSupport, extra]
}

function crearEditor({ padre, codigo, lenguaje = 'javascript', oscuro = false, onCambio }) {
  const estado = EditorState.create({
    doc: codigo,
    extensions: [
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      foldGutter(),
      drawSelection(),
      dropCursor(),
      EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      syntaxHighlighting(highlightStyleApp, { fallback: true }),
      bracketMatching(),
      closeBrackets(),
      rectangularSelection(),
      crosshairCursor(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([...closeBracketsKeymap, ...defaultKeymap, ...searchKeymap, ...historyKeymap, ...foldKeymap, ...completionKeymap, ...lintKeymap, indentWithTab]),
      ...extensionesLenguaje(lenguaje),
      autocompletion({ activateOnTyping: /[\w$\.]/ }),
      temaCompartimento.of(oscuro ? [temaAppOscuro] : [temaAppClaro]),
      EditorView.updateListener.of((update) => {
        if (update.docChanged && onCambio) {
          onCambio(update.state.doc.toString())
        }
      })
    ]
  })

  const vista = new EditorView({ state: estado, parent: padre })

  return {
    vista,
    obtenerCodigo() {
      return vista.state.doc.toString()
    },
    cambiarTema(nuevoOscuro) {
      vista.dispatch({ effects: temaCompartimento.reconfigure(nuevoOscuro ? [temaAppOscuro] : [temaAppClaro]) })
    }
  }
}

export { crearEditor }