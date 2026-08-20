export default {
  id: 'm4-l35',
  numero: 35,
  titulo: 'Interfaces: la forma de un objeto',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'interface', definicion: 'Una declaración que da nombre a la forma de un objeto: sus propiedades y sus tipos.' },
    { termino: 'Propiedad opcional', definicion: 'Una propiedad que puede faltar, marcada con ? después de su nombre: descuento?: number.' },
    { termino: 'readonly', definicion: 'Una propiedad que solo se puede leer: puede recibir valor al crear el objeto, pero no se reasigna.' },
    { termino: 'Compatibilidad estructural', definicion: 'Si un objeto tiene la forma declarada, sirve: no hace falta que declare "implemento tal interface".' },
    { termino: 'Reutilización', definicion: 'Declarar la forma una sola vez y usarla en variables, parámetros y retornos en todo el proyecto.' },
    { termino: 'Contrato', definicion: 'El acuerdo entre quien crea datos y quien los consume: quién sabe qué propiedades existen y de qué tipo.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es una interface?',
      parrafos: [
        'Una interface es un plano reutilizable de un objeto: le das un nombre a una forma y la usas en cuantas variables, funciones y arrays quieras. En la lección anterior escribías el plano en línea; con interfaces lo declaras una vez y lo nombras.',
        'Imagina la ficha de producto de la tienda: un modelo impreso con casilleros fijos (nombre, precio). Toda ficha que llenas sigue el mismo formato, y el cajero sabe siempre dónde está cada dato.'
      ],
      codigo: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nconst lata: Producto = { nombre: "Lata de tomate", precio: 120 };\nconsole.log(JSON.stringify(lata));',
      salida: '{"nombre":"Lata de tomate","precio":120}'
    },
    {
      titulo: 'Reutilizar la forma en funciones',
      parrafos: [
        'Lo poderoso de las interfaces aparece cuando las usas como tipo de parámetros o retornos: la función declara qué forma espera y TypeScript verifica cada llamada.',
        'Si en una llamada falta una propiedad o sobra una del tipo equivocado, el compilador te lo dice antes de ejecutar.'
      ],
      codigo: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nfunction etiqueta(producto: Producto): string {\n  return `${producto.nombre} - $${producto.precio}`;\n}\n\nconsole.log(etiqueta({ nombre: "Pan", precio: 50 }));',
      salida: 'Pan - $50'
    },
    {
      titulo: 'Propiedades opcionales (?)',
      parrafos: [
        'No todos los productos tienen todos los datos: algunos tienen descuento, otros no. Con el signo ? marcas una propiedad como opcional: puede estar o no.',
        'Al leer una propiedad opcional, TypeScript recuerda que puede ser undefined: debes verificarla antes de usarla. Es exactamente el mismo cuidado que tendrías en la vida real con un dato que puede faltar.'
      ],
      codigo: 'interface Producto {\n  nombre: string;\n  precio: number;\n  descuento?: number;\n}\n\nconst pan: Producto = { nombre: "Pan", precio: 50 };\nconsole.log(pan.descuento === undefined ? "Sin descuento" : `Descuento: ${pan.descuento}`);',
      salida: 'Sin descuento'
    },
    {
      titulo: 'readonly: solo lectura',
      parrafos: [
        'Algunas propiedades no deberían cambiar nunca: el código de barras de un producto, el ID de un pedido. Con readonly declaras que solo se pueden leer: se asignan al crear el objeto y después quedan congeladas.',
        'Si intentas reasignar una propiedad readonly, el compilador lanza un error. Es el candado de la vitrina: se mira, no se toca.'
      ],
      codigo: 'interface Producto {\n  readonly codigo: string;\n  nombre: string;\n  precio: number;\n}\n\nconst lata: Producto = { codigo: "P-01", nombre: "Lata", precio: 120 };\nconsole.log(lata.codigo);',
      salida: 'P-01'
    },
    {
      titulo: 'Compatibilidad estructural',
      parrafos: [
        'TypeScript no exige que un objeto declare su lealtad a una interface: si tiene la forma, sirve. Es lo que se llama tipado estructural o duck typing: si camina como pato y suena como pato, es un pato.',
        'En la práctica significa que puedes pasar un objeto literal o uno creado con otra interface mientras tenga las mismas propiedades (y los mismos tipos).'
      ],
      codigo: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nconst oferta = { nombre: "Cafe", precio: 200, stock: 10 };\nfunction mostrar(producto: Producto): void {\n  console.log(producto.nombre);\n}\nmostrar(oferta);',
      salida: 'Cafe'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar una propiedad al crear el objeto: falta "precio" y el compilador te lo marca. El plano no admite fichas incompletas (salvo las opcionales).',
        'Creer que las interfaces existen en el runtime: son solo una herramienta de verificación. Al compilar se borran por completo.',
        'Anotar la interface con = en vez de llaves: interface Producto = ... no existe. Eso es type (próxima lección).',
        'Usar una propiedad opcional sin verificar: leer descuento a ciegas puede ser undefined.',
        'Intentar reasignar una propiedad readonly: el compilador lo rechaza. Si necesitas cambiarla, no la declares readonly.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Declara interfaces para toda forma de objeto que repitas más de una vez.',
        'Nombra las interfaces con sustantivos claros y en singular: Producto, Pedido, Cliente.',
        'Marca con ? solo lo que realmente puede faltar: una propiedad opcional que nunca falta es confusión.',
        'Usa readonly para identificadores y datos inmutables.',
        'Define la interface cerca de donde la usas: junto a las funciones que la reciben.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El contrato del producto',
      codigo: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nfunction conIva(producto: Producto): number {\n  return producto.precio * 1.21;\n}\n\nconsole.log(conIva({ nombre: "Leche", precio: 90 }));',
      salida: '108.9',
      explicacion: 'La función declara qué forma espera (Producto) y usa sus propiedades con total confianza: el verificador garantizó que el objeto las tiene.'
    },
    {
      titulo: 'Opcional y readonly juntos',
      codigo: 'interface Ficha {\n  readonly id: number;\n  nombre: string;\n  observacion?: string;\n}\n\nconst ficha: Ficha = { id: 1, nombre: "Lata" };\nconsole.log(ficha.id, ficha.observacion);',
      salida: '1 undefined',
      explicacion: 'El id es readonly y se asigna al crear la ficha. observacion es opcional: como no se cargó, al leerla obtienes undefined, y TypeScript te lo recordará si intentas tratarla como texto.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Tu primera interface',
      dificultad: 'Fácil',
      consigna: [
        'Declara una interface Producto con las propiedades nombre: string y precio: number. Luego crea una variable lata tipada como Producto con los valores "Lata de tomate" y 120, e imprime el objeto en JSON.'
      ],
      pasos: [
        'Escribe interface Producto { ... } con las dos propiedades.',
        'Declara la variable con : Producto y asigna el objeto.',
        'Imprime con JSON.stringify.'
      ],
      codigoInicial: '// Declara la interface Producto y úsala\n',
      pista: 'const lata: Producto = { nombre: "Lata de tomate", precio: 120 };',
      tests: [
        { tipo: 'output', nombre: 'El producto en JSON', esperado: ['{"nombre":"Lata de tomate","precio":120}'], mensaje: 'El objeto debe tener nombre y precio exactos.' },
        { tipo: 'codigo', nombre: 'Interface declarada', explicacion: 'Declarar interface Producto', requerido: ['interface\\s+Producto'], mensaje: 'Debes declarar una interface llamada Producto.' },
        { tipo: 'codigo', nombre: 'Variable tipada', explicacion: 'Anotar la variable con : Producto', requerido: ['lata\\s*:\\s*Producto'], mensaje: 'La variable debe declarar su tipo con : Producto.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nconst lata: Producto = { nombre: "Lata de tomate", precio: 120 };\nconsole.log(JSON.stringify(lata));'
    },
    {
      titulo: 'Propiedades opcionales',
      dificultad: 'Media',
      consigna: [
        'Declara una interface Producto con nombre: string, precio: number y descuento opcional (descuento?: number). Crea un pan sin descuento, e imprime "Con descuento" si descuento no es undefined, o "Sin descuento" en caso contrario.'
      ],
      pasos: [
        'Marca la propiedad opcional con ?: descuento?: number.',
        'Crea el objeto sin la propiedad descuento.',
        'Verifica con === undefined antes de decidir qué imprimir.'
      ],
      codigoInicial: '// Declara la interface con descuento opcional\n',
      pista: 'if (pan.descuento === undefined) { ... } else { ... }',
      tests: [
        { tipo: 'output', nombre: 'El mensaje correcto', esperado: ['Sin descuento'], mensaje: 'El pan no tiene descuento, así que debe imprimir "Sin descuento".' },
        { tipo: 'codigo', nombre: 'Propiedad opcional', explicacion: 'Declarar descuento?: number en la interface', requerido: ['descuento\\s*\\?'], mensaje: 'La propiedad descuento debe marcarse como opcional con ?.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n  descuento?: number;\n}\n\nconst pan: Producto = { nombre: "Pan", precio: 50 };\nif (pan.descuento === undefined) {\n  console.log("Sin descuento");\n} else {\n  console.log(`Con descuento: ${pan.descuento}`);\n}'
    },
    {
      titulo: 'readonly y funciones',
      dificultad: 'Media',
      consigna: [
        'Declara una interface Producto con codigo readonly de tipo string, nombre: string y precio: number. Implementa una función etiqueta(producto: Producto) que devuelva "codigo - nombre" (por ejemplo "P-01 - Lata"). Imprime el resultado para una lata.'
      ],
      pasos: [
        'Marca la propiedad con readonly: readonly codigo: string.',
        'Escribe la función con parámetro : Producto y retorno : string.',
        'Llama con un objeto que cumpla la forma.'
      ],
      codigoInicial: '// Declara la interface con readonly y la función etiqueta\n',
      pista: 'function etiqueta(producto: Producto): string { return `${producto.codigo} - ${producto.nombre}`; }',
      tests: [
        { tipo: 'output', nombre: 'La etiqueta', esperado: ['P-01 - Lata'], mensaje: 'etiqueta debe devolver el codigo, un guión y el nombre.' },
        { tipo: 'codigo', nombre: 'readonly usado', explicacion: 'Declarar la propiedad como readonly', requerido: ['readonly'], mensaje: 'La propiedad codigo debe declararse como readonly.' },
        { tipo: 'codigo', nombre: 'Parámetro tipado', explicacion: 'La función recibe un Producto', requerido: ['producto\\s*:\\s*Producto'], mensaje: 'El parámetro de etiqueta debe anotarse con : Producto.' }
      ],
      solucion: 'interface Producto {\n  readonly codigo: string;\n  nombre: string;\n  precio: number;\n}\n\nfunction etiqueta(producto: Producto): string {\n  return `${producto.codigo} - ${producto.nombre}`;\n}\n\nconst lata: Producto = { codigo: "P-01", nombre: "Lata", precio: 120 };\nconsole.log(etiqueta(lata));'
    }
  ]
}