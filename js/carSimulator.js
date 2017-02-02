
//////// funcion para explotar en contacto con los bordes ////////
var lifes = 2;
var crashHacePoco = false;
function explosion(){
    var explosionSound = new Audio ("sounds/explosion.mp3");
        explosionSound.play();
  $("#car").addClass("crashed");
    
    var life = $(".container-lifes li")[lifes];
    if(life !== undefined && crashHacePoco===false){
        life.style.display = "none";
        lifes--;
        crashHacePoco=true;
        setTimeout(function(){
           crashHacePoco=false; 
        },1000);
    }else if (life === undefined){msn()};
    setTimeout(function(){
        $("#car").removeClass("crashed");
    },2000); 
}







////////// seleccionamos coche  //////////
var car = document.getElementById("car");
var board = $("#board");
var grassIn = $("#grass-in");


   var carPrevX;
   var carPrevY;
    var carCurrentX;
    var carCurrentY;
/// asignamos teclas, movimientos, direcciones, area de pista ///
window.addEventListener("keydown",function(e){
    carPrevX = $("#car").css("left");
    carPrevY = $("#car").css("top");
   var car = $("#car");
   var left = parseInt(car.css("left"));
   var boardWidth = parseInt(board.css("width"));
   var top = parseInt(car.css("top"));
   var boardHeight = parseInt(board.css("height"));
    var mov = 15;
     switch(e.keyCode){
       case 37:  // arrow left
         if (left > 0 && allowMoves) {
            $("#car").css("left","-="+mov+"");
            $("#car").removeClass("down");
            $("#car").removeClass("right");
            $("#car").removeClass("up");
            $("#car").addClass("left");
         }  else if(left < 0) {
              explosion();
              console.log("choco");
         };
            break;
            
       case 39:  // arrow right
         if (left + parseInt(car.css("width")) < boardWidth && allowMoves) {
            $("#car").css("left","+="+mov+"");
            $("#car").removeClass("left");
            $("#car").removeClass("down");
            $("#car").removeClass("up");
            $("#car").addClass("right");
         }  else if(left + parseInt(car.css("width")) > boardWidth) {
              explosion();
              console.log("choco");
         };  
            break; 
            
       case 38: // arrow up
         if (top > 10 && allowMoves) {
            $("#car").css("top","-="+mov+"");
            $("#car").removeClass("left");
            $("#car").removeClass("right");
            $("#car").removeClass("down");
            $("#car").addClass("up");
         }  else if(top < 10) {
              explosion();
              console.log("choco");
         };
            break;
                     
       case 40: // arrow down
         if (top + parseInt(car.css("height")) < (boardHeight + 10) && allowMoves) {
            $("#car").css("top","+="+mov+"");
            $("#car").removeClass("left");
            $("#car").removeClass("right");
            $("#car").removeClass("up");
            $("#car").addClass("down");        
         }  else if(top + parseInt(car.css("height")) > boardHeight) {
              explosion();
              console.log("choco");
         };
            break;        
     }
    carCurrentX = $("#car").css("left");
    carCurrentY = $("#car").css("top");
 }.bind(this));

