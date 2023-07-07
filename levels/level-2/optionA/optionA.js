window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Tu alma ha ingresado a un círculo vicioso donde no tendrás escapatoria, incluso si conseguiste aquel calor que estabas anhelando, tu alma quedará condenada a este sufrimiento eterno.'
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