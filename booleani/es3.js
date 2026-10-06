/*
  ESERCIZIO 3 - AND logico (&&)

  && restituisce true solo se entrambi i valori sono veri.

  Sintassi:  valore && valore
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es3_1(a, b) {
  return a && b;
  // 1. Restituisci true se a E b sono entrambi veri
  // TODO: scrivi qui la tua soluzione
}

function es3_2() {
  return true && false;
  // 2. Restituisci il risultato di true && false
  // TODO: scrivi qui la tua soluzione
}

function es3_3(eta, patente) {
  return eta >= 18 && patente
  // 3. Restituisci true se eta >= 18 E patente è true
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es3_1, es3_2, es3_3 };
