/*
  ESERCIZIO 4 - startsWith()

  Verifica se una stringa inizia con un determinato testo.

  Sintassi:  stringa.startsWith(testo)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es4_1() {
  return "JavaScript".startsWith("Java");
  // 1. Restituisci true se "JavaScript" inizia con "Java"
  // TODO: scrivi qui la tua soluzione
}

function es4_2(url) {
    return url.startsWith("https");
  // 2. Verifica se la URL ricevuta inizia con "https"
  // TODO: scrivi qui la tua soluzione
}

function es4_3() {
    return "Milano".startsWith("Roma");
  // 3. Restituisci true se "Milano" inizia con "Roma"
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es4_1, es4_2, es4_3 };
