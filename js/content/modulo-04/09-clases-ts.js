export default {
  id: 'm4-l40',
  numero: 40,
  titulo: 'Clases en TypeScript',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Clase tipada', definicion: 'Una fábrica de objetos donde cada propiedad y método declara sus tipos desde el inicio.' },
    { termino: 'Constructor', definicion: 'El método que se ejecuta al crear una instancia: recibe los datos iniciales y prepara el objeto.' },
    { termino: 'public', definicion: 'El modificador por defecto: la propiedad o método es accesible desde cualquier parte.' },
    { termino: 'private', definicion: 'El modificador que esconde: la propiedad solo es accesible dentro de la propia clase.' },
    { termino: 'readonly', definicion: 'El modificador que congela: la propiedad se asigna una vez y después solo se lee.' },
    { termino: 'Método tipado', definicion: 'Una función dentro de la clase con parámetros y retorno declarados: etiqueta(): string.' }
  ],
  secciones: [
    {
      titulo: 'Propiedades y métodos con tipos',
      parrafos: [
        'En una clase de TypeScript, cada propiedad declara su tipo en el cuerpo de la clase, y cada método declara parámetros y retorno. Nada queda a la imaginación: el plano de la fábrica es completo.',
        'Piensa en el molde de las latas de la tienda: el molde sabe que todas llevan etiqueta (string) y contenido (number). Cada instancia es una lata producida por ese molde.'
      ],
      codigo: 'class Producto {\n  nombre: string;\n  precio: number;\n\n  constructor(nombre: string, precio: number) {\n    this.nombre = nombre;\n    this.precio = precio;\n  }\n\n  etiqueta(): string {\n    return `${this.nombre} - $${this.precio}`;\n  }\n}\n\nconst lata = new Producto("Lata de tomate", 120);\nconsole.log(lata.etiqueta());',
      salida: 'Lata de tomate - $120'
    },
    {
      titulo: 'El constructor tipado',
      parrafos: [
        'El constructor es el encargado de recibir los datos iniciales. Sus parámetros se tipan como los de cualquier función: al crear una instancia con new, TypeScript verifica que pases los argumentos correctos.',
        'Si el constructor pide (nombre: string, precio: number), new Producto("lata") o new Producto("lata", "caro") son errores de compilación.'
      ],
      codigo: 'class Pedido {\n  numero: number;\n  cliente: string;\n\n  constructor(numero: number, cliente: string) {\n    this.numero = numero;\n    this.cliente = cliente;\n  }\n}\n\nconst pedido = new Pedido(101, "Ana");\nconsole.log(pedido.cliente, pedido.numero);',
      salida: 'Ana 101'
    },
    {
      titulo: 'public: todo visible por defecto',
      parrafos: [
        'Sin modificador, las propiedades son public: accesibles desde cualquier parte del programa. Es el comportamiento natural y el más usado: el cajero puede leer el precio de cualquier producto.',
        'El modificador existe para declararlo explícitamente, aunque sea el valor por defecto. La mayoría del código ni lo escribe.'
      ],
      codigo: 'class Producto {\n  public nombre: string;\n  public precio: number;\n\n  constructor(nombre: string, precio: number) {\n    this.nombre = nombre;\n    this.precio = precio;\n  }\n}\n\nconst pan = new Producto("Pan", 50);\nconsole.log(pan.nombre, pan.precio);',
      salida: 'Pan 50'
    },
    {
      titulo: 'private: la trastienda',
      parrafos: [
        'private esconde la propiedad: solo los métodos de la propia clase pueden tocarla. Es la trastienda de la tienda: los clientes ven el mostrador (métodos públicos) pero no el depósito interno.',
        'Es la forma de proteger el estado interno: nadie puede romper el inventario desde afuera, solo a través de las operaciones que tú defines.'
      ],
      codigo: 'class Inventario {\n  private productos: string[] = [];\n\n  agregar(producto: string): number {\n    this.productos.push(producto);\n    return this.productos.length;\n  }\n\n  listar(): string[] {\n    return this.productos;\n  }\n}\n\nconst estante = new Inventario();\nestante.agregar("lata");\nconsole.log(JSON.stringify(estante.listar()));',
      salida: '["lata"]'
    },
    {
      titulo: 'readonly: la vitrina con candado',
      parrafos: [
        'readonly declara propiedades que se asignan al crearse y después no cambian: IDs, códigos, fechas de creación. Es la vitrina con candado: se mira, no se toca.',
        'Combinado con private, es el patrón clásico: private readonly id. Lo ves en toda base de código seria.'
      ],
      codigo: 'class Pedido {\n  readonly numero: number;\n  private productos: string[] = [];\n\n  constructor(numero: number) {\n    this.numero = numero;\n  }\n\n  agregar(producto: string): void {\n    this.productos.push(producto);\n  }\n\n  cantidad(): number {\n    return this.productos.length;\n  }\n}\n\nconst pedido = new Pedido(101);\npedido.agregar("lata");\npedido.agregar("pan");\nconsole.log(pedido.numero);\nconsole.log(pedido.cantidad());',
      salida: '101\n2'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar una propiedad sin declararla: en TypeScript, this.nombre debe estar declarado en la clase. No se puede inventar en el camino.',
        'Olvidar el tipo de retorno de los métodos: etiqueta() que devuelve texto debe declarar : string.',
        'Creer que private es seguridad real: al compilar, private se vuelve una propiedad normal de JavaScript. Es una protección de tipos, no un candado físico.',
        'Asignar a una propiedad readonly después de crearla: el compilador lo rechaza.',
        'Confundir clase y objeto: la clase es el molde, el objeto es la instancia creada con new.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Declara el tipo de cada propiedad en el cuerpo de la clase: el plano completo es más fácil de leer.',
        'Tipa todos los métodos: parámetros y retorno, aunque el retorno sea void.',
        'Usa private para el estado interno y métodos públicos para operarlo: la trastienda protegida.',
        'Marca readonly los identificadores y datos que no cambian jamás.',
        'Inicializa las propiedades en el constructor o con un valor por defecto: evita el estado a medio preparar.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La ficha de producto',
      codigo: 'class Producto {\n  nombre: string;\n  precio: number;\n\n  constructor(nombre: string, precio: number) {\n    this.nombre = nombre;\n    this.precio = precio;\n  }\n\n  conIva(): number {\n    return this.precio * 1.21;\n  }\n}\n\nconst leche = new Producto("Leche", 90);\nconsole.log(leche.nombre);\nconsole.log(leche.conIva());',
      salida: 'Leche\n108.9',
      explicacion: 'La clase declara propiedades y métodos con tipos. El método conIva usa this.precio con total confianza: el compilador sabe que es number.'
    },
    {
      titulo: 'El inventario con private',
      codigo: 'class CajaRegistradora {\n  private ventas: number[] = [];\n\n  registrar(monto: number): void {\n    this.ventas.push(monto);\n  }\n\n  total(): number {\n    let suma = 0;\n    for (const venta of this.ventas) {\n      suma += venta;\n    }\n    return suma;\n  }\n}\n\nconst caja = new CajaRegistradora();\ncaja.registrar(120);\ncaja.registrar(50);\nconsole.log(caja.total());',
      salida: '170',
      explicacion: 'La lista de ventas es private: nadie puede modificarla desde afuera. El único camino es registrar() y la única lectura es total().'
    }
  ],
  ejercicios: [
    {
      titulo: 'Tu primera clase tipada',
      dificultad: 'Fácil',
      consigna: [
        'Crea una clase Producto con las propiedades nombre: string y precio: number, un constructor que las reciba y asigne, y un método etiqueta(): string que devuelva "nombre - $precio". Crea una lata con "Lata de tomate" y 120, e imprime su etiqueta.'
      ],
      pasos: [
        'Declara las dos propiedades con sus tipos en el cuerpo de la clase.',
        'Implementa el constructor con parámetros tipados.',
        'Implementa etiqueta(): string e imprime la llamada.'
      ],
      codigoInicial: '// Define la clase Producto tipada\n',
      pista: 'etiqueta(): string { return `${this.nombre} - $${this.precio}`; }',
      tests: [
        { tipo: 'output', nombre: 'La etiqueta', esperado: ['Lata de tomate - $120'], mensaje: 'La etiqueta debe ser "Lata de tomate - $120".' },
        { tipo: 'codigo', nombre: 'Propiedades tipadas', explicacion: 'Declarar nombre: string y precio: number', requerido: ['nombre\\s*:\\s*string;', 'precio\\s*:\\s*number;'], mensaje: 'Las propiedades deben declarar sus tipos en la clase.' }
      ],
      solucion: 'class Producto {\n  nombre: string;\n  precio: number;\n\n  constructor(nombre: string, precio: number) {\n    this.nombre = nombre;\n    this.precio = precio;\n  }\n\n  etiqueta(): string {\n    return `${this.nombre} - $${this.precio}`;\n  }\n}\n\nconst lata = new Producto("Lata de tomate", 120);\nconsole.log(lata.etiqueta());'
    },
    {
      titulo: 'La trastienda privada',
      dificultad: 'Media',
      consigna: [
        'Crea una clase Inventario con la propiedad private productos: string[] = [] y cuatro métodos: agregar(producto: string): number (agrega y devuelve la nueva cantidad), quitar(producto: string): boolean (busca con indexOf, elimina con splice y devuelve true, o false si no existe), listar(): string[] y cantidad(): number (la longitud de la lista). Agrega "lata" y "pan", imprime la lista en JSON, quita "pan" e imprime la lista final y la cantidad.'
      ],
      pasos: [
        'Declara la propiedad con private y el tipo string[].',
        'Implementa agregar, quitar, listar y cantidad con retornos tipados.',
        'Prueba el flujo completo: agregar dos, listar, quitar, listar y cantidad.'
      ],
      codigoInicial: '// Define la clase Inventario con private\n',
      pista: 'if (indice === -1) { return false; } this.productos.splice(indice, 1); return true;',
      tests: [
        { tipo: 'output', nombre: 'El flujo completo', esperado: ['["lata","pan"]', 'true', '["lata"]', '1'], mensaje: 'Lista inicial con dos, quitar pan devuelve true, lista final con una y cantidad 1.' },
        { tipo: 'codigo', nombre: 'Propiedad privada', explicacion: 'Declarar la propiedad como private', requerido: ['private\\s+productos'], mensaje: 'La propiedad productos debe declararse como private.' },
        { tipo: 'codigo', nombre: 'Lista tipada', explicacion: 'Anotar la propiedad como string[]', requerido: ['productos\\s*:\\s*string\\[\\s*\\]'], mensaje: 'La propiedad debe declarar el tipo string[].' }
      ],
      solucion: 'class Inventario {\n  private productos: string[] = [];\n\n  agregar(producto: string): number {\n    this.productos.push(producto);\n    return this.productos.length;\n  }\n\n  quitar(producto: string): boolean {\n    const indice = this.productos.indexOf(producto);\n    if (indice === -1) {\n      return false;\n    }\n    this.productos.splice(indice, 1);\n    return true;\n  }\n\n  listar(): string[] {\n    return this.productos;\n  }\n\n  cantidad(): number {\n    return this.productos.length;\n  }\n}\n\nconst estante = new Inventario();\nestante.agregar("lata");\nestante.agregar("pan");\nconsole.log(JSON.stringify(estante.listar()));\nconsole.log(estante.quitar("pan"));\nconsole.log(JSON.stringify(estante.listar()));\nconsole.log(estante.cantidad());'
    },
    {
      titulo: 'readonly y métodos con retorno',
      dificultad: 'Media',
      consigna: [
        'Crea una clase Pedido con la propiedad readonly numero: number, una lista private productos: string[] = [], un constructor que asigne el número, y dos métodos: agregar(producto: string): void y cantidad(): number. Crea el pedido 101, agrega "lata" y "pan", e imprime el número y la cantidad.'
      ],
      pasos: [
        'Declara readonly numero: number y private productos: string[].',
        'El constructor recibe y asigna el número.',
        'Implementa agregar (void) y cantidad (number) e imprime ambos.'
      ],
      codigoInicial: '// Define la clase Pedido con readonly\n',
      pista: 'readonly numero: number; y en el constructor: this.numero = numero;',
      tests: [
        { tipo: 'output', nombre: 'Número y cantidad', esperado: ['101', '2'], mensaje: 'El número es 101 y la cantidad de productos es 2.' },
        { tipo: 'codigo', nombre: 'readonly usado', explicacion: 'Declarar la propiedad como readonly', requerido: ['readonly\\s+numero'], mensaje: 'La propiedad numero debe declararse como readonly.' }
      ],
      solucion: 'class Pedido {\n  readonly numero: number;\n  private productos: string[] = [];\n\n  constructor(numero: number) {\n    this.numero = numero;\n  }\n\n  agregar(producto: string): void {\n    this.productos.push(producto);\n  }\n\n  cantidad(): number {\n    return this.productos.length;\n  }\n}\n\nconst pedido = new Pedido(101);\npedido.agregar("lata");\npedido.agregar("pan");\nconsole.log(pedido.numero);\nconsole.log(pedido.cantidad());'
    }
  ]
}