//snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let userWorld;

const h1Element = document.querySelector("h1");

for (let i = 0; i < 11; i++) {
    //const element = array[i];
    userWorld += prompt("inserisci una parola");
}

h1Element.innerHTML = `${userWorld}`;


