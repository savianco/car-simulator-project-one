console.log("linked");

var start = document.getElementById("button-play");
var allowMoves = false;
start.onclick = function(){
    startTimer();
    allowMoves = true;
};

    var i;
    var restar;
    var cambiar01;
    var msn;

////// funcion del croometro ////////////////////
var timer;
function startTimer(){
     i=59;
     restar = setInterval(restar,1000);
     cambiar01 = setTimeout(cambiar01,1000);
     timer = setTimeout(msn,60000);  
}


function cambiar01(){
	document.getElementById('minutes').innerHTML = '00';
}

function restar(){
	document.getElementById('seconds').textContent = i; i--;
    if (i < 0) {
	   clearInterval(restar);
    } else if (i < 10) {
        i = '0'+i;
  }
}


function msn(){
    document.getElementById("game-over").innerHTML = $("#game-over").css("opacity",1);
}


