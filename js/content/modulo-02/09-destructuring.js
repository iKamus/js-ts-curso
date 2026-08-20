export default {
  id: 'm2-l22',
  numero: 22,
  titulo: 'Destructuring: desempacar arrays y objetos',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Destructuring', definicion: 'Extraer valores de un array u objeto en variables con una sintaxis compacta: const [a, b] = lista.' },
    { termino: 'Desempaquetar', definicion: 'La idea mental: abrir la caja (array u objeto) y sacar cada valor a su propia variable.' },
    { termino: 'Valor por defecto', definicion: 'El valor que se usa si la posición o propiedad no existe: const { precio = 100 } = producto.' },
    { termino: 'Renombrado', definicion: 'Guardar una propiedad con otro nombre: const { nombre: titulo } = producto crea la variable titulo.' },
    { termino: 'Omitir', definicion: 'Saltar posiciones del array usando comas vacías: const [a, , c] = [1, 2, 3].' },
    { termino: 'Parámetros desestructurados', definicion: 'Desestructurar directo en los parámetros de una función: ({ nombre, precio }) => ...' },
    { termino: 'Resto con rest', definicion: 'Quedarte con el resto de elementos: const [primero, ...resto] = lista.' }
  ],
  secciones: [
    {
      titulo: 'Desempacar en variables',
      parrafos: [
        'En vez de escribir const primero = lista[0]; const segundo = lista[1];, el destructuring te deja extraer en una sola línea: const [primero, segundo] = lista. Es como abrir la caja del pedido y sacar cada producto a su propia estantería.',
        'Funciona con arrays (por posición) y con objetos (por nombre de propiedad). El lado izquierdo es un "patrón" que imita la forma del dato.'
      ],
      codigo: 'const puntos = [3, 8];\nconst [primero, segundo] = puntos;\nconsole.log(primero);\nconsole.log(segundo);',
      salida: '3\n8'
    },
    {
      titulo: 'Destructuring de objetos',
      parrafos: [
        'En objetos, las variables se nombran igual que las propiedades, y el orden no importa: const { nombre, precio } = producto. Es la forma más cómoda de trabajar con objetos en todo JavaScript moderno.'
      ],
      codigo: 'const producto = { nombre: "pan", precio: 350 };\nconst { nombre, precio } = producto;\nconsole.log(`${nombre} cuesta ${precio}`);',
      salida: 'pan cuesta 350'
    },
    {
      titulo: 'Valores por defecto y renombrado',
      parrafos: [
        'Si la propiedad no existe, puedes poner un valor por defecto: const { precio = 100 } = producto. Si la propiedad existe, se usa la real y el defecto se ignora.',
        'Con el renombrado cambias el nombre de la variable: const { nombre: titulo } = producto crea la variable titulo con el valor de nombre. Los dos se pueden combinar: const { precio: costo = 0 } = producto.'
      ],
      codigo: 'const producto = { nombre: "pan" };\nconst { nombre, precio = 100 } = producto;\nconsole.log(nombre);\nconsole.log(precio);\nconst { nombre: titulo } = producto;\nconsole.log(titulo);',
      salida: 'pan\n100\npan'
    },
    {
      titulo: 'Trucos útiles: omitir, rest y parámetros',
      parrafos: [
        'En arrays, las comas vacías saltan posiciones: const [primero, , tercero] = lista. Combinado con rest te quedas con el resto: const [primero, ...resto] = lista.',
        'En funciones, puedes desestructurar los parámetros directamente: ({ nombre, precio }) => ... recibe el objeto y ya tiene las variables listas.'
      ],
      codigo: 'const fila = ["ana", "luis", "carla"];\nconst [primera, ...demas] = fila;\nconsole.log(primera);\nconsole.log(demas);\nconst presentar = ({ nombre, precio }) => `${nombre}: $${precio}`;\nconsole.log(presentar({ nombre: "pan", precio: 350 }));',
      salida: 'ana\n["luis","carla"]\npan: $350'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Desestructurar undefined: const { precio } = undefined revienta con TypeError. Verifica que el objeto exista antes.',
        'Confundir el orden en arrays: el destructuring de arrays es POR POSICIÓN, no por nombre. [b, a] intercambia los valores.',
        'Olvidar que el renombrado cambia la variable, no la propiedad: const { nombre: titulo } NO crea una variable llamada nombre.',
        'Poner llaves donde van corchetes: los arrays se desestructuran con [] y los objetos con {}.',
        'Desestructurar sin valor por defecto y esperar undefined: si la propiedad no existe, la variable queda undefined (a menos que definas el defecto).'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa destructuring en parámetros de funciones que reciben objetos: ({ nombre, precio }) => ... reduce el código a la mitad.',
        'Define valores por defecto para propiedades opcionales: const { stock = 0 } = producto.',
        'Usa el renombrado para dar contexto: const { precio: precioUnitario } = producto.',
        'Con rest, el resto siempre es un array: const [primero, ...resto] = lista.',
        'No desestructures en exceso: dos o tres variables valen la pena; para muchos datos, trabaja con el objeto.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Cambiar variables con destructuring',
      codigo: 'let a = 1;\nlet b = 2;\n[a, b] = [b, a];\nconsole.log(a);\nconsole.log(b);',
      salida: '2\n1',
      explicacion: 'El lado derecho crea el array [2, 1] y el lado izquierdo reparte los valores en las variables: a pasa a valer 2 y b, 1. Intercambio en una línea.'
    },
    {
      titulo: 'Desestructurar en los parámetros',
      codigo: 'const mostrar = ({ nombre, precio, stock = 0 }) => {\n  console.log(`${nombre} - $${precio} (stock: ${stock})`);\n};\nmostrar({ nombre: "leche", precio: 500 });\nmostrar({ nombre: "té", precio: 250, stock: 4 });',
      salida: 'leche - $500 (stock: 0)\nté - $250 (stock: 4)',
      explicacion: 'La función desestructura el objeto que recibe. stock usa el valor por defecto 0 cuando el objeto no lo trae.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Desempacar el primer par',
      dificultad: 'Fácil',
      consigna: [
        'Declara const par = ["pan", "leche"]. Usa destructuring de arrays para crear las variables primero y segundo, e imprime ambas en ese orden.'
      ],
      pasos: [
        'Declara el array par.',
        'Desestructura con const [primero, segundo] = par.',
        'Imprime primero y luego segundo.'
      ],
      codigoInicial: '// Declara par y desestructura\n',
      pista: 'const [primero, segundo] = par; asigna por posición: primero es "pan".',
      tests: [
        { tipo: 'output', nombre: 'Las dos variables', esperado: ['pan', 'leche'], mensaje: 'primero debe ser "pan" y segundo "leche".' },
        { tipo: 'valor', nombre: 'primero y segundo existen', expr: 'primero + "|" + segundo', esperado: 'pan|leche', mensaje: 'Las variables primero y segundo deben existir con los valores del array.' }
      ],
      solucion: 'const par = ["pan", "leche"];\nconst [primero, segundo] = par;\nconsole.log(primero);\nconsole.log(segundo);'
    },
    {
      titulo: 'El objeto con valor por defecto',
      dificultad: 'Media',
      consigna: [
        'Declara const producto = { nombre: "pan" }. Desestructura nombre y precio, pero con precio por defecto 100. Imprime nombre y luego precio.'
      ],
      pasos: [
        'Declara el objeto producto sin precio.',
        'Desestructura con const { nombre, precio = 100 } = producto.',
        'Imprime nombre y luego precio.'
      ],
      codigoInicial: '// Declara producto y desestructura con defecto\n',
      pista: 'Como el objeto no tiene precio, el valor por defecto 100 se usa.',
      tests: [
        { tipo: 'output', nombre: 'Nombre y precio por defecto', esperado: ['pan', '100'], mensaje: 'nombre es "pan" y precio toma el valor por defecto 100.' }
      ],
      solucion: 'const producto = { nombre: "pan" };\nconst { nombre, precio = 100 } = producto;\nconsole.log(nombre);\nconsole.log(precio);'
    },
    {
      titulo: 'Renombrar propiedades',
      dificultad: 'Media',
      consigna: [
        'Declara const producto = { nombre: "pan", precio: 350 }. Desestructura nombre como articulo y precio como costo, e imprime articulo y costo en ese orden.'
      ],
      pasos: [
        'Declara el objeto producto.',
        'Desestructura con renombrado: const { nombre: articulo, precio: costo } = producto.',
        'Imprime articulo y luego costo.'
      ],
      codigoInicial: '// Declara producto y desestructura renombrando\n',
      pista: 'En el patrón, la propiedad va a la izquierda de los dos puntos y la variable nueva a la derecha: nombre: articulo.',
      tests: [
        { tipo: 'output', nombre: 'Variables renombradas', esperado: ['pan', '350'], mensaje: 'articulo vale "pan" y costo vale 350.' },
        { tipo: 'valor', nombre: 'las variables existen', expr: 'typeof articulo + "|" + typeof costo', esperado: 'string|number', mensaje: 'Deben existir las variables articulo (string) y costo (number).' }
      ],
      solucion: 'const producto = { nombre: "pan", precio: 350 };\nconst { nombre: articulo, precio: costo } = producto;\nconsole.log(articulo);\nconsole.log(costo);'
    },
    {
      titulo: 'Presentar con parámetros desestructurados',
      dificultad: 'Dificil',
      consigna: [
        'Escribe una función flecha llamada presentar que reciba un objeto y lo desestructure en sus parámetros: nombre y edad. Debe devolver el texto "Ana tiene 30" (el nombre y la edad del objeto). Prueba presentar({ nombre: "Ana", edad: 30 }) e imprime el resultado.'
      ],
      pasos: [
        'Define presentar como flecha con parámetro desestructurado ({ nombre, edad }).',
        'Devuelve `${nombre} tiene ${edad}`.',
        'Llama con el objeto de Ana e imprime el resultado.'
      ],
      codigoInicial: '// Define presentar con destructuring en los parámetros y pruébala\n',
      pista: 'const presentar = ({ nombre, edad }) => `${nombre} tiene ${edad}`;',
      tests: [
        { tipo: 'output', nombre: 'La presentación', esperado: ['Ana tiene 30'], mensaje: 'La función debe devolver el texto con el nombre y la edad del objeto.' },
        { tipo: 'valor', nombre: 'presentar es función', expr: 'typeof presentar', esperado: 'function', mensaje: 'Debe existir la función presentar.' }
      ],
      solucion: 'const presentar = ({ nombre, edad }) => `${nombre} tiene ${edad}`;\nconsole.log(presentar({ nombre: "Ana", edad: 30 }));'
    }
  ]
}
