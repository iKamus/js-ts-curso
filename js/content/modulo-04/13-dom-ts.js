export default {
  id: 'm4-l44',
  numero: 44,
  titulo: 'DOM con TypeScript',
  nivel: 'Dificil',
  lenguaje: 'typescript',
  htmlBase: '<p id="mensaje">Hola</p><button id="boton">Comprar</button><input id="cantidad" type="number" value="3">',
  palabrasClave: [
    { termino: 'querySelector', definicion: 'Seleccionar un elemento por selector CSS. En TypeScript devuelve Element | null: hay que verificar o asertar.' },
    { termino: 'getElementById', definicion: 'Buscar un elemento por su id. También devuelve HTMLElement | null.' },
    { termino: 'HTMLInputElement', definicion: 'El tipo concreto de un input: incluye la propiedad value, que Element genérico no tiene.' },
    { termino: 'Non-null assertion (!)', definicion: 'Declarar que un elemento existe: document.getElementById("lista")! Cuando tú sabes que está, él no necesita dudar.' },
    { termino: 'Aserción (as)', definicion: 'Afinar el tipo de un elemento: document.querySelector("#caja") as HTMLDivElement.' },
    { termino: 'Eventos tipados', definicion: 'Los listeners con parámetro tipado: (evento: Event) => void. El target requiere aserción para acceder a propiedades.' }
  ],
  secciones: [
    {
      titulo: 'El DOM y los null: el primer choque',
      parrafos: [
        'Todo lo que aprendiste en el módulo 3 sigue igual con TypeScript: getElementById, querySelector, addEventListener. Lo nuevo es que el compilador te recuerda una verdad incómoda: buscar un elemento puede no encontrarlo.',
        'document.getElementById("boton") devuelve HTMLElement | null. Con el modo strict, no puedes usar el elemento a ciegas: tienes tres caminos, y esta lección los recorre todos.'
      ],
      codigo: '// Devuelve HTMLElement | null: hay que verificar o asertar\nconst boton = document.getElementById("boton");\nconsole.log(boton === null ? "No existe" : boton.textContent);',
      salida: 'Comprar'
    },
    {
      titulo: 'querySelector tipado',
      parrafos: [
        'querySelector acepta cualquier selector CSS y devuelve Element | null: el tipo más general de elemento. Para acceder a propiedades específicas (value, checked, classList), debes afinar el tipo con as.',
        'La aserción es una promesa: tú le dices al compilador qué elemento esperas, y él te deja usar sus propiedades. Si mientes (el selector encuentra otro tipo de elemento), el problema aparece en runtime.'
      ],
      codigo: 'const input = document.querySelector("#cantidad") as HTMLInputElement;\nconsole.log(input.value);',
      salida: '3'
    },
    {
      titulo: 'getElementById y la non-null assertion',
      parrafos: [
        'Cuando el elemento existe seguro (por ejemplo, porque está en el htmlBase de la lección o lo creaste tú mismo), el operador ! cierra la boca del compilador: document.getElementById("lista")! le dice "confía, está".',
        'La alternativa prudente es verificar con un if. La regla: si el elemento viene del HTML fijo de la página, el ! es aceptable; si lo buscas con una clave dinámica, verifica.'
      ],
      codigo: 'const mensaje = document.getElementById("mensaje")!;\nconsole.log(mensaje.textContent);',
      salida: 'Hola'
    },
    {
      titulo: 'HTMLInputElement y el value',
      parrafos: [
        'El tipo genérico HTMLElement no conoce value: esa propiedad vive en HTMLInputElement (input, textarea, select). Por eso el patrón es: seleccionar y asertar con as HTMLInputElement en la misma línea.',
        'Después de la aserción, value es un string real y puedes leerlo, convertirlo con Number y validarlo. El compilador ya no te frena.'
      ],
      codigo: 'const input = document.getElementById("cantidad") as HTMLInputElement;\nconst cantidad = Number(input.value);\nconsole.log(cantidad * 2);',
      salida: '6'
    },
    {
      titulo: 'Eventos tipados',
      parrafos: [
        'Los listeners declaran su parámetro: (evento: Event) => void. Dentro del handler, evento.target es EventTarget | null: para tocar el elemento, asertas: evento.target as HTMLElement.',
        'La alternativa más limpia es evento.currentTarget: siempre apunta al elemento donde se registró el listener, y una sola aserción lo convierte en el tipo concreto.'
      ],
      codigo: 'const boton = document.getElementById("boton")!;\n\nboton.addEventListener("click", (evento: Event) => {\n  const destino = evento.currentTarget as HTMLButtonElement;\n  destino.textContent = "Comprado";\n});\n\nconsole.log("Listener listo");',
      salida: 'Listener listo'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar el elemento sin verificar null: boton.textContent con strict no compila si boton puede ser null.',
        'Abusar del !: si el id está mal escrito, el ! no salva nada: el error explota en runtime.',
        'Asertar a un tipo equivocado: tratar un input como HTMLDivElement compila, pero value no existirá en runtime.',
        'Olvidar que querySelector devuelve Element (el genérico), no HTMLElement: hay que asertar para casi todo.',
        'Confiar en value como número: input.value siempre es string. Convierte con Number antes de sumar.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Verifica primero con if cuando el elemento puede faltar; usa ! solo con el HTML fijo que tú controlas.',
        'Aserta en la misma línea de la selección: document.getElementById("cantidad") as HTMLInputElement.',
        'En los listeners, usa currentTarget con as en vez de pelear con target.',
        'Convierte los valores de los inputs con Number y valida antes de operar.',
        'Separa la lógica (funciones tipadas) del DOM: seleccionar y renderizar son responsabilidades distintas.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El formulario de compra',
      codigo: 'const input = document.getElementById("cantidad") as HTMLInputElement;\nconst boton = document.getElementById("boton")!;\n\nboton.addEventListener("click", (evento: Event) => {\n  const cantidad = Number(input.value);\n  const destino = evento.currentTarget as HTMLButtonElement;\n  destino.textContent = `Comprar ${cantidad}`;\n});\n\nconsole.log("Formulario listo");',
      salida: 'Formulario listo',
      explicacion: 'El input se aserta a HTMLInputElement para leer value, y en el listener el currentTarget se aserta a HTMLButtonElement para cambiar su texto. Cada aserción tiene un porqué.'
    },
    {
      titulo: 'Verificar antes de usar',
      codigo: 'const posible = document.getElementById("mensaje");\n\nif (posible !== null) {\n  console.log(posible.textContent);\n} else {\n  console.log("No existe");\n}',
      salida: 'Hola',
      explicacion: 'La verificación con if es el camino más seguro: sin aserciones, el compilador se conforma con el chequeo. Si el elemento no está, el programa lo dice con calma en vez de explotar.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Leer un input tipado',
      dificultad: 'Fácil',
      consigna: [
        'Selecciona el input con id "cantidad" usando getElementById y asértalo a HTMLInputElement. Luego imprime su value.'
      ],
      pasos: [
        'Selecciona con document.getElementById("cantidad").',
        'Aserta el resultado con as HTMLInputElement.',
        'Imprime la propiedad value.'
      ],
      codigoInicial: '// Selecciona el input y asíertalo a HTMLInputElement\n',
      pista: 'const input = document.getElementById("cantidad") as HTMLInputElement;',
      tests: [
        { tipo: 'output', nombre: 'El valor del input', esperado: ['3'], mensaje: 'El input #cantidad tiene el value "3".' },
        { tipo: 'codigo', nombre: 'Aserción usada', explicacion: 'Asertar a HTMLInputElement con as', requerido: ['as\\s+HTMLInputElement'], mensaje: 'Debes asertar el elemento con as HTMLInputElement.' }
      ],
      solucion: 'const input = document.getElementById("cantidad") as HTMLInputElement;\nconsole.log(input.value);'
    },
    {
      titulo: 'Non-null assertion en acción',
      dificultad: 'Media',
      consigna: [
        'Selecciona el elemento con id "mensaje" usando getElementById y aplica la non-null assertion (!) para decirle a TypeScript que existe. Luego imprime su textContent.'
      ],
      pasos: [
        'Selecciona con document.getElementById("mensaje").',
        'Agrega el operador ! justo después del paréntesis.',
        'Imprime textContent.'
      ],
      codigoInicial: '// Selecciona #mensaje con non-null assertion\n',
      pista: 'const mensaje = document.getElementById("mensaje")!;',
      tests: [
        { tipo: 'output', nombre: 'El texto del párrafo', esperado: ['Hola'], mensaje: 'El párrafo #mensaje contiene el texto "Hola".' },
        { tipo: 'codigo', nombre: 'Non-null usado', explicacion: 'Aplicar ! a la selección', requerido: ['getElementById\\("mensaje"\\)\\s*\\!'], mensaje: 'Debes usar la non-null assertion (!) al seleccionar el elemento.' }
      ],
      solucion: 'const mensaje = document.getElementById("mensaje")!;\nconsole.log(mensaje.textContent);'
    },
    {
      titulo: 'Un clic tipado',
      dificultad: 'Media',
      consigna: [
        'Selecciona el botón con id "boton" usando la non-null assertion. Registra un listener de clic con el parámetro tipado (evento: Event) que aserte evento.currentTarget a HTMLButtonElement y le cambie el texto a "Comprado". Luego imprime "Listener listo".'
      ],
      pasos: [
        'Selecciona el botón con !.',
        'Usa addEventListener con el parámetro (evento: Event).',
        'Aserta currentTarget y cambia textContent; imprime "Listener listo".'
      ],
      codigoInicial: '// Selecciona el botón y registra el clic tipado\n',
      pista: 'const destino = evento.currentTarget as HTMLButtonElement;',
      tests: [
        { tipo: 'output', nombre: 'Listener registrado', esperado: ['Listener listo'], mensaje: 'El código debe imprimir "Listener listo" al registrarse.' },
        { tipo: 'dom', nombre: 'El clic cambia el botón', verificador: 'var b = document.getElementById("boton"); if (b) { b.dispatchEvent(new Event("click", { bubbles: true })); } return { paso: b !== null && b.textContent === "Comprado", esperado: "texto Comprado tras el clic", obtenido: b ? b.textContent : "null" }', mensaje: 'Después de disparar el clic, el botón debe decir "Comprado".' },
        { tipo: 'codigo', nombre: 'Listener registrado', explicacion: 'Usar addEventListener', requerido: ['addEventListener'], mensaje: 'Debes registrar el listener con addEventListener.' }
      ],
      solucion: 'const boton = document.getElementById("boton")!;\n\nboton.addEventListener("click", (evento: Event) => {\n  const destino = evento.currentTarget as HTMLButtonElement;\n  destino.textContent = "Comprado";\n});\n\nconsole.log("Listener listo");'
    }
  ]
}