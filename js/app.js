
/////////// AHORA VAMOS A HACER EL JUEGO ///////////////
///INDICAMOS POSICION INICIAL DEL COCHE ////////


var timePlay;

function Play(options) {
//    ResetBoard();
//    ResetTime();
//    StartTime();
    
}

Play()
    

//////////////car, FUNCION CONSTRUCTORA  /////////
         //  POSICION DE SALIDA //
function Car(options) {
  this.direction = 'right';
  this.x_car = 430;
  this.y_car = 70;
}






//////////Change car’s direction//////////////

Car.prototype.goLeft = function() {
  if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'left';
  }
};

Car.prototype.goRight = function() {
  if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'right';
  }
};

Car.prototype.goUp = function() {
  if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'up';
  }
};

Car.prototype.goDown = function() {
  if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'down';
  }
};








////////////// ASIGNAMOS CONTROLES DE TECLAS ///////////////

Play.prototype.assignControlsToKeys = function(){
  $('car').on('keydown', function(e) {
    switch (e.keyCode) {
      case 38: // arrow up
        this.car.goUp();
        break;
      case 40: // arrow down
        this.car.goDown();
        break;
      case 37: // arrow left
        this.car.goLeft();
        break;
      case 39: // arrow right
        this.car.goRight();
        break;
    }
  }.bind(this));
}