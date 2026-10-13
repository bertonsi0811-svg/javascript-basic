/*
  ESERCIZIO 4 - includes()

  .includes() verifica se un array contiene un determinato elemento.

  Sintassi:  array.includes(elemento)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es4_1(arr, elemento) {
  return arr.includes(elemento);
  // 1. Restituisci true se arr contiene elemento
  // TODO: scrivi qui la tua soluzione
}

function es4_2() {
  return ["rosso", "verde", "blu"].includes("giallo");
  // 2. Verifica se ["rosso", "verde", "blu"] contiene "giallo"
  // TODO: scrivi qui la tua soluzione
}

function es4_3(arr, a, b) {
  return arr.includes("a" && "b");
  // 3. Restituisci true se arr contiene sia a che b
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es4_1, es4_2, es4_3 };
