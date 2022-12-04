const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

const cella1 = document.getElementById("timer-cell1");
const cella2 = document.getElementById("timer-cell2");
const cella3 = document.getElementById("timer-cell3");
const cella4 = document.getElementById("timer-cell4");
const cella5 = document.getElementById("timer-cell5");
const cella6 = document.getElementById("timer-cell6");

// dichiarazione variabili che tengano i dati
let centOfSecond = 0;
let decOfSecond = 0;
let secondCounter = 0;
let minutesCounter = 0;
let hourCounter = 0;

start.addEventListener("click", function(){             //sett delle celle del cronometro al click

    let centOfSecondTimer = setInterval(() => { 
        centOfSecond++;    
        cella5.innerHTML = centOfSecond;
    }, 10);
    let decOfSecondTimer = setInterval(() => {
        decOfSecond++;
        cella4.innerHTML = decOfSecond;
    }, 100);
    let secondTimer = setInterval(() => {
        secondCounter++;
        cella3.innerHTML = secondCounter;
    }, 1000);
    let minutesTimer = setInterval(() => {
        minutesCounter++;
        cella2.innerHTML = minutesCounter;
    }, 60* 1000);
    let hourTimer = setInterval(() => {
        minutesCounter++;
        cella1.innerHTML = minutesCounter;
    }, 360* 1000);

    
    pause.addEventListener("click", function(){      //BISOGNA SETTARE UN CLEAR INTERVAL PER OGNI CELLA AL CLICK DI PAUSA
        clearInterval(centOfSecondTimer);
        clearInterval(decOfSecondTimer);
        clearInterval(secondTimer);
        clearInterval(minutesTimer);
        clearInterval(hourTimer);
    })

    reset.addEventListener("click", function(){
        cella5.innerHTML = 0;
        cella4.innerHTML = 0;
        cella3.innerHTML = 0;
        cella2.innerHTML = 0;
        cella1.innerHTML = 0;

    })
})

