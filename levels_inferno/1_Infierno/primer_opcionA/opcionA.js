var contador = 0;
var parrafos = [
  'Logras agarrarte de una roca, lo suficientemente grande para comenzar arrastrarte a la superficie, sabes que no puedes esperar a que alguien te rescate y no debes hacerlo, logras salir a la superficie.',
  'Salir de aquel lago no fue una cosa sencilla de realizar, pero tus ganas de vivir fueron lo suficientemente fuertes como para poder hacerlo, el sentir el viento en tu piel hace que te relajes y logres respirar con tranquilidad, pasando tus manos por el cuello logras sentir algo que no habia estado ahi antes, al sujetar dicho objeto notas que es una cruz hecho de madera simple atado con un cordón alrededor de tu cuello.',
  'Dejando de lado aquel “crucifijo” comienzas a caminar hacia la salida de aquel sitio, una puerta ornamentada de forma sencilla, a medida que te vas acercando ves como la puerta anteriormente cerrada comienza abrirse, invitandote a seguir adelante.'
];

function siguiente() {
    if (contador < parrafos.length) {
      document.getElementById('parrafo').innerHTML = parrafos[contador];
      contador++;

      if (contador === parrafos.length) {
        document.getElementById('parrafo').style.display = 'block';
        document.getElementById('siguiente').style.display = 'none';
        document.getElementById('opciones').style.display = 'block';
      }
    }
  }

  function opcionA() {
    window.location.href = '../../2_Infierno/second_Infierno/second.html';
  }