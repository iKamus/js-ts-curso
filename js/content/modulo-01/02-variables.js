export default {
  id: 'm1-l02',
  numero: 2,
  titulo: 'Variables: var, let y const',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Variable', definicion: 'Un espacio en la memoria de la computadora con un nombre, donde guardas un valor que puedes consultar o cambiar.' },
    { termino: 'Declarar', definicion: 'Crear una variable con su nombre (y opcionalmente su valor inicial).' },
    { termino: 'Asignar', definicion: 'Guardar un valor dentro de una variable usando el signo =.' },
    { termino: 'Scope (ámbito)', definicion: 'La zona del código donde una variable existe y puede usarse.' },
    { termino: 'Hoisting', definicion: 'El comportamiento de JavaScript que "eleva" las declaraciones de var al inicio de su ámbito antes de ejecutarse.' },
    { termino: 'Mutable', definicion: 'Que puede cambiar su valor después de crearse. let y var crean variables mutables; const crea constantes.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es una variable?',
      parrafos: [
        'Una variable es como una caja con etiqueta. Le pones un nombre a la caja (por ejemplo, precio) y dentro guardas un valor (por ejemplo, 150). Cuando en tu programa escribes precio, JavaScript va a la caja y saca lo que hay dentro.',
        'Sin variables, tu programa solo podría trabajar con valores sueltos y no recordaría nada. Con variables puedes calcular, comparar, acumular y reutilizar datos a lo largo de tu código.'
      ],
      codigo: 'let precio = 150;\nconsole.log(precio);\nprecio = 180;\nconsole.log(precio);',
      salida: '150\n180',
      codigo2: null
    },
    {
      titulo: 'Las tres formas de crear variables',
      parrafos: [
        'JavaScript ofrece tres palabras clave para crear variables: var (la vieja), let (para valores que cambian) y const (para valores fijos). Hoy la recomendación es clara: usa const por defecto, let cuando el valor vaya a cambiar, y olvídate de var.',
        'La diferencia esencial entre let y const: let permite reasignar el valor, const no. Una vez que const guarda un valor, no puedes cambiarle el contenido con un nuevo signo = (lo verás en detalle al final de esta lección).'
      ],
      codigo: 'const nombre = "Ana";\nlet edad = 25;\nconsole.log(nombre, edad);\nedad = 26;\nconsole.log(nombre, edad);',
      salida: 'Ana 25\nAna 26'
    },
    {
      titulo: 'Comparativa: var, let y const',
      parrafos: [
        'Esta tabla resume las diferencias clave. El scope (ámbito) lo vas a dominar en la lección 9, pero adelanto lo esencial: let y const viven dentro del bloque donde se declaran (un bloque es lo que está entre llaves {}), mientras que var ignora los bloques y se escapa al ámbito de la función.'
      ],
      tabla: {
        columnas: ['Característica', 'var', 'let', 'const'],
        filas: [
          ['Se puede reasignar', 'Sí', 'Sí', 'No'],
          ['Se puede redeclarar', 'Sí (peligroso)', 'No', 'No'],
          ['Ámbito de bloque', 'No (se escapa)', 'Sí', 'Sí'],
          ['Hoisting', 'Se eleva y queda undefined', 'Se eleva pero no se puede usar antes', 'Se eleva pero no se puede usar antes'],
          ['Uso recomendado', 'Nunca', 'Cuando el valor cambia', 'Por defecto']
        ]
      }
    },
    {
      titulo: 'Hoisting: cuando la declaración "sube"',
      parrafos: [
        'JavaScript, antes de ejecutar, hace un barrido y "eleva" las declaraciones de var al inicio de su ámbito, inicializándolas con undefined. Por eso esto no da error:',
        'Con let y const, la declaración también se eleva, pero no se inicializa: queda en una "zona muerta temporal" y usarla antes de su línea da un error claro. Esta diferencia hace que let y const sean más seguras, porque detectan errores en lugar de esconderlos.'
      ],
      codigo: 'console.log(mensaje);\nvar mensaje = "hola";',
      salida: 'undefined',
      codigo2: null
    },
    {
      titulo: 'const y los objetos (adelanto)',
      parrafos: [
        'Cuidado con una trampa famosa: const no hace inmutable el contenido de objetos y arrays. Si guardas un objeto en una constante, no puedes reasignar la constante a otro objeto, pero sí puedes modificar propiedades del objeto. Esto lo retomamos en las lecciones de objetos y arrays.'
      ],
      codigo: 'const usuario = { nombre: "Ana" };\nusuario.nombre = "Beto";\nconsole.log(usuario.nombre);',
      salida: 'Beto'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Redeclarar con let: let x = 1; let x = 2; → error "Identifier x has already been declared".',
        'Reasignar una const: const PI = 3.14; PI = 3; → error "Assignment to constant variable".',
        'Usar la variable antes de declararla con let/const → error "Cannot access before initialization" (zona muerta temporal).',
        'Confundir = (asignación) con == o === (comparación). El signo = guarda un valor; nunca lo uses para comparar.',
        'Olvidar la declaración: escribir precio = 5 sin let ni const crea una variable global accidental y frágil.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa const por defecto: hace tu código más predecible y evita cambios accidentales.',
        'Usa let solo cuando sepas que el valor cambiará (contadores, acumuladores, estado que muta).',
        'No uses var: sus reglas de ámbito confusas causan bugs difíciles de encontrar.',
        'Nombres descriptivos y en camelCase: precioTotal, edadUsuario, nombreDelCliente. Evita x, temp o datos.',
        'Declara y asigna en la misma línea: const nombre = "Ana", no const nombre; nombre = "Ana".'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Una caja que cambia de contenido',
      codigo: 'let caja = "manzanas";\nconsole.log(caja);\ncaja = "peras";\nconsole.log(caja);',
      salida: 'manzanas\nperas',
      explicacion: 'La variable caja guardó primero "manzanas" y después cambió a "peras". Con let ese cambio es legal. Fíjate que al reasignar NO se vuelve a escribir let: solo caja = "peras".'
    },
    {
      titulo: 'const no acepta reasignación',
      codigo: 'const ciudad = "Córdoba";\nconsole.log(ciudad);\n// ciudad = "Mendoza"; // esto daría un error',
      salida: 'Córdoba',
      explicacion: 'La línea comentada está descartada (empieza con //). Si la descomentaras, el programa fallaría con "Assignment to constant variable", porque const no permite cambiar el valor guardado.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Presenta a un cliente',
      dificultad: 'Fácil',
      consigna: ['La tienda necesita una ficha inicial de cliente. Declara una constante llamada nombre con el valor "Ana" y otra llamada ciudad con el valor "Buenos Aires". Luego imprime ambas en una sola línea.'],
      pasos: [
        'Declara const nombre = "Ana".',
        'Declara const ciudad = "Buenos Aires".',
        'Imprime ambas con un solo console.log separándolas con una coma.'
      ],
      codigoInicial: '// Declara las dos constantes y luego imprime ambas\n',
      pista: 'Un solo console.log(nombre, ciudad) imprime las dos cosas en la misma línea, separadas por un espacio.',
      tests: [
        { tipo: 'output', nombre: 'Ficha del cliente', esperado: ['Ana Buenos Aires'], mensaje: 'El console.log(nombre, ciudad) imprime: Ana Buenos Aires.' },
        { tipo: 'valor', nombre: 'nombre existe', expr: 'typeof nombre', esperado: 'string', mensaje: 'La constante nombre debe existir y contener texto.' },
        { tipo: 'valor', nombre: 'ciudad existe', expr: 'typeof ciudad', esperado: 'string', mensaje: 'La constante ciudad debe existir y contener texto.' }
      ],
      solucion: 'const nombre = "Ana";\nconst ciudad = "Buenos Aires";\nconsole.log(nombre, ciudad);'
    },
    {
      titulo: 'Un contador que cambia',
      dificultad: 'Fácil',
      consigna: ['En la caja registradora se cuenta la cantidad de clientes. Declara un contador con let que empiece en 0, luego asígnale 1, después 2, y finalmente imprime su valor.'],
      pasos: [
        'Declara let contador = 0.',
        'Reasigna contador = 1 (sin repetir let).',
        'Reasigna contador = 2.',
        'Imprime el valor final.'
      ],
      codigoInicial: '// Declara el contador, reasínalo dos veces e imprime el valor final\n',
      pista: 'Al reasignar no vuelves a escribir let. Solo el nombre y el nuevo valor: contador = 1.',
      tests: [
        { tipo: 'output', nombre: 'Valor final del contador', esperado: ['2'], mensaje: 'El valor impreso debe ser 2, el último que asignaste.' },
        { tipo: 'valor', nombre: 'contador es un número', expr: 'typeof contador', esperado: 'number', mensaje: 'El contador debe guardar un número.' },
        { tipo: 'valor', nombre: 'contador vale 2', expr: 'contador', esperado: 2, mensaje: 'La variable contador debe valer exactamente 2 al final.' }
      ],
      solucion: 'let contador = 0;\ncontador = 1;\ncontador = 2;\nconsole.log(contador);'
    },
    {
      titulo: 'El precio de la torta',
      dificultad: 'Media',
      consigna: ['La panadería vende tortas a 1500. Declara una constante llamada PRECIO con el valor 1500 y otra llamada cantidad con el valor 3. Luego calcula e imprime el costo total (precio multiplicado por cantidad).'],
      pasos: [
        'Declara const PRECIO = 1500.',
        'Declara const cantidad = 3.',
        'Imprime PRECIO * cantidad.'
      ],
      codigoInicial: '// Declara las constantes y calcula el total\n',
      pista: 'La multiplicación se escribe con el asterisco: PRECIO * cantidad. Puedes imprimirla directamente dentro del console.log.',
      tests: [
        { tipo: 'output', nombre: 'Costo total', esperado: ['4500'], mensaje: '1500 * 3 es 4500. Imprime solo el resultado del cálculo.' },
        { tipo: 'valor', nombre: 'PRECIO existe', expr: 'PRECIO', esperado: 1500, mensaje: 'Debes declarar la constante PRECIO con el valor 1500.' },
        { tipo: 'valor', nombre: 'cantidad existe', expr: 'cantidad', esperado: 3, mensaje: 'Debes declarar la constante cantidad con el valor 3.' }
      ],
      solucion: 'const PRECIO = 1500;\nconst cantidad = 3;\nconsole.log(PRECIO * cantidad);'
    }
  ]
}