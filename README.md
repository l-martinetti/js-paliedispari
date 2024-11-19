Pari e Dispari
===

## Consegna
Palindroma

Chiedere all’utente di inserire una parola<br>
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. <br>
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). <br>
Sommiamo i due numeri <br>
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) <br>
Dichiariamo chi ha vinto. <br>

Consigli del giorno

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:

1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?

## Mio approccio

Palindroma

1. creo una costante prompt che chiede una parola
1. creo una funzione isPalindroma che ha come parametro "word"
1. dentro la funzione metto un let message che dirà se è palindroma o no la parola
1. sempre dentro la funzione metto un if: se la parola è uguale alla stessa parola ma al contrario allora ho un messaggio positivo, altrimenti la parola non è palindroma.
1. per sapere se la parola è palindroma o meno la trasformo prima in array con il metodo split, uso il metodo reverse per avere la parola invertita e infine join che mi restituisce la parola al contrario come stringa.

Pari e Dispari

1. creo due prompt, uno che chiede pari o dispari, l'altro di inserire un numero da uno a cinque
1. creo una variabile pcNumber a cui darò un numero randomico
1. avrò una variabile let sum che sarà la somma del numero scelto e del pcNumber
1. creo una variabile let messagge che mi dirà chi ha vinto
1. creo una funzione getRandomNumber() che genera un numero randomico da 1 a 5
1. creo una funzione isEven(num) che restituisca come valore true quando una variabile è pari e false quando è dispari
1. con un if (isEven(sum) == true && prompt-giocatore === pari) allora stampo messaggio di vittoria, else if con il caso in cui il giocatore abbia scelto dispari e la somma è dispari stesso messaggio, altrimenti il messaggio è ha vinto il pc.

