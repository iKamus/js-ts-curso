# Próximos pasos — temas para después del curso

Este README es tu mapa de ruta: acá anoté todo lo que falta para trabajar como dev en el mundo real, en el orden que te conviene aprenderlo. No hace falta que lo leas todo hoy; guardalo como la lista del super de los próximos meses.

## Qué podés hacer YA con esta base

No te subestimes: con los 15 módulos ya sabés programar. Lo que podés construir solo, sin nada más:

- **Scripts y automatizaciones**: renombrar archivos, limpiar carpetas, procesar textos, parsear logs
- **CLIs (programas de terminal)**: como el gestor de tareas del módulo 13, pero con más funciones
- **Mini apps de consola**: calculadoras, juegos de preguntas, registro de gastos, agenda de contactos
- **APIs HTTP**: un servidor con rutas, JSON y datos en memoria (módulo 14) o guardados en archivos (módulo 13)
- **Procesadores de datos**: leer un CSV/JSON, filtrar, ordenar y generar un reporte

Ejemplos concretos para practicar:
- Una CLI de gastos que sume por categoría (`node gastos.js add "almuerzo" 500`)
- Un bot de recordatorios que lea una lista de tareas y avise por consola
- Una API de recetas o de películas con CRUD completo
- Un generador de reportes que lea `datos.json` y arme un resumen

Si podés hacer esas cuatro cosas, ya estás programando de verdad, no solo siguiendo ejercicios.

## Temas pendientes, en orden sugerido

| # | Tema | Qué es | Por qué lo necesitás |
|---|---|---|---|
| 1 | **Navegador y DOM** | Manejar HTML, eventos, `document` y `fetch` desde el browser | Hasta acá todo fue Node (sin pantalla). Acá empezás a hacer cosas que se VEN |
| 2 | **npm y paquetes** | Instalar dependencias, `package.json` a fondo, versionado semántico | Todo proyecto real usa librerías de terceros |
| 3 | **Frameworks de backend** | Express o Fastify: rutas, middlewares, validación | El `http` puro del módulo 14 es la base, pero nadie lo usa crudo en producción |
| 4 | **Bases de datos** | SQL (SQLite/PostgreSQL) o MongoDB, con un ORM (Prisma) | Guardar datos para siempre, no solo mientras el server corre |
| 5 | **Testing** | Jest o Vitest: tests unitarios y de integración | Las empresas exigen código verificado; es lo que separa hobby de laburo |
| 6 | **Git y GitHub** | Versionado, commits, ramas, pull requests | No es JS, pero es la herramienta #1 del trabajo en equipo |
| 7 | **Regex** | Expresiones regulares: buscar patrones en texto | Las viste de pasada (`/\s/g`); en validaciones y parsing se usan todo el tiempo |
| 8 | **Seguridad y auth** | Contraseñas con hash, tokens (JWT), HTTPS, evitar inyección SQL | Una API sin esto es una casa sin puerta |
| 9 | **Build tools y linting** | Vite, ESLint, Prettier, bundlers | Para proyectos grandes y trabajo en equipo prolijo |
| 10 | **Deployment** | Subir la app a producción (Vercel, Render, Railway) | Hasta que no está online, es solo un archivo en tu compu |

## Cómo seguís después del curso

1. **Hacé proyectos propios** con la base que ya tenés (mínimo 2 o 3). Acá es donde realmente se aprende.
2. Aprendé **navegador + DOM** (tema 1): te abre la puerta a hacer apps con interfaz.
3. Después **npm + Express + base de datos** (temas 2 a 4): ya podés armar una app web completa de punta a punta.
4. Git desde el primer proyecto, aunque sea solo para vos (tema 6).
5. Testing y seguridad (temas 5, 8) cuando ya tengas una app que valga la pena proteger y verificar.
6. Deployment (tema 10) apenas tengas algo que mostrar: no hay sensación más linda que mandarle el link a un amigo.

## Regla de oro

No estudies estos temas en el vacío: cada uno se aprende mejor cuando lo necesitás para un proyecto. Si te quedás trabado con algo del curso, releé el módulo y fijate qué podés construir con eso. El código se aprende programando, no mirando.