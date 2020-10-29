// Esercizio di oggi: Simon Says
// repo/cartella js-simon
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.




$(document).ready( function(){

    // creo un alert che espone n numeri casuali univoci

   

    

        var listaNumeri = [];

        var numeroElementi = 5;

        while (listaNumeri.length < numeroElementi) {

        var number = randomNumber(1,100)


        if (! listaNumeri.includes(number)) {

            listaNumeri.push(number)

        }

        


    } 

    alert("Memorizza questi " + numeroElementi + " numeri: \n\n" + listaNumeri );

    console.log("Lista numeri random:" + listaNumeri);


    askNumbers();


    function askNumbers () {

        var memorized = [];

        for (var i = 0; i < numeroElementi; i++) {

            var memoNumb = parseInt (prompt("inserisci un numero visualizzato prima"));
            memorized.push(memoNumb);


        }

        console.log("lista numeri memorizzati:" + memorized);

    }



})

















function randomNumber(min,max) {
    return Math.floor( Math.random() * max - min + 1 ) + min;
} 