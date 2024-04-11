// const hobbies = ["anime", "gaming", "reading", "palestra"];

// const values = {
//   a: 2,
//   b: 1,
//   c: 50,
//   d: 30,
// };
// //

// // for (const key in values) {
// //   console.log(values[key]);
// // }

// // hobbies.forEach((hobby) => console.log(hobby));

// // for (let i = 0; i < hobbies.length; i++) {
// //   console.log(hobbies[i]);
// // }
// let u = 0;

// while (u < hobbies.length) {
//   console.log(hobbies[u]);
//   u++;
// }

// function getAllOrderedvalues(values) {
//   const resulNumber = [];
//   for (const key in values) {
//     resulNumber.push(values[key]);
//   }
//   return resulNumber.sort().reverse();
// }

// console.log(getAllOrderedvalues(values));
// Implementare la funzione nicknameMap che, dato un array di persone, crea un array di nickname. Il nickname deve essere formato in questa modo: <name>-<age>.
// function nicknameMap(persons) {
//   // ...
// }

// const persons = [
//   { name: "Paul", age: 16 },
//   { name: "George", age: 17 },
//   { name: "Lucas", age: 21 },
//   { name: "Marco", age: 32 },
//   { name: "Peter", age: 18 },
//   { name: "Carl", age: 13 },
//   { name: "Simon", age: 24 },
//   { name: "Mark", age: 15 },
//   { name: "Sandra", age: 34 },
//   { name: "Alice", age: 28 },
// ];

// const nickname = persons.map((person) => {
//   return person.name + person.age;
// });

// console.log(nickname);
// const persons = [
//   { name: "Paul", age: 16 },
//   { name: "George", age: 17 },
//   { name: "Lucas", age: 21 },
//   { name: "Marco", age: 32 },
//   { name: "Peter", age: 18 },
//   { name: "Carl", age: 13 },
//   { name: "Simon", age: 24 },
//   { name: "Mark", age: 15 },
//   { name: "Sandra", age: 34 },
//   { name: "Alice", age: 28 },
// ];

// const average =
//   persons.reduce((a, numero) => {
//     return a + numero.age;
//   }, 0) / persons.length;

// console.log(persons);
// console.log(average);

// const notes = [
//   {
//     id: 1,
//     description: "Workout program",
//     todos: [
//       {
//         id: 1,
//         name: "Push ups - 10 x 3",
//         done: true,
//       },
//       {
//         id: 2,
//         name: "Abdominals - 20 x 3",
//         done: true,
//       },
//       {
//         id: 3,
//         name: "Tapis Roulant - 15min",
//         done: true,
//       },
//     ],
//   },
//   {
//     id: 2,
//     description: "Front-end Roadmap",
//     todos: [
//       {
//         id: 1,
//         name: "Learn HTML",
//         done: true,
//       },
//       {
//         id: 2,
//         name: "Learn CSS",
//         done: false,
//       },
//       {
//         id: 3,
//         name: "Learn JavaScript",
//         done: true,
//       },
//       {
//         id: 4,
//         name: "Learn Angular",
//         done: false,
//       },
//     ],
//   },
//   {
//     id: 3,
//     description: "My Movies Library",
//     todos: [
//       {
//         id: 1,
//         name: "La città incantata",
//         done: true,
//       },
//       {
//         id: 2,
//         name: "Avatar",
//         done: true,
//       },
//       {
//         id: 3,
//         name: "Titanic",
//         done: false,
//       },
//     ],
//   },
// ];

// const noteInProgress = notes.filter((note) => {
//   note.todos.some((todo) => !todo.done);
// });
// console.log("All notes: ", notes);
// console.log("Notes in progress: ", noteInProgress);

// const persons = [
//   { name: "Paul", age: 16 },
//   { name: "George", age: 17 },
//   { name: "Lucas", age: 21 },
//   { name: "Marco", age: 32 },
//   { name: "Peter", age: 18 },
//   { name: "Carl", age: 13 },
//   { name: "Simon", age: 24 },
//   { name: "Mark", age: 15 },
//   { name: "Sandra", age: 34 },
//   { name: "Alice", age: 28 },
// ];

