// test
// alert ("dadi")

const lanciaBtnElem = document.getElementById ("lancia");
console.log (lanciaBtnElem);

lanciaBtnElem.addEventListener("click", function () {


const numPlayer =Math.floor(Math.random() *6) + 1;
console.log (numPlayer);

const numComputer = Math.floor(Math.random() * 6) + 1;
console.log (numComputer);



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




// OUTPUT

document.querySelector (".player").innerHTML = numPlayer;

document.querySelector (".computer").innerHTML = numComputer;

document.getElementById ("result").innerHTML = result;



})



