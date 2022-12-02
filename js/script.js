// crea un bottone che esprima quante volte tu lo abbia cliccato 


let count = 0;
const playButton = document.querySelector("button");
let gameOver = false;


playButton.addEventListener("click", function(){
    count ++;    
    playButton.innerHTML = `Play (${count})`;

    if(!gameOver){
        
    }
})
