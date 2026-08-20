export default {
  id: 'm1-l12',
  numero: 12,
  titulo: 'Manejo de errores: try/catch/finally',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Excepción', definicion: 'Un error que interrumpe la ejecución normal del programa y "salta" buscando un lugar donde ser manejado.' },
    { termino: 'Lanzar (throw)', definicion: 'Crear un error a propósito: throw new Error("mensaje") corta la ejecución y entrega el error al sistema.' },
    { termino: 'Capturar (catch)', definicion: 'Atrapar la excepción en el bloque catch para decidir qué hacer en lugar de que el programa se caiga.' },
    { termino: 'Stack trace', definicion: 'El rastro de llamadas que muestra dónde se originó el error y por dónde pasó antes de llegar al catch.' },
    { termino: 'finally', definicion: 'Bloque que se ejecuta SIEMPRE, haya error o no: ideal para limpiar y cerrar recursos.' },
    { termino: 'try', definicion: 'El bloque que contiene el código que puede fallar y que quieres vigilar.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es el manejo de errores?',
      parrafos: [
        'Los errores van a pasar: un producto sin precio, un archivo que no existe, una red caída. La pregunta no es si tu programa va a fallar, sino QUÉ hace cuando falla. Un programa bien escrito falla con elegancia: avisa, se recupera o cierra ordenadamente.',
        'La estructura try/catch/finally es tu red de seguridad: intentás algo riesgoso en try; si falla, el control salta a catch con el error; y finally se ejecuta pase lo que pase.'
      ],
      codigo: 'try {\n  const resultado = 10 / 0;\n  console.log("Sobrevivimos");\n} catch (error) {\n  console.log("Falló:", error.message);\n} finally {\n  console.log("Esto corre siempre");\n}',
      salida: 'Sobrevivimos\nEsto corre siempre'
    },
    {
      titulo: 'Capturar un error real',
      parrafos: [
        'En el ejemplo anterior no hubo error: JavaScript tolera dividir por cero. Probemos con algo que sí falla: leer la propiedad de null. Sin try, el programa muere; con try, el catch atrapa el error y el programa sigue.'
      ],
      codigo: 'try {\n  const usuario = null;\n  console.log(usuario.nombre);\n} catch (error) {\n  console.log("Error capturado:", error.message);\n}',
      salida: 'Error capturado: Cannot read properties of null (reading \'nombre\')'
    },
    {
      titulo: 'throw: lanzar tus propios errores',
      parrafos: [
        'A veces el problema no es que el código falle técnicamente, sino que recibe datos que NO debería aceptar (un precio negativo). Ahí usás throw para crear el error a propósito, con un mensaje claro para quien lo vea.',
        'throw corta la ejecución ahí mismo: si hay un try alrededor, el error salta a su catch; si no lo hay, el programa se detiene.'
      ],
      codigo: 'function calcular(precio, cantidad) {\n  if (precio < 0) {\n    throw new Error("El precio no puede ser negativo");\n  }\n  return precio * cantidad;\n}\ntry {\n  console.log(calcular(-5, 2));\n} catch (error) {\n  console.log("Detectado:", error.message);\n}',
      salida: 'Detectado: El precio no puede ser negativo'
    },
    {
      titulo: 'Los tipos de Error que ya existen',
      parrafos: [
        'JavaScript trae varios constructores de errores listos para usar. Cada uno comunica qué tipo de problema fue, y su mensaje ayuda a diagnosticar.'
      ],
      tabla: {
        columnas: ['Constructor', 'Cuándo aparece', 'Ejemplo típico'],
        filas: [
          ['Error', 'El error genérico, el que usas con throw', 'throw new Error("mensaje")'],
          ['TypeError', 'Operación sobre un tipo equivocado', 'null.nombre, 5().split, función no es función'],
          ['ReferenceError', 'Variable que no existe', 'console.log(variableInexistente)'],
          ['RangeError', 'Un valor fuera de rango permitido', 'new Array(-1), recursión infinita'],
          ['SyntaxError', 'El código está mal escrito', 'console.log(; — ni siquiera se ejecuta'],
          ['URIError', 'Problemas con encodeURI/decodeURI', 'decodeURIComponent("%")']
        ]
      }
    },
    {
      titulo: 'finally: la limpieza garantizada',
      parrafos: [
        'El bloque finally corre siempre: con error, sin error, con return, con throw. Es el lugar para la "limpieza": cerrar una conexión, liberar un recurso, restaurar un estado. Piensa en el cierre de la tienda: pase lo que pase durante el día, al final se cierra la caja y se apagan las luces.'
      ],
      codigo: 'try {\n  console.log("Abriendo caja");\n  throw new Error("corte de luz");\n} catch (error) {\n  console.log("Error:", error.message);\n} finally {\n  console.log("Cerrando caja y apagando luces");\n}',
      salida: 'Abriendo caja\nError: corte de luz\nCerrando caja y apagando luces'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Tragar errores: catch (e) { } vacío. El error desaparece y nadie se entera. Mínimo, registralo con console.error.',
        'Meter TODO el programa en un try gigante: el catch pierde precisión. Aísla solo la parte riesgosa.',
        'Olvidar que catch recibe el error: si no lo usas, no sabrás qué pasó.',
        'Esperar que catch capture errores de sintaxis: los SyntaxError no se capturan en el mismo script; el código ni siquiera corre.',
        'Usar throw con un string pelado: throw "error" funciona pero pierde el stack trace. Usa throw new Error("mensaje").',
        'Confundir finally con catch: finally no maneja el error, solo se ejecuta después.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Falla rápido y con mensajes claros: valida los datos de entrada y lanza throw new Error("qué esperabas y qué llegó").',
        'Catch pequeño y específico: atrapá el error cerca de donde puede ocurrir.',
        'Usa finally para limpieza, no para lógica de negocio.',
        'Registra los errores con console.error (o el sistema de logs) en vez de ignorarlos.',
        'Escribe mensajes de error en lenguaje humano: "El precio no puede ser negativo" y no "error 42".',
        'Cuando un error es esperable (no es bug), manejalo; cuando es imposible de prever, dejalo propagar a un punto donde puedas reaccionar.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Dividir con guardia',
      codigo: 'function dividir(a, b) {\n  if (b === 0) {\n    throw new Error("No se puede dividir por cero");\n  }\n  return a / b;\n}\ntry {\n  console.log(dividir(10, 2));\n  console.log(dividir(10, 0));\n} catch (error) {\n  console.log("Ups:", error.message);\n}',
      salida: '5\nUps: No se puede dividir por cero',
      explicacion: 'La primera llamada imprime 5. La segunda lanza el error, que corta el try y salta al catch: el programa sigue vivo y con un mensaje claro.'
    },
    {
      titulo: 'El catch solo para lo riesgoso',
      codigo: 'const producto = JSON.parse(\'{"nombre": "Té"}\');\nconsole.log(producto.nombre);\ntry {\n  const invalido = JSON.parse("{no es json");\n} catch (error) {\n  console.log("El segundo no era JSON:", error.message);\n}',
      salida: 'Té\nEl segundo no era JSON: Expected property name or \'}\' in JSON at position 1',
      explicacion: 'Solo la parte riesgosa (el parseo del JSON inválido) está dentro del try. La parte segura quedó afuera, y el error se explicó con su mensaje.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Atrapar el error',
      dificultad: 'Fácil',
      consigna: ['Escribe un try/catch que intente ejecutar const numero = 5; numero.pop(); dentro del try. En el catch, imprime "Atrapado:" seguido del mensaje del error.'],
      pasos: [
        'El try contiene las dos líneas que fallan.',
        'El catch recibe el error y lo imprime con su message.',
        'Los números no tienen pop(): eso garantiza el error.'
      ],
      codigoInicial: '// Escribe el try/catch\n',
      pista: 'catch (error) { console.log("Atrapado:", error.message); }',
      tests: [
        { tipo: 'output', nombre: 'Error atrapado', esperado: ['Atrapado: numero.pop is not a function'], mensaje: 'Debe imprimirse "Atrapado:" seguido del mensaje de que pop no es una función de números.' }
      ],
      solucion: 'try {\n  const numero = 5;\n  numero.pop();\n} catch (error) {\n  console.log("Atrapado:", error.message);\n}'
    },
    {
      titulo: 'Validar con throw',
      dificultad: 'Media',
      consigna: ['Crea la función validarEdad(edad) que lance un error con el mensaje "Edad inválida" si la edad es menor a 0 o mayor a 120, y devuelva "edad válida" si no. Llámala dentro de un try con el valor -3 e imprime el error capturado.'],
      pasos: [
        'La función valida con un if combinado (edad < 0 || edad > 120).',
        'throw new Error("Edad inválida") en el caso malo.',
        'try con la llamada y catch que imprime el mensaje.'
      ],
      codigoInicial: '// Define validarEdad y el try/catch\n',
      pista: 'if (edad < 0 || edad > 120) { throw new Error("Edad inválida"); }',
      tests: [
        { tipo: 'output', nombre: 'Error de edad', esperado: ['Edad inválida'], mensaje: 'El catch debe imprimir el mensaje del error: "Edad inválida".' }
      ],
      solucion: 'function validarEdad(edad) {\n  if (edad < 0 || edad > 120) {\n    throw new Error("Edad inválida");\n  }\n  return "edad válida";\n}\ntry {\n  validarEdad(-3);\n} catch (error) {\n  console.log(error.message);\n}'
    },
    {
      titulo: 'finally siempre corre',
      dificultad: 'Media',
      consigna: ['Escribe un try que imprima "intentando", que lance un error con el mensaje "falló", con un catch que imprima "recuperado" y un finally que imprima "limpieza lista". Imprime los tres mensajes.'],
      pasos: [
        'El try imprime y luego lanza el error.',
        'El catch imprime su mensaje.',
        'El finally imprime el suyo.'
      ],
      codigoInicial: '// Escribe el try/catch/finally\n',
      pista: 'throw new Error("falló"); dentro del try, después del console.log.',
      tests: [
        { tipo: 'output', nombre: 'Los tres mensajes', esperado: ['intentando', 'recuperado', 'limpieza lista'], mensaje: 'El orden es: try, catch, finally. Los tres deben imprimirse.' }
      ],
      solucion: 'try {\n  console.log("intentando");\n  throw new Error("falló");\n} catch (error) {\n  console.log("recuperado");\n} finally {\n  console.log("limpieza lista");\n}'
    }
  ]
}