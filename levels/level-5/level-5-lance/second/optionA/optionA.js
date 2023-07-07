window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Algo dentro de ti reniega esa decisión, pero la elección ya está hecha, apartando la mirada de los ojos del hombre, bajas la lanza perforando el cráneo de la bestia, al cerrar tus ojos, escuchas el sonido de la carne siendo cortada y el como la existencia de alguien se extingue.',
  'Salvaste a muchos, a costa de unos pocos.'
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
    playSound('../../../../../music/next/sound.mp3'); 
  }
}

function optionA() {
  playSound('../../../../../music/next/advance.mp3');
  setTimeout(function() {
    window.location.href = '../../../../level-6/level-6-bad/history.html';
  }, 3100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}