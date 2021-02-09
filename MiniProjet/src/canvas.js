$(document).ready(function() {

  var canvas = document.getElementById('compassCanvas') ;
  var ctx = canvas.getContext('2d');
  var boussole = new Image();
  var aiguille = new Image() ;
  boussole.src = './images/compass.png' ;
  aiguille.src = './images/needle.png' ;
  boussole.onload = function() {
    ctx.drawImage(boussole, 25, 25) ;
  }
  aiguille.onload = function() {
    ctx.drawImage(aiguille, 25, 25) ;
  }

  if(window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(orientation) {
      console.log(orientation) ;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(boussole, 25, 25);
      ctx.save();
      ctx.translate(0, 0);
      ctx.rotate(orientation.rotationRate.alpha * (Math.PI / 180));
      ctx.drawImage(aiguille, 25, 25);
      ctx.restore();
    });
  }

}) ;
