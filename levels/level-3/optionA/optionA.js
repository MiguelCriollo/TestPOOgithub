window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'No ver el infierno que te rodea es el camino de la cobardía, de tu debilidad, el cerrar tus ojos para negarte ver este sufrimiento no es más que una equivocación, de que otra forma vas aprender lo que te espera si no quieres ver los errores que no debes cometer, a la final ya has sellado tu destino aquí.'
];

function next() {
  if (contador < parrafos.length) {
    document.getElementById('paragraph').innerHTML = parrafos[contador];
    contador++;

    if (contador === parrafos.length) {
      document.getElementById('paragraph').style.display = 'block';
      document.getElementById('next').style.display = 'none';
      document.getElementById('option').style.display = 'block';
    }
    playSound('../../../music/next/sound.mp3'); 
  }
}

function optionA() {
  playSound('../../../music/next/dead.mp3');
  setTimeout(function() {
    window.location.href = '../optionA/optionA.html';
  }, 2000);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}