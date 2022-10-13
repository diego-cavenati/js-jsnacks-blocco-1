// Snack 4
// in un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Array con i nomi
const invitations = [
    "Diego",
    "Paolo",
    "Marco",
    "Simone"
]

// chiedo il nome user e lo salvo in una variabile
const nameUser = prompt("inserisci il tuo nome");

// Prendo l'elemento della DOM in cui inserire il verdetto
const h1Element = document.querySelector("h1");

let userValidation = false;

//verifico che il nome sia nella lista
let i = 0;
while (i < invitations.length) {
    const singleInvitation = invitations[i];

    if (nameUser == singleInvitation) {
        userValidation = true;
    }

    i++
}


// verifico e enuncio il verdetto
if (userValidation) {
    h1Element.innerHTML = `sei stato invitato`;
} else {
    h1Element.innerHTML = `Non sei stato invitato`;
}
