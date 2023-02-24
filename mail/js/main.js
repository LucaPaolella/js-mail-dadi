'use strict';

const listaEmail = [
    "ciccio@gmail.com",
    "pippo@gmail.com",
    "luca@gmail.com",
    "fabio@gmail.com",
    "cristian@gmail.com",
];

const richiestaEmail = prompt ("inserisci la tua email", "");
let join = false;

for (let i = 0; i < listaEmail.length; i++) {
    const email = listaEmail[i];
    if (email === richiestaEmail) {
        join = true;
    }
}

if (join === true) {
    alert ("Ciao!")
} else {
    alert ("Pussa via!")
}