export default {
  id: 'm4-l45',
  numero: 45,
  titulo: 'tsconfig y el modo strict',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'tsconfig.json', definicion: 'El archivo de configuración de TypeScript: la receta con la que se compila todo el proyecto.' },
    { termino: 'strict', definicion: 'El interruptor maestro que activa todas las verificaciones estrictas de tipos.' },
    { termino: 'noImplicitAny', definicion: 'La regla que prohíbe los any implícitos: un parámetro sin tipo es un error, no una excusa.' },
    { termino: 'strictNullChecks', definicion: 'La regla que trata a null y undefined como tipos reales: no puedes pasarlos por alto.' },
    { termino: 'target', definicion: 'La versión de JavaScript a la que se compila: ES2020, ES2022, etc.' },
    { termino: 'module', definicion: 'El sistema de módulos de la salida: ES2020 (import/export), CommonJS, etc.' },
    { termino: 'outDir', definicion: 'La carpeta donde se escriben los archivos .js compilados.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es tsconfig.json?',
      parrafos: [
        'tsconfig.json es la receta de compilación del proyecto: un archivo JSON que le dice a tsc qué archivos compilar, a qué versión de JavaScript, y qué tan estrictas son las verificaciones. Sin él, cada compilación sería una improvisación.',
        'En este curso el sandbox usa una receta fija (target ES2020, module ES2020, strict: true), la misma que verás abajo. En un proyecto real, tú escribes esa receta.'
      ],
      codigo: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ES2020",\n    "outDir": "dist",\n    "strict": true\n  },\n  "include": ["src"]\n}',
      salida: '// El archivo de configuración; no produce salida en consola'
    },
    {
      titulo: 'Las flags principales',
      parrafos: [
        'Las opciones más usadas de compilerOptions, en una tabla para tenerlas a mano:'
      ],
      tabla: {
        columnas: ['Flag', 'Qué hace', 'Ejemplo'],
        filas: [
          ['target', 'Versión de JavaScript de salida', '"target": "ES2020"'],
          ['module', 'Sistema de módulos de salida', '"module": "ES2020"'],
          ['outDir', 'Carpeta de los archivos compilados', '"outDir": "dist"'],
          ['strict', 'Activa todas las verificaciones estrictas', '"strict": true'],
          ['include', 'Qué archivos o carpetas compilar', '"include": ["src"]'],
          ['noEmit', 'Solo verificar tipos, sin generar archivos', '"noEmit": true']
        ]
      }
    },
    {
      titulo: 'strict: el interruptor maestro',
      parrafos: [
        'strict: true enciende un paquete de reglas que hacen el código a prueba de balas: noImplicitAny, strictNullChecks y varias más. Es como contratar un inspector que revisa cada caja antes de que salga del depósito.',
        'Con strict activado, TypeScript te obliga a ser explícito: los parámetros llevan tipo, los null se declaran y las verificaciones de ausencia son obligatorias. Más trabajo al escribir, muchos menos sustos al ejecutar.'
      ],
      lista: [
        'noImplicitAny: un parámetro sin tipo deja de compilar. Escribe el tipo o declara any a propósito.',
        'strictNullChecks: null y undefined son tipos reales. Un string no puede recibir null.',
        'strictFunctionTypes: las funciones se verifican con precisión en las firmas.',
        'strictPropertyInitialization: toda propiedad de clase debe inicializarse o declararse con !.',
        'useUnknownInCatchVariables: la variable del catch es unknown, no any.'
      ]
    },
    {
      titulo: 'noImplicitAny: nada de any escondido',
      parrafos: [
        'Sin noImplicitAny, un parámetro sin anotar es cualquier cosa: TypeScript asume any en silencio y la verificación se apaga en esa función. Con la regla activa, el compilador te señala cada parámetro huérfano.',
        'El mensaje típico: "Parameter x implicitly has an any type". La solución casi siempre es anotar el tipo real; si de verdad acepta cualquier cosa, declara unknown y verifica.'
      ],
      codigo: '// Con strict, esto NO compila:\n// function duplicar(precio) {\n//   return precio * 2;\n// }\n\n// La versión correcta:\nfunction duplicar(precio: number): number {\n  return precio * 2;\n}\n\nconsole.log(duplicar(25));',
      salida: '50'
    },
    {
      titulo: 'strictNullChecks: el null ya no se esconde',
      parrafos: [
        'Con strictNullChecks, null y undefined se comportan como tipos: una variable string nunca podrá contenerlos, y una variable string | null te obliga a verificar antes de usarla.',
        'Es la regla que más bugs reales previene: la mayoría de los "Cannot read properties of undefined" de JavaScript desaparecen si el compilador te hace tratar la ausencia desde el principio.'
      ],
      codigo: 'function formatearNombre(nombre: string | null): string {\n  if (nombre === null) {\n    return "Sin nombre";\n  }\n  return nombre.toUpperCase();\n}\n\nconsole.log(formatearNombre(null));\nconsole.log(formatearNombre("ana"));',
      salida: 'Sin nombre\nANA'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar el tsconfig.json: tsc compila igual, pero con valores por defecto (y sin strict). La receta del proyecto se pierde.',
        'Desactivar strict "porque molesta": estás apagando exactamente la red de seguridad que paga el sueldo de TypeScript.',
        'Anotar cualquier cosa para callar noImplicitAny: parámetros con any a propósito son una decisión, no una salida.',
        'Creer que strictNullChecks se puede obviar: el null aparece igual en runtime, solo que sin aviso previo.',
        'Cambiar target sin pensar: target ES5 pierde las funciones modernas; target muy nuevo puede no correr en navegadores viejos.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Empieza proyectos nuevos con strict: true desde el primer día: corregir código viejo es mucho más caro que escribirlo bien.',
        'Mantén la receta simple y legible: pocas flags bien elegidas valen más que una configuración gigante.',
        'Elige target según tu público: ES2020 cubre la práctica totalidad de navegadores modernos.',
        'Usa noEmit en el editor para verificar sin ensuciar carpetas; el outDir queda para el build real.',
        'Si heredas un proyecto sin strict, actívalo por etapas: primero noImplicitAny, después strictNullChecks.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La receta completa del curso',
      codigo: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ES2020",\n    "strict": true\n  },\n  "include": ["src"]\n}',
      salida: '// La misma configuración que usa el sandbox de este curso',
      explicacion: 'Target y module en ES2020 para JavaScript moderno, y strict: true para que todas las verificaciones estén encendidas. Es una receta mínima y sólida para empezar.'
    },
    {
      titulo: 'El código que strict rechaza',
      codigo: '// Esto no compila con strict:\n// function calcular(monto) {\n//   return monto * 1.21;\n// }\n\n// Esto sí:\nfunction calcular(monto: number): number {\n  return monto * 1.21;\n}\n\nconsole.log(calcular(100));',
      salida: '121',
      explicacion: 'El parámetro sin tipo dispara noImplicitAny. Anotarlo con : number no solo calma al compilador: documenta la función y la protege de llamadas equivocadas.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Callar a noImplicitAny',
      dificultad: 'Fácil',
      consigna: [
        'Implementa una función duplicar(precio: number): number que devuelva el precio por 2. El parámetro debe estar anotado (como exige noImplicitAny). Llámala con 25 e imprime el resultado.'
      ],
      pasos: [
        'Anota el parámetro con : number.',
        'Anota el retorno con : number.',
        'Llama con 25 e imprime.'
      ],
      codigoInicial: '// Implementa duplicar con el parámetro anotado\n',
      pista: 'function duplicar(precio: number): number { return precio * 2; }',
      tests: [
        { tipo: 'output', nombre: 'El doble', esperado: ['50'], mensaje: 'duplicar(25) debe devolver 50.' },
        { tipo: 'codigo', nombre: 'Parámetro anotado', explicacion: 'Anotar el parámetro con : number', requerido: ['precio\\s*:\\s*number'], mensaje: 'El parámetro debe declarar su tipo (noImplicitAny no permite parámetros sin anotar).' }
      ],
      solucion: 'function duplicar(precio: number): number {\n  return precio * 2;\n}\n\nconsole.log(duplicar(25));'
    },
    {
      titulo: 'El null a la vista',
      dificultad: 'Media',
      consigna: [
        'Implementa una función formatearNombre(nombre: string | null): string que devuelva "Sin nombre" si nombre es null, y el nombre en mayúsculas si tiene valor. Imprime el resultado con null y con "ana".'
      ],
      pasos: [
        'Declara el parámetro con la unión string | null.',
        'Verifica con === null para la rama de ausencia.',
        'Usa toUpperCase en la otra rama y prueba las dos llamadas.'
      ],
      codigoInicial: '// Implementa formatearNombre con el null declarado\n',
      pista: 'if (nombre === null) { return "Sin nombre"; }',
      tests: [
        { tipo: 'output', nombre: 'Los dos casos', esperado: ['Sin nombre', 'ANA'], mensaje: 'Con null dice "Sin nombre" y con "ana" dice "ANA".' },
        { tipo: 'codigo', nombre: 'Unión con null', explicacion: 'Declarar el parámetro como string | null', requerido: ['nombre\\s*:\\s*string\\s*\\|\\s*null'], mensaje: 'El parámetro debe declarar la unión string | null (strictNullChecks).' }
      ],
      solucion: 'function formatearNombre(nombre: string | null): string {\n  if (nombre === null) {\n    return "Sin nombre";\n  }\n  return nombre.toUpperCase();\n}\n\nconsole.log(formatearNombre(null));\nconsole.log(formatearNombre("ana"));'
    },
    {
      titulo: 'Tu receta de compilación',
      dificultad: 'Media',
      consigna: [
        'Simula el tsconfig.json en un objeto: declara const config con las propiedades strict: true y target: "ES2020". Luego imprime config.strict y config.target, cada uno en su línea.'
      ],
      pasos: [
        'Declara el objeto con strict: true y target: "ES2020".',
        'Accede a las dos propiedades.',
        'Imprime cada una en su línea.'
      ],
      codigoInicial: '// Declara config con strict y target\n',
      pista: 'const config = { strict: true, target: "ES2020" };',
      tests: [
        { tipo: 'output', nombre: 'La receta', esperado: ['true', 'ES2020'], mensaje: 'config.strict es true y config.target es "ES2020".' },
        { tipo: 'codigo', nombre: 'strict activado', explicacion: 'Incluir strict: true en el objeto', requerido: ['strict\\s*:\\s*true'], mensaje: 'El objeto debe tener strict: true.' },
        { tipo: 'codigo', nombre: 'target definido', explicacion: 'Incluir target: "ES2020" en el objeto', requerido: ['target\\s*:\\s*"ES2020"'], mensaje: 'El objeto debe tener target: "ES2020".' }
      ],
      solucion: 'const config = {\n  strict: true,\n  target: "ES2020"\n};\n\nconsole.log(config.strict);\nconsole.log(config.target);'
    }
  ]
}