/*
  ESERCIZIO 5 - endsWith()

  Verifica se una stringa termina con un determinato testo.

  Sintassi:  stringa.endsWith(testo)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es5_1() {
  return "documento.pdf".endsWith(".pdf");
  // 1. Restituisci true se "documento.pdf" termina con ".pdf"
  // TODO: scrivi qui la tua soluzione
}

function es5_2() {
   return "ciao".endsWith("o");
  // 2. Restituisci true se "ciao" termina con "o"
  // TODO: scrivi qui la tua soluzione
}

function es5_3() {
   return "musica.mp3".endsWith(".wav");
  // 3. Restituisci true se "musica.mp3" termina con ".wav"
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es5_1, es5_2, es5_3 };
