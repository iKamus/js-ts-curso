# Proyecto: Validador de formularios

## Consigna

Armar un validador de formularios que reciba datos de usuario (nombre, email, edad, password) y los valide usando errores personalizados, try/catch y throw. Vas a practicar crear clases de error custom, lanzar errores con throw, atraparlos con try/catch, y distinguir tipos de error con instanceof.

## Requisitos

1. **Crear clases de error custom** (todas heredan de `Error`):
   - `ErrorDeValidacion` — con propiedad `campo` que indica que campo fallo.
   - `ErrorDeLongitud` — hereda de `ErrorDeValidacion`, agrega propiedad `minimo` con la longitud requerida.
   - `ErrorDeFormato` — hereda de `ErrorDeValidacion`, para emails invalidos.

2. **Crear funciones de validacion** que usen `throw`:
   - `validarNombre(nombre)`:
     - si esta vacio o es solo espacios → `throw ErrorDeValidacion` (campo: 'nombre', mensaje: 'El nombre no puede estar vacio')
     - si tiene menos de 2 caracteres → `throw ErrorDeLongitud` (campo: 'nombre', mensaje: 'El nombre debe tener al menos 2 caracteres', minimo: 2)
   - `validarEmail(email)`:
     - si no tiene '@' → `throw ErrorDeFormato` (campo: 'email', mensaje: 'El email debe contener @')
     - si no tiene un '.' despues del '@' → `throw ErrorDeFormato` (campo: 'email', mensaje: 'El email debe tener un dominio valido')
   - `validarEdad(edad)`:
     - si no es un numero o es NaN → `throw ErrorDeValidacion` (campo: 'edad', mensaje: 'La edad debe ser un numero')
     - si es menor a 0 o mayor a 150 → `throw ErrorDeValidacion` (campo: 'edad', mensaje: 'La edad debe estar entre 0 y 150')
   - `validarPassword(password)`:
     - si tiene menos de 8 caracteres → `throw ErrorDeLongitud` (campo: 'password', mensaje: 'La password debe tener al menos 8 caracteres', minimo: 8)
     - si no tiene ningun numero → `throw ErrorDeFormato` (campo: 'password', mensaje: 'La password debe contener al menos un numero')

3. **Crear la funcion principal** `validarUsuario(datos)`:
   - Recibe un objeto con las propiedades: `nombre`, `email`, `edad`, `password`.
   - Usa `try` para validar cada campo, uno por uno.
   - En el `catch`, usa `instanceof` para distinguir que tipo de error es:
     - si es `ErrorDeLongitud` → mostrar: `Error de longitud en <campo>: <mensaje> (minimo: <minimo>)`
     - si es `ErrorDeFormato` → mostrar: `Error de formato en <campo>: <mensaje>`
     - si es `ErrorDeValidacion` → mostrar: `Error de validacion en <campo>: <mensaje>`
     - si es otro tipo de error → re-lanzarlo con `throw e`.
   - Si todos los campos pasan, mostrar: `Usuario valido: <nombre> (<email>)`

4. **Probar con varios casos** (uno por llamada, cada una en su propio try/catch):
   - Caso 1: datos validos → usuario valido
   - Caso 2: nombre vacio → error de validacion
   - Caso 3: email sin '@' → error de formato
   - Caso 4: edad negativa → error de validacion
   - Caso 5: password corta → error de longitud
   - Caso 6: password sin numero → error de formato
   - Caso 7: JSON malformado (try/catch para parsear un JSON que viene como string) → SyntaxError

5. **Usar try/catch para parsear JSON**:
   - Crear un string con JSON invalido: `'{ "nombre": "Ana" '`
   - Intentar parsearlo con `JSON.parse` dentro de un `try/catch`
   - Si falla, mostrar: `Error al parsear JSON: <mensaje>`

## Tips

- Para crear una clase que hereda de otra, usá `extends`. El constructor del hijo debe llamar a `super(mensaje)` antes de usar `this`.
- `instanceof` revisa la cadena de herencia: un `ErrorDeLongitud` tambien es `instanceof ErrorDeValidacion` y `instanceof Error`.
- Para verificar si un password tiene al menos un numero, podes usar un regex: `/\d/.test(password)`.
- Si no sabes que tipo de error es el que llego, re-lanzalo: `throw e` en el ultimo `else` del `catch`.
- El try/catch de JSON.parse es un caso practico de cuando la data viene de afuera (un archivo, una API, el usuario) y no podes confiar en que sea valida.

## Resultado esperado

```
--- Caso 1: datos validos ---
Usuario valido: Ana (ana@gmail.com)

--- Caso 2: nombre vacio ---
Error de validacion en nombre: El nombre no puede estar vacio

--- Caso 3: email sin @ ---
Error de formato en email: El email debe contener @

--- Caso 4: edad negativa ---
Error de validacion en edad: La edad debe estar entre 0 y 150

--- Caso 5: password corta ---
Error de longitud en password: La password debe tener al menos 8 caracteres (minimo: 8)

--- Caso 6: password sin numero ---
Error de formato en password: La password debe contener al menos un numero

--- Caso 7: JSON invalido ---
Error al parsear JSON: Unexpected end of JSON input
```
