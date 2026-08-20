export default {
  id: 'm4-l36',
  numero: 36,
  titulo: 'Tipos unión y type: |, literales y alias',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Unión de tipos', definicion: 'Un valor que puede ser uno de varios tipos, declarados con |: string | number significa "texto o número".' },
    { termino: 'Tipo literal', definicion: 'Un tipo que es un valor exacto: "lata" | "botella" solo acepta esas dos cadenas.' },
    { termino: 'type alias', definicion: 'Un nombre para un tipo compuesto: type Categoria = "lata" | "botella".' },
    { termino: 'Narrowing', definicion: 'Estrechar el tipo de una unión: verificar con typeof o === para que TypeScript sepa cuál es.' },
    { termino: 'Exhaustividad', definicion: 'Cubrir todas las opciones de una unión: si agregas un caso nuevo, el compilador te recuerda los sitios que faltan.' },
    { termino: 'type vs interface', definicion: 'Dos formas de nombrar tipos: type sirve para uniones y formas simples; interface es la tradicional para objetos reutilizables.' }
  ],
  secciones: [
    {
      titulo: 'Unión de tipos: el pasillo flexible',
      parrafos: [
        'A veces un dato puede venir en más de una forma: un código de producto que llega como texto ("L-01") o como número (42), según el proveedor. La unión de tipos declara exactamente eso con la barra |.',
        'string | number se lee "string o number". El valor puede ser cualquiera de los dos, pero TypeScript te obliga a verificar cuál es antes de usar métodos específicos de uno.'
      ],
      codigo: 'let codigo: string | number = "L-01";\nconsole.log(codigo);\ncodigo = 42;\nconsole.log(codigo);',
      salida: 'L-01\n42'
    },
    {
      titulo: 'Trabajar con uniones: narrowing',
      parrafos: [
        'Si tienes un string | number, no puedes llamar a toUpperCase ni a operaciones aritméticas a ciegas: TypeScript no sabe cuál es. La solución es estrechar el tipo (narrowing) con typeof.',
        'Dentro de cada rama, TypeScript conoce el tipo exacto: es como preguntar "¿qué llegó al mostrador?" antes de aplicar el procedimiento correcto.'
      ],
      codigo: 'function clasificar(valor: string | number): string {\n  if (typeof valor === "string") {\n    return `texto: ${valor}`;\n  }\n  return `número: ${valor * 2}`;\n}\n\nconsole.log(clasificar("L-01"));\nconsole.log(clasificar(21));',
      salida: 'texto: L-01\nnúmero: 42'
    },
    {
      titulo: 'Tipos literales: solo valores exactos',
      parrafos: [
        'Un tipo literal es una opción exacta: no "cualquier string", sino un valor puntual. "lata" | "botella" | "caja" admite únicamente esas tres cadenas y nada más.',
        'Es el catálogo cerrado de la tienda: si el proveedor manda "bidon", el compilador lo rechaza al instante. Perfecto para estados, categorías y opciones de menú.'
      ],
      codigo: 'const categoria: "lata" | "botella" | "caja" = "lata";\nconsole.log(categoria);',
      salida: 'lata'
    },
    {
      titulo: 'type alias: nombres para tipos',
      parrafos: [
        'Escribir "lata" | "botella" | "caja" en cada función es repetitivo y propenso a errores. Con type alias le das un nombre al tipo compuesto y lo reutilizas.',
        'Un alias también puede nombrar la forma de un objeto, aunque para eso la tradición es interface. La regla práctica: type para uniones y literales, interface para objetos.'
      ],
      codigo: 'type Categoria = "lata" | "botella" | "caja";\ntype ProductoMini = { nombre: string; precio: number };\n\nconst categoria: Categoria = "botella";\nconst producto: ProductoMini = { nombre: "Agua", precio: 40 };\nconsole.log(categoria, producto.nombre);',
      salida: 'botella Agua'
    },
    {
      titulo: 'type vs. interface: ¿cuál uso?',
      parrafos: [
        'Ambos nombran tipos, pero nacieron para cosas distintas. Esta tabla te ayuda a elegir:'
      ],
      tabla: {
        columnas: ['Situación', 'type', 'interface'],
        filas: [
          ['Unión de tipos (string | number)', 'Sí, es lo natural', 'No puede crear uniones'],
          ['Tipo literal ("lata" | "botella")', 'Sí, es lo natural', 'No puede crearlos'],
          ['Forma de un objeto', 'Sí, funciona', 'Sí, es la tradicional'],
          ['Extender otro tipo', 'Con & (intersección)', 'Con extends (más claro)'],
          ['Mensajes de error de TypeScript', 'A veces genéricos', 'Suele nombrar la interface']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar métodos de un solo tipo sin estrechar: valor.toUpperCase() sobre string | number no compila.',
        'Escribir | sin espacio o con un solo palo: | es correcto, || es lógico.',
        'Confundir tipo literal con valor: "lata" como tipo exige el valor exacto, no "LATA" ni "lata " con espacio.',
        'Crear uniones gigantes que se vuelven inmantenibles: si pasan de 5-6 opciones, considera enum (lección 43).',
        'Olvidar cubrir todas las ramas del narrowing: TypeScript te avisa si alguna opción queda sin tratar.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa uniones pequeñas y legibles; si el tipo crece, dale un nombre con type.',
        'Prefiere tipos literales para estados: la tienda solo entiende "abierta" o "cerrada", no cualquier texto.',
        'Haz narrowing lo antes posible en la función: después del chequeo, el código es más simple.',
        'Combina type e interface: interface para objetos, type para uniones que los referencian.',
        'Trata la unión como un contrato: agregar una opción nueva debería obligarte a revisar dónde se usa.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El código de barras flexible',
      codigo: 'function buscar(codigo: string | number): string {\n  if (typeof codigo === "number") {\n    return `Código numérico: ${codigo}`;\n  }\n  return `Código de texto: ${codigo.toUpperCase()}`;\n}\n\nconsole.log(buscar("l-01"));\nconsole.log(buscar(7));',
      salida: 'Código de texto: L-01\nCódigo numérico: 7',
      explicacion: 'La unión acepta ambas entradas y el narrowing con typeof decide el camino. Cada rama usa las operaciones propias de su tipo sin protestas del compilador.'
    },
    {
      titulo: 'El estado de la puerta',
      codigo: 'type Estado = "abierta" | "cerrada";\n\nfunction cartel(estado: Estado): string {\n  if (estado === "abierta") {\n    return "Bienvenidos, la tienda está abierta";\n  }\n  return "Volvemos en un rato";\n}\n\nconsole.log(cartel("abierta"));',
      salida: 'Bienvenidos, la tienda está abierta',
      explicacion: 'El tipo literal limita las opciones a dos. Un estado inventado como "entreabierta" sería rechazado antes de ejecutar.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Una unión con narrowing',
      dificultad: 'Fácil',
      consigna: [
        'Implementa una función clasificar(valor: string | number) que devuelva "texto: valor" si es string (con el valor tal cual) y "número: resultado" si es number (con el valor multiplicado por 2). Imprime el resultado con "L-01" y con 21.'
      ],
      pasos: [
        'Anota el parámetro como string | number.',
        'Estrecha con typeof valor === "string".',
        'Devuelve un texto distinto en cada rama y prueba las dos llamadas.'
      ],
      codigoInicial: '// Implementa clasificar con la unión string | number\n',
      pista: 'if (typeof valor === "string") { ... } else { ... }',
      tests: [
        { tipo: 'output', nombre: 'Los dos casos', esperado: ['texto: L-01', 'número: 42'], mensaje: 'Con "L-01" devuelve texto: L-01 y con 21 devuelve número: 42.' },
        { tipo: 'codigo', nombre: 'Unión declarada', explicacion: 'Anotar el parámetro como string | number', requerido: ['\\|\\s*number'], mensaje: 'El parámetro debe declarar la unión string | number.' }
      ],
      solucion: 'function clasificar(valor: string | number): string {\n  if (typeof valor === "string") {\n    return `texto: ${valor}`;\n  }\n  return `número: ${valor * 2}`;\n}\n\nconsole.log(clasificar("L-01"));\nconsole.log(clasificar(21));'
    },
    {
      titulo: 'Un alias de categorías',
      dificultad: 'Media',
      consigna: [
        'Declara un type alias Categoria con las opciones "lata", "botella" y "caja". Implementa una función ubicacion(categoria: Categoria) que devuelva "Pasillo 1" para lata, "Pasillo 2" para botella y "Pasillo 3" para caja. Imprime el resultado para "botella".'
      ],
      pasos: [
        'Escribe type Categoria = "lata" | "botella" | "caja".',
        'Anota el parámetro de la función con : Categoria.',
        'Usa if o if/else encadenados y prueba con "botella".'
      ],
      codigoInicial: '// Declara el alias Categoria y la función ubicacion\n',
      pista: 'if (categoria === "lata") { return "Pasillo 1"; }',
      tests: [
        { tipo: 'output', nombre: 'La ubicación', esperado: ['Pasillo 2'], mensaje: 'La botella está en el Pasillo 2.' },
        { tipo: 'codigo', nombre: 'Alias declarado', explicacion: 'Declarar type Categoria', requerido: ['type\\s+Categoria'], mensaje: 'Debes declarar un type alias llamado Categoria.' }
      ],
      solucion: 'type Categoria = "lata" | "botella" | "caja";\n\nfunction ubicacion(categoria: Categoria): string {\n  if (categoria === "lata") {\n    return "Pasillo 1";\n  }\n  if (categoria === "botella") {\n    return "Pasillo 2";\n  }\n  return "Pasillo 3";\n}\n\nconsole.log(ubicacion("botella"));'
    },
    {
      titulo: 'Un alias de producto',
      dificultad: 'Media',
      consigna: [
        'Declara un type alias ProductoMini con la forma { nombre: string; precio: number }. Crea un pan tipado con el alias y los valores "Pan" y 50, e imprime el objeto en JSON.'
      ],
      pasos: [
        'Escribe type ProductoMini = { nombre: string; precio: number }.',
        'Declara la variable con : ProductoMini.',
        'Imprime con JSON.stringify.'
      ],
      codigoInicial: '// Declara el alias ProductoMini y úsalo\n',
      pista: 'const pan: ProductoMini = { nombre: "Pan", precio: 50 };',
      tests: [
        { tipo: 'output', nombre: 'El producto en JSON', esperado: ['{"nombre":"Pan","precio":50}'], mensaje: 'El objeto debe tener nombre "Pan" y precio 50.' },
        { tipo: 'codigo', nombre: 'Alias de objeto', explicacion: 'Declarar type ProductoMini', requerido: ['type\\s+ProductoMini'], mensaje: 'Debes declarar un type alias llamado ProductoMini.' }
      ],
      solucion: 'type ProductoMini = {\n  nombre: string;\n  precio: number;\n};\n\nconst pan: ProductoMini = { nombre: "Pan", precio: 50 };\nconsole.log(JSON.stringify(pan));'
    }
  ]
}