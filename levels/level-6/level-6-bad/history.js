window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Rodeado por cientos de enemigos, incluso si hubieras hecho lo que ellos querían, no había posibilidad de que lo dejaran, desde un punto de vista externo, tu decisión fue correcta.',
  'Pero, no fue la respuesta a la que querías llegar, querías corresponder a la esperanza que vislumbraste en aquellos ojos que se habían rendido hace tiempo, pero al final traicionaste su esperanza, y volviste abandonar a alguien.',
  'Mirando al frente notas que has llegado a un lugar diferente al anterior, donde antes la ira, el dolor, la excitación por una masacre estaba presente, ahora no hay nada, solo un tipo de paz efímera.', 
  'En frente tuyo yace un puerta hecha de acero, con unos acabados renacentistas, lastima que su tamaño no caiga en la categoría simple, y al lado de ella, miles de personas se postran orando en silencio, tratando de encontrar una respuesta a sus tormentos.',
  'Otra prueba está ante ti, y lo único que haces es suspirar con fastidio, ¿qué propósito tiene orar cuando ya estás condenado?, ¿por qué deberías buscar una respuesta cuando ya la obtuviste hace tiempo?, ¿por qué una existencia como la tuya sigue avanzando cuando muchos tuvieron que sufrir todo ese tormento?', 
  'No hay salvación aquí, solo una condena perpetua para aquellos que tuvieron la mala suerte de caminar por este mundo distorsionado, un mundo creado para la tortura.',
  'Las puertas comenzaron a chirriar de forma horrenda, es incorrecto, como si no quisiera abrirse pero lo hace a regañadientes, porque has llegado a la respuesta que muchos no logran llegar, un respuesta que la puerta no acepta, pero cumple su propósito, la entrada al siguiente infierno está abierta.'
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
  playSound('../../../../../music/next/sound.mp3');
  setTimeout(function() {
    window.location.href = '../optionA/optionA.html';
  }, 2200);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}