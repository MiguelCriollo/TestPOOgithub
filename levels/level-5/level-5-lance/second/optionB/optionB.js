window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Te alejas del ser despacio, tratando de evitar cualquier confrontación, ellos al ver también cómo te alejas de su entretenimiento sueltan a la carne inservible, los dos lados caminan a por sus respectivas preocupaciones ignorando la existencia del otro.',
  'Cuando llegas donde está el hombre puedes ver como la gratitud resplandece en sus ojos, no hace falta ni una palabra, ya sabes lo que quiere transmitir con solo su mirada.',
  'Con esfuerzo logras subirlo a tu espalda, sujetando la lanza en una mano y la otra como apoyo para evitar que el hombre caiga, sigues tu camino con pasos pesados, pero tu corazón, tu alma, tu misma existencia está en calma.'
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

function optionB() {
  playSound('../../../../../music/next/advance.mp3'); 
  setTimeout(function() {
    window.location.href = '../../../../level-6/level-6-normal/history.html';
  }, 3100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}
