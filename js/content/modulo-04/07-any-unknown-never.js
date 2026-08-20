export default {
  id: 'm4-l38',
  numero: 38,
  titulo: 'any, unknown y never',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'any', definicion: 'El tipo que desactiva toda verificación: "cualquier cosa, sin control". Por eso se evita.' },
    { termino: 'unknown', definicion: 'El tipo de lo desconocido: puede ser cualquier cosa, pero debes verificarlo antes de usarlo.' },
    { termino: 'never', definicion: 'El tipo de lo que nunca ocurre: funciones que siempre lanzan un error o bucles sin fin.' },
    { termino: 'Verificación', definicion: 'Estrechar un unknown con typeof o === hasta conocer su tipo real antes de operar.' },
    { termino: 'Seguridad de tipos', definicion: 'La garantía de que ningún valor se usa de una forma que no soporta.' },
    { termino: 'Cast seguro', definicion: 'Convertir un tipo conocido en otro relacionado usando verificación, en vez de as a ciegas.' }
  ],
  secciones: [
    {
      titulo: 'any: el comodín que apaga las luces',
      parrafos: [
        'any acepta cualquier valor y permite cualquier operación: es JavaScript sin red de seguridad. A veces parece cómodo (¿para qué pelear con el compilador?), pero es exactamente el error que TypeScript vino a evitar.',
        'Con any, un error de tipo se convierte en un problema de runtime que aparece cuando tu cliente está por pagar. Por eso la regla de oro: no uses any a menos que no exista alternativa razonable.'
      ],
      codigo: 'let dato: any = "lata";\ndato = 42;      // permite todo\ndato.operar(); // y también permite esto: falla recién al ejecutar',
      salida: 'Error en tiempo de ejecución: dato.operar no es una función'
    },
    {
      titulo: 'unknown: lo desconocido con protocolo',
      parrafos: [
        'unknown también acepta cualquier valor, pero con una diferencia clave: no puedes usarlo hasta verificarlo. Es el paquete sin etiqueta del depósito: llega, pero nadie lo abre sin revisar qué contiene.',
        'Antes de llamar métodos o hacer cuentas, debes estrecharlo con typeof o comparaciones. Es más trabajo, pero es la diferencia entre un error silencioso y un código que se sabe qué es.'
      ],
      codigo: 'let dato: unknown = "lata";\n\nif (typeof dato === "string") {\n  console.log(dato.toUpperCase());\n} else {\n  console.log("No es texto");\n}',
      salida: 'LATA'
    },
    {
      titulo: 'never: lo que nunca sucede',
      parrafos: [
        'never es el tipo de los caminos sin retorno: funciones que siempre lanzan un error, o bucles que nunca terminan. No devuelven undefined: no devuelven nada jamás, porque el flujo muere ahí.',
        'También aparece como tipo de una rama imposible en el narrowing: si ya descartaste todas las opciones, lo que queda es never. Declararlo en funciones que lanzan errores documenta la intención.'
      ],
      codigo: 'function lanzarError(mensaje: string): never {\n  throw new Error(mensaje);\n}\n\ntry {\n  lanzarError("precio inválido");\n} catch (error) {\n  console.log(`Error: ${(error as Error).message}`);\n}',
      salida: 'Error: precio inválido'
    },
    {
      titulo: 'La comparativa',
      parrafos: [
        'La tabla de la caja registradora:'
      ],
      tabla: {
        columnas: ['Tipo', '¿Qué acepta?', '¿Puedes usarlo directo?', 'Cuándo lo usas'],
        filas: [
          ['any', 'Cualquier valor', 'Sí, sin verificación', 'Casi nunca: solo como último recurso de migración'],
          ['unknown', 'Cualquier valor', 'No: exige verificación previa', 'Datos que llegan de afuera: JSON, APIs, formularios'],
          ['never', 'Nada: ningún valor es never', 'No aplica: no hay valor', 'Funciones que lanzan errores o bucles infinitos']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar any para "que se calle el compilador": estás apagando la red de seguridad. Prefiere unknown y verifica.',
        'Declarar unknown y usarlo sin verificar: dato.length sobre un unknown no compila, y con razón.',
        'Confundir never con void: void devuelve undefined (existe un valor); never no devuelve nada nunca.',
        'Lanzar errores sin tipar el catch: con strict, la variable del catch es unknown. Usa (error as Error) para leer el mensaje.',
        'Creer que any "no existe": existe, y se propaga: una variable any contamina todo lo que toca.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Trata unknown como el tipo por defecto para datos que no controlas: APIs, JSON.parse, entradas del usuario.',
        'Verifica temprano y una sola vez: después del narrowing, guarda el valor en una variable con el tipo real.',
        'Evita any en firmas de funciones: si tu función acepta cualquier cosa, que sea unknown y verifícalo.',
        'Usa never solo donde realmente el flujo muere (throw, bucles infinitos).',
        'Cuando migres código viejo con any, ponle un TODO y reemplázalo por tipos concretos.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El paquete sin etiqueta',
      codigo: 'function procesar(entrada: unknown): string {\n  if (typeof entrada === "string") {\n    return `Texto: ${entrada}`;\n  }\n  if (typeof entrada === "number") {\n    return `Número: ${entrada * 2}`;\n  }\n  return "Tipo no soportado";\n}\n\nconsole.log(procesar("lata"));\nconsole.log(procesar(21));\nconsole.log(procesar(true));',
      salida: 'Texto: lata\nNúmero: 42\nTipo no soportado',
      explicacion: 'unknown llega como paquete cerrado y la función lo abre con typeof. Cada rama conoce su tipo y actúa en consecuencia; lo que no soporta se descarta con un mensaje.'
    },
    {
      titulo: 'never en acción',
      codigo: 'function facturar(monto: number): never {\n  throw new Error(`No se pudo facturar ${monto}`);\n}\n\nconsole.log("Antes de facturar");\n\ntry {\n  facturar(150);\n} catch (error) {\n  console.log((error as Error).message);\n}\n\nconsole.log("Después de capturar el error");',
      salida: 'Antes de facturar\nNo se pudo facturar 150\nDespués de capturar el error',
      explicacion: 'facturar declara never porque siempre lanza. El try/catch captura el error y el programa sigue con vida: la clave es no dejar que never escape sin red.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Un unknown verificado',
      dificultad: 'Fácil',
      consigna: [
        'Declara una variable dato de tipo unknown con el valor 5. Verifica con typeof si es number y, si lo es, imprime "El dato es un número: 10" (el valor multiplicado por 2). Si no es number, imprime "El dato no es un número".'
      ],
      pasos: [
        'Declara let dato: unknown = 5.',
        'Estrecha con typeof dato === "number".',
        'Imprime el mensaje con dato * 2 dentro de la rama.'
      ],
      codigoInicial: '// Declara dato como unknown y verifícalo\n',
      pista: 'if (typeof dato === "number") { ... } else { ... }',
      tests: [
        { tipo: 'output', nombre: 'El mensaje', esperado: ['El dato es un número: 10'], mensaje: 'Con dato = 5, el mensaje debe ser "El dato es un número: 10".' },
        { tipo: 'codigo', nombre: 'unknown usado', explicacion: 'Declarar la variable con : unknown', requerido: ['unknown'], mensaje: 'La variable debe declarar el tipo unknown.' },
        { tipo: 'codigo', nombre: 'Sin any', explicacion: 'No usar el tipo any', prohibido: ['any'], mensaje: 'No uses any: el ejercicio es sobre unknown con verificación.' }
      ],
      solucion: 'let dato: unknown = 5;\n\nif (typeof dato === "number") {\n  console.log(`El dato es un número: ${dato * 2}`);\n} else {\n  console.log("El dato no es un número");\n}'
    },
    {
      titulo: 'Una función never',
      dificultad: 'Media',
      consigna: [
        'Implementa una función lanzarError(mensaje: string): never que lance un Error con ese mensaje. Llámala dentro de un try/catch y, al capturar el error, imprime "Error: " seguido del mensaje del error (usa (error as Error).message).'
      ],
      pasos: [
        'Anota el retorno con : never y lanza throw new Error(mensaje).',
        'Envuelve la llamada en try/catch.',
        'En el catch, lee el mensaje con (error as Error).message.'
      ],
      codigoInicial: '// Implementa lanzarError con retorno never\n',
      pista: 'throw new Error(mensaje);',
      tests: [
        { tipo: 'output', nombre: 'El error capturado', esperado: ['Error: precio inválido'], mensaje: 'El mensaje capturado debe ser "Error: precio inválido".' },
        { tipo: 'codigo', nombre: 'Retorno never', explicacion: 'Anotar el retorno con : never', requerido: [':\\s*never'], mensaje: 'La función debe declarar el tipo de retorno never.' }
      ],
      solucion: 'function lanzarError(mensaje: string): never {\n  throw new Error(mensaje);\n}\n\ntry {\n  lanzarError("precio inválido");\n} catch (error) {\n  console.log(`Error: ${(error as Error).message}`);\n}'
    },
    {
      titulo: 'Procesar sin any',
      dificultad: 'Media',
      consigna: [
        'Implementa una función medir(valor: unknown): void que, si valor es string, imprima "La cadena mide N" (con su longitud), y si no, imprima "No es texto". Llámala con "lata".'
      ],
      pasos: [
        'Anota el parámetro con : unknown y el retorno con : void.',
        'Verifica con typeof valor === "string".',
        'Usa valor.length dentro de la rama y prueba con "lata".'
      ],
      codigoInicial: '// Implementa medir sin usar any\n',
      pista: 'if (typeof valor === "string") { console.log(`La cadena mide ${valor.length}`); }',
      tests: [
        { tipo: 'output', nombre: 'La longitud', esperado: ['La cadena mide 4'], mensaje: '"lata" tiene 4 caracteres.' },
        { tipo: 'codigo', nombre: 'Sin any', explicacion: 'No usar el tipo any en el código', prohibido: ['any'], mensaje: 'La solución no debe contener el tipo any: verifica el unknown con typeof.' }
      ],
      solucion: 'function medir(valor: unknown): void {\n  if (typeof valor === "string") {\n    console.log(`La cadena mide ${valor.length}`);\n  } else {\n    console.log("No es texto");\n  }\n}\n\nmedir("lata");'
    }
  ]
}