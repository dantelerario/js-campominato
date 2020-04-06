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

var array16 = [];
var numUser = [];
var arrayUser = [];
var score = 0;

for (var i = 0; i < 16; i++) {
  var numRandom = Math.floor( Math.random() * 100) + 1;
  array16.push(numRandom);
}
console.log(array16);

for (var i = 0; i < 5; i++) {
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
console.log(arrayUser);
console.log('score: ', score);
