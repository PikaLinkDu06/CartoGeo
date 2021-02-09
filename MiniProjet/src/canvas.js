$(document).ready(function() {

  var canvas = document.getElementById('compassCanvas') ;
  var ctx = canvas.getContext('2d');
  var boussole = new Image();
  var aiguille = new Image() ;
  boussole.src = './images/compass.png' ;
  aiguille.src = './images/needle.png' ;
  boussole.onload = function() {
    aiguille.onload = function() {
      ctx.drawImage(aiguille, 125, 125, 125, 125) ;
    }
    ctx.drawImage(boussole, 125, 125, 125, 125) ;
  }

  if(window.DeviceOrientationEvent) {
    window.addEventListener('devicemotion', function(orientation) {
      ctx.rotate(orientation.rotationRate.alpha * Math.PI / 180) ;
    });
  }

}) ;
