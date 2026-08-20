export default {
  id: 'm2-l24',
  numero: 24,
  titulo: 'Encadenar métodos: pipelines de datos',
  nivel: 'Dificil',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Pipeline', definicion: 'Una cadena de transformaciones donde el resultado de una pasa a la siguiente: filtrar, mapear y reducir en serie.' },
    { termino: 'Encadenar', definicion: 'Llamar un método sobre el resultado del anterior: datos.filter(...).map(...).reduce(...).' },
    { termino: 'Orden de operaciones', definicion: 'La secuencia importa: filtrar primero reduce el trabajo de los pasos siguientes.' },
    { termino: 'Inmutabilidad', definicion: 'Cada paso devuelve un array nuevo; la cadena no toca el array original en ningún momento.' },
    { termino: 'Etapa', definicion: 'Cada método de la cadena es una etapa: seleccionar, transformar, acumular, formatear.' },
    { termino: 'Legibilidad', definicion: 'Una cadena bien escrita se lee como una oración: "de estos, quedate con los baratos, subiles el IVA y sumalos".' },
    { termino: 'Terminal', definicion: 'El último método de la cadena, que produce el valor final: reduce, join o un console.log.' }
  ],
  secciones: [
    {
      titulo: 'De varias líneas a una cadena',
      parrafos: [
        'Cuando necesitas filtrar y después transformar y después acumular, en vez de guardar cada resultado en una variable puedes encadenar: cada método devuelve un valor (array o texto) y el siguiente método se aplica sobre ese valor.',
        'La analogía es la línea de producción de la panadería: los productos pasan por la criba (filter), después por la máquina de etiquetas (map) y al final caen en la caja registradora (reduce).'
      ],
      codigo: 'const precios = [120, 500, 80, 300];\nconst total = precios\n  .filter((p) => p >= 100)\n  .map((p) => p * 1.21)\n  .reduce((ac, p) => ac + p, 0);\nconsole.log(total);',
      salida: '1113.2'
    },
    {
      titulo: 'El orden de las etapas importa',
      parrafos: [
        'Cada etapa recibe el resultado de la anterior, así que la secuencia cambia el resultado. Regla práctica: FILTRA PRIMERO. Reducir la cantidad de elementos antes de transformarlos hace el trabajo más chico y el código más claro.',
        'Filtrar al final obligaría a transformar (y quizá a calcular IVA) de elementos que después vas a descartar. Primero decide qué queda, después transforma.'
      ],
      codigo: 'const numeros = [12, 7, 22];\nconst resultado = numeros\n  .map((n) => n + 8)\n  .filter((n) => n % 2 === 0);\nconsole.log(resultado);',
      salida: '[20,30]'
    },
    {
      titulo: 'Formatos de salida: join y template',
      parrafos: [
        'La cadena no tiene que terminar en un número: puede terminar en un texto formateado. join convierte el array final en una línea legible, y las funciones flecha en línea mantienen la cadena compacta.'
      ],
      codigo: 'const numeros = [3, 1, 4, 1, 5];\nconst resultado = numeros\n  .filter((n) => n % 2 === 1)\n  .map((n) => n * 10)\n  .join("-");\nconsole.log(resultado);',
      salida: '30-10-10-50'
    },
    {
      titulo: 'La cadena típica, etapa por etapa',
      tabla: {
        columnas: ['Etapa', 'Método', 'Entrada', 'Salida'],
        filas: [
          ['Seleccionar', 'filter', 'Array original', 'Array con los que cumplen'],
          ['Transformar', 'map', 'Array filtrado', 'Array transformado'],
          ['Acumular', 'reduce', 'Array transformado', 'Un solo valor'],
          ['Formatear', 'join', 'Array final', 'Texto legible']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Encadenar sobre undefined: si un paso devuelve undefined (por ejemplo, forEach en vez de map), el siguiente método no existe y revienta. Cada etapa debe devolver algo útil.',
        'Olvidar el return en un map o filter de la cadena: la cadena se llena de undefined.',
        'Poner el punto y coma en el medio: precios.filter(...); .map(...) parte la cadena y el map queda huérfano.',
        'Encadenar demasiado: más de tres o cuatro etapas se vuelven ilegibles. Separa en variables con nombres si se complica.',
        'No respetar el orden: transformar antes de filtrar hace trabajo innecesario y puede cambiar el resultado esperado.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Filtra primero: cada etapa trabaja sobre menos datos.',
        'Una etapa por línea: la cadena se lee como una oración vertical.',
        'Elige un final claro: reduce para un número, join para un texto, o console.log para inspeccionar.',
        'Si la cadena supera las cuatro etapas, separa en dos variables con nombres descriptivos.',
        'Nombra bien los parámetros de cada callback: la cadena se documenta sola.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El ticket de las compras baratas',
      codigo: 'const precios = [1500, 300, 8900, 450];\nconst mensaje = precios\n  .filter((p) => p < 1000)\n  .map((p) => `$${p}`)\n  .join(" - ");\nconsole.log(mensaje);',
      salida: '$300 - $450',
      explicacion: 'filter deja pasar los menores a 1000, map los convierte en texto con el símbolo de moneda y join arma una sola línea.'
    },
    {
      titulo: 'El total del pedido completo',
      codigo: 'const productos = [\n  { nombre: "pan", precio: 350, cantidad: 2 },\n  { nombre: "leche", precio: 500, cantidad: 1 },\n  { nombre: "té", precio: 250, cantidad: 3 }\n];\nconst total = productos\n  .filter((p) => p.cantidad > 0)\n  .map((p) => p.precio * p.cantidad)\n  .reduce((ac, subtotal) => ac + subtotal, 0);\nconsole.log(`Total: $${total}`);',
      salida: 'Total: $1950',
      explicacion: 'La cadena filtra (todos tienen cantidad), calcula el subtotal de cada línea con map y reduce los suma: 700 + 500 + 750 = 1950.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Filtrar y aplicar descuento',
      dificultad: 'Media',
      consigna: [
        'Declara const precios = [50, 200, 150, 300]. Encadena filter para quedarte con los mayores o iguales a 100, y después map para aplicarles un 10% de descuento (p * 0.9). Guarda el resultado en una constante e imprime el array.'
      ],
      pasos: [
        'Declara el array de precios.',
        'Filtra con p >= 100.',
        'Mapea con p * 0.9.',
        'Guarda el resultado e imprime.'
      ],
      codigoInicial: '// Declara precios, filtra, aplica descuento e imprime\n',
      pista: 'precios.filter((p) => p >= 100).map((p) => p * 0.9): 200 y 150 quedan con descuento.',
      tests: [
        { tipo: 'output', nombre: 'Precios con descuento', esperado: ['[180,135,270]'], mensaje: '200 * 0.9 = 180, 150 * 0.9 = 135, 300 * 0.9 = 270. El 50 se descarta.' }
      ],
      solucion: 'const precios = [50, 200, 150, 300];\nconst conDescuento = precios.filter((p) => p >= 100).map((p) => p * 0.9);\nconsole.log(conDescuento);'
    },
    {
      titulo: 'Transformar y después filtrar',
      dificultad: 'Media',
      consigna: [
        'Declara const numeros = [12, 7, 22]. Encadena map para sumarle 8 a cada número y después filter para quedarte con los pares (n % 2 === 0). Guarda el resultado e imprime el array.'
      ],
      pasos: [
        'Declara el array de números.',
        'Aplica map con n + 8.',
        'Aplica filter con n % 2 === 0.',
        'Guarda el resultado e imprime.'
      ],
      codigoInicial: '// Declara numeros, transforma, filtra e imprime\n',
      pista: 'Después del map quedan [20, 15, 30]; los pares son 20 y 30.',
      tests: [
        { tipo: 'output', nombre: 'Pares transformados', esperado: ['[20,30]'], mensaje: '12+8=20, 7+8=15, 22+8=30. Los pares son 20 y 30.' }
      ],
      solucion: 'const numeros = [12, 7, 22];\nconst resultado = numeros.map((n) => n + 8).filter((n) => n % 2 === 0);\nconsole.log(resultado);'
    },
    {
      titulo: 'El total con IVA de lo que importa',
      dificultad: 'Dificil',
      consigna: [
        'Declara const precios = [120, 500, 80, 300]. Encadena las tres etapas: filter (p >= 100), map (p * 1.21) y reduce para sumar todo. Guarda el total en una constante e imprime el total.'
      ],
      pasos: [
        'Declara el array de precios.',
        'Filtra los mayores o iguales a 100.',
        'Aplica el IVA con map.',
        'Suma con reduce (acumulador inicial 0).',
        'Guarda el total e imprime.'
      ],
      codigoInicial: '// Declara precios y encadena filter, map y reduce\n',
      pista: 'Quedan 120, 500 y 300. Con IVA: 145.2 + 605 + 363 = 1113.2.',
      tests: [
        { tipo: 'output', nombre: 'El total con IVA', esperado: ['1113.2'], mensaje: '120*1.21 + 500*1.21 + 300*1.21 = 145.2 + 605 + 363 = 1113.2.' },
        { tipo: 'valor', nombre: 'total existe', expr: 'typeof total', esperado: 'number', mensaje: 'Guarda el resultado de la cadena en una variable llamada total.' }
      ],
      solucion: 'const precios = [120, 500, 80, 300];\nconst total = precios\n  .filter((p) => p >= 100)\n  .map((p) => p * 1.21)\n  .reduce((ac, p) => ac + p, 0);\nconsole.log(total);'
    },
    {
      titulo: 'La cadena que termina en texto',
      dificultad: 'Dificil',
      consigna: [
        'Declara const numeros = [3, 1, 4, 1, 5]. Encadena filter (n % 2 === 1), map (n * 10) y join("-") para armar un texto. Guarda el resultado en una constante e imprime el texto.'
      ],
      pasos: [
        'Declara el array de números.',
        'Filtra los impares con n % 2 === 1.',
        'Multiplica por 10 con map.',
        'Une con join("-").',
        'Guarda el resultado e imprime.'
      ],
      codigoInicial: '// Declara numeros y encadena filter, map y join\n',
      pista: 'Impares: 3, 1, 1, 5. ×10: 30, 10, 10, 50. Unido: "30-10-10-50".',
      tests: [
        { tipo: 'output', nombre: 'El texto final', esperado: ['30-10-10-50'], mensaje: 'La cadena debe terminar en el texto con guiones: 30-10-10-50.' }
      ],
      solucion: 'const numeros = [3, 1, 4, 1, 5];\nconst resultado = numeros\n  .filter((n) => n % 2 === 1)\n  .map((n) => n * 10)\n  .join("-");\nconsole.log(resultado);'
    }
  ]
}
