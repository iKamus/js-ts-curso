export default {
  id: 'm3-l30',
  numero: 30,
  titulo: 'LocalStorage y SessionStorage',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'LocalStorage', definicion: 'Almacenamiento del navegador que sobrevive al cierre: tus datos quedan guardados para la próxima visita.' },
    { termino: 'SessionStorage', definicion: 'Almacenamiento que vive solo durante la pestaña abierta: se borra al cerrarla.' },
    { termino: 'setItem', definicion: 'Guardar un valor: localStorage.setItem("clave", "valor"). Todo se guarda como TEXTO.' },
    { termino: 'getItem', definicion: 'Leer un valor: localStorage.getItem("clave"). Devuelve null si la clave no existe.' },
    { termino: 'removeItem', definicion: 'Borrar una clave: localStorage.removeItem("clave").' },
    { termino: 'clear', definicion: 'Borrar TODO el almacenamiento de ese origen: localStorage.clear().' },
    { termino: 'Serializar', definicion: 'Convertir datos complejos a texto. Para guardar objetos/arrays se usa JSON.stringify y JSON.parse.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es localStorage?',
      parrafos: [
        'localStorage es la memoria persistente del navegador: guardás un dato hoy, cerrás la pestaña, volvés mañana y el dato sigue ahí. Es el "cuaderno de notas" de la tienda: anotás las tareas pendientes y al abrir mañana las seguís viendo.',
        'Se usa con métodos simples: setItem para guardar, getItem para leer, removeItem para borrar, clear para vaciar todo. Regla de oro: TODO se guarda como texto. Los números y objetos deben convertirse.'
      ],
      codigo: 'localStorage.setItem("nombre", "Ana");\nconsole.log(localStorage.getItem("nombre"));\nlocalStorage.setItem("cantidad", 5);\nconsole.log(localStorage.getItem("cantidad"));\nconsole.log(typeof localStorage.getItem("cantidad"));',
      salida: 'Ana\n5\nstring'
    },
    {
      titulo: 'Guardar objetos: el dúo JSON',
      parrafos: [
        'Para guardar objetos o arrays, el texto no alcanza: primero los convertís con JSON.stringify (objeto → texto) y al leerlos los recuperás con JSON.parse (texto → objeto). Es el patrón estándar de toda app con persistencia.'
      ],
      codigo: 'const carrito = ["pan", "leche"];\nlocalStorage.setItem("carrito", JSON.stringify(carrito));\nconst recuperado = JSON.parse(localStorage.getItem("carrito"));\nconsole.log(recuperado);\nconsole.log(recuperado.length);',
      salida: '["pan","leche"]\n2'
    },
    {
      titulo: 'SessionStorage y la diferencia',
      parrafos: [
        'sessionStorage tiene la MISMA API que localStorage, pero su vida es la de la pestaña: se borra al cerrarla. Es útil para datos temporales: un borrador, un estado de sesión, algo que no debería sobrevivir.',
        'Tabla mental: localStorage = caja fuerte (persiste), sessionStorage = pizarrón de la jornada (se borra al cerrar).'
      ],
      tabla: {
        columnas: ['Característica', 'localStorage', 'sessionStorage'],
        filas: [
          ['Duración', 'Persiste hasta que se borre', 'Se borra al cerrar la pestaña'],
          ['Límite típico', '5 MB aprox.', '5 MB aprox.'],
          ['Compartido entre pestañas', 'Sí (mismo origen)', 'No, cada pestaña tiene el suyo'],
          ['Uso típico', 'Preferencias, progreso, carritos', 'Datos temporales de la sesión']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Guardar objetos sin JSON.stringify: localStorage guarda "[object Object]". Siempre serializa.',
        'Olvidar JSON.parse al leer: recuperás texto, no el objeto. Las funciones del objeto "original" no existen.',
        'Sumar números guardados: "5" + 2 da "52". Convierte con Number antes de operar.',
        'Leer una clave inexistente: getItem devuelve null; guarda el null en una variable y se cae al usarla. Maneja el caso "no hay nada guardado".',
        'Olvidar que getItem SOLO devuelve texto: incluso los booleanos se guardan como "true" (texto).'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Define nombres de clave claros y constantes: const CLAVE_CARRITO = "carrito".',
        'Siempre el dúo JSON.stringify/JSON.parse para datos complejos.',
        'Al leer, verifica el null: const guardado = JSON.parse(localStorage.getItem(CLAVE) ?? "[]").',
        'Separa la lógica de guardado en funciones (guardarCarrito, cargarCarrito): testearlo y reutilizarlo es fácil.',
        'No guardes datos sensibles (contraseñas) en localStorage: es accesible desde cualquier script de la página.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Guardar y recuperar un carrito',
      codigo: 'const CLAVE = "carrito";\nconst carrito = ["pan", "leche", "café"];\nlocalStorage.setItem(CLAVE, JSON.stringify(carrito));\nconst recuperado = JSON.parse(localStorage.getItem(CLAVE));\nconsole.log(`Productos: ${recuperado.length}`);\nconsole.log(recuperado[0]);',
      salida: 'Productos: 3\npan',
      explicacion: 'El array se serializa con JSON.stringify antes de guardar y se reconstruye con JSON.parse al leer. Sin ese paso, guardarías "[object Object]" o un texto inútil.'
    },
    {
      titulo: 'El contador de visitas',
      codigo: 'const CLAVE = "visitas";\nconst visitas = Number(localStorage.getItem(CLAVE) ?? 0) + 1;\nlocalStorage.setItem(CLAVE, visitas);\nconsole.log(`Visitas: ${visitas}`);',
      salida: 'Visitas: 1',
      explicacion: 'Se lee el valor guardado (o 0 si es la primera vez, gracias a ??), se convierte con Number, se suma 1 y se vuelve a guardar. En la próxima visita diría Visitas: 2.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Guardar y leer un nombre',
      dificultad: 'Fácil',
      consigna: [
        'Guarda el nombre "Ana" en localStorage con la clave "nombre". Luego léelo y compáralo con "Ana" para confirmar que se guardó, imprimiendo el resultado de la comparación.'
      ],
      pasos: [
        'setItem("nombre", "Ana").',
        'getItem("nombre") y compáralo con === "Ana".',
        'Imprime el booleano resultante.'
      ],
      codigoInicial: '// Guarda el nombre, léelo y compara\n',
      pista: 'console.log(localStorage.getItem("nombre") === "Ana") → true.',
      tests: [
        { tipo: 'output', nombre: 'La comparación', esperado: ['true'], mensaje: 'El valor guardado y leído debe ser exactamente "Ana".' }
      ],
      solucion: 'localStorage.setItem("nombre", "Ana");\nconsole.log(localStorage.getItem("nombre") === "Ana");'
    },
    {
      titulo: 'Guardar un carrito',
      dificultad: 'Media',
      consigna: [
        'Declara el array carrito = ["pan", "leche"] y guárdalo en localStorage con la clave "carrito" usando JSON.stringify. Luego recupéralo con JSON.parse y muestra la cantidad de productos.'
      ],
      pasos: [
        'setItem con JSON.stringify(carrito).',
        'getItem y JSON.parse.',
        'Imprime la cantidad (length).'
      ],
      codigoInicial: '// Guarda el carrito y recupéralo\n',
      pista: 'const recuperado = JSON.parse(localStorage.getItem("carrito"));',
      tests: [
        { tipo: 'output', nombre: 'Cantidad recuperada', esperado: ['2'], mensaje: 'El carrito recuperado debe tener 2 productos.' },
        { tipo: 'valor', nombre: 'recuperado es un array', expr: 'Array.isArray(recuperado)', esperado: true, mensaje: 'La variable recuperado debe ser un array real (JSON.parse devuelve el array).' }
      ],
      solucion: 'const carrito = ["pan", "leche"];\nlocalStorage.setItem("carrito", JSON.stringify(carrito));\nconst recuperado = JSON.parse(localStorage.getItem("carrito"));\nconsole.log(recuperado.length);'
    },
    {
      titulo: 'Contador de visitas',
      dificultad: 'Dificil',
      consigna: [
        'Implementa un contador de visitas en localStorage: lee la clave "visitas", súmale 1 (convierte con Number, y si no hay nada guardado usa 0), guarda el nuevo valor e imprime "Visitas: N".'
      ],
      pasos: [
        'Lee con getItem y usa ?? 0 para el primer caso.',
        'Convierte con Number y suma 1.',
        'Guarda con setItem e imprime.'
      ],
      codigoInicial: '// Implementa el contador de visitas\n',
      pista: 'const visitas = Number(localStorage.getItem("visitas") ?? 0) + 1;',
      tests: [
        { tipo: 'output', nombre: 'Primera visita', esperado: ['Visitas: 1'], mensaje: 'En la primera ejecución, sin nada guardado, el contador debe arrancar en 1.' },
        { tipo: 'valor', nombre: 'Quedó guardado', expr: 'Number(localStorage.getItem("visitas"))', esperado: 1, mensaje: 'El valor 1 debe quedar guardado en la clave "visitas".' }
      ],
      solucion: 'const visitas = Number(localStorage.getItem("visitas") ?? 0) + 1;\nlocalStorage.setItem("visitas", visitas);\nconsole.log(`Visitas: ${visitas}`);'
    }
  ]
}

