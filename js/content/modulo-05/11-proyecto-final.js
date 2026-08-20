export default {
  id: 'm5-l57',
  numero: 57,
  titulo: 'Proyecto final: sistema de inventario con TypeScript',
  nivel: 'Dificil',
  lenguaje: 'typescript',
  esProyecto: true,
  htmlBase: '<input id="nombre" placeholder="Producto"><input id="precio" type="number" placeholder="Precio"><button id="agregar">Agregar</button><ul id="lista"></ul>',
  palabrasClave: [
    { termino: 'Proyecto final', definicion: 'El desafío que integra todo el curso: TypeScript con tipos, clases, DOM, eventos, persistencia y manejo de errores en una sola app.' },
    { termino: 'Integración', definicion: 'Cada pieza que construiste por separado (tipos, clase, DOM, localStorage, errores) trabajando junta.' }
  ],
  secciones: [
    {
      titulo: 'La consigna del proyecto',
      parrafos: [
        'Vas a construir el sistema de inventario de la tienda con TypeScript, combinando todo lo aprendido: interfaces y tipos, una clase con lógica, renderizado en el DOM con eventos, persistencia en localStorage y manejo robusto de errores.',
        'Se divide en tres piezas. Resuélvelas en orden: la pieza 3 reutiliza las funciones de la 2, y la 2 usa la clase de la 1. Cada solución es autocontenida y debe compilar con TypeScript estricto.'
      ],
      lista: [
        'Pieza 1: interfaz Producto + clase Inventario con lógica pura.',
        'Pieza 2: renderizado en el DOM y eventos para agregar productos.',
        'Pieza 3: persistencia en localStorage y manejo de errores al cargar.'
      ]
    },
    {
      titulo: 'Lo que se espera del resultado',
      parrafos: [
        'Con las tres piezas funcionando, la app debe: mantener productos tipados, mostrarlos en la lista, permitir agregar desde el formulario con un clic, guardarlos al cerrar y recuperarlos al abrir — sin que un dato corrupto rompa la app.'
      ],
      codigo: 'interface Producto { nombre: string; precio: number; }\nclass Inventario { private productos: Producto[]; agregar(...); listar(); }\nrenderInventario() pinta cada producto en #lista\nbotón #agregar dispara el alta\nguardarInventario() / cargarInventario() con JSON + try/catch',
      salida: ''
    }
  ],
  ejemplos: [
    {
      titulo: 'El mapa del sistema',
      codigo: '// 1. Tipos y lógica (pura)\ninterface Producto { nombre: string; precio: number; }\nclass Inventario {\n  private productos: Producto[] = [];\n  agregar(producto: Producto): void { ... }\n  listar(): Producto[] { return this.productos; }\n}\n\n// 2. DOM y eventos\nfunction renderInventario(inventario: Inventario): void { ... }\nboton.addEventListener("click", () => agregarDesdeFormulario(inventario));\n\n// 3. Persistencia y errores\nguardarInventario(productos); // JSON.stringify\ncargarInventario();           // JSON.parse + try/catch + as Producto[]',
      salida: '',
      explicacion: 'Este es el esqueleto completo: los datos viven tipados en la clase, el DOM los muestra, los eventos los modifican y localStorage los conserva. Cada pieza es reutilizable por sí sola.'
    }
  ],
  proyecto: {
    objetivos: [
      'Definir tipos con interface y anotar correctamente clases y funciones.',
      'Construir una clase con lógica de inventario y métodos tipados.',
      'Renderizar el estado en el DOM y reaccionar a eventos.',
      'Persistir con localStorage serializando con JSON.',
      'Manejar errores de carga sin romper la aplicación.'
    ]
  },
  ejercicios: [
    {
      titulo: 'Pieza 1: la clase Inventario',
      dificultad: 'Media',
      consigna: [
        'Define la interfaz Producto con nombre: string y precio: number. Luego la clase Inventario con un array privado productos: Producto[] (inicializado en []), el método agregar(producto: Producto): void que lo agregue con push, listar(): Producto[] que lo devuelva, y valorTotal(): number que sume todos los precios con reduce.',
        'Prueba: crea un inventario, agrega { nombre: "pan", precio: 350 } y { nombre: "leche", precio: 500 }, e imprime listar().length y valorTotal().'
      ],
      pasos: [
        'Declara interface Producto con sus dos propiedades tipadas.',
        'Declara class Inventario con private productos: Producto[] = [].',
        'Implementa agregar, listar y valorTotal (reduce con acumulador 0).',
        'Crea el inventario, agrega los dos productos e imprime los resultados.'
      ],
      codigoInicial: '// 1. interface Producto\n// 2. class Inventario\n// 3. Prueba con pan y leche\n',
      pista: 'valorTotal: this.productos.reduce((total, producto) => total + producto.precio, 0)',
      tests: [
        { tipo: 'output', nombre: 'Cantidad y total', esperado: ['2', '850'], mensaje: 'Dos productos, y 350 + 500 = 850.' },
        { tipo: 'codigo', nombre: 'Interfaz tipada', explicacion: 'Debe existir interface Producto con nombre y precio tipados.', requerido: ['interface Producto', 'nombre: string', 'precio: number'], mensaje: 'Define la interfaz con los tipos correctos.' },
        { tipo: 'codigo', nombre: 'Clase con lógica privada', explicacion: 'La clase Inventario debe tener el array privado tipado.', requerido: ['class Inventario', 'private productos', ': Producto\\[\\]'], mensaje: 'El array de productos es privado y tipado.' },
        { tipo: 'codigo', nombre: 'Métodos tipados', explicacion: 'Los métodos deben anotar su tipo de retorno.', requerido: ['agregar\\(producto: Producto\\): void', 'listar\\(\\): Producto\\[\\]', 'valorTotal\\(\\): number'], mensaje: 'Anota los parámetros y retornos de los métodos.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nclass Inventario {\n  private productos: Producto[] = [];\n\n  agregar(producto: Producto): void {\n    this.productos.push(producto);\n  }\n\n  listar(): Producto[] {\n    return this.productos;\n  }\n\n  valorTotal(): number {\n    return this.productos.reduce((total, producto) => total + producto.precio, 0);\n  }\n}\n\nconst inventario = new Inventario();\ninventario.agregar({ nombre: "pan", precio: 350 });\ninventario.agregar({ nombre: "leche", precio: 500 });\nconsole.log(inventario.listar().length);\nconsole.log(inventario.valorTotal());'
    },
    {
      titulo: 'Pieza 2: renderizar y agregar desde el DOM',
      dificultad: 'Dificil',
      consigna: [
        'Usando la misma interfaz y clase de la pieza 1, agrega: renderInventario(inventario: Inventario): void que vacíe la lista #lista y cree un li por cada producto con el texto "nombre: $precio"; y agregarDesdeFormulario(inventario) que lea los inputs #nombre y #precio (convertidos con Number), los agregue al inventario y re-renderice. Registra el clic del botón #agregar para que llame a agregarDesdeFormulario.',
        'Prueba: agrega pan y leche con inventario.agregar, renderiza, y deja registrado el listener del botón.'
      ],
      pasos: [
        'Escribe renderInventario con innerHTML = "" y un for...of creando los li.',
        'Escribe agregarDesdeFormulario leyendo los inputs (usa as HTMLInputElement).',
        'Registra boton.addEventListener("click", ...).',
        'Agrega los dos productos y renderiza.'
      ],
      codigoInicial: '// 1. interface Producto + class Inventario (igual que pieza 1)\n// 2. renderInventario\n// 3. agregarDesdeFormulario + listener\n',
      pista: 'document.getElementById("nombre") as HTMLInputElement — el as es obligatorio con strictNullChecks.',
      tests: [
        { tipo: 'dom', nombre: 'Renderiza los productos', verificador: 'var l = document.querySelectorAll("#lista li"); return { paso: l.length === 2 && l[0].textContent === "pan: $350", esperado: "2 li, primero pan: $350", obtenido: l.length + " li / " + (l[0] ? l[0].textContent : "sin li") }', mensaje: 'La lista debe mostrar los dos productos con su formato.' },
        { tipo: 'dom', nombre: 'El clic agrega un producto', verificador: 'var b = document.getElementById("agregar"); var n = document.getElementById("nombre"); var p = document.getElementById("precio"); if (n && p && b) { n.value = "café"; p.value = "600"; b.dispatchEvent(new Event("click", { bubbles: true })); } var l = document.querySelectorAll("#lista li"); return { paso: l.length === 3 && l[2].textContent === "café: $600", esperado: "3 li, el último café: $600", obtenido: l.length + " li" }', mensaje: 'Al hacer clic, el producto del formulario debe aparecer en la lista.' },
        { tipo: 'codigo', nombre: 'Evento registrado', explicacion: 'El código debe registrar el clic del botón con addEventListener.', requerido: ['addEventListener', 'agregarDesdeFormulario'], mensaje: 'Registra el listener del botón #agregar.' },
        { tipo: 'codigo', nombre: 'Tipado del DOM', explicacion: 'Los elementos del DOM deben castearse con as HTMLInputElement o similar.', requerido: ['as HTMLInputElement', 'as HTMLUListElement'], mensaje: 'Usa as para tipar los elementos del DOM.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nclass Inventario {\n  private productos: Producto[] = [];\n  agregar(producto: Producto): void {\n    this.productos.push(producto);\n  }\n  listar(): Producto[] {\n    return this.productos;\n  }\n}\n\nfunction renderInventario(inventario: Inventario): void {\n  const lista = document.getElementById("lista") as HTMLUListElement;\n  lista.innerHTML = "";\n  for (const producto of inventario.listar()) {\n    const li = document.createElement("li");\n    li.textContent = `${producto.nombre}: $${producto.precio}`;\n    lista.appendChild(li);\n  }\n}\n\nfunction agregarDesdeFormulario(inventario: Inventario): void {\n  const nombre = document.getElementById("nombre") as HTMLInputElement;\n  const precio = document.getElementById("precio") as HTMLInputElement;\n  inventario.agregar({ nombre: nombre.value, precio: Number(precio.value) });\n  renderInventario(inventario);\n}\n\nconst inventario = new Inventario();\nconst boton = document.getElementById("agregar") as HTMLButtonElement;\nboton.addEventListener("click", () => agregarDesdeFormulario(inventario));\n\ninventario.agregar({ nombre: "pan", precio: 350 });\ninventario.agregar({ nombre: "leche", precio: 500 });\nrenderInventario(inventario);'
    },
    {
      titulo: 'Pieza 3: persistencia y errores',
      dificultad: 'Dificil',
      consigna: [
        'Agrega la persistencia: guardarInventario(productos: Producto[]): void que guarde el array en localStorage con la clave "inventario" (JSON.stringify); cargarInventario(): Producto[] que lo recupere con JSON.parse, devolviendo [] si no hay datos, y envolviendo el parse en try/catch: ante datos corruptos, imprime el error con console.error (usando (error as Error).message) y devuelve [].',
        'Prueba: guarda el array con pan y leche, recupéralo e imprime su cantidad y el total con un reduce.'
      ],
      pasos: [
        'Declara la constante CLAVE = "inventario".',
        'guardarInventario con JSON.stringify.',
        'cargarInventario: verifica null, luego try/catch con JSON.parse y (error as Error).',
        'Imprime cantidad y total de los recuperados.'
      ],
      codigoInicial: '// 1. interface Producto\n// 2. guardarInventario\n// 3. cargarInventario (con try/catch)\n// 4. Prueba: guardar, cargar, imprimir\n',
      pista: 'catch (error) { console.error("No se pudo leer el inventario: " + (error as Error).message); return []; }',
      tests: [
        { tipo: 'output', nombre: 'Cantidad y total', esperado: ['2', '850'], mensaje: 'Los recuperados son 2 y suman 850.' },
        { tipo: 'valor', nombre: 'Guardado en localStorage', expr: 'localStorage.getItem("inventario")', esperado: '[{"nombre":"pan","precio":350},{"nombre":"leche","precio":500}]', mensaje: 'La clave inventario debe contener el JSON exacto del array.' },
        { tipo: 'valor', nombre: 'Datos corruptos dan []', expr: '(() => { localStorage.setItem("inventario", "{no-json"); return JSON.stringify(cargarInventario()); })()', esperado: '[]', mensaje: 'Un JSON inválido debe devolver un array vacío sin romper.' },
        { tipo: 'codigo', nombre: 'Persistencia con JSON', explicacion: 'Debe usarse JSON.stringify y JSON.parse.', requerido: ['JSON\\.stringify', 'JSON\\.parse'], mensaje: 'Serializa y deserializa con JSON.' },
        { tipo: 'codigo', nombre: 'Manejo de errores', explicacion: 'El parse debe estar en try/catch con el error tipado.', requerido: ['try', 'catch', 'error as Error'], mensaje: 'Envuelve el parse en try/catch y tipa el error.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nconst CLAVE = "inventario";\n\nfunction guardarInventario(productos: Producto[]): void {\n  localStorage.setItem(CLAVE, JSON.stringify(productos));\n}\n\nfunction cargarInventario(): Producto[] {\n  const guardado = localStorage.getItem(CLAVE);\n  if (guardado === null) {\n    return [];\n  }\n  try {\n    return JSON.parse(guardado) as Producto[];\n  } catch (error) {\n    console.error("No se pudo leer el inventario: " + (error as Error).message);\n    return [];\n  }\n}\n\nconst productos: Producto[] = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 }\n];\nguardarInventario(productos);\nconst recuperados = cargarInventario();\nconsole.log(recuperados.length);\nconsole.log(recuperados.reduce((total, producto) => total + producto.precio, 0));'
    }
  ]
}