//snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
 
// let userNumber = 0;

// const h1Element = document.querySelector("h1");

// for (let i = 0; i < 10; i++) {
//     //const element = array[i];
//     userNumber += Number(prompt("inserisci un numero"));
//     console.log(userNumber);
// }

// // Il programma stampa la somma di tutti i numeri inseriti.
// h1Element.innerHTML = `${userNumber}`;


// While
let userNumber = 0;

const h1Element = document.querySelector("h1");

let i = 0;
while (i < 10) {
    //const element = array[i];
    userNumber += Number(prompt("inserisci un numero"));
    console.log(userNumber);

    i++
}

// Il programma stampa la somma di tutti i numeri inseriti.
h1Element.innerHTML = `${userNumber}`;