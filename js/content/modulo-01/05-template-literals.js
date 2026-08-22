export default {
  id: 'm1-l05',
  numero: 5,
  titulo: 'Template literals e interpolación',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Template literal', definicion: 'Una forma de escribir strings usando backticks (``) que permite saltos de línea reales e interpolación de expresiones.' },
    { termino: 'Interpolación', definicion: 'Insertar el valor de una variable o expresión dentro de un string usando ${...}.' },
    { termino: 'Backtick', definicion: 'La comilla inclinada (``) que abre y cierra los template literals. Está en la tecla junto al 1.' },
    { termino: 'Expresión', definicion: 'Cualquier fragmento de código que produce un valor: una variable, un cálculo, una llamada a función.' },
    { termino: 'Concatenación', definicion: 'Unir strings con el operador +. Funciona, pero es la forma antigua y menos legible.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un template literal?',
      parrafos: [
        'Un template literal es un string escrito entre backticks con superpoderes: puede ocupar varias líneas sin trucos y puede insertar valores en su interior con la sintaxis ${expresion}.',
        'Piensa en una plantilla de tarjeta de cumpleaños: el diseño está fijo ("Feliz cumpleaños, ..."), y en el espacio punteado se escribe el nombre de cada persona. El template literal es esa tarjeta: el texto fijo y los espacios ${} que se rellenan con el valor que quieras.'
      ],
      codigo: 'const nombre = "Ana";\nconst edad = 25;\nconsole.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);',
      salida: 'Hola, me llamo Ana y tengo 25 años.'
    },
    {
      titulo: 'Interpolación: ${}',
      parrafos: [
        'Dentro de los backticks, la sintaxis ${...} inserta el RESULTADO de cualquier expresión: una variable, un cálculo, una llamada a función, un ternario. Todo lo que produzca un valor se puede interpolar.',
        'La interpolación convierte automáticamente el valor a texto, así que no necesitas preocuparte por los tipos.'
      ],
      codigo: 'const precio = 2500;\nconsole.log(`El precio con IVA es ${precio * 1.21}.`);\nconsole.log(`¿Vale la pena? ${precio < 3000 ? "sí" : "no"}`);',
      salida: 'El precio con IVA es 3025.\n¿Vale la pena? sí'
    },
    {
      titulo: 'Strings de varias líneas',
      parrafos: [
        'Con comillas normales, un string no puede tener saltos de línea reales (tendrías que usar \\n). Con backticks, escribes el texto tal cual, con sus saltos, y el resultado respeta el formato. Ideal para mensajes largos, tickets y avisos.'
      ],
      codigo: 'const aviso = `Atención clientes:\nmañana abrimos a las 10.\n¡Los esperamos!`;\nconsole.log(aviso);',
      salida: 'Atención clientes:\nmañana abrimos a las 10.\n¡Los esperamos!'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar comillas normales con ${}: "${precio}" imprime literalmente ${precio}. La interpolación SOLO funciona con backticks.',
        'Olvidar cerrar el backtick: es la tecla junto al 1, sin Shift.',
        'Escribir un solo $ en lugar de ${}: el símbolo se imprime tal cual.',
        'Intentar interpolar sin comillas: `Hola ${nombre}` necesita la expresión dentro de ${}.',
        'Anidar muchas interpolaciones y perder legibilidad: si el mensaje se vuelve confuso, separa el cálculo en una variable primero.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa template literals para TODO mensaje que combine texto y variables: es más legible que concatenar con +.',
        'Si la expresión interpolada es larga, calcúlala en una variable antes: const total = precio * 1.21 y luego `El total es ${total}`.',
        'Aprovecha las varias líneas para mensajes largos: se leen mejor que las cadenas con \\n.',
        'Mantén la consistencia: elige los template literals como estilo del proyecto y úsalos en todos los mensajes.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El ticket del cliente',
      codigo: 'const cliente = "Luis";\nconst items = 4;\nconst total = 4580;\nconsole.log(`Cliente: ${cliente}\nArtículos: ${items}\nTotal: $${total}`);',
      salida: 'Cliente: Luis\nArtículos: 4\nTotal: $4580',
      explicacion: 'El template arma el ticket completo en un solo string. Fíjate en dos detalles: el \\n salta de línea y el $ suelto (antes de total) se imprime normal porque solo ${} interpola.'
    },
    {
      titulo: 'Interpolar expresiones, no solo variables',
      codigo: 'const cantidad = 2;\nconst precio = 1200;\nconsole.log(`Pagás ${cantidad * precio} por ${cantidad} unidades.`);',
      salida: 'Pagás 2400 por 2 unidades.',
      explicacion: 'Dentro de ${} hay un cálculo completo (cantidad * precio). JavaScript lo evalúa y solo inserta el resultado: 2400.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Saludo personalizado',
      dificultad: 'Fácil',
      consigna: ['Declara una constante nombre con tu nombre y otra ciudad con tu ciudad (los valores que tú quieras). Luego imprime, con un template literal, el mensaje: "Hola, soy [nombre] y vivo en [ciudad]." interpolando ambas variables con ${}.'],
      pasos: [
        'Declara const nombre = "tu nombre".',
        'Declara const ciudad = "tu ciudad".',
        'Imprime con backticks interpolando ambas variables.'
      ],
      codigoInicial: '// Declara las constantes e imprime el saludo\n',
      pista: 'El template usa backticks: `Hola, soy ${nombre} y vivo en ${ciudad}.`',
      tests: [
        { tipo: 'valor', nombre: 'nombre es texto', expr: 'typeof nombre', esperado: 'string', mensaje: 'Debe existir una constante nombre de tipo string.' },
        { tipo: 'valor', nombre: 'ciudad es texto', expr: 'typeof ciudad', esperado: 'string', mensaje: 'Debe existir una constante ciudad de tipo string.' },
        { tipo: 'codigo', nombre: 'Saludo con interpolación', explicacion: 'El mensaje debe imprimirse con console.log usando un template literal que interpole ${nombre} y ${ciudad}: `Hola, soy ${nombre} y vivo en ${ciudad}.`', requerido: ['`Hola, soy \\$\\{nombre\\} y vivo en \\$\\{ciudad\\}\\.', 'console\\.log\\s*\\('], prohibido: [], mensaje: 'El saludo debe usar backticks e interpolar nombre y ciudad con ${}, sin importar qué valores hayas elegido.' }
      ],
      solucion: 'const nombre = "Ana";\nconst ciudad = "Rosario";\nconsole.log(`Hola, soy ${nombre} y vivo en ${ciudad}.`);'
    },
    {
      titulo: 'El cálculo en la plantilla',
      dificultad: 'Fácil',
      consigna: ['Declara const precio = 800 y const cantidad = 3. Imprime con un template literal el mensaje: "El total es X" donde X sea el resultado del cálculo precio * cantidad (interpolado, no calculado afuera).'],
      pasos: [
        'Declara las dos constantes.',
        'Interpola directamente la multiplicación dentro del template.'
      ],
      codigoInicial: '// Declara las constantes e imprime el total\n',
      pista: 'Dentro de ${} puedes poner una operación: `El total es ${precio * cantidad}`.',
      tests: [
        { tipo: 'output', nombre: 'Total interpolado', esperado: ['El total es 2400'], mensaje: '800 * 3 = 2400, y debe aparecer interpolado dentro del template.' }
      ],
      solucion: 'const precio = 800;\nconst cantidad = 3;\nconsole.log(`El total es ${precio * cantidad}`);'
    },
    {
      titulo: 'El aviso de tres líneas',
      dificultad: 'Media',
      consigna: ['Imprime un aviso de la tienda con un template literal de varias líneas: línea 1 "¡Oferta del día!", línea 2 "50% en panes", línea 3 "Solo hasta las 12."'],
      pasos: [
        'Usa backticks.',
        'Escribe las tres líneas dentro del template con saltos reales.',
        'Imprime con un solo console.log.'
      ],
      codigoInicial: '// Escribe el aviso con un template literal\n',
      pista: 'Dentro de los backticks simplemente presionas Enter para saltar de línea: no hace falta \\n.',
      tests: [
        { tipo: 'output', nombre: 'Aviso de tres líneas', esperado: ['¡Oferta del día!\n50% en panes\nSolo hasta las 12.'], mensaje: 'El aviso debe contener exactamente esas tres líneas separadas por saltos de línea.' }
      ],
      solucion: 'const aviso = `¡Oferta del día!\n50% en panes\nSolo hasta las 12.`;\nconsole.log(aviso);'
    }
  ]
}