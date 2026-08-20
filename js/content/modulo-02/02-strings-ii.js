export default {
  id: 'm2-l15',
  numero: 15,
  titulo: 'Métodos de strings II: cortar, reemplazar y rellenar',
  nivel: 'Fácil',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Cortar', definicion: 'Extraer un pedazo de texto sin tocar el original: slice y substring recortan por posición.' },
    { termino: 'Índice de carácter', definicion: 'La posición de un carácter dentro del texto, contando desde 0. "hola"[1] es "o".' },
    { termino: 'Reemplazo', definicion: 'Cambiar una parte del texto por otra: replace cambia la primera aparición y replaceAll todas.' },
    { termino: 'Posición', definicion: 'indexOf devuelve la primera posición de una subcadena; lastIndexOf, la última.' },
    { termino: 'Relleno', definicion: 'Completar un texto hasta un largo fijo con un carácter: padStart rellena por izquierda y padEnd por derecha.' },
    { termino: 'Repetición', definicion: 'Repetir un texto varias veces con repeat: útil para separadores y guiones de ticket.' },
    { termino: 'Longitud fija', definicion: 'Un texto con tamaño constante, como los códigos de producto "0012", para que las columnas queden alineadas.' }
  ],
  secciones: [
    {
      titulo: 'Cortar texto con slice y substring',
      parrafos: [
        'A veces no necesitas todo el texto, sino un pedazo: el código postal de una dirección, la primera parte de un identificador, los últimos dos caracteres de un archivo. Ahí entran slice y substring.',
        'slice(inicio, fin) copia desde el inicio hasta el fin (sin incluirlo). Acepta números negativos, que cuentan desde el final: "javascript".slice(-3) es "ipt". substring hace algo parecido pero no acepta negativos; para los casos normales los dos se comportan igual.'
      ],
      codigo: 'const palabra = "javascript";\nconsole.log(palabra.slice(0, 4));\nconsole.log(palabra.slice(-3));\nconsole.log(palabra.substring(4));',
      salida: 'java\nipt\nscript'
    },
    {
      titulo: 'Reemplazar con replace y replaceAll',
      parrafos: [
        'replace busca una subcadena y la cambia por otra, pero solo la PRIMERA aparición. replaceAll cambia todas. Piensa en corregir el cartel de la vidriera: replace corrige el primer error que ves, replaceAll repasa toda la tienda.'
      ],
      codigo: 'const aviso = "casa, casa, cocina";\nconsole.log(aviso.replace("casa", "hogar"));\nconsole.log(aviso.replaceAll("casa", "hogar"));',
      salida: 'hogar, casa, cocina\nhogar, hogar, cocina'
    },
    {
      titulo: 'Buscar posiciones con indexOf y lastIndexOf',
      parrafos: [
        'indexOf(subcadena) devuelve la posición de la primera aparición, y lastIndexOf la de la última. Si la subcadena no existe, ambas devuelven -1: tu señal de "no está". Combinado con charAt puedes inspeccionar un carácter puntual del texto.'
      ],
      codigo: 'const fruta = "banana";\nconsole.log(fruta.indexOf("a"));\nconsole.log(fruta.lastIndexOf("a"));\nconsole.log(fruta.charAt(2));',
      salida: '1\n5\nn'
    },
    {
      titulo: 'Rellenar y repetir: padStart, padEnd y repeat',
      parrafos: [
        'padStart(largo, caracter) rellena por la izquierda hasta alcanzar el largo pedido, y padEnd por la derecha. Son la herramienta del ticket de la tienda: "pan".padEnd(16, ".") rellena con puntos hasta los 16 caracteres para alinear las columnas.',
        'repeat(cantidad) repite el texto tantas veces como indiques: es perfecto para separadores como "=".repeat(20).'
      ],
      codigo: 'const precio = "350";\nconsole.log("pan".padEnd(16, ".") + " $" + precio);\nconsole.log("=".repeat(20));\nconsole.log("5".padStart(3, "0"));',
      salida: 'pan............. $350\n====================\n005'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar que slice no incluye el fin: "hola".slice(0, 3) es "hol", no "hola". El fin es exclusivo.',
        'Usar substring con negativos: "hola".substring(-1) no toma el último carácter; devuelve "hola" completo. Para negativos usa slice.',
        'Creer que replace cambia todas las apariciones: solo cambia la primera. Para todas, replaceAll.',
        'Confundir indexOf con includes: indexOf devuelve un número (y -1 si no existe); includes devuelve true o false.',
        'Contar mal la longitud para padStart/padEnd: padEnd(16, ".") completa hasta 16 caracteres TOTALES, no agrega 16 puntos.',
        'Intentar modificar el string original: "hola".toUpperCase() no cambia la variable. Los strings son inmutables; siempre guarda el resultado.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Elige slice para cortes con negativos y substring para cortes simples: slice es el más versátil de los dos.',
        'Verifica el -1 de indexOf antes de usar la posición: if (posicion !== -1) para no operar sobre texto inexistente.',
        'Usa padEnd para alinear columnas en consola y padStart para códigos numéricos con ceros a la izquierda.',
        'Encadena replaceAll cuando necesites limpiar varios formatos, pero revisa el resultado con console.log.',
        'Prefiere charAt(indice) o texto[indice] para leer un carácter puntual, y compara siempre contra índices conocidos.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El código de barras del producto',
      codigo: 'const codigo = "ABC-12345";\nconst categoria = codigo.slice(0, 3);\nconst numero = codigo.slice(4);\nconsole.log(`Categoría: ${categoria}`);\nconsole.log(`Número: ${numero}`);\nconsole.log(`Últimos 2: ${codigo.slice(-2)}`);',
      salida: 'Categoría: ABC\nNúmero: 12345\nÚltimos 2: 45',
      explicacion: 'slice recorta tres pedazos distintos del mismo código sin modificar el original: el prefijo, el número y las últimas dos cifras.'
    },
    {
      titulo: 'Formatear el número de pedido',
      codigo: 'const pedido = 42;\nconst conCeros = pedido.toString().padStart(5, "0");\nconsole.log(`Pedido ${conCeros}`);\nconsole.log("-".repeat(15));',
      salida: 'Pedido 00042\n---------------',
      explicacion: 'padStart completa el número con ceros hasta 5 caracteres, y repeat dibuja un separador. Los tickets y listados se ven prolijos con estas dos herramientas.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Cortar el código del producto',
      dificultad: 'Fácil',
      consigna: [
        'Declara const codigo = "ABC123". Imprime tres cortes: los primeros 3 caracteres con slice(0, 3), los últimos 2 con slice(-2) y el resto desde la posición 3 con slice(3).'
      ],
      pasos: [
        'Declara la constante codigo.',
        'Aplica slice(0, 3) para los primeros tres.',
        'Aplica slice(-2) para los últimos dos.',
        'Aplica slice(3) para el resto y muestra los tres.'
      ],
      codigoInicial: '// Declara codigo y haz los tres cortes\n',
      pista: 'slice(-2) cuenta desde el final: los últimos 2 caracteres de "ABC123" son "23".',
      tests: [
        { tipo: 'output', nombre: 'Los tres cortes', esperado: ['ABC', '23', '123'], mensaje: 'slice(0, 3) da ABC, slice(-2) da 23 y slice(3) da 123.' }
      ],
      solucion: 'const codigo = "ABC123";\nconsole.log(codigo.slice(0, 3));\nconsole.log(codigo.slice(-2));\nconsole.log(codigo.slice(3));'
    },
    {
      titulo: 'replace y replaceAll, la diferencia',
      dificultad: 'Media',
      consigna: [
        'Declara const texto = "casa, casa, cocina". Imprime dos líneas: la primera con replace("casa", "hogar") y la segunda con replaceAll("casa", "hogar"). Observa la diferencia.'
      ],
      pasos: [
        'Declara la constante texto.',
        'Aplica replace("casa", "hogar") e imprime.',
        'Aplica replaceAll("casa", "hogar") e imprime.',
        'Compara las dos salidas.'
      ],
      codigoInicial: '// Declara texto, reemplaza e imprime las dos variantes\n',
      pista: 'replace cambia solo la primera aparición; replaceAll cambia todas.',
      tests: [
        { tipo: 'output', nombre: 'Las dos variantes', esperado: ['hogar, casa, cocina', 'hogar, hogar, cocina'], mensaje: 'replace cambia solo la primera "casa"; replaceAll cambia las dos.' }
      ],
      solucion: 'const texto = "casa, casa, cocina";\nconsole.log(texto.replace("casa", "hogar"));\nconsole.log(texto.replaceAll("casa", "hogar"));'
    },
    {
      titulo: 'Posiciones en la palabra banana',
      dificultad: 'Media',
      consigna: [
        'Declara const palabra = "banana". Imprime tres datos: la posición de la primera "a" con indexOf, la posición de la última "a" con lastIndexOf, y el carácter que está en la posición 2 con charAt.'
      ],
      pasos: [
        'Declara la constante palabra.',
        'Usa indexOf("a") para la primera aparición.',
        'Usa lastIndexOf("a") para la última.',
        'Usa charAt(2) para el tercer carácter y muestra todo.'
      ],
      codigoInicial: '// Declara palabra y muestra las posiciones\n',
      pista: '"banana" se indexa así: b(0) a(1) n(2) a(3) n(4) a(5).',
      tests: [
        { tipo: 'output', nombre: 'Posiciones y carácter', esperado: ['1', '5', 'n'], mensaje: 'La primera "a" está en 1, la última en 5 y el carácter de la posición 2 es "n".' }
      ],
      solucion: 'const palabra = "banana";\nconsole.log(palabra.indexOf("a"));\nconsole.log(palabra.lastIndexOf("a"));\nconsole.log(palabra.charAt(2));'
    },
    {
      titulo: 'El ticket del almacén',
      dificultad: 'Dificil',
      consigna: [
        'Construye una línea de ticket: declara const producto = "pan" y const precio = 350. Imprime la línea formateada con padEnd para rellenar el nombre con puntos hasta 16 caracteres, seguida de " $" y el precio con toFixed(2). Después imprime un separador de "=" repetido 10 veces. La línea debe quedar: pan............. $350.00'
      ],
      pasos: [
        'Declara producto y precio.',
        'Aplica producto.padEnd(16, ".") para rellenar con puntos.',
        'Concatena " $" y precio.toFixed(2).',
        'Imprime "=".repeat(10) como separador.'
      ],
      codigoInicial: '// Declara producto y precio, formatea e imprime\n',
      pista: 'producto.padEnd(16, ".") + " $" + precio.toFixed(2) rellena con 13 puntos porque "pan" tiene 3 letras.',
      tests: [
        { tipo: 'output', nombre: 'Línea y separador', esperado: ['pan............. $350.00', '=========='], mensaje: 'La línea debe tener el nombre relleno a 16 caracteres con puntos y el precio con dos decimales.' }
      ],
      solucion: 'const producto = "pan";\nconst precio = 350;\nconsole.log(producto.padEnd(16, ".") + " $" + precio.toFixed(2));\nconsole.log("=".repeat(10));'
    }
  ]
}
