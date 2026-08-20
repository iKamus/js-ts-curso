export default {
  id: 'm4-l42',
  numero: 42,
  titulo: 'Generics básicos',
  nivel: 'Dificil',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Generic', definicion: 'Una función, clase o tipo que funciona con varios tipos, declarado entre ángulos: <T>.' },
    { termino: 'T', definicion: 'La letra convencional para el "tipo parámetro": un comodín que se reemplaza por el tipo real al usar.' },
    { termino: 'Función identidad', definicion: 'La función genérica clásica: recibe un valor de tipo T y devuelve ese mismo valor con tipo T.' },
    { termino: 'Array<T>', definicion: 'El generic que ya conocías: Array<string> es lo mismo que string[].' },
    { termino: 'Inferencia de genéricos', definicion: 'TypeScript deduce T automáticamente según el argumento que pases: identidad(5) deja a T como number.' },
    { termino: 'Caja<T>', definicion: 'Un contenedor genérico: una caja que guarda un valor, y el tipo del valor se decide al usarla.' }
  ],
  secciones: [
    {
      titulo: 'El problema que resuelven',
      parrafos: [
        'Imagina que la tienda recibe paquetes y los guarda en cajas: a veces la caja tiene una lata, a veces un pan, a veces un número de pedido. No quieres una función distinta para cada caso: quieres UNA función de caja que sirva para todos.',
        'Sin generics, tendrías que repetir el código por cada tipo, o recurrir a any (que apaga la verificación). Con generics, escribes la lógica una vez y el tipo se decide en cada uso.'
      ],
      codigo: 'function identidad<T>(valor: T): T {\n  return valor;\n}\n\nconsole.log(identidad("lata"));\nconsole.log(identidad(42));',
      salida: 'lata\n42'
    },
    {
      titulo: 'La sintaxis: <T>',
      parrafos: [
        'Los ángulos declaran el tipo parámetro: <T> significa "hay un tipo comodín llamado T". Después lo usas en los parámetros y en el retorno: identidad<T>(valor: T): T dice "recibe algo de tipo T y devuelve algo de tipo T".',
        'Puedes nombrarlo como quieras, pero por convención se usa T (de tipo), y después U, V si hay más de uno. T es como la letra del cajón: una etiqueta que se reemplaza por el tipo real en cada llamada.'
      ],
      codigo: 'function identidad<T>(valor: T): T {\n  return valor;\n}\n\nconst texto = identidad<string>("lata");\nconst numero = identidad<number>(42);\nconsole.log(texto, numero);',
      salida: 'lata 42'
    },
    {
      titulo: 'Inferencia: no hace falta decir T',
      parrafos: [
        'Lo habitual es no escribir el <T> en la llamada: TypeScript lo deduce del argumento. identidad("lata") deja a T como string automáticamente. Es la misma inferencia de siempre, aplicada a genéricos.',
        'El resultado: código genérico con verificación de tipos completa. Si haces identidad(42).toUpperCase(), el compilador te frena: T quedó como number.'
      ],
      codigo: 'function identidad<T>(valor: T): T {\n  return valor;\n}\n\nconst a = identidad("lata");\nconst b = identidad([1, 2, 3]);\nconsole.log(a);\nconsole.log(b.length);',
      salida: 'lata\n3'
    },
    {
      titulo: 'Array<T>: el generic que ya usabas',
      parrafos: [
        'Array<T> es un generic: Array<string> significa "un array cuyo T es string". La notación string[] es solo el atajo de siempre. Cada vez que escribes un array tipado, estás usando genéricos sin saberlo.',
        'Al ver Array<T> en el código ajeno, ya sabes leerlo: "lista de T".'
      ],
      codigo: 'const latas: Array<string> = ["lata", "pan"];\nconst precios: Array<number> = [10, 20];\nconsole.log(latas.length, precios[1]);',
      salida: '2 20'
    },
    {
      titulo: 'Un ejemplo real: la caja<T>',
      parrafos: [
        'El ejemplo clásico de la tienda: una caja que guarda un contenido, cuyo tipo se decide al crearla. La función guardarEnCaja<T> recibe un contenido y devuelve un objeto con él; la clase Caja<T> guarda y devuelve el contenido con métodos.',
        'Con genéricos, la misma caja sirve para latas, para panes y para números, y en cada caso el compilador verifica que saques el tipo correcto.'
      ],
      codigo: 'function guardarEnCaja<T>(contenido: T): { contenido: T } {\n  return { contenido };\n}\n\nconsole.log(JSON.stringify(guardarEnCaja("pan")));\nconsole.log(JSON.stringify(guardarEnCaja(42)));',
      salida: '{"contenido":"pan"}\n{"contenido":42}'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar el <T> y usar any: pierdes toda la verificación. Si la función sirve para varios tipos, es genérica, no any.',
        'Escribir los ángulos al revés: >T< no existe. La sintaxis es function nombre<T>(...).',
        'Usar T sin declararlo: si escribes valor: T sin el <T> en la firma, TypeScript dice que T no existe.',
        'Anotar <T> en la llamada cuando no hace falta: identidad<string>("lata") funciona, pero identidad("lata") es más limpio.',
        'Confundir genéricos con any: any no verifica nada; T sí, porque queda fijo en cada uso.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa generics cuando la misma lógica sirve para varios tipos y quieres conservar la verificación.',
        'Deja que TypeScript infiera T en las llamadas: escribe <T> explícito solo si hay ambigüedad.',
        'Nombra los tipos parámetro con letras convencionales (T, U, V) o con nombres descriptivos si aportan (Item, Entidad).',
        'Mantén los generics simples: si la firma se vuelve ilegible, es señal de que hay que simplificar.',
        'Combínalos con interfaces: interface Caja<T> { contenido: T } define el plano genérico de una vez.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La función identidad',
      codigo: 'function identidad<T>(valor: T): T {\n  return valor;\n}\n\nconsole.log(identidad(5));\nconsole.log(identidad("lata"));\nconsole.log(identidad(true));',
      salida: '5\nlata\ntrue',
      explicacion: 'La misma función sirve para number, string y boolean. En cada llamada, T se fija al tipo del argumento y el retorno hereda ese tipo: identidad(5) es un number garantizado.'
    },
    {
      titulo: 'La clase Caja<T>',
      codigo: 'class Caja<T> {\n  private contenido: T | null = null;\n\n  poner(valor: T): void {\n    this.contenido = valor;\n  }\n\n  sacar(): T | null {\n    return this.contenido;\n  }\n}\n\nconst cajaDeLatas = new Caja<string>();\ncajaDeLatas.poner("lata");\nconsole.log(cajaDeLatas.sacar());',
      salida: 'lata',
      explicacion: 'La caja se crea con un tipo: Caja<string> solo acepta strings en poner y devuelve string (o null) en sacar. La misma clase serviría con Caja<number> sin tocar su código.'
    }
  ],
  ejercicios: [
    {
      titulo: 'La función identidad',
      dificultad: 'Fácil',
      consigna: [
        'Implementa la función identidad<T>(valor: T): T que devuelva el valor recibido. Llámala con 5 y con "lata", e imprime ambos resultados.'
      ],
      pasos: [
        'Declara el tipo parámetro con <T> en la firma.',
        'Usa T en el parámetro y en el retorno.',
        'Haz las dos llamadas sin anotar T (que se infiera) e imprime.'
      ],
      codigoInicial: '// Implementa la función identidad<T>\n',
      pista: 'function identidad<T>(valor: T): T { return valor; }',
      tests: [
        { tipo: 'output', nombre: 'Los dos valores', esperado: ['5', 'lata'], mensaje: 'identidad(5) devuelve 5 e identidad("lata") devuelve lata.' },
        { tipo: 'codigo', nombre: 'Generic declarado', explicacion: 'Usar <T> en la firma de la función', requerido: ['<T>'], mensaje: 'La función debe declarar el tipo parámetro <T>.' }
      ],
      solucion: 'function identidad<T>(valor: T): T {\n  return valor;\n}\n\nconsole.log(identidad(5));\nconsole.log(identidad("lata"));'
    },
    {
      titulo: 'Guardar en una caja genérica',
      dificultad: 'Media',
      consigna: [
        'Implementa una función guardarEnCaja<T>(contenido: T) que devuelva un objeto { contenido: T }. Imprime en JSON el resultado con "pan" y con 42.'
      ],
      pasos: [
        'Declara <T> y úsalo en el parámetro y en el tipo del objeto devuelto.',
        'Devuelve { contenido } (la propiedad se asigna sola).',
        'Imprime ambas llamadas con JSON.stringify.'
      ],
      codigoInicial: '// Implementa guardarEnCaja<T>\n',
      pista: 'return { contenido };',
      tests: [
        { tipo: 'output', nombre: 'Las dos cajas', esperado: ['{"contenido":"pan"}', '{"contenido":42}'], mensaje: 'Con "pan" el JSON es {"contenido":"pan"} y con 42 es {"contenido":42}.' },
        { tipo: 'codigo', nombre: 'Generic declarado', explicacion: 'Usar <T> en la firma de la función', requerido: ['<T>'], mensaje: 'La función debe declarar el tipo parámetro <T>.' }
      ],
      solucion: 'function guardarEnCaja<T>(contenido: T): { contenido: T } {\n  return { contenido };\n}\n\nconsole.log(JSON.stringify(guardarEnCaja("pan")));\nconsole.log(JSON.stringify(guardarEnCaja(42)));'
    },
    {
      titulo: 'La clase Caja<T>',
      dificultad: 'Dificil',
      consigna: [
        'Implementa una clase Caja<T> con una propiedad private contenido: T | null = null, un método poner(valor: T): void que guarde el valor, y un método sacar(): T | null que lo devuelva. Crea una caja de strings (new Caja<string>()), guarda "lata" e imprime lo que devuelve sacar().'
      ],
      pasos: [
        'Declara la clase con <T> y la propiedad privada.',
        'Implementa poner y sacar con los tipos correctos.',
        'Crea la caja, guarda "lata" e imprime sacar().'
      ],
      codigoInicial: '// Implementa la clase Caja<T>\n',
      pista: 'private contenido: T | null = null;',
      tests: [
        { tipo: 'output', nombre: 'Lo que saca la caja', esperado: ['lata'], mensaje: 'Después de poner "lata", sacar() debe devolver "lata".' },
        { tipo: 'codigo', nombre: 'Generic en la clase', explicacion: 'Declarar la clase con <T>', requerido: ['<T>'], mensaje: 'La clase debe declarar el tipo parámetro <T>.' }
      ],
      solucion: 'class Caja<T> {\n  private contenido: T | null = null;\n\n  poner(valor: T): void {\n    this.contenido = valor;\n  }\n\n  sacar(): T | null {\n    return this.contenido;\n  }\n}\n\nconst cajaDeLatas = new Caja<string>();\ncajaDeLatas.poner("lata");\nconsole.log(cajaDeLatas.sacar());'
    }
  ]
}