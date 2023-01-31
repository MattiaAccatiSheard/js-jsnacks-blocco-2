//JSnack1
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
for (let i = 0; i < 1000 ; i++) {
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
        blu.innerHTML += ` ${n}`;

    } else {
        violet.innerHTML += ` ${n}`;
    }
    
}







//JSnack3
//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari