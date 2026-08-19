/*
Proyecto — Gestor de contactos

Un gestor de contactos es como una agenda: guardás personas con sus datos
y podés buscar, listar y organizar. Todo se hace con objetos.

El objeto gestor tiene:
- contactos: un objeto donde cada clave es el nombre y el valor es otro
  objeto con telefono y opcionalmente email.
- métodos que trabajan con las propiedades usando this.

Completá las partes marcadas con // completa aquí.
*/

const gestor = {
  contactos: {},

  agregar(nombre, telefono, email) {
    // completa aquí: guardar en this.contactos[nombre]
    // si email no se pasó, no lo pongas (para practicar optional chaining después)
  },

  buscar(parcial) {
    // completa aquí: usar Object.values + filter
    // buscar entre los contactos cuyo nombre incluya parcial (sin importar mayúsculas)
    // devolver un array de objetos contacto que coincidan
  },

  listar() {
    // completa aquí: usar Object.entries + map
    // devolver un array de strings como "Ana → 123456 (ana@mail.com)"
    // si no tiene email, mostrar solo "Luis → 789012"
    // usá optional chaining para el email: contacto.email?.toString() ?? ''
  },

  grupos(lista1, lista2) {
    // completa aquí: unir dos objetos de contactos con Object.assign
    // devolver un nuevo objeto (no mutar los originales)
  },

  backup() {
    // completa aquí: devolver structuredClone(this.contactos)
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
