/*
  ESERCIZIO 7 - slice()

  Estrae una parte della stringa.

  Sintassi:  stringa.slice(inizio, fine)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es7_1(s) {
  return s.slice(0,3);
  // 1. Restituisci le prime tre lettere della stringa ricevuta
  // TODO: scrivi qui la tua soluzione
}

function es7_2() {
  return "mario@gmail.com".slice("mario@gmail.com".indexOf("@") + 1 );

  // 2. Estrai il dominio da "mario@gmail.com" (tutto dopo la @)
  // TODO: scrivi qui la tua soluzione
}

function es7_3(s) {
return s.slice(-4);

  // 3. Restituisci gli ultimi 4 caratteri usando un indice negativo
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es7_1, es7_2, es7_3 };
