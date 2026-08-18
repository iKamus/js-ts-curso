// 01-callback.js — Callbacks

// Callback: función que se pasa para ejecutar cuando algo termina
// Es como dejarle el encargo al delivery: cuando el café esté listo,
// la función alListo te avisa. Vos seguís con lo tuyo mientras tanto.
function prepararCafe(tiempoMs, alListo) {
  setTimeout(() => {
    alListo('café listo');
  }, tiempoMs);
}

console.log('iniciando...');
prepararCafe(500, (mensaje) => {
  console.log(mensaje);
});
console.log('mientras tanto...');

// El orden muestra que Node NO espera: es asincrónico
// Mientras el café se hace, el programa sigue con lo suyo,
// como quien espera el pan mientras va armando la mesa.
// iniciando...
// mientras tanto...
// café listo  (500 ms después)