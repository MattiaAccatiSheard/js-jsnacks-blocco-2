// Ciao Ragazzi,
//     Esercizio di oggi pomeriggio: Snacks blocco 2
// nome repo: js - jsnacks - blocco - 2
// L'obbiettivo è di affrontare piccoli problemi logici (JSnacks) per fissare i concetti affrontati fin'ora ed affrontare "la paura del foglio bianco".L'unica regola è di creare una cartella diversa per ogni JSnack.
// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
//     JSnack2
// Crea due tag div con due id diversi.Un div avrà il testo colorato di rosso mentre l’altro di verde.Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
//     JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
// JSnack4(Bonus)
// Crea due array che hanno un numero di elementi diversi.Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
// // Buon divertimento!

//JSnack1
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
for (let i = 0; i < 10 ; i++) {
    //console.log(i);
    if (i % 2 == 0) {
        console.log(i);
    }
}
//JSnack2
//Crea due tag div con due id diversi.Un div avrà il testo colorato di rosso mentre l’altro di verde.Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
//const element = document.getElementById("element");
//element.innerHTML = "Hello World";
let blu = document.getElementById('blu');
let violet = document.getElementById('violet');

for (let n = 0; n < 100; n++) {
    if (n % 2 == 0) {
        violet.innerHTML += `${n}`
    } else {
        blu.innerHTML += `${n}`
    }

}




let red = document.getElementById('red');
let green = document.getElementById('green');

let redSpace = " ";
let greenSpace = " ";

for (let n = 0; n < 100; n++) {
    if (n % 2 == 0) {
        redSpace += `${n}`;

    } else {
        greenSpace += `${n}`;
    }

}
red.innerHTML = redSpace;
green.innerHTML = greenSpace;







//JSnack3
//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let somma = 0


for (let i = 0; i < array.length; i++) {
    let element = parseInt(array[i]);
    if (element % 2 !== 0) {
        somma += element;
    } else {

    }

}

console.log(somma);