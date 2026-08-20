export default {
  id: 'm5-l53',
  numero: 53,
  titulo: 'Linters y formatters: ESLint y Prettier',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Linter', definicion: 'Un analizador estático que revisa el código SIN ejecutarlo y marca errores, malas prácticas e inconsistencias: ESLint es el estándar en JavaScript.' },
    { termino: 'Formatter', definicion: 'Una herramienta que reordena el formato del código automáticamente: comillas, indentación, punto y coma. Prettier es el estándar.' },
    { termino: 'Regla', definicion: 'Una configuración del linter: no-var, eqeqeq (prohibir ==), no-undef (variables no definidas).' },
    { termino: 'Error vs advertencia', definicion: 'Los errores rompen el análisis; las advertencias avisan sin frenar. El linter distingue severidades.' },
    { termino: 'Estilo consistente', definicion: 'Que todo el código del proyecto se vea igual: lees un archivo y sabes qué esperar.' }
  ],
  secciones: [
    {
      titulo: 'La diferencia',
      parrafos: [
        'El linter es el revisor de calidad: caza bugs de estilo y errores reales antes de que lleguen a producción. El formatter es el encargado del orden: corre y el archivo queda prolijo sin que muevas un dedo.',
        'Analogía: el linter es el inspector que te dice "no uses ==, usa ==="; el formatter es el que ordena los estantes para que todo quede igual.'
      ],
      codigo: '// Antes del formatter\nconst nombre="pan";const  precio=350;\nconsole.log(nombre,precio);\n\n// Después de Prettier\nconst nombre = "pan";\nconst precio = 350;\nconsole.log(nombre, precio);',
      salida: 'pan 350\npan 350'
    },
    {
      titulo: 'Reglas de ESLint más usadas',
      tabla: {
        columnas: ['Regla', 'Qué hace', 'Ejemplo de fallo'],
        filas: [
          ['no-var', 'Prohíbe var: usar let o const', 'var x = 1'],
          ['eqeqeq', 'Exige === y !== en vez de == y !=', 'if (a == b)'],
          ['no-undef', 'Marca variables no declaradas', 'console.log(x) sin x'],
          ['no-unused-vars', 'Marca variables declaradas sin usar', 'const y = 5;'],
          ['quotes', 'Fuerza comillas consistentes (single/double)', 'mezclar "..." y \'...\''],
          ['semi', 'Exige (o prohíbe) punto y coma', 'inconsistencia']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Ignorar las advertencias "solo por esta vez": los errores de estilo se acumulan y el código se vuelve ilegible.',
        'Formatear a mano: Prettier lo hace en un segundo y sin errores; el formateo manual siempre termina inconsistente.',
        'Mezclar comillas dobles y simples en el mismo archivo: típico objetivo de linter.',
        'Dejar variables sin usar: el linter avisa y es señal de código muerto.',
        'Pensar que el linter es opcional en equipos: sin linter, cada persona escribe su propio dialecto.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Configura el linter UNA vez al inicio del proyecto y deja que el editor lo marque en rojo mientras escribes.',
        'Integra el formatter al guardar: escribir y olvidarte del formato.',
        'Reglas mínimas sólidas: no-var, eqeqeq, no-undef, no-unused-vars.',
        'El estilo de tu proyecto: decide comillas y punto y coma al principio y no lo cambies.',
        'Corre el linter antes de cada entrega o deploy: atrapa lo que el ojo no ve.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Lo que el linter atraparía',
      codigo: '// Problemas que ESLint marcaría:\nvar total = 0;        // no-var\nif (total == 5) { }   // eqeqeq\nlet sinUsar = 10;     // no-unused-vars\n\n// Versión limpia:\nlet total = 0;\nif (total === 5) { }\n',
      salida: '',
      explicacion: 'Sin ejecutar nada, el linter detecta var, == y la variable sin usar. Corregirlos al escribir evita que se acumulen.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Formatear el código',
      dificultad: 'Fácil',
      consigna: [
        'El código base está mal formateado (espacios raros, comillas dobles y mezcla de estilos). Reescríbelo aplicando estilo consistente: comillas SIMPLES, espacios alrededor de = y +, y sin punto y coma. Mantén la salida exacta.'
      ],
      pasos: [
        'Usa comillas simples en los strings.',
        'Deja espacios en las asignaciones.',
        'Quita los puntos y coma.'
      ],
      codigoInicial: 'const nombre="Ana";\nconst saludo = \'Hola, \' + nombre;\nconsole.log(saludo);',
      pista: 'const nombre = \'Ana\'\nconst saludo = \'Hola, \' + nombre\nconsole.log(saludo)',
      tests: [
        { tipo: 'output', nombre: 'El saludo', esperado: ['Hola, Ana'], mensaje: 'La salida debe ser "Hola, Ana".' },
        { tipo: 'codigo', nombre: 'Comillas simples', explicacion: 'Los strings deben usar comillas simples.', prohibido: ['"'], mensaje: 'Usa comillas simples en los strings.' },
        { tipo: 'codigo', nombre: 'Sin punto y coma', explicacion: 'El código no debe llevar punto y coma.', prohibido: [';'], mensaje: 'Quita los puntos y coma (Prettier estilo sin semi).' }
      ],
      solucion: "const nombre = 'Ana'\nconst saludo = 'Hola, ' + nombre\nconsole.log(saludo)"
    },
    {
      titulo: 'Prohibido el doble igual',
      dificultad: 'Media',
      consigna: [
        'El código base compara con == (lo que el linter eqeqeq prohíbe). Reescríbelo con ===. Debe imprimir "Iguales" porque 5 y 5 son iguales. Mantén la estructura, solo cambia el operador.'
      ],
      pasos: [
        'Reemplaza == por ===.',
        'Verifica la salida: "Iguales".'
      ],
      codigoInicial: 'const a = 5;\nconst b = 5;\nif (a == b) {\n  console.log("Iguales");\n} else {\n  console.log("Distintos");\n}',
      pista: 'Solo cambia a == b por a === b.',
      tests: [
        { tipo: 'output', nombre: 'Resultado', esperado: ['Iguales'], mensaje: '5 y 5 son iguales estrictamente.' },
        { tipo: 'codigo', nombre: 'Igualdad estricta', explicacion: 'Debe usarse === en lugar de ==.', prohibido: ['(^|[^=!])==([^=]|$)'], mensaje: 'Usa el operador === (regla eqeqeq).' }
      ],
      solucion: 'const a = 5;\nconst b = 5;\nif (a === b) {\n  console.log("Iguales");\n} else {\n  console.log("Distintos");\n}'
    },
    {
      titulo: 'Sin var, sin variables muertas',
      dificultad: 'Dificil',
      consigna: [
        'El código base usa var y deja una variable sin usar (lo que el linter no-var y no-unused-vars prohíben). Reescríbelo con let/const y eliminando la variable muerta. Debe imprimir el total de la SUMA: 8.'
      ],
      pasos: [
        'Cambia var por const (los valores no se reasignan).',
        'Elimina la variable que no se usa.',
        'El total es precio + cantidad = 8.'
      ],
      codigoInicial: 'var precio = 5;\nvar cantidad = 3;\nvar sobrante = 99; // no se usa: es código muerto\nvar total = precio * cantidad;\nconsole.log(total);',
      pista: 'const precio = 5; const cantidad = 3; const total = precio + cantidad; console.log(total);',
      tests: [
        { tipo: 'output', nombre: 'El total', esperado: ['8'], mensaje: 'precio + cantidad = 5 + 3 = 8.' },
        { tipo: 'codigo', nombre: 'Sin var', explicacion: 'No debe aparecer var.', prohibido: ['\\bvar\\b'], mensaje: 'Usa let o const, nunca var.' },
        { tipo: 'codigo', nombre: 'Sin variables muertas', explicacion: 'No debe declararse una variable que nunca se usa.', prohibido: ['sobrante'], mensaje: 'Elimina la variable sin uso.' }
      ],
      solucion: 'const precio = 5;\nconst cantidad = 3;\nconst total = precio + cantidad;\nconsole.log(total);'
    }
  ]
}