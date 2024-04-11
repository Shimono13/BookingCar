// function temperatureSettimana(a, b, c, d, e, f, g) {
//   // Array contenente le temperature dei giorni della settimana
//   const temperature = [a, b, c, d, e, f, g];

//   // Inizializza la temperatura massima e minima con il primo valore
//   let temperaturaMassima = temperature[0];
//   let temperaturaMinima = temperature[0];

//   // Ciclo per trovare la temperatura massima e minima
//   for (let i = 1; i < temperature.length; i++) {
//     if (temperature[i] > temperaturaMassima) {
//       temperaturaMassima = temperature[i];
//     }
//     if (temperature[i] < temperaturaMinima) {
//       temperaturaMinima = temperature[i];
//     }
//   }

//   // Restituisce la temperatura massima e minima
//   return { massima: temperaturaMassima, minima: temperaturaMinima };
// }

// // Esempio di utilizzo
// const risultato = temperatureSettimana(10, -2, 31, 22, 15, -6, 7);
// console.log(
//   "Giornata più calda =",
//   risultato.massima + ", giornata più fredda =",
//   risultato.minima
// // );

// // function numeroCasuale() {
// //   return Math.floor(Math.random() * 12) + 1;
// // }
// // const casual = numeroCasuale();
// // console.log("questo è il numero casuale :" + casual);

// // const numero1 = 8;
// // const numero2 = 12;

// // console.log("primo giocatore ha messo: " + numero1);

// // console.log("secondo giocatore ha messo: " + numero2);

// // function primogiocatore() {
// //   if (numero1 < casual) {
// //     return casual - numero1;
// //   }
// //   if (numero1 > casual) {
// //     return numero1 - casual;
// //   }
// // }

// // function secondogiocatore() {
// //   if (numero2 < casual) {
// //     return casual - numero2;
// //   }
// //   if (numero2 > casual) {
// //     return numero2 - casual;
// //   }
// // }

// // function differenza() {
// //   if (numero1 === casual) {
// //     console.log("ha vinto il primo giocatore");
// //   }
// //   if (numero2 === casual) {
// //     console.log("ha vinto il secondo giocatore");
// //   }
// //   if (primogiocatore() > secondogiocatore()) {
// //     console.log(
// //       "Non ha vinto nessuno però ci è andato più vicino il secondo giocatore"
// //     );
// //   }
// //   if (primogiocatore() < secondogiocatore()) {
// //     console.log(
// //       "Non ha vinto nessuno però ci è andato più vicino più primo giocatore"
// //     );
// //   }
// // }

// // differenza();

// // function generaArrayCasuale(N) {
// //   const array = [];
// //   for (let i = 0; i < N; i++) {
// //     array.push(Math.floor(Math.random() * 100)); // Genera numeri casuali tra 0 e 99
// //   }
// //   return array;
// // }

// // function numeriCasualiInteri() {
// //   return Math.floor(Math.random() * 100);

// function numeriCasualiInteri(array) {
//   let numeroCasuale;
//   do {
//     numeroCasuale = Math.floor(Math.random() * 30); // Genera un numero casuale tra 0 e 99
//   } while (array.includes(numeroCasuale)); // Continua a generare numeri casuali finché non trovi uno non ancora presente nell'array
//   return numeroCasuale;
// }

// const ArrayCasuale = [];
// const arraySceltaDame = [7, 21, 29, 13, 6];
// const numeriDoppi = [];

// function generazioneInArray() {
//   for (let i = 0; i < 5; i++) {
//     ArrayCasuale.push(numeriCasualiInteri(ArrayCasuale));
//   }
// }

// function controllore() {
//   for (let i = 0; i < arraySceltaDame.length; i++) {
//     for (let j = 0; j < ArrayCasuale.length; j++) {
//       if (arraySceltaDame[i] === ArrayCasuale[j]) {
//         numeriDoppi.push(arraySceltaDame[i]);
//         break;
//       }
//     }
//   }
// }

// function tombola() {
//   const lunghezzaNumeriDoppi = numeriDoppi.length;
//   if (lunghezzaNumeriDoppi === 2) {
//     console.log("AMBO");
//   }
//   if (lunghezzaNumeriDoppi === 3) {
//     console.log("TERNO");
//   }
//   if (lunghezzaNumeriDoppi === 4) {
//     console.log("QUADERNA");
//   }
//   if (lunghezzaNumeriDoppi === 6) {
//     console.log("CINQUINA");
//   }
//   if (lunghezzaNumeriDoppi === 10) {
//     console.log("TOMBOLA");
//   }
// }
// generazioneInArray();
// controllore();

// console.log(
//   "Questi sono i numeri fortunati: " +
//     ArrayCasuale +
//     " " +
//     "Questi sono i tuoi numeri: " +
//     arraySceltaDame +
//     " " +
//     "Questi sono i numeri che hai preso: " +
//     numeriDoppi
// );

// tombola();

// function contatto(nome, cognome, telefono, sesso) {
//   this.nome = nome;
//   this.cognome = cognome;
//   this.telefono = telefono;
//   this.sesso = sesso;
// }

// const contatti = [
//   {
//     nome: "alberto",
//     cognome: "pistola",
//     telefono: "06248323",
//     sesso: "maschio",
//   },
//   {
//     nome: "alessia",
//     cognome: "magna",
//     telefono: "041235674",
//     sesso: "maschio",
//   },
//   {
//     nome: "gianna",
//     cognome: "respiri",
//     telefono: "391485323",
//     sesso: "donna",
//   },
// ];

