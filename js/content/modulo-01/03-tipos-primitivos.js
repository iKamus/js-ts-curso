export default {
  id: 'm1-l03',
  numero: 3,
  titulo: 'Tipos de datos primitivos',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Tipo de dato', definicion: 'La clase de valor que guarda una variable: texto, número, verdadero/falso, etc. Determina qué puedes hacer con él.' },
    { termino: 'Primitivo', definicion: 'Un valor simple y atómico que no tiene propiedades ni métodos propios (string, number, boolean, etc.).' },
    { termino: 'String', definicion: 'Una cadena de texto, entre comillas simples, dobles o backticks.' },
    { termino: 'Number', definicion: 'Un valor numérico: enteros y decimales, positivos y negativos.' },
    { termino: 'Boolean', definicion: 'Solo dos valores posibles: true (verdadero) o false (falso).' },
    { termino: 'null', definicion: 'El valor que indica "nada intencionalmente", la ausencia deliberada de un objeto.' },
    { termino: 'undefined', definicion: 'El valor que tiene una variable declarada pero a la que nunca se le asignó un valor.' },
    { termino: 'Symbol', definicion: 'Un identificador único e inmutable, usado como clave especial de objetos.' },
    { termino: 'BigInt', definicion: 'Números enteros arbitrariamente grandes, se escriben con una n al final (123n).' },
    { termino: 'typeof', definicion: 'Operador que devuelve el nombre del tipo de un valor: typeof 5 devuelve "number".' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un tipo de dato?',
      parrafos: [
        'Cada valor que guardas en una variable pertenece a un tipo. Piensa en un ropero ordenado: la ropa va en un cajón, los zapatos en otro y los libros en la estantería. JavaScript hace algo parecido: sabe si un valor es texto, número, verdadero/falso, etc., y según el tipo le permite ciertas operaciones y no otras.',
        'Los tipos primitivos son los ladrillos básicos: son valores simples, inmutables y sin métodos propios. Son siete: string, number, boolean, null, undefined, symbol y bigint. (Los objetos y arrays, que no son primitivos, los verás en las lecciones 10 y 11.)'
      ]
    },
    {
      titulo: 'El operador typeof',
      parrafos: [
        'Para saber de qué tipo es un valor, usa typeof. Es una herramienta de diagnóstico constante cuando programas: ante la duda, pregúntale a JavaScript qué tipo tienes enfrente.'
      ],
      codigo: 'console.log(typeof "hola");\nconsole.log(typeof 42);\nconsole.log(typeof true);\nconsole.log(typeof null);\nconsole.log(typeof undefined);',
      salida: 'string\nnumber\nboolean\nobject\nundefined',
      lista: [
        'Curiosidad: typeof null devuelve "object". Es un error histórico de JavaScript que se mantiene por compatibilidad y que conviene memorizar para no sorprenderse.'
      ]
    },
    {
      titulo: 'String: el texto',
      parrafos: [
        'Un string es una cadena de caracteres. Se escribe entre comillas simples (…), dobles ("…") o backticks (`…`, que sirven para los template literals de la lección 5). Da igual qué comillas uses, mientras cierres con la misma que abriste.',
        'Dentro de un string puedes incluir caracteres especiales con la barra invertida: \\n (salto de línea), \\t (tabulación) o \\" (comilla doble literal).'
      ],
      codigo: 'console.log("Una línea");\nconsole.log("Dos\\nlíneas");\nconsole.log("Café \\"especial\\"");',
      salida: 'Una línea\nDos\nlíneas\nCafé "especial"'
    },
    {
      titulo: 'Number: los números',
      parrafos: [
        'JavaScript tiene un solo tipo para los números: number. Sirve para enteros (42), decimales (3.14), negativos (-7) y también para valores especiales como Infinity, -Infinity y NaN (Not a Number, "no es un número", que aparece cuando una operación matemática no tiene sentido, como 0/0).',
        'Un detalle importante: los decimales se escriben con punto, no con coma. 3,14 es un error de sintaxis; lo correcto es 3.14.'
      ],
      codigo: 'console.log(42);\nconsole.log(3.14);\nconsole.log(-7);\nconsole.log(0 / 0);\nconsole.log(typeof NaN);',
      salida: '42\n3.14\n-7\nNaN\nnumber'
    },
    {
      titulo: 'Boolean: verdadero o falso',
      parrafos: [
        'Los booleanos son los valores true y false. Son la base de las decisiones: cuando un programa "decide" algo, en el fondo está evaluando si una condición es verdadera o falsa. Los usarás intensamente con los operadores de comparación y las estructuras de control (lección 6).'
      ],
      codigo: 'console.log(true);\nconsole.log(false);\nconsole.log(typeof true);',
      salida: 'true\nfalse\nboolean'
    },
    {
      titulo: 'null y undefined: el vacío',
      parrafos: [
        'Tanto null como undefined representan "no hay valor", pero con matices distintos. undefined significa "la variable existe pero nunca se le asignó nada" (lo decide JavaScript automáticamente). null significa "el programador decidió, a propósito, que aquí no hay nada".',
        'Regla práctica: deja que undefined aparezca solo (es el estado por defecto) y usa null cuando TÚ quieras representar explícitamente "sin valor".'
      ],
      codigo: 'let sinDefinir;\nlet vacio = null;\nconsole.log(sinDefinir);\nconsole.log(vacio);\nconsole.log(sinDefinir === vacio);',
      salida: 'undefined\nnull\nfalse'
    },
    {
      titulo: 'Symbol y BigInt',
      parrafos: [
        'Symbol crea identificadores únicos e inmutables. Se usan como claves especiales de objetos para evitar colisiones de nombres. Es un tipo avanzado: por ahora basta con saber que existe y que cada Symbol() es distinto del resto.',
        'BigInt permite números enteros gigantescos, más grandes que el límite de number (2^53). Se escribe con una n al final: 9007199254740993n. Suma, resta y multiplicación funcionan, pero no puedes mezclar BigInt con number directamente en la misma operación.'
      ],
      codigo: 'console.log(Symbol("a") === Symbol("a"));\nconsole.log(9007199254740993n + 1n);\nconsole.log(typeof 5n);',
      salida: 'false\n9007199254740994n\nbigint'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Confundir el número 0 con el texto "0": son tipos distintos y se comportan distinto al comparar (lección 4).',
        'Escribir decimales con coma: 3,14 no es un número válido; JavaScript lo interpreta como dos valores separados por una coma.',
        'Pensar que null es lo mismo que undefined: no son iguales (null === undefined es false) y tienen significados distintos.',
        'Sumar texto con números: "5" + 3 da "53" (concatena) en lugar de 8, porque el + con strings une cadenas.',
        'Olvidar la n final en un BigInt o mezclar BigInt y number en la misma operación (da un TypeError).'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Pregunta siempre typeof ante la duda de qué tipo tienes: es la brújula del programador.',
        'Usa null para "sin valor" de forma intencional y deja undefined para los vacíos accidentales.',
        'Para dinero y cálculos exactos de la tienda, recuerda que los decimales pueden traer sorpresas (0.1 + 0.2 no es exactamente 0.3); redondea al final.',
        'Sé consistente con las comillas: elige un estilo y mantenlo en todo el archivo.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Cada primitivo con su forma',
      codigo: 'const texto = "pan";\nconst unidades = 12;\nconst hayStock = true;\nconst nada = null;\nlet sinAsignar;\nconsole.log(texto, unidades, hayStock, nada, sinAsignar);',
      salida: 'pan 12 true null undefined',
      explicacion: 'Un solo console.log con varias variables separadas por coma imprime todo en una línea. Observa cómo conviven tipos distintos sin problema: JavaScript los muestra cada uno a su manera.'
    },
    {
      titulo: 'typeof como herramienta de diagnóstico',
      codigo: 'console.log(typeof "hola");\nconsole.log(typeof 3.14);\nconsole.log(typeof false);\nconsole.log(typeof undefined);\nconsole.log(typeof 42n);',
      salida: 'string\nnumber\nboolean\nundefined\nbigint',
      explicacion: 'typeof te devuelve, como texto, el tipo de cada valor. Fíjate que los primitivos se reportan en minúsculas y que bigint se escribe igual que el tipo.'
    }
  ],
  ejercicios: [
    {
      titulo: 'El menú de tipos',
      dificultad: 'Fácil',
      consigna: ['Declara cuatro variables de tipos distintos: un texto (tu plato favorito), un número (su precio), un booleano (si está disponible o no) y un valor null (la descripción del plato, que aún no se escribió). Luego imprime el tipo de cada una con typeof.'],
      pasos: [
        'Crea una constante con texto, otra con número, otra con true o false y otra con null.',
        'Imprime typeof de cada una, una por línea.',
        'Deberías ver: string, number, boolean, object.'
      ],
      codigoInicial: '// Declara las cuatro variables\n// Luego imprime el typeof de cada una\n',
      pista: 'Recuerda que typeof null devuelve "object", aunque suene raro. El orden de las líneas de salida debe ser: string, number, boolean, object.',
      tests: [
        { tipo: 'output', nombre: 'Los cuatro tipos', esperado: ['string', 'number', 'boolean', 'object'], mensaje: 'Imprime typeof de las cuatro variables en este orden: texto, número, booleano, null.' }
      ],
      solucion: 'const plato = "milanesa";\nconst precio = 2500;\nconst disponible = true;\nconst descripcion = null;\nconsole.log(typeof plato);\nconsole.log(typeof precio);\nconsole.log(typeof disponible);\nconsole.log(typeof descripcion);'
    },
    {
      titulo: 'Números especiales',
      dificultad: 'Fácil',
      consigna: ['Imprime, en este orden: un número grande que supere el límite de number usando BigInt, el resultado de dividir 0 entre 0, y el tipo de ese resultado.'],
      pasos: [
        'Primera línea: un BigInt, por ejemplo 12345678901234567890n.',
        'Segunda línea: la operación 0 / 0.',
        'Tercera línea: el typeof de 0 / 0 (debería ser "number").'
      ],
      codigoInicial: '// Línea 1: un BigInt\n// Línea 2: 0 / 0\n// Línea 3: typeof de 0 / 0\n',
      pista: 'El BigInt se escribe con n al final: 10n. La operación 0/0 produce NaN, y el typeof de NaN es "number".',
      tests: [
        { tipo: 'output', nombre: 'BigInt, NaN y su tipo', esperado: ['12345678901234567890n', 'NaN', 'number'], mensaje: 'Debes imprimir: el BigInt tal cual (con su n), luego NaN y luego el string "number".' }
      ],
      solucion: 'console.log(12345678901234567890n);\nconsole.log(0 / 0);\nconsole.log(typeof (0 / 0));'
    },
    {
      titulo: 'Verdadero o falso',
      dificultad: 'Media',
      consigna: ['La tienda necesita saber si un cliente es mayor de edad. Declara una constante llamada esMayor con el valor true. Luego imprime dos cosas: el valor de esMayor y el resultado de la comparación esMayor === true.'],
      pasos: [
        'Declara const esMayor = true.',
        'Imprime esMayor.',
        'Imprime esMayor === true.'
      ],
      codigoInicial: '// Declara la constante y haz las dos impresiones\n',
      pista: 'La comparación con === devuelve un booleano. Como esMayor vale true, la comparación también será true.',
      tests: [
        { tipo: 'output', nombre: 'Booleano y comparación', esperado: ['true', 'true'], mensaje: 'Ambas líneas deben decir true: primero el valor y luego el resultado de compararlo con true.' },
        { tipo: 'valor', nombre: 'esMayor existe', expr: 'typeof esMayor', esperado: 'boolean', mensaje: 'esMayor debe ser una variable booleana.' }
      ],
      solucion: 'const esMayor = true;\nconsole.log(esMayor);\nconsole.log(esMayor === true);'
    }
  ]
}