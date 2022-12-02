// crea un bottone che esprima quante volte tu lo abbia cliccato 


// rima di dutto dobbiamo costruire una variabile che possa tenere il conto 

let count = 0;

// richiamiamo il bottone dal html

const playButton = document.querySelector("button");

// aggiungiamo l'evento click 

playButton.addEventListener("click", function(){
    count ++;
    
    playButton.innerHTML = `Play (${count})`;
})
