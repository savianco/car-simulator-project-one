console.log("linked");

////// funcion de activacion del PLAY y del TIMER ///////////
var start = document.getElementById("button-play");
var allowMoves = false;
start.onclick = function(){
    var startSound = new Audio("sounds/startCar.mp3");
    var gameSound = new Audio("sounds/gameSound.mp3");
    startSound.play();
    gameSound.play();

    
    startTimer();
    allowMoves = true;
};
    var i;
    var restarInterval;
    var cambiar01;
    var msn;

/////// funcion del cronometro iniciado con 1 minuto de juego ////////
var timer;
function startTimer() {
     i=59;
     restarInterval = setInterval(restar,1000);
     cambiar01 = setTimeout(cambiar01,1000);
     timer = setTimeout(msn,60000);  
}

///////// funcion para modificar los minutos del TIMER ///////
function cambiar01() {
	document.getElementById('minutes').innerHTML = '00';
}

////// funcion restar los segundos del TIMER hasta cero y pintarlo bien ////
function restar() {
	document.getElementById('seconds').textContent = i; i--;
    if (i < 0) {
	   clearInterval(restar);
    } else if (i < 10) {
        i = '0'+i;
  }
}

///////////// funcion para activar el GAME OVER ////////////
function msn(){
   document.getElementById("game-over").innerHTML = $("#game-over").css("opacity",1);
    clearInterval(restarInterval);
}

 
