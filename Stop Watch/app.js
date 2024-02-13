var dmin = document.getElementById("DisplayMin")
var dsec = document.getElementById("DisplaySec")
var dmilisec = document.getElementById("DisplayMiliSec")
var min = 0 
var sec = 0
var milisec = 0

var interval

function timer(){
      milisec++;
      if(milisec == 10){
        milisec = 0;
        sec++; 
    }
    if (sec == 60){
        sec = 0
        min++

    }
    if (min == 60){
        min = 0
    }
    dmilisec.innerHTML = milisec;
    dsec.innerHTML = sec;
    dmin.innerHTML = min   
}
function startTimer(){
    interval = setInterval(function(){
        timer();
    }, 100)
}
function pauseTimer(){
   clearInterval(interval)
}
function resetTimer(){
    clearInterval(interval)
    min = 0
    sec = 0
    milisec = 0
    dmilisec.innerHTML = milisec;
    dsec.innerHTML = sec;
    dmin.innerHTML = min
}


// CountDown Timer
