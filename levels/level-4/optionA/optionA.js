window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Con una cuerda amarras la lanza en tu espalda para no hacerte daño por accidente, con eso listo, vuelves a caminar por todo este lugar lleno de oro ignorando por completo, después de todo, tu propia existencia no tiene codicia.',
  'Ingresas en la cueva que te llevará al siguiente círculo.'
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
    window.location.href = '../../level-5/level-5-lance/first/history/history.html';
  }, 3100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}