// function pushContatto() {
//   contatti.push(nuovo);
// }

// // console.log(contatti);
// // pushContatto();
// // console.log(contatti);

// function ricercacontatto(nome) {
//   const ricerca = [];
//   for (const contatto of contatti) {
//     if (nome === contatto.nome) {
//       ricerca.push(contatto);
//       console.log(ricerca);
//     }
//   }
//   if (ricerca.length === 0) {
//     console.log("il contatto non esiste");
//   }
// }

// // ricercacontatto("ssas");

// // contatti.push(nuovo);
// // console.log(contatti);

// // contatti.splice(0, 1);
// // console.log(contatti);

// function cancellazione(nome) {
//   for (let i = 0; i < contatti.length; i++)
//     if (contatti[i].nome === nome) {
//       contatti.splice(i, 1);
//     }
// }

// function modifica(nome, nomenuovo) {
//   for (let i = 0; i < contatti.length; i++)
//     if (contatti[i].nome === nome) {
//       contatti[i].nome = nomenuovo;
//     }
// }

// function pushacontatto() {
//   contatti.push(nuovo);
// }
// // modifica("gianna", "angela");
// // console.log(contatti);

// const nuovo = new contatto("simone", "nataloni", "3925948500", "maschio");
// contatti[1].nome = "ssdsd";
// console.log(contatti);

// function persona(nome, età, sesso, data, provenienza, fascicolo) {
//   this.nome = nome;
//   this.età = età;
//   this.sesso = sesso;
//   this.data = data;
//   this.provenienza = provenienza;
//   if (fascicolo) {
//     this.fascicolo = {
//       idendificativo: fascicolo.idendificativo,
//       dataC: fascicolo.dataC,
//       dataS: fascicolo.dataS,
//       crimine: fascicolo.crimine,
//     };
//   }
// }
// const guardie = [
//   {
//     nome: "sergius",
//     età: "34",
//     sesso: "maschio",
//     data: "24 / 04 / 1987,",
//   },
//   {
//     nome: "soldatus",
//     età: "60",
//     sesso: "maschio",
//     data: "22 / 01 / 1961,",
//   },
//   {
//     nome: "animalov",
//     età: "28",
//     sesso: "maschio",
//     data: "11 / 07 / 1997,",
//   },
//   {
//     nome: "gelatina",
//     età: "40",
//     sesso: "femmina",
//     data: "24 / 04 / 1990,",
//   },
// ];
// const criminali = [
//   {
//     nome: "magnone",
//     età: "34",
//     sesso: "maschio",
//     data: "24/04/ 1987,",
//     fascicolo: {
//       idendificativo: "2156121212",
//       dataC: "24/03/2000",
//       dataS: "12/01/2030",
//       crimine: "rapina",
//     },
//   },
//   {
//     nome: "deprovolus",
//     età: "60",
//     sesso: "maschio",
//     data: "22 / 01 / 1961,",
//     fascicolo: {
//       idendificativo: "45151515",
//       dataC: "24/03/1990",
//       dataS: "12/01/2050",
//       crimine: "omicidio",
//     },
//   },
//   {
//     nome: "devil",
//     età: "28",
//     sesso: "maschio",
//     data: "11 / 07 / 1997,",
//     fascicolo: {
//       idendificativo: "478463232",
//       dataC: "24/03/2010",
//       dataS: "12/01/2090",
//       crimine: "sterminio",
//     },
//   },
//   {
//     nome: "diabolicus",
//     età: "40",
//     sesso: "femmina",
//     data: "24 / 04 / 1990",
//     fascicolo: {
//       idendificativo: "3133229",
//       dataC: "24/03/1995",
//       dataS: "12/01/2030",
//       crimine: "isterica",
//     },
//   },
// ];

// const nuovaGuardi = new persona(
//   "giancarlo",
//   "45",
//   "maschio",
//   "23/06/1970",
//   "svizzera"
// );

// const nuovoDetenuto = new persona(
//   "erdemolisci",
//   "23",
//   "maschio",
//   "10/12/2000",
//   "tedesca",

//   {
//     idendificativo: "118514545",
//     dataC: "01/01/2012",
//     dataS: "01/01/2025",
//     crimine: "distruzione",
//   }
// );

// function ricercafascicolo(nome) {
//   for (let i = 0; i < criminali.length; i++)
//     if (nome === criminali[i].nome) {
//       console.log(criminali[i].fascicolo);
//     }
// }

// ricercafascicolo("magnone");

function aggiungiSettimana(settimana) {
  // Recupera le settimane esistenti
  const settimanePalestra =
    JSON.parse(localStorage.getItem("settimanePalestra")) || [];

  // Aggiungi la nuova settimana all'array
  settimanePalestra.push(settimana);

  // Salva le settimane aggiornate
  localStorage.setItem("settimanePalestra", JSON.stringify(settimanePalestra));
}

// Funzione per recuperare tutte le settimane
function recuperaSettimane() {
  // Recupera le settimane
  return JSON.parse(localStorage.getItem("settimanePalestra")) || [];
}

// Esempi di utilizzo delle funzioni

// Crea un'oggetto rappresentante una nuova settimana
const nuovaSettimana = {
  lunedi: true,
  mercoledi: false,
  venerdi: true,
};

// Aggiungi la nuova settimana
aggiungiSettimana(nuovaSettimana);

// Recupera tutte le settimane
const tutteLeSettimane = recuperaSettimane();
console.log(tutteLeSettimane);
