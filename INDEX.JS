// const myPersonalinfo = {
//   name: "simone",
//   surname: "nataloni",
//   haircolour: "blonde",
//   passatempo: [
//     {
//       passione: "Anime",
//       name: ["Dragon Ball", "Bleach", "Naruto", "Fairy Tail"],
//     },

//     {
//       bho: "diversi",
//       name: ["giocare", "palestra", "bellavita", "ricercafelicitò"],
//     },
//   ],
// };
// function cercaHobbi(name, myPersonalinfo) {
//   for (let i = 0; i < myPersonalinfo.passatempo.length; i++) {
//     if (myPersonalinfo.passatempo[i].name === name) return true;
//   }
//   return false;
// }
// function aggiungiHobby(name, preferito) {
//   return {
//     name,
//     stronzate: preferito,
//   };
// }

// myPersonalinfo.passatempo.push(
//   aggiungiHobby("altre", ["mangiare", "cacare", "dormire"])
// );

// console.log(cercaHobbi("Bleach", myPersonalinfo));

// console.log(myPersonalinfo.passatempo[0].name);

function assegnazione() {
  return Math.floor(Math.random() * 50) + 1;
}

function inizializzatore() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(assegnazione());
  }
  return array;
}

const arrayVuota = [];

function creazionePrimaArray() {
  arrayVuota.push(...inizializzatore()); // Spread operator per aggiungere gli elementi dell'array restituito da inizializzatore
}

function controllo(numero) {
  for (let i = 0; i < arrayVuota.length; ) {
    if (arrayVuota[i] % numero === 0) {
      arrayVuota.splice(i, 1);
    } else {
      i++;
    }
  }
}

creazionePrimaArray();
console.log(arrayVuota);
controllo(10);
console.log(arrayVuota);