// const sum = persons.reduce((a, person) => a + person.age, 0);
// const avg = sum / persons.length;
// console.log(persons);
// console.log(avg);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const mergedObject = { ...obj1, ...obj2 };

// console.log(mergedObject);
// let tempoRimanente = 10;

// function contoAllaRovescia() {
//   console.log("Conto alla rovescia in corso...");
//   const id = setInterval(() => {
//     console.log(`tempo - ${tempoRimanente}`);
//     tempoRimanente--;
//     if (tempoRimanente < 0) {
//       clearInterval(id);
//       console.log("tempo terminato");
//     }
//   }, 1000);
// }
// contoAllaRovescia();

// function lancioDadi() {
//   const dado1 = Math.floor(Math.random() * 6) + 1;
//   const dado2 = Math.floor(Math.random() * 6) + 1;
//   console.log(`lancio dadi: Dado1 = ${dado1}, Dado2 = ${dado2}`);
// }

// console.log("lancio dadi in corso...");
// setTimeout(lancioDadi, 2000);

// function sayhello(name, callback) {
//   console.log(`hello, ${name}`);
//   callback();
// }

// function myCallback() {
//   console.log(`im the callback!`);
// }

// sayhello(`MARIO`, myCallback);

// function doubleArray(array, callback) {
//   const doubledArray = array.map(callback);
//   return doubledArray;
// }

// function doubleValue(num) {
//   return num * 2;
// }

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = doubleArray(numbers, doubleValue);
// console.log(doubledNumbers);

// function runCallbacks(callbacks) {
//   callbacks.forEach((callback) => {
//     callback();
//   });
// }

// function firstCallback() {
//   console.log("Prima callback eseguita");
// }

// function secondCallback() {
//   console.log("Seconda callback eseguita");
// }

// function thirdCallback() {
//   console.log("Terza callback eseguita");
// }

// const callbackArray = [firstCallback, secondCallback, thirdCallback];
// runCallbacks(callbackArray);

// function fetchDataFromAPI(callback) {
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     callback(data);
//   }, 2000);
// }

// function handleData(data) {
//   console.log("vaffanculo" + data);
// }

// fetchDataFromAPI(handleData);

// function checkAge(age, callback) {
//   if (age >= 18) {
//     callback(null, "ok");
//   } else {
//     callback(new Error("ko"), null);
//   }
// }
// checkAge(18, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// function performOperation(a, b, callback) {
//   const result = a + b;
//   if (result >= 0) {
//     callback(null, result);
//   } else {
//     callback(new Error("ko"), null);
//   }
// }

// function displayResult(error, result) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("ecco qui" + result);
//   }
// }
// performOperation(-6, 3, displayResult);

// function fetchDataFromAPI(callback) {
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     callback(data);
//   }, 2000);
// }

// function fetchDataFromAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       if (data) {
//         resolve(data);
//       } else {
//         reject("errore");
//       }
//     }, 2000);
//   });
// }

// fetchDataFromAPI()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userData = { id: 1, name: "John" };
//       if (userData) {
//         resolve(userData);
//       } else {
//         reject("Errore durante il recupero dei dati dell'utente");
//       }
//     }, 1000);
//   });
// }

// function fetchUserPosts(userId, userName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const postUtente = ["Post 1", "Post 2", "Post 3"];
//       if (postUtente) {
//         resolve(postUtente);
//       } else {
//         reject("Errore durante il recupero dei post");
//       }
//     }, 1500);
//   });
// }

// fetchUserData()
//   .then((userData) => {
//     console.log(userData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetchUserPosts()
//   .then((postUtente) => {
//     console.log(postUtente);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function fetchDataFromAPI() {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() * 0.5;
//     if (success < 0.5) {
//       resolve("Data retrieved successfully");
//     } else {
//       reject("Error: Failed to fetch data");
//     }
//   });
// }

