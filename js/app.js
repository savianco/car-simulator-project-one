reset = document.getElementById("button-reset");
reset.onclick = function(){window.location.reload();};

var vueltaHacePoco = false;
setInterval(function(){
    if(carCurrentX!==undefined){
        carCurrentX = carCurrentX.replace("px", "");
        carCurrentY = carCurrentY.replace("px", "");
        carPrevX = carPrevX.replace("px", "");
        carPrevY = carPrevY.replace("px", "");
        if(carCurrentX>450 && carPrevX<450 && carCurrentY<220 && !vueltaHacePoco){
           counter++;
            console.log("Numero de vueltas :" + counter);
            document.getElementById("laps-play").innerHTML = counter;  
            document.getElementById("score-play").innerHTML = counter*15;
            // poner en el contador el valor de counter
            vueltaHacePoco = true;
            setTimeout(function(){
                vueltaHacePoco = false;
            }, 3000);
        }
    }
}, 10)

var counter = -1;
function laps () {
   
}

