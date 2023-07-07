window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Caminas por el lugar ignorando todo lo que te rodea, tratando de llegar a la salida de este sitio que ya ha comenzado a agobiarte, después de todo de qué sirve todo si no puedes utilizarlo.',
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

function optionB() {
  playSound('../../../music/next/advance.mp3'); 
  setTimeout(function() {
    window.location.href = '../../level-5/level-5-cross/first/history/history.html';
  }, 2100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}
