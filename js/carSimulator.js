function explosion(){
    $("#car").addClass("crashed");
    console.dir(car);    
    setTimeout(function(){
        $("#car").removeClass("crashed");
    }, 500)
}

////////// seleccionamos coche  //////////
var car = document.getElementById("car");
var board = $("#board");
var grassIn = $("#grass-in");



/// asignamos teclas, movimientos, direcciones, area de pista ///
window.addEventListener("keydown",function(e){
   var car = $("#car");
   var left = parseInt(car.css("left"));
   var boardWidth = parseInt(board.css("width")) - parseInt(car.css("width"));
   var top = parseInt(car.css("top"));
   var boardHeight = parseInt(board.css("height")) - parseInt(car.css("height"));
    
    var mov = 80;
     switch(e.keyCode){
       case 37:  // arrow left
         if (left - mov > 0) {
            $("#car").css("left","-="+mov+"");
            $("#car").removeClass("down");
            $("#car").removeClass("right");
            $("#car").removeClass("up");
            $("#car").addClass("left");
         }  else {
              explosion();
              console.log("choco");
         };
            break;
            
       case 39:  // arrow right
         if (left + mov + parseInt(car.css("width")) < boardWidth) {
            $("#car").css("left","+="+mov+"");
            $("#car").removeClass("left");
            $("#car").removeClass("down");
            $("#car").removeClass("up");
            $("#car").addClass("right");
         }  else {
              explosion();
              console.log("choco");
         };  
            break; 
            
       case 38: // arrow up
         if (top - mov > 0) {
            $("#car").css("top","-="+mov+"");
            $("#car").removeClass("left");
            $("#car").removeClass("right");
            $("#car").removeClass("down");
            $("#car").addClass("up");
         }  else {
              explosion();
              console.log("choco");
         };
            break;
                     
       case 40: // arrow down
         if (top + mov + parseInt(car.css("height")) < boardHeight){
            $("#car").css("top","+="+mov+"");
            $("#car").removeClass("left");
            $("#car").removeClass("right");
            $("#car").removeClass("up");
            $("#car").addClass("down");        
         }  else {
              explosion();
              console.log("choco");
         };
            break;        
     }
 }.bind(this));

