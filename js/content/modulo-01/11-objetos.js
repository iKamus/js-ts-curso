export default {
  id: 'm1-l11',
  numero: 11,
  titulo: 'Objetos',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Objeto', definicion: 'Una colección de pares clave: valor que describe una cosa: { nombre: "Ana", edad: 25 }.' },
    { termino: 'Propiedad', definicion: 'Cada clave de un objeto, con su valor asociado. Se accede con punto (objeto.nombre) o con corchetes (objeto["nombre"]).' },
    { termino: 'Método', definicion: 'Una propiedad cuyo valor es una función: objeto.saludar(). Es la "acción" que sabe hacer el objeto.' },
    { termino: 'Destructuring', definicion: 'Extraer propiedades de un objeto en variables en una sola línea: const { nombre, edad } = usuario.' },
    { termino: 'Spread (...) ', definicion: 'Copiar todas las propiedades de un objeto dentro de otro: { ...original, nuevo: 1 }.' },
    { termino: 'Referencia', definicion: 'Un objeto se guarda "por referencia": dos variables pueden apuntar al MISMO objeto, y modificar desde una afecta a la otra.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un objeto?',
      parrafos: [
        'Un objeto agrupa información relacionada bajo un mismo techo. Piensa en la ficha de un producto en la vidriera: nombre, precio, stock, categoría. El objeto es esa ficha: cada dato es una propiedad (clave: valor).',
        'Se crea con llaves {}. Los valores pueden ser de cualquier tipo: primitivos, arrays, otros objetos o funciones (métodos).'
      ],
      codigo: 'const producto = {\n  nombre: "Té en hebras",\n  precio: 900,\n  stock: 12\n};\nconsole.log(producto.nombre);\nconsole.log(producto["precio"]);',
      salida: 'Té en hebras\n900'
    },
    {
      titulo: 'Acceder y modificar propiedades',
      parrafos: [
        'Hay dos formas de acceder: con punto (producto.nombre), ideal cuando conocés el nombre de la propiedad, y con corchetes (producto["precio"]), necesario cuando el nombre está en una variable o tiene caracteres especiales.',
        'Para modificar, asignás como a cualquier variable: producto.precio = 950. Y las propiedades que no existen todavía se pueden agregar igual: producto.marca = "La Fábrica".'
      ],
      codigo: 'const producto = { nombre: "Té", precio: 900 };\nproducto.precio = 950;\nproducto.marca = "La Fábrica";\nconsole.log(producto);',
      salida: '{"nombre":"Té","precio":950,"marca":"La Fábrica"}'
    },
    {
      titulo: 'Métodos: las acciones del objeto',
      parrafos: [
        'Un método es una función guardada como propiedad. Representa lo que el objeto SABE hacer: el producto sabe calcular su precio con IVA. Dentro de un método, this se refiere al objeto mismo (lo verás en detalle en el módulo 2).'
      ],
      codigo: 'const producto = {\n  nombre: "Té",\n  precio: 900,\n  precioConIva() {\n    return this.precio * 1.21;\n  }\n};\nconsole.log(producto.precioConIva());',
      salida: '1089'
    },
    {
      titulo: 'Destructuring: extraer en una línea',
      parrafos: [
        'El destructuring saca propiedades del objeto y las convierte en variables locales con el MISMO nombre, en una sola línea. Es como abrir la ficha del producto y dejar cada dato sobre la mesa: ya no necesitas escribir producto.precio cada vez.'
      ],
      codigo: 'const usuario = { nombre: "Ana", edad: 25, ciudad: "Rosario" };\nconst { nombre, edad } = usuario;\nconsole.log(nombre);\nconsole.log(edad);',
      salida: 'Ana\n25'
    },
    {
      titulo: 'Spread y rest: copiar y agrupar',
      parrafos: [
        'El spread ... copia todas las propiedades de un objeto dentro de otro. Es la forma moderna de copiar sin tocar el original, y también sirve para sumar propiedades nuevas o pisar las existentes al final.',
        'El rest ... es lo contrario: al destructurar, agrupa las propiedades restantes en un nuevo objeto.'
      ],
      codigo: 'const original = { nombre: "Té", precio: 900 };\nconst copia = { ...original, stock: 5 };\nconst { nombre, ...resto } = copia;\nconsole.log(copia);\nconsole.log(resto);',
      salida: '{"nombre":"Té","precio":900,"stock":5}\n{"precio":900,"stock":5}'
    },
    {
      titulo: 'Referencias: el dato peligroso',
      parrafos: [
        'Cuando asignás un objeto a otra variable, no copiás el objeto: copiás la REFERENCIA al mismo objeto. Las dos variables apuntan a la misma ficha física. Modificar desde una, se ve desde la otra.',
        'Para copiar de verdad se usa el spread: { ...objeto }. Este concepto explica la mitad de los bugs de JavaScript: memorízalo.'
      ],
      codigo: 'const a = { valor: 1 };\nconst b = a;\nb.valor = 99;\nconsole.log(a.valor);\nconst c = { ...a };\nc.valor = 50;\nconsole.log(a.valor);',
      salida: '99\n99'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Leer una propiedad que no existe: devuelve undefined sin error (el error llega después, cuando la usas).',
        'Confundir = con === al comparar objetos: a === b compara REFERENCIAS, no contenido. Dos objetos con el mismo contenido NO son iguales.',
        'Olvidar que const no congela el objeto: producto.precio = 5 es legal aunque producto sea const (solo prohíbe reasignar la variable).',
        'Modificar el objeto original sin querer: al pasar objetos a funciones, las funciones ven el original; usa spread si necesitas una copia.',
        'Destructuring con nombre que no existe: la variable queda undefined.',
        'Método sin this: si dentro del método usas el nombre del objeto directamente, se rompe al copiar el método a otro objeto.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Agrupa datos relacionados en objetos: no uses diez variables sueltas donde un objeto deja todo claro.',
        'Nombres de propiedades descriptivos y en camelCase (precioTotal, nombreProducto).',
        'Usa destructuring para extraer y spread para copiar: código más corto y legible.',
        'Crea objetos con const y evita reasignarlos: modifica las propiedades si hace falta.',
        'Para colecciones del mismo tipo de cosas (varios productos), usa un ARRAY de objetos: es el patrón de datos más usado del lenguaje.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La ficha del producto',
      codigo: 'const producto = {\n  nombre: "Alfajor de maicena",\n  precio: 800,\n  stock: 20,\n  categorias: ["dulces", "regional"],\n  precioConIva() {\n    return this.precio * 1.21;\n  }\n};\nconst { nombre, precio } = producto;\nconsole.log(`${nombre} sale $${precio}, con IVA $${producto.precioConIva()}`);',
      salida: 'Alfajor de maicena sale $800, con IVA $968',
      explicacion: 'El objeto agrupa datos (propiedades) y comportamiento (método). El destructuring extrae nombre y precio para usarlos sin repetir producto.'
    },
    {
      titulo: 'Copia segura con spread',
      codigo: 'const listaBase = { pan: 2, leche: 1 };\nconst listaHoy = { ...listaBase, huevos: 6 };\nlistaHoy.pan = 3;\nconsole.log(listaBase);\nconsole.log(listaHoy);',
      salida: '{"pan":2,"leche":1}\n{"pan":3,"leche":1,"huevos":6}',
      explicacion: 'listaHoy nació como copia de listaBase más huevos. Al cambiar listaHoy.pan, la listaBase quedó intacta porque el spread copió, no compartió la referencia.'
    }
  ],
  ejercicios: [
    {
      titulo: 'La ficha del cliente',
      dificultad: 'Fácil',
      consigna: ['Crea un objeto cliente con las propiedades nombre ("Ana"), edad (30) y ciudad ("Córdoba"). Luego imprime su nombre con punto y su ciudad con corchetes.'],
      pasos: [
        'Crea el objeto con las tres propiedades.',
        'Imprime cliente.nombre.',
        'Imprime cliente["ciudad"].'
      ],
      codigoInicial: '// Crea el objeto cliente y haz las dos impresiones\n',
      pista: 'Los corchetes van con el nombre de la propiedad entre comillas: cliente["ciudad"].',
      tests: [
        { tipo: 'output', nombre: 'Nombre y ciudad', esperado: ['Ana', 'Córdoba'], mensaje: 'Debe imprimirse el nombre (con punto) y la ciudad (con corchetes).' },
        { tipo: 'valor', nombre: 'cliente existe', expr: 'typeof cliente', esperado: 'object', mensaje: 'Debe existir una variable cliente que sea un objeto.' }
      ],
      solucion: 'const cliente = { nombre: "Ana", edad: 30, ciudad: "Córdoba" };\nconsole.log(cliente.nombre);\nconsole.log(cliente["ciudad"]);'
    },
    {
      titulo: 'Método que calcula',
      dificultad: 'Fácil',
      consigna: ['Crea un objeto caja con la propiedad total (1000) y un método agregar(monto) que sume el monto a this.total. Llama a agregar(500) y luego imprime caja.total.'],
      pasos: [
        'El objeto tiene total: 1000.',
        'El método modifica this.total += monto.',
        'Llama al método y luego imprime el total.'
      ],
      codigoInicial: '// Crea el objeto con su método, llama e imprime\n',
      pista: 'Dentro del método, this.total += monto; — después de agregar(500), total vale 1500.',
      tests: [
        { tipo: 'output', nombre: 'Total actualizado', esperado: ['1500'], mensaje: '1000 + 500 = 1500. El método debe modificar this.total.' }
      ],
      solucion: 'const caja = {\n  total: 1000,\n  agregar(monto) {\n    this.total += monto;\n  }\n};\ncaja.agregar(500);\nconsole.log(caja.total);'
    },
    {
      titulo: 'Destructuring de la ficha',
      dificultad: 'Media',
      consigna: ['Dado el objeto const usuario = { nombre: "Luis", edad: 40, ciudad: "Mendoza" }, usa destructuring para extraer nombre y ciudad, e imprime un mensaje con ambas usando template literal.'],
      pasos: [
        'Extrae con const { nombre, ciudad } = usuario.',
        'Imprime `Hola, soy ${nombre} y vivo en ${ciudad}`.'
      ],
      codigoInicial: '// Destructura el objeto e imprime el mensaje\n',
      pista: 'El destructuring crea las variables automáticamente con los nombres de las propiedades.',
      tests: [
        { tipo: 'output', nombre: 'Mensaje con destructuring', esperado: ['Hola, soy Luis y vivo en Mendoza'], mensaje: 'El mensaje debe usar las variables extraídas, no las propiedades del objeto directamente.' }
      ],
      solucion: 'const usuario = { nombre: "Luis", edad: 40, ciudad: "Mendoza" };\nconst { nombre, ciudad } = usuario;\nconsole.log(`Hola, soy ${nombre} y vivo en ${ciudad}`);'
    },
    {
      titulo: 'Copia sin referencia',
      dificultad: 'Dificil',
      consigna: ['Crea const original = { nombre: "Té", precio: 900 }. Crea una copia con spread, cámbiale el precio a 500 a la copia, e imprime ambos objetos para demostrar que el original quedó intacto.'],
      pasos: [
        'Crea el original.',
        'const copia = { ...original }.',
        'copia.precio = 500.',
        'Imprime original y luego copia.'
      ],
      codigoInicial: '// Crea el original, la copia y las impresiones\n',
      pista: 'Con spread, cambiar la copia NO afecta al original. El original debe seguir con 900.',
      tests: [
        { tipo: 'output', nombre: 'Original intacto y copia cambiada', esperado: ['{"nombre":"Té","precio":900}', '{"nombre":"Té","precio":500}'], mensaje: 'El original debe imprimirse con precio 900 y la copia con 500.' }
      ],
      solucion: 'const original = { nombre: "Té", precio: 900 };\nconst copia = { ...original };\ncopia.precio = 500;\nconsole.log(original);\nconsole.log(copia);'
    }
  ]
}