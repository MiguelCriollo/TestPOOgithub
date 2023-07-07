window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Con cada paso que das es una agonía de sufrimiento, miras alrededor en busca de ayuda pero lo que vez causa más desesperación en tu ser, vez como un padre entra en una casa en llamas con el propósito de salvar a su familia, la casa colapsó en ese instante.',
  'Miras como el religioso ora con todas sus fuerzas por ayuda divina, solo para darte cuenta que una viga se aloja en su vientre atrapandolo, nadie podrá ayudarlo.',
  'Tus pasos se detienen, no por ti, si no por una mano que te sujeta con desesperación, al mirar a la dueña de esta mano, la esperanza comenzó a surgir en los ojos de aquella chica, pero tu no ves eso, en lo que te concentras es como un muro de concreto está aplastando los pies de la chica.',
  'Es imposible salvarla, lo sabes, no hay nada en lo que puedas ayudarla, entonces haces lo único que puedes hacer, sigues caminando ignorando las súplicas de salvación que la chica grita desgarrando su garganta por el smog en el aire por la carne quemada, con cada paso que das sus súplicas se convierten en gritos, y los gritos en maldiciones, ella te desea la muerte por dejarla abandonada.',
  'Tus pensamientos se detienen, nada bueno sale recordando, por eso sigues caminando por este lugar, un lugar donde no hay algún sentido del tiempo, donde tu existencia no es más que una anormalidad, un sitio donde solo hay un infinito sin nada, no sabes el porque caminas, no tienes ambiciones.',
  'Lo que alguna vez fuiste ya no existe para utilizarlo como motor, aun así dudas en seguir caminando sabiendo que sería inutil, sin embargo sigues caminando ya que es lo único que puedes hacer, porque sabes que debe haber algo más allá de toda la nada que te rodea.'
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
  playSound('../../../music/next/sound.mp3');
  setTimeout(function() {
    window.location.href = '../optionA/optionA.html';
  }, 2200);
}

function optionB() {
  playSound('../../../music/next/sound.mp3');
  setTimeout(function() {
    window.location.href = '../optionB/optionB.html';
  }, 2200);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}