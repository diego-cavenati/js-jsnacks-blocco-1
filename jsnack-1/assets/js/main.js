// Snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore. 

// numero 1
const numero1 = prompt("inserisci il primo numero");

// numero 2
const numero2 = prompt("Inserisci il secondo numero");

const h1Element = document.querySelector("h1");

if (numero1 > numero2) {
    //console.log(numero1);
    h1Element.innerHTML = "Numero1";
} else if (numero1 < numero2) {
    //console.log(numero2);
    h1Element.innerHTML = "Numero2";
} else {
    //console.log(pari);
    h1Element.innerHTML = "Pari";
}


