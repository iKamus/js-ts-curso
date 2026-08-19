# Proyecto: Gestor de contactos

## Consigna

Crear un gestor de contactos que permita agregar, buscar, listar, agrupar y respaldar contactos usando objetos. Todo se hace con lo visto en el módulo 05: objetos literales, métodos con `this`, Object utilities, spread, copias y optional chaining.

## Requisitos

1. Cada contacto es un objeto con: `nombre`, `telefono`, `email` (opcional).
2. El gestor es un objeto con métodos que usan `this`.
3. Usar `Object.values` + `filter` para buscar por nombre.
4. Usar `Object.entries` + `map` para formatear contactos para mostrar.
5. Usar spread para crear grupos de contactos (merge de dos listas).
6. Usar `structuredClone` para crear un backup profundo del estado.
7. Usar optional chaining para acceder a email (que puede no existir).

## Estructura del archivo

El archivo `contactos.js` tiene la plantilla incompleta. Completá las partes marcadas con `// completa aquí`.

## Pasos sugeridos

1. Crear el objeto `gestor` con una propiedad `contactos` (objeto vacío) y estos métodos:
   - `agregar(nombre, telefono, email)` — agrega un contacto al objeto
   - `buscar(parcial)` — busca contactos cuyo nombre contenga el texto (usa `Object.values` + `filter`)
   - `listar()` — devuelve un array de strings formateados con `Object.entries` + `map`
   - `grupos(lista1, lista2)` — une dos listas de contactos con spread
   - `backup()` — devuelve un clon profundo con `structuredClone`
2. Probar: agregar 3 contactos, buscar uno, listar, hacer backup, modificar el backup y verificar que el original no cambió.

## Tips

- Para buscar por nombre parcial, usá `.toLowerCase().includes()` para que no importen mayúsculas.
- El método `listar` puede devolver strings como `"Ana → 123456"` o `"Ana → 123456 (ana@mail.com)"` si tiene email.
- Para `grupos`, recordá que `Object.assign({}, obj1, obj2)` fusiona dos objetos.
- El backup debe ser profundo: si hay contactos con email anidado, `structuredClone` lo copia todo.

## Resultado esperado

```
Contactos: { Ana: { telefono: '123456', email: 'ana@mail.com' }, Luis: { telefono: '789012' }, Caro: { telefono: '345678', email: 'caro@mail.com' } }
Búsqueda 'an': [ 'Ana → 123456 (ana@mail.com)' ]
Listado: [ 'Ana → 123456 (ana@mail.com)', 'Luis → 789012', 'Caro → 345678 (caro@mail.com)' ]
Backup original Ana email: ana@mail.com
Backup modificado Ana email: modificado
Original Ana email: ana@mail.com
```
