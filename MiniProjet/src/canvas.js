$(document).ready(function() {

  var canvas = document.getElementById('compassCanvas') ;
  var ctx1 = canvas.getContext('2d');
  var ctx2 = canvas.getContext('2d') ;
  var boussole = new Image();
  var aiguille = new Image() ;
  boussole.src = './images/compass.png' ;
  aiguille.src = './images/needle.png' ;
  boussole.onload = function() {
    ctx1.drawImage(boussole, 125, 125, 125, 125) ;
  }
  aiguille.onload = function() {
    ctx2.drawImage(aiguille, 125, 125, 125, 125) ;
  }

  if(window.DeviceOrientationEvent) {
    window.addEventListener('devicemotion', function(orientation) {
      ctx2.rotate(orientation.rotationRate.alpha * Math.PI / 180) ;
    });
  }

}) ;
