// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga

// numero 1
const firstWord = prompt("inserisci la prima parola");

// numero 2
const secondWord = prompt("Inserisci la seconda parola");

// elemento html
const h1Element = document.querySelector("h1");

//definizione tra maggiore e eminore e pari
if (firstWord.length > secondWord.length) {
    //console.log(numero1);
    h1Element.innerHTML = `${firstWord} ${secondWord}`;
} else if (firstWord.length < secondWord.length) {
    //console.log(numero2);
    h1Element.innerHTML = `${secondWord} ${firstWord}`;
} else {
    //console.log(pari);
    h1Element.innerHTML = "Pari";
}


