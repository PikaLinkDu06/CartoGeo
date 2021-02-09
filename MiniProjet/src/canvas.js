$(document).ready(function() {

  var canvas = document.getElementById('compassCanvas') ;
  var ctx = canvas.getContext('2d');
  var boussole = new Image();
  var aiguille = new Image() ;
  boussole.src = './images/compass.png' ;
  aiguille.src = './images/needle.png' ;
  boussole.onload = function() {
    ctx.drawImage(boussole, 125, 125, 125, 125) ;
  }
  aiguille.onload = function() {
    ctx.drawImage(aiguille, 125, 125, 125, 125) ;
  }

  if(window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(orientation) {
      console.log(orientation) ;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(boussole, 0, 0);
      ctx.save();
      ctx.translate(100, 100);
      ctx.rotate(orientation.rotationRate.alpha * (Math.PI / 180));
      ctx.drawImage(aiguille, -100, -100);
      ctx.restore();
    });
  }

}) ;
