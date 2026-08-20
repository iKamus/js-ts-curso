export default {
  id: 'm3-l28',
  numero: 28,
  titulo: 'Eventos: addEventListener, bubbling y delegación',
  nivel: 'Medio',
  htmlBase: '<button id="boton">Comprar</button><ul id="productos"><li>Pan</li><li>Leche</li><li>Café</li></ul>',
  palabrasClave: [
    { termino: 'Evento', definicion: 'Una señal de que algo pasó: un clic, una tecla, el mouse sobre un elemento. Tu código puede "escucharla".' },
    { termino: 'addEventListener', definicion: 'El método para registrar un "escucha": elemento.addEventListener("click", función).' },
    { termino: 'Callback del evento', definicion: 'La función que se ejecuta cuando el evento ocurre. Recibe un objeto evento con datos.' },
    { termino: 'Bubbling (propagación)', definicion: 'Cuando un evento ocurre en un elemento, "sube" hacia sus padres: del li al ul, al body, a la ventana.' },
    { termino: 'Delegación', definicion: 'Escuchar el evento en un PADRE común y descubrir quién lo originó con event.target: eficiente y sirve para elementos futuros.' },
    { termino: 'event.target', definicion: 'El elemento exacto donde ocurrió el evento (el más profundo del bubbling).' },
    { termino: 'Evento artificial', definicion: 'Un evento que tú disparas a propósito con elemento.dispatchEvent(new Event("click")).' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un evento?',
      parrafos: [
        'Un evento es una señal: "alguien hizo clic", "una tecla se presionó", "el mouse pasó por encima". El navegador está siempre pendiente de esas señales, y tu trabajo es decirle qué hacer cuando llegan.',
        'La forma moderna de escuchar es addEventListener: elemento.addEventListener("tipo", función). La función se registra y se ejecuta CADA vez que el evento ocurre. Piensa en el timbre de la tienda: cuando alguien entra (clic), suena y el vendedor reacciona (callback).'
      ],
      codigo: 'const boton = document.querySelector("#boton");\nboton.addEventListener("click", () => {\n  console.log("¡Alguien hizo clic!");\n});\nboton.dispatchEvent(new Event("click"));',
      salida: '¡Alguien hizo clic!'
    },
    {
      titulo: 'Eventos más comunes',
      tabla: {
        columnas: ['Evento', 'Cuándo ocurre', 'Uso típico'],
        filas: [
          ['click', 'Clic sobre el elemento', 'Botones, productos, enlaces'],
          ['input', 'El usuario escribe en un input', 'Buscar mientras se escribe'],
          ['change', 'Un input/formulario cambia de valor', 'Selects, checkboxes'],
          ['submit', 'Se envía un formulario', 'Validar antes de enviar'],
          ['keydown', 'Una tecla se presiona', 'Atajos de teclado'],
          ['mouseover', 'El mouse entra al elemento', 'Menús desplegables']
        ]
      }
    },
    {
      titulo: 'Bubbling: los eventos suben',
      parrafos: [
        'Cuando haces clic en un li, el evento NO muere ahí: "sube" por el árbol — primero el li, después el ul, después el body, hasta la ventana. Cada ancestro con un listener del mismo tipo puede escucharlo también.',
        'La propagación es la base de la delegación: en vez de poner un listener en cada li, pones UNO en el ul y descubres quién fue el culpable con event.target.'
      ],
      codigo: 'const lista = document.querySelector("#productos");\nlista.addEventListener("click", (evento) => {\n  console.log("Clic en:", evento.target.textContent);\n});\nlista.firstElementChild.dispatchEvent(new Event("click", { bubbles: true }));',
      salida: 'Clic en: Pan'
    },
    {
      titulo: 'Delegación: un escucha para muchos',
      parrafos: [
        'Con delegación, el listener vive en el padre y usa event.target para saber qué hijo recibió el clic. Ventajas: un solo listener (menos memoria), y funciona para elementos que se crean DESPUÉS, porque el escucha está en el ancestro que ya existía.',
        'Es el patrón estándar para listas dinámicas: la usarás en el mini proyecto de este módulo.'
      ],
      codigo: 'const lista = document.querySelector("#productos");\nlista.addEventListener("click", (evento) => {\n  if (evento.target.tagName === "LI") {\n    console.log("Elegiste:", evento.target.textContent);\n  }\n});\nconst nuevo = document.createElement("li");\nnuevo.textContent = "Azúcar";\nlista.appendChild(nuevo);\nnuevo.dispatchEvent(new Event("click", { bubbles: true }));',
      salida: 'Elegiste: Azúcar'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Poner el listener sobre un elemento que no existe (null): boton.addEventListener se cae. Busca el elemento primero y verifica.',
        'Olvidar los paréntesis de la función: addEventListener("click", saludar()) ejecuta la función YA y registra su resultado. Pasa solo la referencia: saludar.',
        'Crear el elemento después del listener del padre: no funciona al revés — el listener del padre sirve justamente para eso (delegación).',
        'Esperar que el evento de un hijo dispare el del padre sin bubbling: el bubbling es automático, pero un evento artificial con dispatchEvent también burbujea.',
        'Poner el listener de un elemento que todavía no existe en el DOM: búscalo después de montarlo.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Delega siempre que haya listas o colecciones: un listener en el padre en vez de N en los hijos.',
        'Nombra las funciones del callback por su intención (manejarClic, onComprar) en lugar de anónimas gigantes.',
        'Filtra con event.target dentro del listener: por ejemplo, solo reaccionar si el clic fue en un LI.',
        'Usa preventDefault() en submit cuando no quieras que el formulario recargue la página.',
        'Quita listeners que ya no se necesitan con removeEventListener (importante en apps grandes).'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El botón que responde',
      codigo: 'const boton = document.querySelector("#boton");\nconst manejarClic = () => console.log("Producto comprado");\nboton.addEventListener("click", manejarClic);\nboton.dispatchEvent(new Event("click"));',
      salida: 'Producto comprado',
      explicacion: 'El listener se registra con la referencia a la función (sin paréntesis). El dispatchEvent simula el clic del usuario para que veas la salida.'
    },
    {
      titulo: 'Delegación en la lista',
      codigo: 'const lista = document.querySelector("#productos");\nlista.addEventListener("click", (evento) => {\n  if (evento.target.tagName === "LI") {\n    evento.target.classList.toggle("elegido");\n    console.log("Marcado:", evento.target.textContent);\n  }\n});\nlista.children[1].dispatchEvent(new Event("click", { bubbles: true }));',
      salida: 'Marcado: Leche',
      explicacion: 'El clic en el segundo li dispara el listener del ul; event.target es el li y le alterna la clase. Un solo listener sirve para toda la lista.'
    }
  ],
  ejercicios: [
    {
      titulo: 'El botón de bienvenida',
      dificultad: 'Fácil',
      consigna: [
        'La página base tiene un botón con id "boton". Registra un listener de clic que imprima "Hola, cliente" cada vez que ocurra. Luego dispara el evento para probarlo.'
      ],
      pasos: [
        'Busca el botón con querySelector.',
        'addEventListener("click", ...) con el callback que imprime.',
        'Dispara un clic con dispatchEvent(new Event("click")).'
      ],
      codigoInicial: '// Registra el listener y dispara el clic\n',
      pista: 'boton.addEventListener("click", () => console.log("Hola, cliente")); luego boton.dispatchEvent(new Event("click"));',
      tests: [
        { tipo: 'output', nombre: 'Saludo al hacer clic', esperado: ['Hola, cliente'], mensaje: 'El clic disparado debe imprimir "Hola, cliente".' }
      ],
      solucion: 'const boton = document.querySelector("#boton");\nboton.addEventListener("click", () => {\n  console.log("Hola, cliente");\n});\nboton.dispatchEvent(new Event("click"));'
    },
    {
      titulo: 'Delegación de la lista',
      dificultad: 'Media',
      consigna: [
        'La página base tiene una lista con id "productos" y tres li. Registra en la LISTA (no en cada li) un listener de clic que imprima "Elegiste: X" con el texto del li que recibió el clic. Luego dispara un clic en el segundo li.'
      ],
      pasos: [
        'Busca la lista.',
        'El listener usa evento.target para saber quién recibió el clic.',
        'Filtra con if (evento.target.tagName === "LI").',
        'Dispara el clic sobre lista.children[1].'
      ],
      codigoInicial: '// Registra el listener en la lista y dispara el clic\n',
      pista: 'evento.target.textContent da el texto del li clickeado. Los children de la lista son los li.',
      tests: [
        { tipo: 'output', nombre: 'El elegido', esperado: ['Elegiste: Leche'], mensaje: 'El clic en el segundo li debe imprimir "Elegiste: Leche".' }
      ],
      solucion: 'const lista = document.querySelector("#productos");\nlista.addEventListener("click", (evento) => {\n  if (evento.target.tagName === "LI") {\n    console.log(`Elegiste: ${evento.target.textContent}`);\n  }\n});\nlista.children[1].dispatchEvent(new Event("click", { bubbles: true }));'
    },
    {
      titulo: 'Contar los clics',
      dificultad: 'Media',
      consigna: [
        'La página base tiene un botón. Crea una variable contador = 0 y un listener que la incremente en cada clic e imprima el nuevo valor. Dispara tres clics.'
      ],
      pasos: [
        'Declara let contador = 0 fuera del callback.',
        'El callback hace contador++ y lo imprime.',
        'Dispara tres clics con dispatchEvent.'
      ],
      codigoInicial: '// Declara el contador, registra el listener y dispara 3 clics\n',
      pista: 'El contador vive fuera del callback: cada clic lo incrementa y lo imprime.',
      tests: [
        { tipo: 'output', nombre: 'Tres clics, tres valores', esperado: ['1', '2', '3'], mensaje: 'Cada clic incrementa e imprime: 1, 2, 3.' }
      ],
      solucion: 'const boton = document.querySelector("#boton");\nlet contador = 0;\nboton.addEventListener("click", () => {\n  contador++;\n  console.log(contador);\n});\nboton.dispatchEvent(new Event("click"));\nboton.dispatchEvent(new Event("click"));\nboton.dispatchEvent(new Event("click"));'
    }
  ]
}

