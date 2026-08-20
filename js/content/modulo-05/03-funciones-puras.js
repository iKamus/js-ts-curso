export default {
  id: 'm5-l49',
  numero: 49,
  titulo: 'Funciones puras',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Función pura', definicion: 'Una función que con la MISMA entrada siempre devuelve la MISMA salida, y no toca nada de afuera (sin efectos secundarios).' },
    { termino: 'Efecto secundario', definicion: 'Algo que la función cambia fuera de sí misma: imprimir, modificar una variable externa, mutar un parámetro, escribir en localStorage.' },
    { termino: 'Determinismo', definicion: 'La propiedad de dar siempre el mismo resultado para los mismos datos: sin Math.random, sin fechas, sin estado externo.' },
    { termino: 'Testabilidad', definicion: 'La facilidad de probar una función: las puras se prueban solas, sin montar escenarios.' },
    { termino: 'Composición', definicion: 'Combinar funciones puras chicas para construir comportamientos complejos: cada pieza es predecible.' }
  ],
  secciones: [
    {
      titulo: '¿Qué hace pura a una función?',
      parrafos: [
        'Dos reglas: (1) mismos datos de entrada → mismo resultado, siempre; (2) no produce efectos afuera: no imprime, no modifica variables externas, no muta sus parámetros, no toca localStorage ni la hora actual.',
        'Piensa en una calculadora: apretas 2 + 2 y siempre da 4, y no deja manchas de tinta en la mesa. Las funciones impuras son como un vendedor que además de cobrar te cambia el inventario sin avisarte.'
      ],
      codigo: '// Pura: misma entrada, misma salida, sin efectos\nfunction calcularIva(precio) {\n  return precio * 0.21;\n}\nconsole.log(calcularIva(1000));\nconsole.log(calcularIva(1000));',
      salida: '210\n210'
    },
    {
      titulo: 'Impuras vs puras: el contraste',
      tabla: {
        columnas: ['Impura (problemática)', 'Pura (preferida)'],
        filas: [
          ['console.log dentro del cálculo', 'Devolver el valor; imprimir afuera'],
          ['let total = 0; total += x; (estado externo)', 'const total = calcularTotal(lista)'],
          ['lista.push(x) mutando el parámetro', 'return [...lista, x]'],
          ['Math.random() en el resultado', 'Recibir el dato por parámetro'],
          ['new Date() dentro', 'Recibir la fecha como parámetro']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Imprimir dentro de la función "para ver": eso es un efecto secundario; la función debe devolver y el console.log va en la llamada.',
        'Usar una variable global dentro de la función: el resultado depende de algo invisible que puede cambiar en cualquier momento.',
        'Mutar el array u objeto que llega por parámetro: cambias el mundo del llamador.',
        'Depender de Math.random() o de la fecha: imposible predecir la salida y por lo tanto imposible testear.',
        'Creer que el orden de ejecución "arregla" la impureza: hoy funciona, mañana cambias una línea y explota.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Todo dato necesario para calcular debe entrar por parámetro.',
        'Todo dato resultante debe salir por return.',
        'Los console.log, el guardado y el DOM viven FUERA de las funciones de cálculo.',
        'Estructura típica: función pura calcula → el llamador imprime/guarda/usa el valor.',
        'Las funciones puras son las más fáciles de testear: solo hay que llamarlas con entradas y comparar.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Refactor: de impura a pura',
      codigo: '// Impura: imprime y usa una variable externa\nlet descuento = 10;\nfunction precioFinal(precio) {\n  console.log("Calculando...");\n  return precio - (precio * descuento) / 100;\n}\n\n// Pura: todo entra y sale\nfunction calcularPrecioFinal(precio, descuento) {\n  return precio - (precio * descuento) / 100;\n}\nconsole.log(calcularPrecioFinal(500, 10));\nconsole.log(calcularPrecioFinal(500, 10));',
      salida: '450\n450',
      explicacion: 'La versión pura recibe el descuento por parámetro (no depende de la variable externa), no imprime nada y devuelve el mismo resultado siempre.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Convertir en pura',
      dificultad: 'Fácil',
      consigna: [
        'Escribe la función pura calcularTotal(listaPrecios) que sume los precios del array y DEVUELVA el total (sin imprimir dentro, sin variables externas). Luego imprime el resultado de la llamada con [100, 200, 300].'
      ],
      pasos: [
        'La función recibe el array por parámetro.',
        'Suma con for...of en una variable local.',
        'Devuelve el total; el console.log va en la llamada.'
      ],
      codigoInicial: '// Implementa la función pura y muéstrala\n',
      pista: 'El único console.log debe estar fuera de la función.',
      tests: [
        { tipo: 'output', nombre: 'Total', esperado: ['600'], mensaje: 'La suma de [100, 200, 300] es 600.' },
        { tipo: 'codigo', nombre: 'Sin console.log interno', explicacion: 'La función no debe imprimir (efecto secundario).', prohibido: ['function calcularTotal[^\\n]*\\{[^\\n]*console\\.log'], mensaje: 'Imprime solo en la llamada, no dentro de la función.' }
      ],
      solucion: 'function calcularTotal(listaPrecios) {\n  let acumulado = 0;\n  for (const precio of listaPrecios) {\n    acumulado += precio;\n  }\n  return acumulado;\n}\nconsole.log(calcularTotal([100, 200, 300]));'
    },
    {
      titulo: 'Sin azar: el descuento determinista',
      dificultad: 'Media',
      consigna: [
        'Implementa aplicarOferta(precio, oferta) que devuelva el precio con la oferta aplicada: si oferta es un porcentaje (menor a 1, ej: 0.2), lo resta como porcentaje; si no, lo resta como monto fijo. No uses Math.random ni variables externas. Imprime aplicarOferta(500, 0.2) y aplicarOferta(500, 80).'
      ],
      pasos: [
        'Condición: oferta < 1 ? porcentaje : monto fijo.',
        'Calcula con precio - precio * oferta (porcentaje) o precio - oferta (fijo).',
        'Devuelve el resultado y luego imprime ambas llamadas.'
      ],
      codigoInicial: '// Implementa aplicarOferta sin azar ni efectos\n',
      pista: 'if (oferta < 1) { return precio - precio * oferta; } return precio - oferta;',
      tests: [
        { tipo: 'output', nombre: 'Las dos ofertas', esperado: ['400', '420'], mensaje: '500 con 20% da 400; 500 menos 80 da 420.' },
        { tipo: 'codigo', nombre: 'Sin azar', explicacion: 'No se debe usar Math.random (rompe el determinismo).', prohibido: ['Math\\.random'], mensaje: 'El resultado debe depender solo de los parámetros.' }
      ],
      solucion: 'function aplicarOferta(precio, oferta) {\n  if (oferta < 1) {\n    return precio - precio * oferta;\n  }\n  return precio - oferta;\n}\nconsole.log(aplicarOferta(500, 0.2));\nconsole.log(aplicarOferta(500, 80));'
    },
    {
      titulo: 'Separar el cálculo de la impresión',
      dificultad: 'Dificil',
      consigna: [
        'El código base muestra una función impura que imprime el ticket. Refactoréalo: separa la función pura generarTicket(items) que DEVUELVE el array de líneas de texto, y luego imprime cada línea en la llamada. Items: [{ nombre: "pan", precio: 350 }, { nombre: "leche", precio: 500 }]. Cada línea: "nombre: $precio".'
      ],
      pasos: [
        'generarTicket recibe items y devuelve el array con map.',
        'Cada línea: `${item.nombre}: $${item.precio}`.',
        'Fuera de la función: recorrer el resultado e imprimir cada línea.'
      ],
      codigoInicial: '// function imprimirTicket(items) { for (...) { console.log(...) } }\n// Refactoréala: pura + impresión afuera\n',
      pista: 'const lineas = items.map((item) => `${item.nombre}: $${item.precio}`); return lineas;',
      tests: [
        { tipo: 'output', nombre: 'Líneas del ticket', esperado: ['pan: $350', 'leche: $500'], mensaje: 'Cada línea debe tener el formato nombre: $precio.' },
        { tipo: 'codigo', nombre: 'Sin imprimir el array', explicacion: 'generarTicket debe devolver el array de líneas, no imprimirlo con console.log(lineas).', prohibido: ['console\\.log\\(lineas\\)'], mensaje: 'generarTicket devuelve el array; la impresión por línea va en la llamada.' },
        { tipo: 'codigo', nombre: 'La función devuelve', explicacion: 'Debe existir generarTicket con return de las líneas.', requerido: ['generarTicket', 'return'], mensaje: 'Define generarTicket que devuelva las líneas.' }
      ],
      solucion: 'function generarTicket(items) {\n  return items.map((item) => `${item.nombre}: $${item.precio}`);\n}\nconst ticket = generarTicket([\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 }\n]);\nfor (const linea of ticket) {\n  console.log(linea);\n}'
    }
  ]
}