export default {
  id: 'm1-l01',
  numero: 1,
  titulo: '¿Qué es JavaScript?',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Lenguaje de programación', definicion: 'Un idioma formal que le da instrucciones a una computadora, con reglas (sintaxis) y vocabulario (palabras reservadas).' },
    { termino: 'Interpretado', definicion: 'El navegador ejecuta el código línea por línea en el momento, sin necesidad de compilarlo a un archivo binario antes.' },
    { termino: 'Navegador web', definicion: 'El programa que usas para ver sitios (Chrome, Firefox, Edge). Es el "hogar" principal de JavaScript.' },
    { termino: 'Node.js', definicion: 'Un entorno que ejecuta JavaScript fuera del navegador: en tu computadora, servidores o herramientas de terminal.' },
    { termino: 'Consola', definicion: 'El panel donde se muestran mensajes del programa (con console.log). Es tu ventana para ver qué está pasando.' },
    { termino: 'Script', definicion: 'Un archivo o bloque de código con instrucciones que un entorno ejecuta de principio a fin.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es JavaScript?',
      parrafos: [
        'JavaScript (JS) es un lenguaje de programación que hace que las páginas web sean vivas. Imagina una página web como un teatro: el HTML dibuja el escenario y los actores, el CSS los viste y les da colores, y JavaScript es el director que les dice qué hacer: qué se mueve, qué aparece cuando haces clic, qué se calcula cuando escribes.',
        'Nació en 1995 dentro del navegador Netscape y hoy es uno de los lenguajes más usados del mundo. No tienes que instalar nada para empezar: si tienes un navegador o Node.js, ya tienes todo lo necesario.',
        'Una de sus grandes ventajas es que es tolerante: te permite probar ideas rápido. Pero esa misma libertad te obliga a aprender buenas prácticas para no caer en hábitos confusos.'
      ],
      codigo: 'console.log("Hola, mundo");',
      salida: 'Hola, mundo'
    },
    {
      titulo: '¿Dónde corre JavaScript?',
      parrafos: [
        'JavaScript corre en dos grandes lugares. El primero es el navegador: ahí vive la parte visual e interactiva de las páginas (lo que se llama frontend). El segundo es Node.js, un entorno que ejecuta JavaScript en tu computadora o servidor, con acceso a archivos, red y bases de datos (backend).',
        'En este curso vas a ejecutar casi todo con Node.js desde tu terminal, pero en el módulo 3 usarás el navegador y su modelo de objetos del documento (DOM) para crear interfaces interactivas.'
      ],
      tabla: {
        columnas: ['Entorno', 'Qué es', 'Cuándo lo usas'],
        filas: [
          ['Navegador', 'Ejecuta JS dentro de las páginas web', 'Para crear interfaces, reaccionar a clics, validar formularios'],
          ['Node.js', 'Ejecuta JS fuera del navegador', 'Para scripts, servidores, herramientas de línea de comandos']
        ]
      }
    },
    {
      titulo: 'Cómo se ejecuta un script',
      parrafos: [
        'Un script es una secuencia de instrucciones que se ejecuta de arriba hacia abajo, en orden. Para "hablar" con el usuario mientras aprendes, la herramienta estrella es console.log: imprime un mensaje en la consola.',
        'La sintaxis es simple: primero la palabra console.log, luego un paréntesis, y dentro el texto entre comillas (doble o simple, ambas valen). No olvides el punto y coma al final de cada instrucción: no es obligatorio, pero mantiene el código ordenado y predecible.'
      ],
      codigo: 'console.log("Primera instrucción");\nconsole.log("Segunda instrucción");\nconsole.log(2026);',
      salida: 'Primera instrucción\nSegunda instrucción\n2026'
    },
    {
      titulo: 'La consola: tu mejor amiga',
      parrafos: [
        'La consola no solo muestra mensajes con console.log. También puedes usarla para:',
        'console.error para marcar errores en rojo y console.warn para advertencias en amarillo. Pronto aprenderás a leer errores de la consola para saber exactamente qué salió mal y en qué línea.'
      ],
      lista: [
        'console.log(mensaje): imprime información normal.',
        'console.error(mensaje): imprime un error destacado.',
        'console.warn(mensaje): imprime una advertencia.',
        'console.table(datos): muestra arrays u objetos en formato de tabla.'
      ]
    },
    {
      titulo: 'Errores comunes',
      parrafos: [
        'Al principio vas a equivocarte y eso es parte de aprender. Estos son los tropiezos más frecuentes de quien recién empieza:'
      ],
      lista: [
        'Olvidar cerrar las comillas: "Hola, mundo (falta la comilla de cierre) → el navegador se queja de "string terminado de forma inesperada".',
        'Olvidar el paréntesis de cierre: console.log("Hola" → falta el ) final.',
        'Confundir comillas simples y dobles: puedes usar ambas, pero deben cerrarse con la misma que abriste.',
        'Escribir console.log con mayúsculas o espacios (Console.log, console .log): JavaScript distingue mayúsculas de minúsculas y los espacios rompen el nombre.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa un solo estilo de comillas en todo tu proyecto (lo común es comilla simple o doble; elige y sé constante).',
        'Termina las instrucciones con punto y coma, aunque no sea obligatorio: evita sorpresas al compactar código.',
        'Mensajes claros en la consola: escribe qué está pasando, no solo un dato suelto.',
        'Prueba mucho y pronto: cada cambio pequeño, ejecuta y observa. Programar es un ciclo de prueba y ajuste.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Varias instrucciones en orden',
      codigo: 'console.log("Abriendo la tienda...");\nconsole.log("Precios listos");\nconsole.log(99);',
      salida: 'Abriendo la tienda...\nPrecios listos\n99',
      explicacion: 'El programa corre línea por línea. Fíjate que el número 99 se imprime sin comillas: los números se escriben tal cual, y solo el texto va entre comillas.'
    },
    {
      titulo: 'Texto y números se imprimen distinto',
      codigo: 'console.log("3 + 4");\nconsole.log(3 + 4);',
      salida: '3 + 4\n7',
      explicacion: 'Lo que está entre comillas es texto y se muestra literal ("3 + 4"). Lo que va sin comillas es código real: JavaScript suma y el resultado es 7. Esta diferencia entre texto y cálculo es fundamental.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Tu primer saludo',
      dificultad: 'Fácil',
      consigna: ['Queremos que el programa te salude. Escribe la instrucción que imprime el texto Hola, mundo en la consola.'],
      pasos: [
        'Usa console.log.',
        'El mensaje debe ir entre comillas.',
        'Termina la instrucción con punto y coma.'
      ],
      codigoInicial: '// Escribe aquí tu instrucción\n',
      pista: 'El código se ve así: console.log("tu mensaje").',
      tests: [
        { tipo: 'output', nombre: 'Imprime el saludo', esperado: ['Hola, mundo'], mensaje: 'El mensaje debe ser exactamente Hola, mundo, con la H mayúscula y sin signos raros.' }
      ],
      solucion: 'console.log("Hola, mundo");'
    },
    {
      titulo: 'Tres mensajes en orden',
      dificultad: 'Fácil',
      consigna: ['Imprime tres mensajes en la consola, uno por línea y en este orden: primero Uno, luego Dos y finalmente Tres.'],
      pasos: [
        'Escribe tres instrucciones console.log, una debajo de la otra.',
        'Cada mensaje con su propio par de comillas.',
        'La consola mostrará cada mensaje en una línea distinta.'
      ],
      codigoInicial: '// Escribe aquí tus tres instrucciones\n',
      pista: 'Cada console.log imprime en una línea nueva. Escribe tres console.log separados.',
      tests: [
        { tipo: 'output', nombre: 'Imprime las tres líneas', esperado: ['Uno', 'Dos', 'Tres'], mensaje: 'Debes imprimir exactamente las palabras Uno, Dos y Tres, en ese orden y cada una en su línea.' }
      ],
      solucion: 'console.log("Uno");\nconsole.log("Dos");\nconsole.log("Tres");'
    },
    {
      titulo: '¿Texto o cálculo?',
      dificultad: 'Media',
      consigna: ['Demuestra que entendiste la diferencia entre texto y números. Imprime dos líneas: la primera debe ser la operación 10 + 5 como texto literal, y la segunda debe ser el cálculo real de 10 + 5.'],
      pasos: [
        'La primera línea: la operación completa entre comillas, tal cual se escribe: 10 + 5.',
        'La segunda línea: la operación sin comillas, para que JavaScript la calcule.',
        'Compara las dos salidas.'
      ],
      codigoInicial: '// Línea 1: texto literal\n// Línea 2: cálculo real\n',
      pista: 'Todo lo que va entre comillas es texto. Solo lo que va sin comillas se ejecuta como código.',
      tests: [
        { tipo: 'output', nombre: 'Texto y cálculo', esperado: ['10 + 5', '15'], mensaje: 'La primera línea es la cadena "10 + 5" y la segunda es el resultado del cálculo, que es 15.' }
      ],
      solucion: 'console.log("10 + 5");\nconsole.log(10 + 5);'
    }
  ]
}