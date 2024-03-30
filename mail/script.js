// test
// alert ("mail")

"use strict";

const emailAdress = ["daniele94@gmail.com", "danielemanto@virgilio.it", "dani1994@live.it", "paperella@libero.it"]; //arrray

//creo variabile d'appoggio
let found = false;

//trovo bottone in pagina
const checkBtn = document.getElementById("check-button");
console.log(checkBtn);

// collego input
const mail = document.getElementById("check-button")

//creo evento al click del bottone conferma
checkBtn.addEventListener("click", function () {

    const mail= document.getElementById("indirizzo-mail").value;


    for (let i = 0; i < emailAdress.length; i++) {
        console.log(i, emailAdress[i]);
        if (mail === emailAdress[i]) {
            console.warn("Mail trovata");
            found = true;
            break;
        }
    }

    if (found === true) {
        console.warn("ACCESSO CONSENTITO");
        document.getElementById("result").innerHTML = "Accesso consentito";
    } else {
        console.warn("ACCESSO NEGATO");
        document.getElementById("result").innerHTML = "Accesso negato";
    }

})




