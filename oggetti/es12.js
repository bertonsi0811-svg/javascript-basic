/*
  ESERCIZIO 12 - Destructuring

  Il destructuring estrae proprietà da un oggetto in variabili.

  Sintassi:  const { prop1, prop2 } = oggetto
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es12_1(obj) {
   const  {nome, eta} = obj;
   return nome;
  // 1. Estrai "nome" e "eta" con destructuring, restituisci nome
  // TODO: scrivi qui la tua soluzione
}

function es12_2(obj) {
  const {nome,cognome } = obj;
  return nome + " " + cognome;
  // 2. Estrai "nome" e "cognome" con destructuring, restituisci nome + " " + cognome
  // TODO: scrivi qui la tua soluzione
}

function es12_3(obj) {
const {marca, modello} = obj;
return "Marca: " + marca + ", Modello: " + modello;
  // 3. Estrai "marca" e "modello", restituisci "Marca: " + marca + ", Modello: " + modello
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es12_1, es12_2, es12_3 };