// Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS:
// All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2=> tra 1 e 50

var array16 = []; //lista bombe
var numUser = []; //numeri inseriti dall'User
var arrayUser = []; //lista dei numeri inseriti dall'user
var score = 0; //counter punteggio
var difficulty; //difficoltà
var check1 = false;

//Scelta difficoltà

difficulty = diffChoice();

// difficulty = diffChoice();



//Controllo difficoltà e creazione numeri
for (var i = 0; i < 16; i++) {
  switch (difficulty) {
    case "normal":
      var numRandom = Math.floor( Math.random() * 100) + 1;
        if (array16.includes(numRandom)) {
          i--; }
        else {
          array16.push(numRandom);
        }
      break;
    case "nightmare":
      var numRandom = Math.floor( Math.random() * 80) + 1;
          if (array16.includes(numRandom)) {
            i--; }
          else {
            array16.push(numRandom);
          }
      break;
    case "hell":
      var numRandom = Math.floor( Math.random() * 50) + 1;
          if (array16.includes(numRandom)) {
            i--; }
          else {
            array16.push(numRandom);
          }
      break;
    default:
      difficulty = false;
  }
}

  // if (difficulty != 'normal' || difficulty != 'nightmare' || difficulty != 'hell') {
  //   alert('Scegli una delle 3 difficoltà');
  // }   else {
  //     for (var i = 0; i < 16; i++) {
  //         if (difficulty == nightmare) {
  //         var numRandom = Math.floor( Math.random() * 80) + 1;
  //         array16.push(numRandom);
  //       } else if (difficulty == hell) {
  //         var numRandom = Math.floor( Math.random() * 50) + 1;
  //         array16.push(numRandom);
  //       } else {
  //         var numRandom = Math.floor( Math.random() * 100) + 1;
  //         array16.push(numRandom);
  //       }
  //     }
  //   }

array16.sort();
console.log(array16);

//Inserimento numero User e controllo
if (difficulty == "normal") {
  for (var i = 0; i < 84; i++) {
    numUser = parseInt( prompt('Inserisci un numero'));
    if (numUser < 1 || numUser > 100) {
      alert('Non puoi inserire un numero maggiore di 100 o minore di 1');
      i--;
    } else if (arrayUser.includes(numUser)) {
      alert('Non puoi inserire lo stesso numero');
      i--;
    } else if (array16.includes(numUser)) {
      alert('Hai perso');
      break;
    } else {
      arrayUser.push(numUser);
      score += 1;
    }
  }
} else if (difficulty == "nightmare") {
  for (var i = 0; i < 84; i++) {
    numUser = parseInt( prompt('Inserisci un numero'));
    if (numUser < 1 || numUser > 80) {
      alert('Non puoi inserire un numero maggiore di 80 o minore di 1');
      i--;
    } else if (arrayUser.includes(numUser)) {
      alert('Non puoi inserire lo stesso numero');
      i--;
    } else if (array16.includes(numUser)) {
      alert('Hai perso');
      break;
    } else {
      arrayUser.push(numUser);
      score += 1;
    }
  }
} else if (difficulty == "hell") {
  for (var i = 0; i < 84; i++) {
    numUser = parseInt( prompt('Inserisci un numero'));
    if (numUser < 1 || numUser > 50) {
      alert('Non puoi inserire un numero maggiore di 50 o minore di 1');
      i--;
    } else if (arrayUser.includes(numUser)) {
      alert('Non puoi inserire lo stesso numero');
      i--;
    } else if (array16.includes(numUser)) {
      alert('Hai perso');
      break;
    } else {
      arrayUser.push(numUser);
      score += 1;
    }
  }
} else {
  difficulty = diffChoice();
}

console.log(arrayUser);
console.log('score: ', score);

alert('Hai totalizzato ' + score + ' punti.')

// FUNCTIONS

function diffChoice(difficolta) {
  return difficulty = prompt('Scegli la difficoltà\nNormal\nNightmare\nHell').trim().toLowerCase();
}
