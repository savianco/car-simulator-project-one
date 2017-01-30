////////// SELECCIONAMOS EL COCHE  //////////
var car = document.getElementById("car");




//////////// POSICION INICIAL DEL COCHE  ////////////////
var x_car = 435;
var y_car = 70;





////// MOVIMIENTO DEL COCHE UP,DOWN,RIGHT,LEFT (PDTE. GIRAR HACIA ...)
window.addEventListener("keydown",function(e){
    switch(e.keyCode){ 
        case 37: //arrow left     
            $("#car").css("left","-=10");
            $("#car").removeClass("down");
            $("#car").removeClass("right");
            $("#car").removeClass("up");
            $("#car").addClass("left");
            break;
        
        case 39: //arrow right
            $("#car").css("left","+=10");
            $("#car").removeClass("left");
            $("#car").removeClass("down");
            $("#car").removeClass("up");
            $("#car").addClass("right");
            break; 
            
        case 38: // arrow up
            $("#car").css("top","-=10");
            $("#car").removeClass("left");
            $("#car").removeClass("right");
            $("#car").removeClass("down");
            $("#car").addClass("up");
            break;
            
        case 40: // arrow down
            $("#car").css("top","+=10");
            $("#car").removeClass("left");
            $("#car").removeClass("right");
            $("#car").removeClass("up");
            $("#car").addClass("down");        
            break;
    
    };
 });   
    
/*var rotation = function (){
  $("#car").rotate({
    angle:0,
    animateTo:360,
    callback: rotation
  });
}
rotation(); */









/*

function Car(x,y) {
}


Car.prototype.move = function(){
};

Car.prototype.pointScored = function(){
};


Car.prototype.restart = function(){
};   */