window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Este paisaje no está hecho para admirar, es solo una forma de darte a conocer lo que te espera si fallas en tu búsqueda hacia tu liberación, pero aún así necesitas mirarlo para no desviarte de tu camino.',
  'Este sitio apesta a putrefacción, no solo por lo que cae, si no por las existencias que devoran con gracia y alegría todo lo que les echan encima e incluso devorándose unos a otros con tal de saciar su apetito feroz.',
  'No son más que puercos para el matadero, alimentados por su propio excrementos y revolcándose con su mecriodida, aun asi, no puedes evitar sentir lastima por ellos, incluso si sabes que no cambiará nada, sin darte cuenta logras llegar a la salida de este lugar.'
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
    window.location.href = '../../level-4/history/history.html';
  }, 3100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}
