// crea un bottone che esprima quante volte tu lo abbia cliccato 


let counter = 0;
const playButton = document.querySelector("button");


playButton.addEventListener("click", function(){
    if(counter < 10 ){
        counter ++;
        playButton.innerHTML = `Play (${counter})`;
        console.log(counter);   
    } else {
        setTimeout(()=>{
            counter = 0;
            playButton.innerHTML = `Play (${counter})`;
        }, 3 *1000)       
    }
})

