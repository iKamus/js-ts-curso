export default {
  id: 'm4-l43',
  numero: 43,
  titulo: 'Enums y tipos literales',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'enum', definicion: 'Un catálogo de opciones con nombre: enum Talla { Chica, Mediana, Grande }.' },
    { termino: 'Miembro de enum', definicion: 'Cada opción del catálogo: Talla.Mediana es un miembro accesible por nombre.' },
    { termino: 'Enum numérico', definicion: 'El enum por defecto: cada miembro vale un número que avanza de a uno (0, 1, 2...).' },
    { termino: 'Enum de string', definicion: 'Un enum cuyos miembros son textos explícitos: Estado.Abierto = "abierto".' },
    { termino: 'Unión de literales', definicion: 'La alternativa moderna sin enum: type Estado = "abierto" | "cerrado".' },
    { termino: 'Catálogo cerrado', definicion: 'Un conjunto fijo de opciones que el compilador verifica: no existen opciones inventadas.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un enum?',
      parrafos: [
        'Un enum es un catálogo de opciones con nombre: declares las opciones una vez y las usas por su nombre en todo el código. Es la lista de tallas de la tienda: Chica, Mediana, Grande, y nada más.',
        'Los nombres claros reemplazan a los números mágicos: escribir Estado.Abierto dice mucho más que 0 o 1, y si alguien escribe una opción que no existe, el compilador lo rechaza.'
      ],
      codigo: 'enum Talla {\n  Chica,\n  Mediana,\n  Grande\n}\n\nconsole.log(Talla.Chica);\nconsole.log(Talla.Mediana);\nconsole.log(Talla.Grande);',
      salida: '0\n1\n2'
    },
    {
      titulo: 'Enums numéricos',
      parrafos: [
        'Por defecto, los miembros de un enum valen números consecutivos desde 0: Chica es 0, Mediana es 1, Grande es 2. Puedes forzar un punto de partida o asignar valores a mano.',
        'Los números internos son un detalle de implementación: en el código se usa siempre el nombre. El valor numérico puede terminar guardado en una base de datos o en una respuesta de API, por eso conviene que sea estable.'
      ],
      codigo: 'enum Prioridad {\n  Baja = 1,\n  Media = 2,\n  Alta = 3\n}\n\nconsole.log(Prioridad.Alta);\nconsole.log(Prioridad[2]);',
      salida: '3\nMedia'
    },
    {
      titulo: 'Enums de string',
      parrafos: [
        'Si el valor importa (por ejemplo, porque viaja a una API o se guarda en un archivo), usa enums de string: cada miembro declara su texto explícitamente.',
        'El resultado es autocontenido: Estado.Cerrado vale "cerrado", un valor que cualquier sistema entiende sin necesidad de traducir números.'
      ],
      codigo: 'enum Estado {\n  Abierto = "abierto",\n  Cerrado = "cerrado",\n  Mantenimiento = "mantenimiento"\n}\n\nconsole.log(Estado.Cerrado);',
      salida: 'cerrado'
    },
    {
      titulo: 'La alternativa: uniones de literales',
      parrafos: [
        'Muchos equipos prefieren reemplazar los enums por uniones de literales: type Estado = "abierto" | "cerrado". Mismo catálogo cerrado, pero sin código extra en el runtime: los enums generan código JavaScript al compilar, las uniones no.',
        'Con una unión, TypeScript verifica cada valor literal y el editor te autocompleta las opciones. Es la opción moderna y la más liviana.'
      ],
      codigo: 'type Estado = "abierto" | "cerrado";\n\nfunction cartel(estado: Estado): string {\n  if (estado === "abierto") {\n    return "La tienda está abierta";\n  }\n  return "La tienda está cerrada";\n}\n\nconsole.log(cartel("abierto"));',
      salida: 'La tienda está abierta'
    },
    {
      titulo: '¿Cuándo usar cada uno?',
      parrafos: [
        'La regla práctica de la tienda:'
      ],
      tabla: {
        columnas: ['Situación', 'enum', 'Unión de literales'],
        filas: [
          ['Necesitas iterar todas las opciones', 'Sí: Object.values(Estado)', 'Tienes que declarar un array aparte'],
          ['El valor viaja a una API o base de datos', 'Sí: puedes fijar valores string estables', 'También: los literales son los valores'],
          ['Quieres el código JS más liviano', 'No: el enum genera código al compilar', 'Sí: se borra por completo'],
          ['Equipo moderno y simple', 'Menos común hoy', 'Es la tendencia actual'],
          ['Código heredado con enums', 'Sí: respeta el estilo existente', 'Migrar puede esperar']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar el número del enum en vez del nombre: Talla[1] o 1 funcionan, pero Talla.Mediana es claro y resiste cambios de numeración.',
        'Creer que el enum es un objeto normal: tiene reglas propias (no puedes agregar miembros en runtime).',
        'Confundir enum numérico y de string: Estado.Abierto = "abierto" no es lo mismo que un enum numérico con valor 0.',
        'Mezclar estilos en un equipo: elige enum o unión y sé constante, no los alternes sin motivo.',
        'Usar const enum sin saberlo: a veces rompe con herramientas modernas. Para este curso, enum simple es suficiente.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa nombres en singular y PascalCase para los enums: enum Talla, no enum tallas.',
        'Si el valor viaja fuera del programa (API, base de datos), usa enum de string con valores estables.',
        'Para catálogos internos simples, prefiere la unión de literales: menos código en runtime.',
        'Nunca guardes el índice numérico de un enum en tu base de datos: un cambio de orden lo rompe todo.',
        'Trata el enum como un contrato: agregar una opción debería hacerte revisar dónde se maneja.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El estado de la puerta con enum',
      codigo: 'enum Estado {\n  Abierto = "abierto",\n  Cerrado = "cerrado"\n}\n\nfunction cartel(estado: Estado): string {\n  if (estado === Estado.Abierto) {\n    return "Bienvenidos";\n  }\n  return "Volvemos en un rato";\n}\n\nconsole.log(cartel(Estado.Abierto));',
      salida: 'Bienvenidos',
      explicacion: 'El enum da nombre al estado y la función compara contra miembros del enum, no contra textos sueltos. Si el valor de Abierto cambiara, todo el código lo seguiría sin tocar.'
    },
    {
      titulo: 'La misma idea con literales',
      codigo: 'type Estado = "abierto" | "cerrado";\n\nfunction cartel(estado: Estado): string {\n  return estado === "abierto" ? "Bienvenidos" : "Volvemos en un rato";\n}\n\nconsole.log(cartel("abierto"));',
      salida: 'Bienvenidos',
      explicacion: 'El resultado es el mismo, pero sin código extra al compilar: la unión de literales se borra por completo y el JavaScript final es más liviano.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Un enum numérico',
      dificultad: 'Fácil',
      consigna: [
        'Declara un enum Talla con los miembros Chica, Mediana y Grande (sin valores asignados: serán 0, 1 y 2). Imprime Talla.Mediana.'
      ],
      pasos: [
        'Escribe enum Talla { Chica, Mediana, Grande }.',
        'Accede al miembro con Talla.Mediana.',
        'Imprime el valor.'
      ],
      codigoInicial: '// Declara el enum Talla e imprime Mediana\n',
      pista: 'enum Talla { Chica, Mediana, Grande }',
      tests: [
        { tipo: 'output', nombre: 'El valor de Mediana', esperado: ['1'], mensaje: 'Sin valores asignados, Mediana vale 1 (los índices arrancan en 0).' },
        { tipo: 'codigo', nombre: 'Enum declarado', explicacion: 'Declarar enum Talla', requerido: ['enum\\s+Talla'], mensaje: 'Debes declarar un enum llamado Talla.' }
      ],
      solucion: 'enum Talla {\n  Chica,\n  Mediana,\n  Grande\n}\n\nconsole.log(Talla.Mediana);'
    },
    {
      titulo: 'Un enum de string',
      dificultad: 'Media',
      consigna: [
        'Declara un enum Estado con los miembros Abierto = "abierto" y Cerrado = "cerrado". Imprime Estado.Cerrado.'
      ],
      pasos: [
        'Asigna los valores string a cada miembro.',
        'Accede con Estado.Cerrado.',
        'Imprime el valor.'
      ],
      codigoInicial: '// Declara el enum Estado de string e imprime Cerrado\n',
      pista: 'enum Estado { Abierto = "abierto", Cerrado = "cerrado" }',
      tests: [
        { tipo: 'output', nombre: 'El valor de Cerrado', esperado: ['cerrado'], mensaje: 'Estado.Cerrado debe valer el string "cerrado".' },
        { tipo: 'codigo', nombre: 'Enum declarado', explicacion: 'Declarar enum Estado', requerido: ['enum\\s+Estado'], mensaje: 'Debes declarar un enum llamado Estado.' }
      ],
      solucion: 'enum Estado {\n  Abierto = "abierto",\n  Cerrado = "cerrado"\n}\n\nconsole.log(Estado.Cerrado);'
    },
    {
      titulo: 'La unión de literales',
      dificultad: 'Media',
      consigna: [
        'Declara un type alias Estado = "abierto" | "cerrado". Implementa una función mensaje(estado: Estado): string que devuelva "La tienda está abierta" si el estado es "abierto" y "La tienda está cerrada" en caso contrario. Imprime el resultado con "abierto".'
      ],
      pasos: [
        'Declara el type alias con la unión de literales.',
        'Anota el parámetro con : Estado.',
        'Compara contra "abierto" e imprime el resultado.'
      ],
      codigoInicial: '// Declara el alias Estado y la función mensaje\n',
      pista: 'if (estado === "abierto") { return "La tienda está abierta"; }',
      tests: [
        { tipo: 'output', nombre: 'El mensaje', esperado: ['La tienda está abierta'], mensaje: 'Con "abierto" el mensaje es "La tienda está abierta".' },
        { tipo: 'codigo', nombre: 'Unión de literales', explicacion: 'Usar el operador | en el type alias', requerido: ['\\|'], mensaje: 'El type alias debe usar la unión con |.' }
      ],
      solucion: 'type Estado = "abierto" | "cerrado";\n\nfunction mensaje(estado: Estado): string {\n  if (estado === "abierto") {\n    return "La tienda está abierta";\n  }\n  return "La tienda está cerrada";\n}\n\nconsole.log(mensaje("abierto"));'
    }
  ]
}