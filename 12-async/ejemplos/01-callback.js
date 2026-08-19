// 01-callback.js — Callbacks
// Correr con: node 01-callback.js

// Callback: funcion que se pasa para ejecutar cuando algo termina.
// Es como dejarle el encargo al delivery: cuando el cafe este listo,
// la funcion alListo te avisa. Vos seguis con lo tuyo mientras tanto.

function prepararCafe(tiempoMs, alListo) {
  setTimeout(() => {
    alListo('cafe listo');
  }, tiempoMs);
}

// Ejemplo basico: el callback se ejecuta cuando el timer termina
console.log('iniciando...');
prepararCafe(500, (mensaje) => {
  console.log(mensaje);
});
console.log('mientras tanto...');

// El orden muestra que Node NO espera: es asincrono.
// Mientras el cafe se hace, el programa sigue con lo suyo,
// como quien espera el pan mientras va armando la mesa.
//
// iniciando...
// mientras tanto...
// cafe listo  (500 ms despues)

// --- Callback anidado (callback hell) ---

function prepararToast(tiempoMs, alListo) {
  setTimeout(() => alListo('toast listo'), tiempoMs);
}

function prepararJugo(tiempoMs, alListo) {
  setTimeout(() => alListo('jugo listo'), tiempoMs);
}

// Anidar callbacks: funciona pero se vuelve ilegible rapido
prepararCafe(300, (cafe) => {
  prepararToast(200, (toast) => {
    prepararJugo(100, (jugo) => {
      console.log('Desayuno completo:', cafe, toast, jugo);
    });
  });
});
// Desayuno completo: cafe listo toast listo jugo listo

// Esta anidacion es el "callback hell": cuanto mas pasos, mas dificil
// de leer. Por eso existen las promesas: para encadenar sin anidar.
