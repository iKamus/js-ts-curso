export default {
  id: 'm2-l14',
  numero: 14,
  titulo: 'Métodos de strings I: normalizar y buscar texto',
  nivel: 'Fácil',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Método', definicion: 'Una función que vive dentro de un valor y se llama con punto: "hola".toUpperCase().' },
    { termino: 'String', definicion: 'El tipo de dato que guarda texto. Todo texto tiene métodos disponibles.' },
    { termino: 'Mayúsculas y minúsculas', definicion: 'JavaScript las distingue: "Hola" y "hola" son textos distintos. Con toUpperCase y toLowerCase las normalizas.' },
    { termino: 'trim', definicion: 'Recorta los espacios sobrantes al inicio y al final de un texto: " pan ".trim() queda "pan".' },
    { termino: 'Separador', definicion: 'El texto que usas para dividir o unir: split(",") corta por comas, join(" - ") une con guiones.' },
    { termino: 'Subcadena', definicion: 'Un pedazo de texto dentro de otro: "manzana" contiene la subcadena "zana".' },
    { termino: 'Búsqueda', definicion: 'Preguntarle al texto si contiene algo: includes, startsWith y endsWith responden true o false.' },
    { termino: 'Encadenar métodos', definicion: 'Llamar un método sobre el resultado de otro: " hola ".trim().toUpperCase() aplica los dos en cadena.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un método de string?',
      parrafos: [
        'Un string no es solo texto inerte: trae incorporadas herramientas para transformarlo. Piensa en el texto como una etiqueta de producto en la tienda: puedes escribirla en mayúsculas, quitarle los espacios, cortarla por las comas o preguntarle si contiene una palabra.',
        'Esas herramientas se llaman métodos y se usan con un punto: "texto".metodo(). La mayoría devuelve un string NUEVO: el original no se toca. Eso significa que puedes guardar el resultado en una variable o encadenar varios métodos seguidos.'
      ],
      codigo: 'const etiqueta = "  oferta de pan  ";\nconsole.log(etiqueta.trim().toUpperCase());\nconsole.log(etiqueta);',
      salida: 'OFERTA DE PAN\n  oferta de pan  '
    },
    {
      titulo: 'La tabla de los métodos de esta lección',
      parrafos: [
        'Estos son los métodos que verás en esta lección. Todos trabajan sobre el texto y devuelven un valor nuevo.'
      ],
      tabla: {
        columnas: ['Método', 'Qué hace', 'Ejemplo', 'Resultado'],
        filas: [
          ['toUpperCase()', 'Convierte todo a mayúsculas', '"hola".toUpperCase()', '"HOLA"'],
          ['toLowerCase()', 'Convierte todo a minúsculas', '"HOLA".toLowerCase()', '"hola"'],
          ['trim()', 'Quita espacios al inicio y al final', '"  pan  ".trim()', '"pan"'],
          ['split(sep)', 'Divide el texto en un array por un separador', '"a,b".split(",")', '["a","b"]'],
          ['join(sep)', 'Une un array en texto con un separador', '["a","b"].join("-")', '"a-b"'],
          ['includes(x)', '¿Contiene la subcadena x?', '"manzana".includes("zana")', 'true'],
          ['startsWith(x)', '¿Empieza con x?', '"javascript".startsWith("java")', 'true'],
          ['endsWith(x)', '¿Termina con x?', '"javascript".endsWith("script")', 'true']
        ]
      }
    },
    {
      titulo: 'Normalizar texto: mayúsculas, minúsculas y trim',
      parrafos: [
        'Los datos que llegan del usuario rara vez son prolijos: vienen con mayúsculas mezcladas y espacios de más. Normalizar es dejar todo en un mismo formato para poder comparar o guardar.',
        'El clásico: "  ANA GARCIA  ".trim().toLowerCase() devuelve "ana garcia". Así puedes comparar nombres sin que los espacios o las mayúsculas arruinen la comparación.'
      ],
      codigo: 'const usuario = "  ANA GARCIA  ";\nconst normalizado = usuario.trim().toLowerCase();\nconsole.log(normalizado);\nconsole.log(normalizado === "ana garcia");',
      salida: 'ana garcia\ntrue'
    },
    {
      titulo: 'split y join: el ida y vuelta entre texto y array',
      parrafos: [
        'split corta un texto por un separador y devuelve un array: "manzana,pera,uva".split(",") da ["manzana","pera","uva"]. Es como cortar la lista del pedido por las comas y poner cada producto en su balda.',
        'join hace el camino inverso: une los elementos de un array en un solo texto con el separador que elijas. El par split/join es una de las herramientas más usadas para transformar datos.'
      ],
      codigo: 'const lista = "pan,leche,café";\nconst productos = lista.split(",");\nconsole.log(productos);\nconsole.log(productos.join(" - "));',
      salida: '["pan","leche","café"]\npan - leche - café'
    },
    {
      titulo: 'Buscar dentro del texto: includes, startsWith y endsWith',
      parrafos: [
        'Las tres responden true o false. includes pregunta si el texto contiene una subcadena en cualquier posición. startsWith pregunta si empieza con ella y endsWith si termina. Son las que usas para validar un email, un prefijo de código o una extensión de archivo.'
      ],
      codigo: 'const mail = "ana@tienda.com";\nconsole.log(mail.startsWith("ana"));\nconsole.log(mail.includes("@"));\nconsole.log(mail.endsWith(".com"));',
      salida: 'true\ntrue\ntrue'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar que el texto original no cambia: "hola".toUpperCase() NO modifica la variable. Si no guardas el resultado, no ves nada nuevo.',
        'split con el separador equivocado: "pan leche".split(",") devuelve ["pan leche"], un array de un solo elemento. Usa el separador real del texto.',
        'Comparar con mayúsculas distintas: "Ana" === "ana" es false. Normaliza ambos lados con toLowerCase antes de comparar.',
        'Creer que trim() quita espacios del medio: solo recorta el inicio y el final. "pan  leche".trim() queda igual.',
        'Confundir includes (pregunta) con indexOf (posición): includes devuelve booleano, indexOf devuelve un número.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Normaliza siempre al comparar texto: usa .trim().toLowerCase() en ambos lados de la comparación.',
        'Guarda el resultado de los métodos en variables con nombres claros: const normalizado = texto.trim().toLowerCase().',
        'Encadena métodos cuando tenga sentido, pero no abuses: " a ".trim().toUpperCase() está bien, diez métodos seguidos hacen el código ilegible.',
        'Elige el separador correcto para split/join y mantenlo consistente dentro del mismo flujo de datos.',
        'Usa endsWith para extensiones de archivo y startsWith para prefijos: son más expresivas que includes para esos casos.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Validar el email del cliente',
      codigo: 'const email = "  LUIS@TIENDA.COM  ";\nconst limpio = email.trim().toLowerCase();\nconsole.log(limpio.startsWith("luis"));\nconsole.log(limpio.includes("@"));\nconsole.log(limpio.endsWith(".com"));',
      salida: 'true\ntrue\ntrue',
      explicacion: 'El email llega con espacios y mayúsculas. Con trim y toLowerCase lo dejas limpio y después haces las tres preguntas de validación.'
    },
    {
      titulo: 'De la lista de texto al array y de vuelta',
      codigo: 'const pedido = "pan,leche,alfajor";\nconst articulos = pedido.split(",");\nconsole.log(`Hay ${articulos.length} productos`);\nconsole.log(articulos.join(" | "));',
      salida: 'Hay 3 productos\npan | leche | alfajor',
      explicacion: 'split convierte el texto en array para poder medirlo y manipularlo; join lo vuelve a convertir en texto con otro separador para mostrarlo.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Normalizar un texto con trim y toUpperCase',
      dificultad: 'Fácil',
      consigna: [
        'Declara const texto = "  hola mundo  ". Usa trim para quitar los espacios y toUpperCase para convertir a mayúsculas, en una sola expresión, e imprime el resultado.'
      ],
      pasos: [
        'Declara la constante texto con el valor "  hola mundo  ".',
        'Aplica trim() primero para quitar los espacios.',
        'Encadena toUpperCase() sobre el resultado.',
        'Imprime el texto final.'
      ],
      codigoInicial: '// Declara texto, normaliza e imprime\n',
      pista: 'texto.trim().toUpperCase() aplica los dos métodos en orden, de izquierda a derecha.',
      tests: [
        { tipo: 'output', nombre: 'Texto normalizado', esperado: ['HOLA MUNDO'], mensaje: 'El resultado debe ser exactamente HOLA MUNDO, sin espacios al inicio ni al final.' },
        { tipo: 'valor', nombre: 'texto existe', expr: 'typeof texto', esperado: 'string', mensaje: 'Debe existir la variable texto, de tipo string.' }
      ],
      solucion: 'const texto = "  hola mundo  ";\nconsole.log(texto.trim().toUpperCase());'
    },
    {
      titulo: 'Del texto al array y de vuelta',
      dificultad: 'Fácil',
      consigna: [
        'Declara const lista = "manzana,pera,uva". Usa split(",") para convertirla en un array guardado en una variable, e imprime el array unido con " - " usando join.'
      ],
      pasos: [
        'Declara la constante lista con el texto "manzana,pera,uva".',
        'Aplica split(",") y guarda el resultado en una variable, por ejemplo frutas.',
        'Usa join(" - ") sobre el array.',
        'Imprime el texto resultante.'
      ],
      codigoInicial: '// Declara lista, divide con split y une con join\n',
      pista: 'const frutas = lista.split(","); y luego frutas.join(" - ").',
      tests: [
        { tipo: 'output', nombre: 'Lista unida', esperado: ['manzana - pera - uva'], mensaje: 'El join con " - " debe producir exactamente manzana - pera - uva.' },
        { tipo: 'valor', nombre: 'frutas es un array', expr: 'Array.isArray(frutas)', esperado: true, mensaje: 'La variable frutas debe ser un array real, resultado de split.' }
      ],
      solucion: 'const lista = "manzana,pera,uva";\nconst frutas = lista.split(",");\nconsole.log(frutas.join(" - "));'
    },
    {
      titulo: 'Las tres preguntas del email',
      dificultad: 'Media',
      consigna: [
        'Declara const email = "ana@tienda.com". Imprime tres resultados: si empieza con "ana", si contiene "@" y si termina con ".com". Las tres deben dar true.'
      ],
      pasos: [
        'Declara la constante email.',
        'Usa startsWith("ana") para la primera pregunta.',
        'Usa includes("@") para la segunda.',
        'Usa endsWith(".com") para la tercera y muestra las tres.'
      ],
      codigoInicial: '// Declara email y haz las tres preguntas\n',
      pista: 'Cada método devuelve true o false. console.log(email.startsWith("ana")) y así con los otros dos.',
      tests: [
        { tipo: 'output', nombre: 'Las tres preguntas', esperado: ['true', 'true', 'true'], mensaje: 'Las tres preguntas del email deben devolver true, cada una en su línea.' }
      ],
      solucion: 'const email = "ana@tienda.com";\nconsole.log(email.startsWith("ana"));\nconsole.log(email.includes("@"));\nconsole.log(email.endsWith(".com"));'
    },
    {
      titulo: 'Contador de palabras',
      dificultad: 'Media',
      consigna: [
        'Declara const frase = "aprender javascript es divertido". Cuenta cuántas palabras tiene usando split con espacio como separador, e imprime el mensaje "Palabras: N".'
      ],
      pasos: [
        'Declara la constante frase.',
        'Divide la frase con split(" ").',
        'Mide la cantidad con length.',
        'Imprime con el formato "Palabras: N".'
      ],
      codigoInicial: '// Declara frase, cuenta las palabras e imprime\n',
      pista: 'frase.split(" ") devuelve un array donde cada elemento es una palabra. Su length es la cantidad.',
      tests: [
        { tipo: 'output', nombre: 'Cantidad de palabras', esperado: ['Palabras: 4'], mensaje: 'La frase tiene 4 palabras: aprender, javascript, es, divertido.' }
      ],
      solucion: 'const frase = "aprender javascript es divertido";\nconst palabras = frase.split(" ");\nconsole.log(`Palabras: ${palabras.length}`);'
    }
  ]
}
