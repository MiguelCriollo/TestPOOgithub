window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Aunque tú mismo sabes que es falso, siempre tendrás dudas sobre tu existencia, dudas del porque sigues aqui mientras que otros no, pero eso no quiere decir que no puedas seguir avanzando por este camino que has elegido recorrer, la pregunta será, ¿podrás llegar hasta el final?'
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
  playSound('../../../music/next/advance.mp3');
  setTimeout(function() {
    window.location.href = '../../level-1/history/history.html';
  }, 3100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}