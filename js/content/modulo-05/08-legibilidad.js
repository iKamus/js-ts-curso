export default {
  id: 'm5-l54',
  numero: 54,
  titulo: 'Legibilidad: funciones chicas y nombres claros',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Legibilidad', definicion: 'Qué tan fácil es leer y entender el código: un programa legible se entiende como una frase, no como un rompecabezas.' },
    { termino: 'Función chica', definicion: 'Una función que hace UNA sola cosa y cabe en la cabeza: pocas líneas, un único objetivo.' },
    { termino: 'Responsabilidad única', definicion: 'Cada función tiene un solo motivo para existir: calcular algo, o formatear algo, o imprimir algo. No las tres juntas.' },
    { termino: 'Condición nombrada', definicion: 'Sacar una condición compleja del if a una variable o función con nombre: if (esClientePremium) en vez de la expresión completa.' },
    { termino: 'Nivel de abstracción', definicion: 'El grado de detalle: una función de alto nivel dice "qué", las chicas de bajo nivel dicen "cómo".' }
  ],
  secciones: [
    {
      titulo: 'El código se lee, no se descifra',
      parrafos: [
        'Un código legible se lee de corrido: la función principal dice "preparar pedido: calcular total, aplicar descuento, imprimir ticket" y cada paso es una llamada a una función chica con nombre. Un código ilegible mezcla todo en 40 líneas donde cada cambio rompe algo.',
        'La prueba del lector: si un compañero (o tú en un mes) entiende la función en 10 segundos, es legible.'
      ],
      codigo: 'function procesarPedido(items) {\n  const total = calcularTotal(items);\n  const conDescuento = aplicarDescuento(total);\n  imprimirTicket(conDescuento);\n}\nprocesarPedido([{ nombre: "pan", precio: 350 }]);',
      salida: 'Total: $350'
    },
    {
      titulo: 'Señales de código ilegible',
      lista: [
        'Funciones de 30+ líneas que "hacen de todo".',
        'if con condiciones gigantes en el borde del carácter.',
        'Nombres de una letra o genéricos (x, d, temp).',
        'Comentarios explicando lo que un buen nombre ya diría.',
        'Misma lógica copiada en varios lugares.'
      ]
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Una función que calcula, formatea e imprime: si algo falla, no sabes dónde.',
        'Condiciones enormes: if (a > 0 && a < 10 && b !== "" && ...) — extrae la condición a una variable con nombre.',
        'Nombres vagos para funciones que hacen mucho: procesar() no dice nada.',
        'Anidar tres niveles de if dentro de for dentro de if: reestructura con funciones y returns tempranos.',
        'Creer que "código corto" es sinónimo de legible: a veces más líneas con nombres claros se leen mejor.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Una función = una responsabilidad: o calcula, o formatea, o imprime.',
        'Funciones chicas (5-15 líneas) con nombre que diga qué hacen.',
        'Extrae condiciones a variables o funciones con nombre.',
        'Empieza cada función con su objetivo claro y usa returns tempranos para los casos especiales.',
        'Refactoriza con pequeños pasos: extraer, nombrar, verificar, repetir.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Antes y después',
      codigo: '// Antes: todo mezclado\nfunction p(items) {\n  let t = 0;\n  for (const i of items) { t += i.precio; }\n  if (t > 1000) { t = t - t * 0.1; }\n  console.log("Total: $" + t);\n}\np([{ precio: 400 }, { precio: 800 }]);\n\n// Después: funciones chicas con nombres\nfunction calcularTotal(items) {\n  let total = 0;\n  for (const item of items) { total += item.precio; }\n  return total;\n}\nfunction aplicarDescuento(total) {\n  return total > 1000 ? total - total * 0.1 : total;\n}\nfunction imprimirTicket(total) {\n  console.log(`Total: $${total}`);\n}\nimprimirTicket(aplicarDescuento(calcularTotal([{ precio: 400 }, { precio: 800 }])));',
      salida: 'Total: $1080\nTotal: $1080',
      explicacion: 'Ambos imprimen lo mismo, pero la segunda versión se lee como una lista de pasos. Si el descuento cambia, solo tocas aplicarDescuento.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Una función, una responsabilidad',
      dificultad: 'Media',
      consigna: [
        'El código base tiene una función que calcula y formatea e imprime todo junto. Divídela en tres funciones chicas: calcularTotal(items), formatearTotal(total) que devuelva `Total: $X`, y la impresión en la llamada. Imprime formatearTotal(calcularTotal([{precio: 350}, {precio: 650}])).'
      ],
      pasos: [
        'calcularTotal suma los precios y devuelve el número.',
        'formatearTotal devuelve el string con el formato.',
        'El console.log va en la llamada.'
      ],
      codigoInicial: '// function procesar(items) { let t = 0; ... console.log("Total: $" + t); }\n// Divídela en calcularTotal + formatearTotal\n',
      pista: 'const total = calcularTotal(items); return `Total: $${total}`;',
      tests: [
        { tipo: 'output', nombre: 'El total formateado', esperado: ['Total: $1000'], mensaje: '350 + 650 = 1000.' },
        { tipo: 'codigo', nombre: 'Funciones chicas', explicacion: 'Deben existir calcularTotal y formatearTotal.', requerido: ['calcularTotal', 'formatearTotal'], mensaje: 'Crea las dos funciones con una responsabilidad cada una.' },
        { tipo: 'codigo', nombre: 'La impresión afuera', explicacion: 'formatearTotal debe devolver el texto, no imprimirlo.', prohibido: ['formatearTotal[^\\n]*\\{[^\\n]*console\\.log'], mensaje: 'formatearTotal devuelve el string; el console.log va en la llamada.' }
      ],
      solucion: 'function calcularTotal(items) {\n  let total = 0;\n  for (const item of items) {\n    total += item.precio;\n  }\n  return total;\n}\nfunction formatearTotal(total) {\n  return `Total: $${total}`;\n}\nconst resultado = calcularTotal([{ precio: 350 }, { precio: 650 }]);\nconsole.log(formatearTotal(resultado));'
    },
    {
      titulo: 'Nombrar la condición',
      dificultad: 'Dificil',
      consigna: [
        'El código base tiene una condición larga dentro del if. Extrae la condición a una variable booleana con nombre (esEnvioGratis) y reescríbelo. Debe imprimir "Envío gratis" cuando total >= 5000 y "Cobra envío" si no. Prueba con total 6000.'
      ],
      pasos: [
        'Declara const esEnvioGratis = total >= 5000;',
        'Usa esa variable en el if.',
        'Mantén las dos salidas posibles.'
      ],
      codigoInicial: 'const total = 6000;\nif (total >= 5000) {\n  console.log("Envío gratis");\n} else {\n  console.log("Cobra envío");\n}',
      pista: 'const esEnvioGratis = total >= 5000; if (esEnvioGratis) { ... }',
      tests: [
        { tipo: 'output', nombre: 'Resultado', esperado: ['Envío gratis'], mensaje: '6000 supera 5000, así que el envío es gratis.' },
        { tipo: 'codigo', nombre: 'Condición nombrada', explicacion: 'La condición debe estar en una variable con nombre.', requerido: ['esEnvioGratis'], mensaje: 'Extrae la condición a una variable booleana con nombre.' }
      ],
      solucion: 'const total = 6000;\nconst esEnvioGratis = total >= 5000;\nif (esEnvioGratis) {\n  console.log("Envío gratis");\n} else {\n  console.log("Cobra envío");\n}'
    }
  ]
}