// fetchDataFromAPI()
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function callback_BasedFunction(arg1, arg2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = arg1 + arg2;
//       if (result % 2 !== 0) {
//         resolve(result);
//       } else {
//         reject(result);
//       }
//     }, 1000);
//   });
// }

// callback_BasedFunction(5, 5)
//   .then((result) => console.log(result))
//   .catch((error) => console.log("Result is not odd!"));

// function caricamentoDati() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
//     }, 2000);
//   });
// }

// async function ottieniDadi() {
//   const dadi = await caricamentoDati();
//   console.log(dadi);
// }
// ottieniDadi();

// function caricaModulo(modulo) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Il modulo ${modulo} è stato caricato.`);
//     }, 2000);
//   });
// }

// async function lanciaVeicoloSpaziale() {
//   const modulo1 = await caricaModulo("A");
//   const modulo2 = await caricaModulo("B");
//   const modulo3 = await caricaModulo("C");
//   console.log(modulo1);
//   console.log(modulo2);
//   console.log(modulo3);
// }

// lanciaVeicoloSpaziale().then(() =>
//   console.log("Veicolo spaziale pronto per il lancio!")
// );

// function caricaModulo(modulo) {
//   return new Promise((resolve, reject) => {
//     const tempoCaricamento = Math.random() * 3000;
//     setTimeout(() => {
//       if (tempoCaricamento < 1500) {
//         resolve(`Il modulo ${modulo} è stato caricato.`);
//       } else {
//         reject(`Errore durante il caricamento del modulo ${modulo}.`);
//       }
//     }, tempoCaricamento);
//   });
// }

// async function lanciaVeicoloSpaziale() {
//   const moduli = ["A", "B", "C"];
//   const promesseModuli = moduli.map((modulo) => caricaModulo(modulo));

//   try {
//     const risultati = await Promise.all(promesseModuli);
//     risultati.forEach((modulo) => console.log(modulo));

//     if (risultati.every((risultato) => risultato.includes("caricato"))) {
//       isLancioEffettuato = true;
//       console.log("Veicolo spaziale pronto per il lancio!");
//     }
//   } catch (error) {
//     isLancioEffettuato = false;
//     console.error("Errore durante il caricamento del veicolo spaziale:", error);
//   }
// }

// let isLancioEffettuato = null;
// // setTimeout(() => {
// //   for (isLancioEffettuato; !isLancioEffettuato; ) {
// //     lanciaVeicoloSpaziale();
// //   }
// // }, 2000);

// setInterval(() => {
//   lanciaVeicoloSpaziale();
// }, 2000);

// function calcolaQuadratiAsync(arr) {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(arr)) {
//       reject("Input non valido. Passa un array di numeri.");
//     } else {
//       const quadrati = arr.map((num) => num * num);
//       resolve(quadrati);
//     }
//   });
// }

// async function eseguiCalcolo() {
//   try {
//     const numeri = [1, 2, 3, 4, 5];
//     const risultato = calcolaQuadratiAsync(numeri);
//     console.log("I quadrati dei numeri sono:", risultato);
//   } catch (error) {
//     console.error("Si è verificato un errore:", error);
//   }
// }

// Recupero dei dati da un'API: Scrivi una funzione che faccia una chiamata a un'API esterna
// (ad esempio, un API di previsioni del tempo o di dati sui prezzi delle azioni) e
// restituisca i dati ottenuti. Utilizza Promises per gestire l'asincronicità della chiamata API.

// function calcolaQuadrati(arr) {
//   return new Promise((resolve, reject) => {
//     const quadrati = arr.map((num) => num * num);
//     resolve(quadrati);
//   });
// }

// async function calcolo() {
//   try {
//     const numeri = [1, 2, 3, 4, 5];
//     const risultato = calcolaQuadrati(numeri);
//     console.log(risultato);
//   } catch (error) {
//     console.log(error);
//   }
// }
// calcolo();
// function getFileInfo(fileName) {
//   return new Promise((resolve, reject) => {
//     // Simuliamo un'operazione asincrona per ottenere le informazioni del file
//     setTimeout(() => {
//       // Simuliamo la dimensione del file e il tipo basandoci sul nome del file
//       const fileSize = Math.floor(Math.random() * 1000) + 1; // Dimensione casuale tra 1 e 1000 bytes
//       const fileType = fileName.split(".").pop(); // Otteniamo il tipo di file dall'estensione
//       // Creiamo un oggetto con le informazioni del file
//       const fileInfo = {
//         name: fileName,
//         size: fileSize,
//         type: fileType,
//       };
//       // Risolviamo la Promise con le informazioni del file
//       resolve(fileInfo);
//     }, Math.random() * 2000); // Simuliamo un ritardo casuale fino a 2 secondi
//   });
// }

// // Funzione principale che accetta un array di nomi di file e restituisce un array di oggetti informazioni sui file
// function processFiles(fileNames) {
//   // Utilizziamo Promise.all per gestire più chiamate asincrone contemporaneamente
//   return Promise.all(fileNames.map((fileName) => getFileInfo(fileName)));
// }

// // Esempio di utilizzo
// const fileNames = ["documento.txt", "foto.jpg", "video.mp4"];

// processFiles(fileNames)
//   .then((fileInfos) => {
//     console.log("Informazioni sui file:", fileInfos);
//   })
//   .catch((error) => {
//     console.error(
//       "Si è verificato un errore durante l'elaborazione dei file:",
//       error
//     );
//   });

// function trovaIlmaggiore(arr) {
//   let maggiore = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maggiore) {
//       maggiore = arr[i];
//     }
//   }
//   console.log(maggiore);
// }

// trovaIlmaggiore([3, 5, 6, 72, 1]);

// function validazione(stringa) {
//   const stringa1 =
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   for (let i = 0; i < stringa.length; i++) {
//     if (!stringa1.includes(stringa[i])) {
//       console.log("ci lettere non consentite");
//       return false;
//     }
//   }
//   console.log("Tutto ok.");
//   return true; // La validazione ha successo
// }
// validazione("dsadasd");

// const fraseLunga =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// function returnObject(stringa) {
//   const occorenze = {};
//   for (let i = 0; i < fraseLunga.length; i++) {
//     const carattere = fraseLunga[i];
//     if (stringa.includes(carattere)) {
//       if (occorenze[carattere]) {
//         occorenze[carattere]++;
//       } else {
//         occorenze[carattere] = 1;
//       }
//     }
//   }
//   console.log(occorenze);
// }

// returnObject("simone");

// function maschera(numero) {
//   const valoreSostitutivo = "X";

//   const regex = /^\d{12}/;
//   const numeroStringa = numero.toString();

//   const result = numeroStringa.replace(regex, valoreSostitutivo.repeat(12));
//   console.log(result);
// }

// maschera(4562626248543698);

// const productDatabase = {
//   iphone: {
//     nome: "iphone15",
//     quantity: "2 pezzi",
//   },
//   samsung: {
//     name: "samsung galaxt s23",
//     quantity: 0,
//   },
// };
// function addTocard() {
//   return new Promise((resolve, reject) => {
//     const { quantity } = productDatabase[code];
//   });
// }

// function eseguichiamata(numero) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (numero < 10) {
//         resolve("chiamata numero" + "" + numero);
//       }
//       reject("promessa rifiutata");
//     }, 2000);
//   });
// }

// // eseguichiamata(1)
// //   .then((ris) => {
// //     console.log(ris);
// //     return eseguichiamata(2);
// //   })
// //   .then((ris) => {
// //     console.log(ris);
// //     return eseguichiamata(12);
// //   })
// //   .then((ris) => {
// //     console.log(ris);
// //   })
// //   .catch((err) => console.log(err));

// const promessa1 = eseguichiamata(1);
// const promessa2 = eseguichiamata(2);
// const promessa3 = eseguichiamata(30);

// Promise.all([promessa1, promessa2, promessa3])
//   .then((ris) => {
//     console.log(ris);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// function caricaModulo(modulo) {
//   return new Promise((resolve, reject) => {
//     const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
//     setTimeout(() => {
//       if (tempoCaricamento < 1500) {
//         resolve(`Il modulo ${modulo} è stato caricato.`);
//       } else {
//         reject(`Errore durante il caricamento del modulo ${modulo}.`);
//       }
//     }, tempoCaricamento);
//   });
// }

// async function lanciaVeicoloSpaziale() {
//   const modulo1 = await caricaModulo("A");
//   console.log(modulo1);
//   const modulo2 = await caricaModulo("B");
//   console.log(modulo2);
//   const modulo3 = await caricaModulo("C");
//   console.log(modulo3);

//   console.log("Veicolo spaziale pronto per il lancio!");
// }

// lanciaVeicoloSpaziale().catch((err) => console.log(err));
