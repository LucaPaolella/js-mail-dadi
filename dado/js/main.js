'use strict';

//Metto sul js gli elementi dal mio DOM.
const inputDado = document.getElementById("button-dado");


document.getElementById("button-dado").addEventListener ('click',
function () {
    alert("Questo è il tuo risultato:");
    const tuoRisultato =  (Math.floor(Math.random(0) * 6) + 1) ;
    alert (tuoRisultato);
    alert ("Questo è il risultato del pc.");
    const pcRisultato = (Math.floor(Math.random(0) * 6)+ 1);
    alert (pcRisultato)

    if (tuoRisultato == pcRisultato) {
        alert ("Pareggio!")
    }
    else  if (tuoRisultato > pcRisultato) {
        alert ("Hai Vinto!")
    }
    else if (tuoRisultato < pcRisultato) {
        alert ("Hai perso!")
    }
    console.log(tuoRisultato)
    console.log(pcRisultato)
}
)



