export default {
  id: 'm3-l29',
  numero: 29,
  titulo: 'Formularios: capturar inputs y validar',
  nivel: 'Medio',
  htmlBase: '<form id="formulario"><input id="nombre" type="text" placeholder="Tu nombre"><input id="edad" type="number" placeholder="Edad"><button type="submit">Enviar</button></form>',
  palabrasClave: [
    { termino: 'Input', definicion: 'El campo donde el usuario escribe: texto, número, email, etc. Se lee con input.value.' },
    { termino: 'Formulario', definicion: 'Un grupo de inputs que se envían juntos. El evento clave es submit.' },
    { termino: 'value', definicion: 'La propiedad del input que contiene lo que el usuario escribió. Siempre es texto, incluso en type="number".' },
    { termino: 'preventDefault', definicion: 'Método del evento que anula el comportamiento por defecto: evita que el submit recargue la página.' },
    { termino: 'Validación', definicion: 'Revisar que los datos cumplan reglas (no vacíos, rangos, formatos) antes de usarlos.' },
    { termino: 'Evento input', definicion: 'Se dispara con cada cambio de texto en el campo, tecla por tecla.' },
    { termino: 'Evento submit', definicion: 'Se dispara al enviar el formulario (Enter o clic en el botón submit).' }
  ],
  secciones: [
    {
      titulo: 'Leer lo que el usuario escribe',
      parrafos: [
        'Cada input tiene una propiedad value con el texto actual. Para leerla hay dos momentos típicos: con el evento input (cada tecla) o con el evento submit (cuando se envía todo junto).',
        'Detalle importante: value SIEMPRE es texto. Si el input es de tipo number y el usuario escribe 25, value es "25" (string). Para operar con números, conviértelo: Number(input.value) o parseInt.'
      ],
      codigo: 'const nombre = document.querySelector("#nombre");\nnombre.addEventListener("input", () => {\n  console.log("Escribiste:", nombre.value);\n});\nnombre.value = "Ana";\nnombre.dispatchEvent(new Event("input"));',
      salida: 'Escribiste: Ana'
    },
    {
      titulo: 'Capturar el envío del formulario',
      parrafos: [
        'El evento submit del formulario se dispara al enviar. Tu primera acción SIEMPRE es evento.preventDefault(), para que el navegador no recargue la página. Después lees los values y haces tu lógica.',
        'Escucha el submit en el FORM, no en el botón. El botón solo dispara el submit.'
      ],
      codigo: 'const formulario = document.querySelector("#formulario");\nformulario.addEventListener("submit", (evento) => {\n  evento.preventDefault();\n  const nombre = document.querySelector("#nombre").value;\n  const edad = Number(document.querySelector("#edad").value);\n  console.log(`Hola ${nombre}, tenés ${edad} años`);\n});\nformulario.dispatchEvent(new Event("submit"));',
      salida: 'Hola , tenés NaN años'
    },
    {
      titulo: 'Validar antes de usar',
      parrafos: [
        'La validación es el filtro de entrada: si los datos no cumplen las reglas, avisás y no seguís. Las reglas típicas: campo vacío, números fuera de rango, formatos incorrectos.',
        'El patrón es: leer → validar (con if y return temprano) → procesar. Cada validación fallida muestra un mensaje claro y corta el flujo.'
      ],
      codigo: 'const formulario = document.querySelector("#formulario");\nformulario.addEventListener("submit", (evento) => {\n  evento.preventDefault();\n  const nombre = document.querySelector("#nombre").value.trim();\n  const edad = Number(document.querySelector("#edad").value);\n  if (nombre === "") {\n    console.log("Error: el nombre no puede estar vacío");\n    return;\n  }\n  if (edad < 0 || edad > 120) {\n    console.log("Error: edad inválida");\n    return;\n  }\n  console.log("Datos válidos");\n});\nformulario.dispatchEvent(new Event("submit"));',
      salida: 'Error: el nombre no puede estar vacío'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar preventDefault: la página se recarga y pierde todo lo que hiciste con JS.',
        'Sumar values sin convertirlos: "5" + "3" da "53". Usa Number(input.value).',
        'Escuchar el submit en el botón en vez del form: el evento viaja del form al botón, no al revés.',
        'Validar solo el valor "visual" sin trim: un espacio " " parece texto; trim() limpia los extremos.',
        'Poner el listener en un input que no existe (null).',
        'NaN como resultado de Number("") o Number("abc"): valida con isNaN o revisando que el campo no esté vacío.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Siempre preventDefault() como primera línea del submit.',
        'Lee todos los values, valida todo, y solo entonces procesa.',
        'Usa .trim() en los textos para ignorar espacios accidentales.',
        'Convierte números con Number() y valida con isNaN.',
        'Mensajes de error específicos: di QUÉ falló y en qué campo.',
        'Guarda los elementos en constantes si los usás varias veces (nombre, edad).'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Saludar con los datos del form',
      codigo: 'const formulario = document.querySelector("#formulario");\nformulario.addEventListener("submit", (evento) => {\n  evento.preventDefault();\n  const nombre = document.querySelector("#nombre").value.trim();\n  const edad = Number(document.querySelector("#edad").value);\n  if (!nombre || !edad) {\n    console.log("Faltan datos");\n    return;\n  }\n  console.log(`Bienvenido ${nombre} (${edad} años)`);\n});\nconst f = document.querySelector("#formulario");\ndocument.querySelector("#nombre").value = "Ana";\ndocument.querySelector("#edad").value = "30";\nf.dispatchEvent(new Event("submit"));',
      salida: 'Bienvenido Ana (30 años)',
      explicacion: 'El submit se captura en el form, se evita la recarga, se leen los values (edad convertida con Number) y se valida que no falten datos antes de saludar.'
    },
    {
      titulo: 'Validación con dos reglas',
      codigo: 'const formulario = document.querySelector("#formulario");\nformulario.addEventListener("submit", (evento) => {\n  evento.preventDefault();\n  const nombre = document.querySelector("#nombre").value.trim();\n  const edad = Number(document.querySelector("#edad").value);\n  if (nombre === "") return console.log("Nombre obligatorio");\n  if (edad < 18) return console.log("Solo mayores de 18");\n  console.log("Acceso permitido");\n});\ndocument.querySelector("#nombre").value = "Luis";\ndocument.querySelector("#edad").value = "15";\nformulario.dispatchEvent(new Event("submit"));',
      salida: 'Solo mayores de 18',
      explicacion: 'Cada regla corta el flujo con return. Con Luis y 15 años, la segunda regla atrapa el caso y muestra su mensaje.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Leer el nombre',
      dificultad: 'Fácil',
      consigna: [
        'La página base tiene un input con id "nombre". Asigna el valor "Ana" al input y usa el evento input para imprimir "Escribiste: Ana" cuando ocurra.'
      ],
      pasos: [
        'Busca el input y registra el listener input.',
        'El callback imprime el value.',
        'Asigna el value y dispara el evento input.'
      ],
      codigoInicial: '// Registra el listener, asigna el valor y dispara\n',
      pista: 'nombre.value = "Ana"; nombre.dispatchEvent(new Event("input"));',
      tests: [
        { tipo: 'output', nombre: 'Mensaje del input', esperado: ['Escribiste: Ana'], mensaje: 'El evento input con value "Ana" debe imprimir "Escribiste: Ana".' }
      ],
      solucion: 'const nombre = document.querySelector("#nombre");\nnombre.addEventListener("input", () => {\n  console.log(`Escribiste: ${nombre.value}`);\n});\nnombre.value = "Ana";\nnombre.dispatchEvent(new Event("input"));'
    },
    {
      titulo: 'Validar el nombre vacío',
      dificultad: 'Media',
      consigna: [
        'Registra el evento submit del formulario que evite la recarga (preventDefault). Si el campo nombre está vacío o solo tiene espacios, imprime "Error: nombre obligatorio". Si no, imprime "Hola, [nombre]". Prueba el caso del error.'
      ],
      pasos: [
        'preventDefault como primera línea.',
        'Lee el value con .trim().',
        'Si está vacío → mensaje de error y return.',
        'Si no → saludo. Dispara el submit sin escribir nada.'
      ],
      codigoInicial: '// Registra el submit con la validación\n',
      pista: 'nombre.value.trim() === "" detecta vacío o solo espacios.',
      tests: [
        { tipo: 'output', nombre: 'Error al enviar vacío', esperado: ['Error: nombre obligatorio'], mensaje: 'Con el input vacío, el submit debe imprimir el mensaje de error.' }
      ],
      solucion: 'const formulario = document.querySelector("#formulario");\nformulario.addEventListener("submit", (evento) => {\n  evento.preventDefault();\n  const nombre = document.querySelector("#nombre").value.trim();\n  if (nombre === "") {\n    console.log("Error: nombre obligatorio");\n    return;\n  }\n  console.log(`Hola, ${nombre}`);\n});\nformulario.dispatchEvent(new Event("submit"));'
    },
    {
      titulo: 'Sumar las edades',
      dificultad: 'Dificil',
      consigna: [
        'La página base tiene dos inputs: nombre (texto) y edad (número). Registra el submit que lea ambos, convierta la edad a número y valide: si la edad es menor a 18, imprime "Menor de edad"; si es mayor o igual, imprime "Bienvenido [nombre], edad [edad]". Prueba con nombre "Luis" y edad 25.'
      ],
      pasos: [
        'preventDefault primero.',
        'Lee nombre con trim y edad con Number.',
        'Valida con if (edad < 18).',
        'Asigna los values y dispara el submit.'
      ],
      codigoInicial: '// Registra el submit, valida y prueba con Luis/25\n',
      pista: 'Number(document.querySelector("#edad").value) convierte el texto a número.',
      tests: [
        { tipo: 'output', nombre: 'Bienvenida con datos válidos', esperado: ['Bienvenido Luis, edad 25'], mensaje: 'Con Luis y 25, el submit debe imprimir la bienvenida.' }
      ],
      solucion: 'const formulario = document.querySelector("#formulario");\nformulario.addEventListener("submit", (evento) => {\n  evento.preventDefault();\n  const nombre = document.querySelector("#nombre").value.trim();\n  const edad = Number(document.querySelector("#edad").value);\n  if (edad < 18) {\n    console.log("Menor de edad");\n    return;\n  }\n  console.log(`Bienvenido ${nombre}, edad ${edad}`);\n});\ndocument.querySelector("#nombre").value = "Luis";\ndocument.querySelector("#edad").value = "25";\nformulario.dispatchEvent(new Event("submit"));'
    }
  ]
}

