/*
Proyecto — Gestor de contactos

Un gestor de contactos es como una agenda: guardas personas con sus datos
y puedes buscar, listar y organizar. Todo se hace con objetos.

El objeto gestor tiene:
- contactos: un objeto donde cada clave es el nombre y el valor es otro
  objeto con telefono y opcionalmente email.
- métodos que trabajan con las propiedades usando this.

Completa las partes marcadas con // completa aqui.
*/

const gestor = {
  contactos: {},

  agregar(nombre, telefono, email) {
    // completa aqui: guardar en this.contactos[nombre]
    // si email no se paso, no lo pongas (usa un if o un OR || con valor por defecto)
  },

  buscar(parcial) {
    // completa aqui: usar Object.values + filter
    // buscar entre los contactos cuyo nombre incluya parcial (sin importar mayusculas)
    // devolver un array de strings formateados como los del listado
    // (ej: 'Ana → 123456 (ana@mail.com)')
  },

  listar() {
    // completa aqui: usar Object.entries + map
    // devolver un array de strings como "Ana → 123456 (ana@mail.com)"
    // si no tiene email, mostrar solo "Luis → 789012"
    // pista: comprueba si contacto.email existe con un if o un ternario
  },

  grupos(lista1, lista2) {
    // completa aqui: unir dos objetos de contactos con Object.assign
    // devolver un nuevo objeto (no mutar los originales)
  },

  backup() {
    // completa aqui: devolver structuredClone(this.contactos)
  },
};

// --- Pruebas ---

gestor.agregar('Ana', '123456', 'ana@mail.com');
gestor.agregar('Luis', '789012');
gestor.agregar('Caro', '345678', 'caro@mail.com');

console.log('Contactos:', gestor.contactos);

const encontrados = gestor.buscar('an');
console.log('Búsqueda "an":', encontrados);

console.log('Listado:', gestor.listar());

const backup = gestor.backup();
backup.Ana.email = 'modificado';
console.log('Backup original Ana email:', gestor.contactos.Ana.email);
console.log('Backup modificado Ana email:', backup.Ana.email);
console.log('Original Ana email:', gestor.contactos.Ana.email);
