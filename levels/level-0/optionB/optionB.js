window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Sin un proposito por el cual seguir, una existencia vacia sin un proposito, te quedas varado en este lugar donde la nada es un acompañante cruel, en verdad un desperdicio de existencia'
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
  playSound('../../../music/next/dead.mp3'); 
  setTimeout(function() {
    window.location.href = '../optionB/optionB.html';
  }, 2000);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}
