let isNight = false ;

$(document).ready(function() {
  // Exercice 1.1
  // Dessin de la maison avec le canvas
  drawCanvas() ;

  // Exercice 1.2
  // Dessin avec le SVG
  $('#soleil').click(function() {
    if(!isNight) {
      isNight = true ;
      document.getElementById('ciel').className.baseVal = 'night' ;
    } else {
      isNight = false ;
      document.getElementById('ciel').className.baseVal = 'day' ;
    }
  }) ;

}) ;

function drawCanvas() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.src = './images/image_prairie.jpg' ;
  img.onload = function() {
    scaleToFit(this, ctx);

    var soleil = new Path2D();
    soleil.arc(75, 50, 25, 0, Math.PI * 2);
    ctx.fillStyle = '#FF0' ;
    ctx.fill(soleil);

    ctx.beginPath() ;
    ctx.fillStyle = '#BA7806' ;
    ctx.fillRect(150, canvas.height - 90, 75, 80) ;

    ctx.beginPath() ;
    ctx.fillStyle = '#EA9C1D' ;
    ctx.fillRect(170, canvas.height - 45, 25, 35) ;

    ctx.beginPath() ;
    ctx.fillStyle = '#FF0000' ;
    ctx.moveTo(150, canvas.height - 90);
    ctx.lineTo(187.5, 175);
    ctx.lineTo(225, canvas.height - 90);
    ctx.fill();
  }
}

// Fonction venant du site et servant a faire en sorte que l'image s'adapte au canvas peu importe sa taille
// https://riptutorial.com/html5-canvas/example/19169/scaling-image-to-fit-or-fill-
function scaleToFit(img, ctx){
  // get the scale
  var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
  // get the top left position of the image
  var x = (canvas.width / 2) - (img.width / 2) * scale;
  var y = (canvas.height / 2) - (img.height / 2) * scale;
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}
