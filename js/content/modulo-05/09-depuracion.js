export default {
  id: 'm5-l55',
  numero: 55,
  titulo: 'Depuración: cazar bugs con método',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Bug', definicion: 'Un error en el código: el programa hace algo que no debía. Los bugs no se evitan por completo, se encuentran rápido.' },
    { termino: 'Depurar (debug)', definicion: 'El proceso de encontrar y corregir el origen de un bug, con método y no a los golpes.' },
    { termino: 'Stack trace', definicion: 'La lista de llamadas que el error muestra al explotar: dice exactamente en qué línea y a través de qué funciones llegaste ahí.' },
    { termino: 'Punto de quiebre (breakpoint)', definicion: 'Una marca que pausa el programa en una línea para inspeccionar los valores en ese momento.' },
    { termino: 'Log dirigido', definicion: 'console.log estratégico que imprime los valores justo donde sospechas el problema, y que luego se borra.' },
    { termino: 'Reproducción mínima', definicion: 'Aislar el problema en el caso más pequeño que lo hace fallar: menos variables, menos distracciones.' }
  ],
  secciones: [
    {
      titulo: 'El método del detective',
      parrafos: [
        'Depurar no es probar cambios al azar hasta que funcione: es seguir la pista del error. Los pasos: 1) lee el mensaje de error y el stack trace (dice la línea), 2) reproduce el caso mínimo, 3) agrega logs estratégicos o un breakpoint en esa línea, 4) observa los valores y encuentra dónde se desvía la realidad del esperado, 5) corrige y verifica.',
        'El error no miente: dice la línea y el tipo de problema. La mayoría de los bugs se resuelven solo leyendo el stack trace completo.'
      ],
      codigo: 'function calcularTotal(precios) {\n  let total = 0;\n  for (const precio of precios) {\n    total += precio; // ¿precio es un número?\n  }\n  return total;\n}\n// El error dice la línea: aquí algo no es un número\nconsole.log(calcularTotal([100, "200", 300]));',
      salida: '100200300'
    },
    {
      titulo: 'Tipos de error que verás',
      tabla: {
        columnas: ['Error', 'Qué significa', 'Pista de solución'],
        filas: [
          ['ReferenceError', 'Usaste una variable que no existe', '¿La declaraste? ¿Está en el scope correcto?'],
          ['TypeError: X is not a function', 'Llamaste como función algo que no lo es', 'Revisa qué contiene X en esa línea'],
          ['TypeError: cannot read properties of null', 'Accediste a un null o undefined', '¿El elemento existe? ¿La variable se inicializó?'],
          ['RangeError', 'Número fuera de rango (ej: recursión infinita)', 'Revisa las condiciones de corte'],
          ['SyntaxError', 'El código ni siquiera se pudo leer', 'Falta un ) o { en la línea indicada']
        ]
      }
    },
    {
      titulo: 'Errores comunes al depurar',
      lista: [
        'Ignorar el stack trace y cambiar líneas "a ver qué pasa": nunca sabes si arreglaste la causa o el síntoma.',
        'Agregar logs en todos lados a la vez: la cantidad de datos tapa el dato que importa.',
        'No reproducir el caso mínimo: un error con 100 productos y formularios es imposible de leer; haz el caso de 2.',
        'Arreglar el síntoma (ej: el texto salía feo) sin entender la causa (ej: un tipo de dato equivocado).',
        'Olvidar borrar los logs de depuración: quedan como ruido en el código final.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Lee el mensaje de error completo y el stack trace antes de tocar nada.',
        'Depura con logs DIRIGIDOS: imprime las variables justo antes de la línea sospechosa.',
        'Reduce: reproduce el fallo con el caso mínimo que puedas.',
        'Divide y vencerás: si una función grande falla, prueba sus partes por separado.',
        'Después de corregir, ejecuta de nuevo el caso que fallaba: el bug quedó confirmado solo si ya no falla.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Seguir la pista del stack trace',
      codigo: 'function obtenerStock(producto) {\n  return producto.stock; // si producto es null, explota aquí\n}\nconst pan = null;\nobtenerStock(pan);',
      salida: '',
      error: 'Cannot read properties of null (reading \'stock\')',
      explicacion: 'El mensaje dice exactamente qué pasó: producto era null y quisiste leer stock. La solución: verificar que producto exista antes de acceder, o corregir quién pasó null.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Encontrar el tipo equivocado',
      dificultad: 'Media',
      consigna: [
        'La función calcularTotal de la base está MAL: mezcla un string en el array y el resultado es una concatenación ("100200300"). Corrígela para que convierta cada precio a número con Number() antes de sumar. Imprime calcularTotal([100, "200", 300]).'
      ],
      pasos: [
        'Convierte cada precio con Number(precio) dentro del bucle.',
        'Suma los números ya convertidos.',
        'Imprime el resultado: 600.'
      ],
      codigoInicial: 'function calcularTotal(precios) {\n  let total = 0;\n  for (const precio of precios) {\n    total += precio; // bug: suma string + number\n  }\n  return total;\n}\nconsole.log(calcularTotal([100, "200", 300]));',
      pista: 'total += Number(precio);',
      tests: [
        { tipo: 'output', nombre: 'Total corregido', esperado: ['600'], mensaje: '100 + 200 + 300 = 600 (con Number, no concatenación).' },
        { tipo: 'codigo', nombre: 'Conversión a número', explicacion: 'Debe usarse Number() para convertir cada precio.', requerido: ['Number\\('], mensaje: 'Convierte cada precio a número antes de sumar.' }
      ],
      solucion: 'function calcularTotal(precios) {\n  let total = 0;\n  for (const precio of precios) {\n    total += Number(precio);\n  }\n  return total;\n}\nconsole.log(calcularTotal([100, "200", 300]));'
    },
    {
      titulo: 'Cazar el null',
      dificultad: 'Dificil',
      consigna: [
        'La función obtenerStock(producto) explota si le pasas null. Corrígela para que devuelva "Sin stock" si el producto no existe (es null o undefined) y, si existe, devuelva su stock. Imprime obtenerStock(null) y obtenerStock({ stock: 12 }).'
      ],
      pasos: [
        'Verifica si producto es null o undefined al inicio.',
        'Si no existe, devuelve "Sin stock".',
        'Si existe, devuelve producto.stock.'
      ],
      codigoInicial: 'function obtenerStock(producto) {\n  return producto.stock; // bug: producto puede ser null\n}\nconsole.log(obtenerStock(null));\nconsole.log(obtenerStock({ stock: 12 }));',
      pista: 'if (producto === null || producto === undefined) { return "Sin stock"; }',
      tests: [
        { tipo: 'output', nombre: 'Los dos casos', esperado: ['Sin stock', '12'], mensaje: 'null devuelve "Sin stock"; el objeto devuelve 12.' },
        { tipo: 'codigo', nombre: 'Verificación de null', explicacion: 'Debe verificar si producto es null/undefined.', requerido: ['null'], mensaje: 'Agrega la guarda contra null/undefined.' }
      ],
      solucion: 'function obtenerStock(producto) {\n  if (producto === null || producto === undefined) {\n    return "Sin stock";\n  }\n  return producto.stock;\n}\nconsole.log(obtenerStock(null));\nconsole.log(obtenerStock({ stock: 12 }));'
    }
  ]
}