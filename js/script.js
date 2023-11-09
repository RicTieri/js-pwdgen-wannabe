const userName = prompt('inserisci il tuo Nome');
const userSurname = prompt('inserisci il tuo Cognome');
const userColor = prompt('inserisci il tuo colore Preferito');

let randInt = Math.floor(Math.random()*100);

document.getElementById('output').innerHTML = 'la password suggerita è: ' + userName + userSurname + userColor + randInt