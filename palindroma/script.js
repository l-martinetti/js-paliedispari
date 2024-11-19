// Variabili
const askWord = isPalindroma(prompt("inserisci una parola"))

// Verifica risultato
console.log(askWord);

// Funzioni
function isPalindroma (word) {
    let message;
    if (word === word.split("").reverse().join("")) {
        message = "La parola è palindroma";
    } else {
        message = "La parola non è palindroma";
    }

    return message
}

