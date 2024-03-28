// test
// alert ("mail")

const emailAdress = ["daniele94@gmail.com", "danielemanto@virgilio.it", "dani1994@live.it", "paperella@libero.it"]; //arrray

//chiedo all'utente di digitare il suo indirizzo mail
const mail = prompt ("Digita il tuo indirizzo mail")
console.warn (mail)

let found = false;

for (let i = 0; i < emailAdress.length; i++) {
    console.log( i, emailAdress[i]);
    if (mail === emailAdress[i]) {
        console.warn ("accesso");
        found = true;
        break;
    }
}

if (found === true){
    console.warn ("ACCESSO CONSENTITO");
document.getElementById ("result").innerHTML = "Accesso consentito";
}else {
    console.warn ("ACCESSO NEGATO");
    document.getElementById ("result").innerHTML = "Accesso negato";
}


