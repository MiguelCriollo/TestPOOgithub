window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'La multitud te está observando, las miradas de odio que recibes de ellos es desconcertante para ti, acabas de destrozar su único método de entretenimiento en este lugar, pero su enojo radica más en él porque destrozaste su diversión.',
  'Porque para personas como ellos, que cayeron en el pecado de la ira, no pueden comprender el porqué alguien puede arriesgar su existencia por una carne inservible que no logró adaptarse a este entorno.',
  'Ellos saben el porqué lo hiciste, no tenían que ser genios para resolverlo, porque desde que comenzó todo esto, alejaste la pelea lo más lejos del hombre herido.',
  'Vez como un nativo de este sitio sostiene la forma rota de aquel hombre que tratas de salvar, un cuchillo está presionando la garganta del hombre, el mensaje está claro, si das un paso más hacia el monstruo, ellos acabaran con la vida del hombre, si tu acabas con la del ser.'
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

function optionB() {
  playSound('../../../../../music/next/sound.mp3');
  setTimeout(function() {
    window.location.href = '../optionB/optionB.html';
  }, 2200);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}