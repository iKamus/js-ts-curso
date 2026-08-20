export default {
  id: 'm4-l33',
  numero: 33,
  titulo: 'Tipos primitivos: string, number, boolean, null, undefined y bigint',
  nivel: 'Fácil',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'string', definicion: 'El tipo del texto: cualquier valor entre comillas, como "lata" o "leche".' },
    { termino: 'number', definicion: 'El tipo de los números: enteros y decimales, como 25 o 3.14.' },
    { termino: 'boolean', definicion: 'El tipo de los valores lógicos: true o false.' },
    { termino: 'null', definicion: 'La ausencia intencional de valor: la estantería existe pero está vacía a propósito.' },
    { termino: 'undefined', definicion: 'Un valor que todavía no fue asignado: la caja sin etiqueta y sin contenido.' },
    { termino: 'bigint', definicion: 'El tipo de los enteros gigantes, con la letra n al final: 9007199254740993n.' },
    { termino: 'Inferencia de tipos', definicion: 'La capacidad de TypeScript de deducir el tipo por sí solo cuando no lo anotas.' }
  ],
  secciones: [
    {
      titulo: 'Los primitivos de siempre',
      parrafos: [
        'Los tipos primitivos son los materiales básicos con los que construyes todo: como las estanterías de la tienda, cada una tiene una etiqueta que dice qué puede contener. string para texto, number para números, boolean para verdadero o falso, null y undefined para la ausencia, y bigint para números enormes.',
        'La sintaxis es la misma para todos: nombre: tipo. Una vez anotada, TypeScript vigila que nunca le metas un valor de otra clase.'
      ],
      codigo: 'const nombre: string = "Tienda";\nconst stock: number = 42;\nconst abierta: boolean = true;\nconsole.log(nombre, stock, abierta);',
      salida: 'Tienda 42 true'
    },
    {
      titulo: 'string, number y boolean',
      parrafos: [
        'string es todo lo que va entre comillas: nombres, direcciones, mensajes. number cubre enteros y decimales: 25, 3.14, -7. boolean solo tiene dos valores posibles: true y false, ideal para preguntas de sí o no (¿hay stock?, ¿está abierta?).',
        'Con los tipos anotados, operaciones ilegales dejan de ser un misterio: restar un string de un number es un error visible antes de ejecutar.'
      ],
      codigo: 'const producto: string = "lata";\nconst precio: number = 25.5;\nconst enOferta: boolean = false;\nconsole.log(producto, precio, enOferta);',
      salida: 'lata 25.5 false'
    },
    {
      titulo: 'null y undefined: la ausencia',
      parrafos: [
        'null representa la ausencia intencional: un producto que se agotó y quedó sin precio. undefined representa un valor que nunca fue asignado: la caja que abriste y está vacía porque nadie la llenó.',
        'Con el modo strict activado (strictNullChecks), TypeScript te impide asignar null o undefined a una variable que declara otro tipo. Si algo puede ser null, debes declararlo así: string | null.'
      ],
      codigo: 'const sinStock: null = null;\nlet pendiente: undefined = undefined;\nconsole.log(sinStock, pendiente);',
      salida: 'null undefined'
    },
    {
      titulo: 'bigint: enteros gigantes',
      parrafos: [
        'bigint sirve para enteros tan grandes que number ya no los representa bien (más allá de 9007199254740991). Se escribe con la letra n al final: 10n, 1000000n. Solo se combina con otros bigint.',
        'Al mostrarlo en la consola de este curso, verás la n al final para que sepas que es bigint y no number.'
      ],
      codigo: 'const grande: bigint = 10n;\nconst total = grande + 5n;\nconsole.log(total);\nconsole.log(typeof total);',
      salida: '15n\nbigint'
    },
    {
      titulo: 'Inferencia de tipos',
      parrafos: [
        'No hace falta anotarlo todo: TypeScript infiere el tipo mirando el valor. Si escribes const stock = 42, sabe que es number. Si escribes const nombre = "lata", sabe que es string. La anotación manual es para cuando la inferencia no alcanza (parámetros, retornos, valores que aún no existen).',
        'El tipo inferido de una const es el más estrecho posible (42 es number). El de una let puede cambiar de valor pero nunca de tipo: si empieza como number, siempre será number.'
      ],
      codigo: 'const stock = 42;\nconst nombre = "lata";\nconsole.log(typeof stock);\nconsole.log(typeof nombre);',
      salida: 'number\nstring'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Sumar string y number a propósito: "5" + 2 da "52". Si necesitas el número, convierte antes con Number().',
        'Asignar null a una variable string: con strict, TypeScript lo marca como error. Declara string | null si puede faltar.',
        'Olvidar la n en bigint: 10 es number, 10n es bigint, y no se mezclan.',
        'Creer que typeof null da "null": en JavaScript devuelve "object". Es una rareza histórica.',
        'Anotar en exceso lo que ya se infiere: const x: number = 42 es ruido; const x = 42 alcanza.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Anota los parámetros de funciones y los valores que llegan de afuera (lo que no puedes controlar).',
        'Deja que la inferencia trabaje en const con inicialización inmediata.',
        'Sé explícito con la ausencia: si un valor puede ser null, decláralo en el tipo en lugar de esconderlo.',
        'Usa bigint solo cuando los números realmente lo pidan (IDs enormes, cálculos astronómicos); para el resto, number.',
        'Mira el tipo inferido de tus variables en el editor: es tu mejor mapa del código.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La etiqueta de la estantería',
      codigo: 'const producto: string = "lata de tomate";\nconst unidades: number = 24;\nconst enCaja: boolean = true;\nconsole.log(producto);\nconsole.log(unidades);\nconsole.log(enCaja);',
      salida: 'lata de tomate\n24\ntrue',
      explicacion: 'Tres primitivos anotados y mostrados por separado. Cada tipo ocupa su estantería: texto, número y lógica.'
    },
    {
      titulo: 'Inferencia vs. anotación',
      codigo: 'const cajaFuerte = "llave"; // infiere string\nlet visitas = 0;           // infiere number\nvisitas = visitas + 1;\nconsole.log(cajaFuerte, visitas);',
      salida: 'llave 1',
      explicacion: 'Ninguna variable anota su tipo: TypeScript lo deduce del valor inicial. Aun así, visitas sigue siendo number y jamás podrá guardar un texto.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Tres primitivos anotados',
      dificultad: 'Fácil',
      consigna: [
        'Declara tres variables con anotación explícita: producto de tipo string con "lata", cantidad de tipo number con 42 y enOferta de tipo boolean con true. Imprímelas juntas.'
      ],
      pasos: [
        'Declara cada variable con const y su tipo con los dos puntos.',
        'Asigna los valores "lata", 42 y true.',
        'Imprime las tres en una sola línea.'
      ],
      codigoInicial: '// Declara producto, cantidad y enOferta con sus tipos\n',
      pista: 'const producto: string = "lata";',
      tests: [
        { tipo: 'output', nombre: 'Los tres valores', esperado: ['lata 42 true'], mensaje: 'Debes imprimir "lata 42 true" en ese orden.' },
        { tipo: 'codigo', nombre: 'Tipos explícitos', explicacion: 'Usar : string, : number y : boolean', requerido: [':\\s*string', ':\\s*number', ':\\s*boolean'], mensaje: 'Cada variable debe anotar su tipo.' }
      ],
      solucion: 'const producto: string = "lata";\nconst cantidad: number = 42;\nconst enOferta: boolean = true;\nconsole.log(producto, cantidad, enOferta);'
    },
    {
      titulo: 'La caja grande: bigint',
      dificultad: 'Media',
      consigna: [
        'Declara grande de tipo bigint con el valor 100n. Súmale 105n y guarda el resultado en otra variable. Imprime el resultado y su tipo con typeof.'
      ],
      pasos: [
        'Anota la variable con : bigint y el valor con la n al final.',
        'Suma otro bigint (105n) y guarda en una nueva variable.',
        'Imprime la suma y luego typeof de la suma.'
      ],
      codigoInicial: '// Declara grande como bigint y súmale 105n\n',
      pista: 'const total = grande + 105n;',
      tests: [
        { tipo: 'output', nombre: 'Suma bigint', esperado: ['205n', 'bigint'], mensaje: '100n + 105n es 205n y typeof debe decir bigint (con n en la consola).' },
        { tipo: 'codigo', nombre: 'Tipo bigint usado', explicacion: 'Declarar la variable con : bigint', requerido: ['bigint'], mensaje: 'Debes anotar el tipo bigint en la declaración.' }
      ],
      solucion: 'const grande: bigint = 100n;\nconst total = grande + 105n;\nconsole.log(total);\nconsole.log(typeof total);'
    },
    {
      titulo: 'Deja que TypeScript infiera',
      dificultad: 'Media',
      consigna: [
        'Declara tres variables SIN anotación de tipo: stock con 12, nombre con "lata" y activo con true. Imprime el tipo de cada una con typeof para comprobar que TypeScript infirió bien.'
      ],
      pasos: [
        'Declara cada variable solo con const y su valor, sin los dos puntos.',
        'Usa typeof stock, typeof nombre y typeof activo.',
        'Imprime los tres tipos, uno por línea.'
      ],
      codigoInicial: '// Declara stock, nombre y activo sin anotar\n',
      pista: 'const stock = 12; y así sucesivamente.',
      tests: [
        { tipo: 'output', nombre: 'Tipos inferidos', esperado: ['number', 'string', 'boolean'], mensaje: 'Los tipos inferidos son number, string y boolean.' },
        { tipo: 'codigo', nombre: 'Sin anotaciones', explicacion: 'No usar anotaciones de tipo en las declaraciones', prohibido: [':\\s*(string|number|boolean)'], mensaje: 'Este ejercicio es sobre inferencia: no anotes los tipos a mano.' }
      ],
      solucion: 'const stock = 12;\nconst nombre = "lata";\nconst activo = true;\nconsole.log(typeof stock);\nconsole.log(typeof nombre);\nconsole.log(typeof activo);'
    }
  ]
}