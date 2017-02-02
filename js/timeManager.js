console.log("linked");

var start = document.getElementById("button-play");
start.onclick = function(){
    startTimer();
};

    var i;
    var restar;
    var cambiar01;
    var msn;


function startTimer(){
     i=9;
     restar = setInterval(restar,1000);
     cambiar01 = setTimeout(cambiar01,1000);
     msn = setTimeout(msn,10000);  
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
    document.getElementById('game-over').innerHTML = $("#game-over").css("opacity",1);
}


