//Variabili
const playOddEven = prompt("Scegli PARI o DISPARI");
const playerChoice = playOddEven.toUpperCase();
const playerNumber = prompt("Scegli un numero da 1 a 5");
const pcNumber = getRandomNumber();

let sum = playerNumber + pcNumber;
let message;



//Logica
if (isEven(sum) == true && playerChoice === "PARI") {
    message = "Hai vinto";
} else if (isEven(sum) == false && playerChoice === "DISPARI") {
    message = "Hai vinto";
} else {
    message = "Ha vinto il pc";
}

//Log
console.log(playOddEven);
console.log(sum);
console.log(message);


//Funzioni
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function isEven(num) {
    let evenNumber = false;
    if (!(num % 2)) {
        evenNumber = true;
    } 
    return evenNumber
}