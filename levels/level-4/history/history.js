window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Te causa repulsión y las ganas de vomitar vienen con más fuerza, desechando esas imágenes de tu cabeza aumentas la velocidad tratando de mantener la mayor cantidad de distancia con aquel infierno.',
  'No sabes con que te toparás si sigues, pero cualquier cosa es mejor.',
  'Una luz cegó tu visión cuando notaste la salida del final de este túnel, algo que te llama la atención, ¿cómo podría el sol brillar desde este sitio?, la respuesta de aquella pregunta se te es respondida sin que nadie te lo diga, la razón es que no hay sol aquí abajo, no, lo que hay es solo riquezas sin fin, desde donde estas, solo puedes observar montañas de oro.',
  'Montañas que se extienden por toda la existencia de esta recamara, desde figuras decorativas, el oro, la plata e incluso diamantes yace ante ti, como una recompensa por haber llegado tan lejos, aunque no sea así, tu mente está tratando de deformar la respuesta con tal de quedarte con estas riquezas, cuando sabes que no has hecho nada más que caminar para escapar.',
  'Hay riquezas que muchos Reyes habrían matado por poseer, pero tu solo los admiras como algo brillante, ¿como puede brillar algo tan intensamente en este infierno?, llevado por tu curiosidad alzas una baratija casi sin importancia, es una vara larga, su punta es filosa, un arma ornamentada de tal forma mas exquisita que existe, en muchos sentidos la lanza que ahora tienes en tus manos es un arma sin igual, arma que muchos daria sus brazos a torcer con tal de poseerla', 
  'Un arma que para ti no significa nada mas que solo una herramienta.'
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