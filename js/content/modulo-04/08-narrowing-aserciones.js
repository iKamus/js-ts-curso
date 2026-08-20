export default {
  id: 'm4-l39',
  numero: 39,
  titulo: 'Type narrowing y aserciones',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Narrowing', definicion: 'Estrechar un tipo amplio (como string | number) hasta uno concreto usando verificación de código.' },
    { termino: 'typeof', definicion: 'La guardia más usada: typeof valor === "string" descarta todas las demás opciones de la unión.' },
    { termino: 'Comparación estricta', definicion: 'Estrechar con === : comparar contra null, undefined o un literal para descartar opciones.' },
    { termino: 'Aserción (as)', definicion: 'Declarar que un valor tiene un tipo concreto cuando tú sabes algo que el compilador no: valor as string.' },
    { termino: 'Non-null assertion (!)', definicion: 'Declarar que un valor nullable no es null en este punto: valor!. Solo cuando estás seguro.' },
    { termino: 'Verificación de null', definicion: 'Comprobar si un valor es null o undefined antes de usarlo, en vez de asumir que existe.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es el narrowing?',
      parrafos: [
        'Narrowing es el arte de convertir un tipo amplio en uno preciso: si una variable es string | number, en el momento en que verificas typeof, TypeScript "estrecha" el tipo dentro de esa rama y te deja usar métodos propios.',
        'Piensa en el depósito de la tienda: los paquetes llegan mezclados. Antes de guardarlos, los abres y clasificas; desde ese momento sabes exactamente con qué trabajas.'
      ],
      codigo: 'function mostrar(valor: string | number): void {\n  if (typeof valor === "string") {\n    console.log(valor.toUpperCase());\n  } else {\n    console.log(valor * 2);\n  }\n}\n\nmostrar("lata");\nmostrar(21);',
      salida: 'LATA\n42'
    },
    {
      titulo: 'typeof: la guardia clásica',
      parrafos: [
        'typeof te dice el tipo de un valor en runtime: "string", "number", "boolean", "bigint", "object", "function", "undefined". Comparándolo con el literal esperado, TypeScript estrecha la unión.',
        'La guardia funciona en ambas ramas: en el if sabes que es string, y en el else quedan las demás opciones.'
      ],
      codigo: 'function doble(valor: string | number): string {\n  if (typeof valor === "string") {\n    return `La palabra ${valor} tiene ${valor.length} letras`;\n  }\n  return `El doble de ${valor} es ${valor * 2}`;\n}\n\nconsole.log(doble("lata"));\nconsole.log(doble(5));',
      salida: 'La palabra lata tiene 4 letras\nEl doble de 5 es 10'
    },
    {
      titulo: 'Estrechar con === y verificar null',
      parrafos: [
        'No solo typeof estrecha: comparar contra null, undefined o un valor literal también. Si una variable es string | null, la rama que descarta null te deja un string puro.',
        'Verificar la ausencia es el pan de cada día en TypeScript: valores que pueden faltar (datos de formularios, respuestas de APIs, elementos del DOM) siempre piden este chequeo.'
      ],
      codigo: 'function verificar(usuario: string | null): string {\n  if (usuario === null) {\n    return "Usuario anónimo";\n  }\n  return `Hola, ${usuario}`;\n}\n\nconsole.log(verificar(null));\nconsole.log(verificar("Ana"));',
      salida: 'Usuario anónimo\nHola, Ana'
    },
    {
      titulo: 'La aserción as',
      parrafos: [
        'A veces tú sabes más que el compilador: un dato llegó como unknown, pero conoces su forma real. La aserción as lo declara: valor as string.',
        'Es una declaración, no una conversión: no transforma el valor, solo le dice al verificador "confía en mí". Si te equivocas, el error ocurre en runtime. Úsala con criterio, cuando el narrowing no alcanza.'
      ],
      codigo: 'const entrada: unknown = "lata";\nconst texto = entrada as string;\nconsole.log(texto.toUpperCase());',
      salida: 'LATA'
    },
    {
      titulo: 'La non-null assertion (!)',
      parrafos: [
        'El operador ! al final de una expresión declara "esto no es null, te lo aseguro". Es la versión corta de as para valores nullable: valor! equivale a "confía, acá hay un valor".',
        'Se usa mucho con el DOM (lección 44): document.getElementById("lista")! le dice al compilador que el elemento existe. Úsala solo cuando tengas la certeza real: un ! mentiroso se paga en runtime.'
      ],
      codigo: 'const posible: string | null = "lata";\nconst seguro: string = posible!;\nconsole.log(seguro.length);',
      salida: '4'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar as a ciegas sobre un valor que no conoces: si mentiste, el error aparece en runtime. Prefiere verificar con typeof cuando puedas.',
        'Aplicar ! sin estar seguro: si el valor es null de verdad, el programa explota al instante.',
        'Confundir as con conversión real: as string no convierte un número a texto, solo declara el tipo.',
        'Olvidar verificar null antes de usar una propiedad opcional: es el error de runtime más común en apps reales.',
        'Estrechar con == en vez de ===: con ==, null y undefined se confunden y la guardia no funciona como esperas.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Prefiere el narrowing (typeof, ===) por encima de las aserciones: es la verificación real y gratuita.',
        'Reserva as para los límites de tu código: datos que llegan de afuera y ya validaste antes.',
        'Usa ! solo para valores que garantizas (elementos que creaste tú, datos ya verificados).',
        'Verifica null lo antes posible: el resto de la función respira más fácil.',
        'Cuando una aserción se repite, encapsúlala en una función que verifique de verdad.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Narrowing sobre literales',
      codigo: 'type Estado = "abierto" | "cerrado" | "mantenimiento";\n\nfunction cartel(estado: Estado): string {\n  if (estado === "abierto") {\n    return "Tienda abierta";\n  }\n  if (estado === "cerrado") {\n    return "Tienda cerrada";\n  }\n  return "En mantenimiento";\n}\n\nconsole.log(cartel("mantenimiento"));',
      salida: 'En mantenimiento',
      explicacion: 'Cada comparación con === descarta una opción del tipo literal. Al llegar a la última rama, TypeScript ya sabe que solo puede ser "mantenimiento".'
    },
    {
      titulo: 'Aserción y verificación juntas',
      codigo: 'function longitud(entrada: unknown): number {\n  if (typeof entrada === "string") {\n    return entrada.length;\n  }\n  return 0;\n}\n\nconsole.log(longitud("pan"));\nconsole.log(longitud(42));',
      salida: '3\n0',
      explicacion: 'Aquí no hace falta as: el narrowing con typeof resuelve todo. La aserción solo se necesita cuando el compilador no puede deducir la forma por sí mismo.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Estrechar con typeof',
      dificultad: 'Fácil',
      consigna: [
        'Implementa una función mostrar(valor: string | number): void que imprima el texto en mayúsculas si es string, y el número multiplicado por 2 si es number. Llámala con "lata" y con 21.'
      ],
      pasos: [
        'Estrecha con typeof valor === "string".',
        'En la rama string, usa toUpperCase().',
        'En la rama number, multiplica por 2 y prueba ambas llamadas.'
      ],
      codigoInicial: '// Implementa mostrar con narrowing\n',
      pista: 'if (typeof valor === "string") { ... } else { ... }',
      tests: [
        { tipo: 'output', nombre: 'Las dos salidas', esperado: ['LATA', '42'], mensaje: '"lata" en mayúsculas es LATA y 21 por 2 es 42.' },
        { tipo: 'codigo', nombre: 'Guardia typeof', explicacion: 'Usar typeof valor === "string"', requerido: ['typeof\\s+valor\\s*===\\s*"string"'], mensaje: 'Debes estrechar el tipo con typeof valor === "string".' }
      ],
      solucion: 'function mostrar(valor: string | number): void {\n  if (typeof valor === "string") {\n    console.log(valor.toUpperCase());\n  } else {\n    console.log(valor * 2);\n  }\n}\n\nmostrar("lata");\nmostrar(21);'
    },
    {
      titulo: 'Verificar null',
      dificultad: 'Media',
      consigna: [
        'Implementa una función verificar(usuario: string | null): string que devuelva "Usuario anónimo" si usuario es null, y "Hola, nombre" si tiene valor. Imprime el resultado con null y con "Ana".'
      ],
      pasos: [
        'Anota el parámetro como string | null.',
        'Compara con === null para la rama de ausencia.',
        'Usa el nombre en la otra rama y prueba las dos llamadas.'
      ],
      codigoInicial: '// Implementa verificar con chequeo de null\n',
      pista: 'if (usuario === null) { return "Usuario anónimo"; }',
      tests: [
        { tipo: 'output', nombre: 'Con y sin usuario', esperado: ['Usuario anónimo', 'Hola, Ana'], mensaje: 'Con null dice "Usuario anónimo" y con "Ana" dice "Hola, Ana".' },
        { tipo: 'codigo', nombre: 'Chequeo de null', explicacion: 'Comparar contra null con ===', requerido: ['=== null'], mensaje: 'Debes verificar explícitamente si el valor es null.' }
      ],
      solucion: 'function verificar(usuario: string | null): string {\n  if (usuario === null) {\n    return "Usuario anónimo";\n  }\n  return `Hola, ${usuario}`;\n}\n\nconsole.log(verificar(null));\nconsole.log(verificar("Ana"));'
    },
    {
      titulo: 'La aserción as',
      dificultad: 'Media',
      consigna: [
        'Declara una variable entrada de tipo unknown con el valor "lata". Usa la aserción as string para obtener un string y luego imprime el texto en mayúsculas.'
      ],
      pasos: [
        'Declara const entrada: unknown = "lata".',
        'Crea una nueva variable con la aserción: entrada as string.',
        'Usa toUpperCase() sobre la variable aserida e imprime.'
      ],
      codigoInicial: '// Usa la aserción as para tratar entrada como string\n',
      pista: 'const texto = entrada as string;',
      tests: [
        { tipo: 'output', nombre: 'El texto en mayúsculas', esperado: ['LATA'], mensaje: '"lata".toUpperCase() es LATA.' },
        { tipo: 'codigo', nombre: 'Aserción usada', explicacion: 'Usar la palabra clave as con el tipo string', requerido: ['as\\s+string'], mensaje: 'Debes asertar el valor con as string.' }
      ],
      solucion: 'const entrada: unknown = "lata";\nconst texto = entrada as string;\nconsole.log(texto.toUpperCase());'
    }
  ]
}