export default {
  id: 'm4-l41',
  numero: 41,
  titulo: 'Módulos en TypeScript: import y export',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Módulo', definicion: 'Un archivo con su propio ámbito: lo que no se exporta queda privado de ese archivo.' },
    { termino: 'export', definicion: 'La palabra clave que hace visible algo (función, tipo, valor) para otros módulos.' },
    { termino: 'import', definicion: 'La palabra clave que trae lo exportado por otro módulo a este archivo.' },
    { termino: 'Export de tipos', definicion: 'Exportar interfaces y type alias: import { Producto } de otro archivo, no solo funciones.' },
    { termino: 'export default', definicion: 'El export principal de un módulo: cada archivo puede tener uno solo, y se importa con cualquier nombre.' },
    { termino: 'Renombrado', definicion: 'Importar con otro nombre local: import { listar as listarProductos } de "tienda".' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un módulo?',
      parrafos: [
        'Un módulo es un archivo con su propio ámbito: todo lo que declara vive dentro de él, y solo lo que exporta explícitamente es visible para los demás. Es el cajón rotulado de la tienda: cada tipo de mercadería en su cajón, y solo sacas lo que vas a usar.',
        'Los módulos solucionan dos problemas: el caos de variables globales (todo pisándose entre archivos) y la organización (cada archivo con una responsabilidad). Todo proyecto real de TypeScript se divide en módulos.'
      ],
      codigo: '// archivo tienda.ts\nexport const nombreTienda = "Mi tienda";\n\n// archivo principal.ts\nimport { nombreTienda } from "./tienda";\nconsole.log(nombreTienda);',
      salida: 'Mi tienda'
    },
    {
      titulo: 'export e import de funciones',
      parrafos: [
        'Para compartir una función, la marcas con export. Para usarla en otro archivo, la traes con import y el nombre entre llaves. La ruta dice de dónde: "./tienda" es el archivo tienda.ts en la misma carpeta.',
        'Puedes importar varias cosas de un mismo módulo en una sola línea, separadas por comas.'
      ],
      codigo: '// archivo precios.ts\nexport function conIva(precio: number): number {\n  return precio * 1.21;\n}\n\nexport function sinIva(precio: number): number {\n  return precio / 1.21;\n}\n\n// archivo principal.ts\nimport { conIva, sinIva } from "./precios";\n\nconsole.log(conIva(100));',
      salida: '121'
    },
    {
      titulo: 'Exportar tipos e interfaces',
      parrafos: [
        'No solo se exportan funciones y valores: también las interfaces y los type alias. Así, el contrato de datos (la ficha de producto) se define una vez y todos los módulos lo importan.',
        'Es la práctica estándar: un archivo con los tipos de la tienda (tipos.ts), otro con la lógica (inventario.ts) y otro con la interfaz de usuario (app.ts). Cada uno importa solo lo que necesita.'
      ],
      codigo: '// archivo tipos.ts\nexport interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nexport type Categoria = "lata" | "botella" | "caja";\n\n// archivo inventario.ts\nimport { Producto } from "./tipos";\n\nexport function etiqueta(producto: Producto): string {\n  return `${producto.nombre} - $${producto.precio}`;\n}',
      salida: '// Sin salida: solo definiciones de tipos y una función exportada'
    },
    {
      titulo: 'export default y renombrados',
      parrafos: [
        'export default marca el protagonista del módulo: la función o clase principal que ese archivo ofrece. Solo puede haber uno por módulo, y al importarlo puedes ponerle el nombre que quieras.',
        'Si dos módulos exportan cosas con el mismo nombre, el renombrado resuelve el conflicto: import { listar as listarProductos } trae la función con un nombre local distinto.'
      ],
      codigo: '// archivo caja.ts\nexport default class Caja {\n  total = 0;\n\n  registrar(monto: number): void {\n    this.total += monto;\n  }\n}\n\n// archivo principal.ts\nimport Caja from "./caja";\n\nconst caja = new Caja();\ncaja.registrar(150);\nconsole.log(caja.total);',
      salida: '150'
    },
    {
      titulo: 'Módulos en este curso',
      parrafos: [
        'En esta app, cada ejercicio se transpila como un archivo único: no puedes crear otros archivos para importar. Así que en los ejercicios vas a practicar la ORGANIZACIÓN de módulos dentro de un solo archivo: primero los tipos (como si fueran un módulo tipos.ts), después las funciones de lógica (como inventario.ts) y al final su uso.',
        'La idea detrás es la misma: separar responsabilidades y que cada bloque tenga su nombre claro. Cuando trabajes en un proyecto real, esa separación se vuelve literal en archivos con import y export.'
      ],
      lista: [
        '1. El cajón de tipos: interfaces y type alias al inicio, como si vinieran de un archivo tipos.ts.',
        '2. El cajón de lógica: funciones que usan esos tipos, como un módulo inventario.ts.',
        '3. El uso: los datos y las llamadas que muestran resultados, como el archivo principal.'
      ]
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar export: importar algo que nunca se exportó da un error directo de "no existe en el módulo".',
        'Olvidar la ruta correcta en el import: "./tienda" no es lo mismo que "tienda" ni que "./tienda.ts" (aunque la extensión casi siempre se omite).',
        'Importar un export default sin el nombre por defecto: import Caja from "./caja" y no import { Caja } from "./caja".',
        'Exportar por defecto más de una cosa por módulo: solo se permite uno.',
        'Importar y no usar: los imports huérfanos ensucian el código y algunos configuradores los marcan como error.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Un módulo, una responsabilidad: precios en precios.ts, inventario en inventario.ts, tipos en tipos.ts.',
        'Exporta solo lo necesario: lo que no se exporta queda privado y puedes cambiarlo sin romper nada.',
        'Usa export default para el protagonista claro del archivo (una clase o función principal) y export nombrado para el resto.',
        'Agrupa los tipos compartidos en un módulo de tipos: es el contrato del proyecto.',
        'Ordena los imports: primero los de librerías, después los del proyecto.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El patrón de módulos en un solo archivo',
      codigo: '// 1. El cajón de tipos (como tipos.ts)\ntype Producto = {\n  nombre: string;\n  precio: number;\n};\n\n// 2. El cajón de lógica (como inventario.ts)\nfunction calcularTotal(productos: Producto[]): number {\n  let total = 0;\n  for (const producto of productos) {\n    total += producto.precio;\n  }\n  return total;\n}\n\n// 3. El uso\nconst carrito: Producto[] = [\n  { nombre: "Pan", precio: 50 },\n  { nombre: "Leche", precio: 90 }\n];\n\nconsole.log(calcularTotal(carrito));',
      salida: '140',
      explicacion: 'Así se ve la organización de módulos en el entorno de este curso: tipos, lógica y uso bien separados dentro de un archivo. En un proyecto real, cada bloque iría en su propio archivo con export/import.'
    },
    {
      titulo: 'Renombrado al importar',
      codigo: '// archivo precios.ts\nexport function aplicar(precio: number, descuento: number): number {\n  return precio - descuento;\n}\n\n// archivo principal.ts\nimport { aplicar as aplicarDescuento } from "./precios";\n\nconsole.log(aplicarDescuento(200, 30));',
      salida: '170',
      explicacion: 'La función se llama aplicar en su módulo, pero aquí se usa como aplicarDescuento: el alias evita colisiones de nombres y aclara la intención.'
    }
  ],
  ejercicios: [
    {
      titulo: 'El cajón de tipos y su uso',
      dificultad: 'Fácil',
      consigna: [
        'Organiza tu código como un módulo: primero declara un type alias Producto con la forma { nombre: string; precio: number } (el cajón de tipos). Luego declara un array productos tipado como Producto[] con "Pan" (50) y "Leche" (90), e implementa una función listar(productos: Producto[]): string que devuelva los nombres separados por ", ". Imprime el resultado.'
      ],
      pasos: [
        'Declara el type alias Producto al inicio del código.',
        'Declara el array con : Producto[].',
        'Implementa listar usando map y join, e imprime.'
      ],
      codigoInicial: '// 1. Type alias Producto\n// 2. Array de productos\n// 3. Función listar y su uso\n',
      pista: 'productos.map((p) => p.nombre).join(", ")',
      tests: [
        { tipo: 'output', nombre: 'Los nombres', esperado: ['Pan, Leche'], mensaje: 'listar debe devolver "Pan, Leche".' },
        { tipo: 'codigo', nombre: 'Alias de tipos', explicacion: 'Declarar type Producto como cajón de tipos', requerido: ['type\\s+Producto'], mensaje: 'Debes declarar un type alias Producto al inicio.' }
      ],
      solucion: 'type Producto = {\n  nombre: string;\n  precio: number;\n};\n\nconst productos: Producto[] = [\n  { nombre: "Pan", precio: 50 },\n  { nombre: "Leche", precio: 90 }\n];\n\nfunction listar(productos: Producto[]): string {\n  return productos.map((p) => p.nombre).join(", ");\n}\n\nconsole.log(listar(productos));'
    },
    {
      titulo: 'Lógica que usa el cajón de tipos',
      dificultad: 'Media',
      consigna: [
        'Declara el type alias Producto con { nombre: string; precio: number }. Implementa una función calcularTotal(productos: Producto[]): number que sume todos los precios con un bucle for...of. Imprime el total para una lista de dos productos: "Pan" (50) y "Leche" (90).'
      ],
      pasos: [
        'Declara el type alias primero, como módulo de tipos.',
        'Implementa calcularTotal con bucle y acumulador.',
        'Llama con una lista literal de dos productos e imprime.'
      ],
      codigoInicial: '// 1. Type alias Producto\n// 2. Función calcularTotal\n// 3. Prueba con dos productos\n',
      pista: 'for (const producto of productos) { total += producto.precio; }',
      tests: [
        { tipo: 'output', nombre: 'El total', esperado: ['140'], mensaje: '50 más 90 es 140.' },
        { tipo: 'codigo', nombre: 'Parámetro tipado', explicacion: 'Anotar el parámetro como Producto[]', requerido: ['calcularTotal\\s*\\(\\s*productos\\s*:\\s*Producto\\s*\\[\\s*\\]'], mensaje: 'La función debe recibir productos tipado como Producto[].' }
      ],
      solucion: 'type Producto = {\n  nombre: string;\n  precio: number;\n};\n\nfunction calcularTotal(productos: Producto[]): number {\n  let total = 0;\n  for (const producto of productos) {\n    total += producto.precio;\n  }\n  return total;\n}\n\nconsole.log(calcularTotal([\n  { nombre: "Pan", precio: 50 },\n  { nombre: "Leche", precio: 90 }\n]));'
    },
    {
      titulo: 'Separación completa de módulos',
      dificultad: 'Media',
      consigna: [
        'Reproduce la estructura de módulos en un solo archivo: (1) type alias Producto, (2) el array carrito: Producto[] con "Pan" (50) y "Leche" (90), y (3) una función resumen(productos: Producto[]): string que devuelva los nombres unidos con ", " seguidos de ": $total" (calcula el total con reduce). Imprime el resumen.'
      ],
      pasos: [
        'Declara el type alias al inicio.',
        'Declara el array carrito tipado.',
        'Implementa resumen con map para nombres y reduce para el total.'
      ],
      codigoInicial: '// 1. Type alias Producto\n// 2. Array carrito\n// 3. Función resumen\n',
      pista: 'const total = productos.reduce((acumulado, p) => acumulado + p.precio, 0);',
      tests: [
        { tipo: 'output', nombre: 'El resumen', esperado: ['Pan, Leche: $140'], mensaje: 'El resumen debe ser "Pan, Leche: $140".' },
        { tipo: 'codigo', nombre: 'reduce usado', explicacion: 'Usar reduce para el total', requerido: ['reduce'], mensaje: 'El total debe calcularse con reduce.' }
      ],
      solucion: 'type Producto = {\n  nombre: string;\n  precio: number;\n};\n\nconst carrito: Producto[] = [\n  { nombre: "Pan", precio: 50 },\n  { nombre: "Leche", precio: 90 }\n];\n\nfunction resumen(productos: Producto[]): string {\n  const nombres = productos.map((p) => p.nombre).join(", ");\n  const total = productos.reduce((acumulado, p) => acumulado + p.precio, 0);\n  return `${nombres}: $${total}`;\n}\n\nconsole.log(resumen(carrito));'
    }
  ]
}