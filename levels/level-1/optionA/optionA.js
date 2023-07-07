window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Logras agarrarte de una roca, lo suficientemente grande para comenzar arrastrarte a la superficie, sabes que no puedes esperar a que alguien te rescate y no debes hacerlo, logras salir a la superficie.',
  'Salir de aquel lago no fue una cosa sencilla de realizar, pero tus ganas de vivir fueron lo suficientemente fuertes como para poder hacerlo, el sentir el viento en tu piel hace que te relajes y logres respirar con tranquilidad, pasando tus manos por el cuello logras sentir algo que no habia estado ahi antes, al sujetar dicho objeto notas que es una cruz hecho de madera simple atado con un cordón alrededor de tu cuello.',
  'Dejando de lado aquel “crucifijo” comienzas a caminar hacia la salida de aquel sitio, una puerta ornamentada de forma sencilla, a medida que te vas acercando ves como la puerta anteriormente cerrada comienza abrirse, invitandote a seguir adelante.'
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
    window.location.href = '../../level-2/history/history.html';
  }, 3100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}