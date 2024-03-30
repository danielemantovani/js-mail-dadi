// test
// alert ("dadi")

//trovo il bottone in pagina
const lanciaBtnElem = document.getElementById ("lancia");
console.log (lanciaBtnElem);

// aggiungo l'evento al click del bottone 
lanciaBtnElem.addEventListener("click", function () {

//variabile per generare nr casuale per il player
const numPlayer =Math.floor(Math.random() *6) + 1;
console.log (numPlayer);

//variabile per generare nr casuale per il computer
const numComputer = Math.floor(Math.random() * 6) + 1;
console.log (numComputer);


//esecuzione logica

if (numPlayer > numComputer) {
    console.log("Il giocatore vince");
    result = "Il giocatore vince";
} else if (numComputer > numPlayer) {
    console.log("Il banco vince");
    result = "Il banco vince";
} else if (numComputer === numPlayer)  {
    console.log("Pareggio");
    result = "Pareggio";
}


// STAMPA IN PAGINA

document.querySelector (".player").innerHTML = numPlayer;

document.querySelector (".computer").innerHTML = numComputer;

document.getElementById ("result").innerHTML = result;



})



