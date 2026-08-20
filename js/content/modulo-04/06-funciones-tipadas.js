export default {
  id: 'm4-l37',
  numero: 37,
  titulo: 'Funciones tipadas',
  nivel: 'Medio',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Parámetros tipados', definicion: 'Cada parámetro declara su tipo: function sumar(a: number, b: number).' },
    { termino: 'Retorno tipado', definicion: 'El tipo del valor que devuelve la función, declarado después del paréntesis: ): number.' },
    { termino: 'void', definicion: 'El tipo de una función que no devuelve nada: hace su trabajo y se va.' },
    { termino: 'Parámetro opcional', definicion: 'Un parámetro que puede faltar en la llamada, marcado con ?: apellido?: string.' },
    { termino: 'Parámetro por defecto', definicion: 'Un valor que se usa si la llamada no lo pasa: cantidad = 1.' },
    { termino: 'Función como tipo', definicion: 'Declarar la forma de una función como tipo de otra: (n: number) => number es "función que recibe number y devuelve number".' }
  ],
  secciones: [
    {
      titulo: 'La firma básica: parámetros y retorno',
      parrafos: [
        'Una función tipada declara dos cosas: qué recibe (tipos de los parámetros) y qué devuelve (tipo del retorno). Es el letrero de la entrada de la tienda: "aquí entra esto y sale esto".',
        'El tipo de retorno va después del paréntesis. Si la función devuelve un valor, TypeScript verifica que el tipo coincida en cada return.'
      ],
      codigo: 'function sumar(a: number, b: number): number {\n  return a + b;\n}\n\nconsole.log(sumar(7, 8));',
      salida: '15'
    },
    {
      titulo: 'void: funciones que no devuelven nada',
      parrafos: [
        'No toda función devuelve un valor: imprimir un recibo, actualizar una lista, mostrar un mensaje. Para esas, el tipo de retorno es void: "no hay mercadería de salida, solo hace el trabajo".',
        'Declararlo es importante: quien llame a la función sabrá que no puede guardar un resultado.'
      ],
      codigo: 'function imprimirRecibo(nombre: string, total: number): void {\n  console.log(`${nombre}: $${total}`);\n}\n\nimprimirRecibo("Pedido 1", 150);',
      salida: 'Pedido 1: $150'
    },
    {
      titulo: 'Parámetros opcionales (?)',
      parrafos: [
        'Algunos datos no siempre están: un apellido, una observación, un código de descuento. Con ? después del nombre marcas el parámetro como opcional: la llamada puede omitirlo.',
        'Dentro de la función, un parámetro opcional es string | undefined: debes verificar antes de usarlo como texto.'
      ],
      codigo: 'function saludar(nombre: string, apellido?: string): string {\n  if (apellido === undefined) {\n    return `Hola, ${nombre}`;\n  }\n  return `Hola, ${nombre} ${apellido}`;\n}\n\nconsole.log(saludar("Ana"));\nconsole.log(saludar("Ana", "Pérez"));',
      salida: 'Hola, Ana\nHola, Ana Pérez'
    },
    {
      titulo: 'Parámetros por defecto',
      parrafos: [
        'En vez de verificar un opcional, puedes darle un valor por defecto con =: si la llamada no lo pasa, se usa ese. Es como la etiqueta de precio que ya viene impresa con el valor estándar.',
        'Los parámetros por defecto son opcionales por definición, pero su tipo no incluye undefined: TypeScript sabe que siempre habrá un valor.'
      ],
      codigo: 'function precioFinal(precio: number, descuento = 0): number {\n  return precio - descuento;\n}\n\nconsole.log(precioFinal(100));\nconsole.log(precioFinal(100, 15));',
      salida: '100\n85'
    },
    {
      titulo: 'Funciones como tipo: callbacks',
      parrafos: [
        'Las funciones también tienen tipos: (n: number) => number describe "una función que recibe un number y devuelve un number". Puedes usarlo para tipar callbacks, es decir, funciones que reciben otras funciones.',
        'Es el patrón de las cajas registradoras con promos: la máquina recibe la operación de descuento como un accesorio intercambiable.'
      ],
      codigo: 'function aplicar(precio: number, operacion: (n: number) => number): number {\n  return operacion(precio);\n}\n\nconsole.log(aplicar(100, (n: number) => n - 10));\nconsole.log(aplicar(100, (n: number) => n * 0.9));',
      salida: '90\n90'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar el tipo de retorno: si la función devuelve algo, anótalo; si no, usa void.',
        'Devolver el tipo equivocado: una función : number no puede hacer return "lata".',
        'Confundir opcional y por defecto: apellido? es string | undefined; apellido = "" es string siempre.',
        'No respetar la forma del callback: pasar (n) => n - 10 a un tipo (n: number) => number está bien; pasar una función que devuelve texto, no.',
        'Llamar con argumentos de más: sumar(1, 2, 3) no compila: la firma dice dos parámetros.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Tipa siempre los parámetros y el retorno: es la información más valiosa de una función.',
        'Usa void explícitamente en funciones que solo hacen efectos.',
        'Prefiere parámetros por defecto sobre opcionales cuando existe un valor estándar claro.',
        'Nombra los callbacks por su intención: (n: number) => number es "función de transformación".',
        'Crea type alias para callbacks que repitas: type Operacion = (n: number) => number.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El callback de la promo',
      codigo: 'type Operacion = (n: number) => number;\n\nfunction calcular(precio: number, operacion: Operacion): number {\n  return operacion(precio);\n}\n\nconsole.log(calcular(200, (n: number) => n - 30));',
      salida: '170',
      explicacion: 'El alias Operacion da nombre a la forma del callback. La función calcular acepta cualquier función que reciba number y devuelva number.'
    },
    {
      titulo: 'Opcional y por defecto en acción',
      codigo: 'function armarPedido(producto: string, cantidad = 1, nota?: string): string {\n  let texto = `${producto} x${cantidad}`;\n  if (nota !== undefined) {\n    texto += ` (${nota})`;\n  }\n  return texto;\n}\n\nconsole.log(armarPedido("lata"));\nconsole.log(armarPedido("pan", 3, "sin sal"));',
      salida: 'lata x1\npan x3 (sin sal)',
      explicacion: 'cantidad tiene valor por defecto y nota es opcional. La llamada puede omitir cualquiera de los dos y la función siempre responde.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Una suma tipada',
      dificultad: 'Fácil',
      consigna: [
        'Implementa una función sumar(a: number, b: number): number que devuelva la suma. Llámala con 7 y 8 e imprime el resultado.'
      ],
      pasos: [
        'Anota ambos parámetros con : number.',
        'Anota el retorno con : number.',
        'Devuelve a + b y prueba la llamada.'
      ],
      codigoInicial: '// Implementa sumar con parámetros y retorno tipados\n',
      pista: 'function sumar(a: number, b: number): number { return a + b; }',
      tests: [
        { tipo: 'output', nombre: 'La suma', esperado: ['15'], mensaje: 'sumar(7, 8) debe devolver 15.' },
        { tipo: 'codigo', nombre: 'Parámetros tipados', explicacion: 'Anotar a: number y b: number', requerido: ['a\\s*:\\s*number', 'b\\s*:\\s*number'], mensaje: 'Ambos parámetros deben declarar su tipo number.' }
      ],
      solucion: 'function sumar(a: number, b: number): number {\n  return a + b;\n}\n\nconsole.log(sumar(7, 8));'
    },
    {
      titulo: 'Un parámetro opcional',
      dificultad: 'Media',
      consigna: [
        'Implementa una función saludar(nombre: string, apellido?: string): string que devuelva "Hola, nombre" si no hay apellido, y "Hola, nombre apellido" si lo hay. Imprime las dos variantes: sin apellido y con "Pérez".'
      ],
      pasos: [
        'Marca el parámetro con ?: apellido?: string.',
        'Verifica si apellido === undefined para elegir el mensaje.',
        'Llama a la función de las dos formas e imprime los resultados.'
      ],
      codigoInicial: '// Implementa saludar con apellido opcional\n',
      pista: 'if (apellido === undefined) { ... } else { ... }',
      tests: [
        { tipo: 'output', nombre: 'Las dos variantes', esperado: ['Hola, Ana', 'Hola, Ana Pérez'], mensaje: 'Sin apellido dice "Hola, Ana" y con apellido "Hola, Ana Pérez".' },
        { tipo: 'codigo', nombre: 'Parámetro opcional', explicacion: 'Declarar apellido?: string', requerido: ['apellido\\s*\\?\\s*:\\s*string'], mensaje: 'El parámetro apellido debe ser opcional con ?.' }
      ],
      solucion: 'function saludar(nombre: string, apellido?: string): string {\n  if (apellido === undefined) {\n    return `Hola, ${nombre}`;\n  }\n  return `Hola, ${nombre} ${apellido}`;\n}\n\nconsole.log(saludar("Ana"));\nconsole.log(saludar("Ana", "Pérez"));'
    },
    {
      titulo: 'Un callback tipado',
      dificultad: 'Media',
      consigna: [
        'Implementa una función aplicarDescuento(precio: number, operacion: (n: number) => number): number que aplique la operación recibida al precio. Llámala con 100 y un callback que reste 10, e imprime el resultado.'
      ],
      pasos: [
        'Anota el segundo parámetro con la forma (n: number) => number.',
        'Devuelve operacion(precio).',
        'Pasa un callback (n: number) => n - 10 en la llamada.'
      ],
      codigoInicial: '// Implementa aplicarDescuento con un callback tipado\n',
      pista: 'return operacion(precio);',
      tests: [
        { tipo: 'output', nombre: 'El precio final', esperado: ['90'], mensaje: '100 menos 10 es 90.' },
        { tipo: 'codigo', nombre: 'Callback tipado', explicacion: 'Anotar el parámetro como (n: number) => number', requerido: ['\\(n\\s*:\\s*number\\)\\s*=>\\s*number'], mensaje: 'El parámetro operacion debe declarar la forma de la función: (n: number) => number.' }
      ],
      solucion: 'function aplicarDescuento(precio: number, operacion: (n: number) => number): number {\n  return operacion(precio);\n}\n\nconsole.log(aplicarDescuento(100, (n: number) => n - 10));'
    }
  ]
}