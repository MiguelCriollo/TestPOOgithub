var contador = 0;
var parrafos = [
  'Con tu curiosidad despertada avanzas más rápido para saber qué es lo que provoca este horrible olor, cuando sales del camino, sólo puedes mirar con repulsión lo que está al frente.',
  'A pesar de no haber nubes está lloviendo, pero está equivocado, no debería ser posible, pero lo es, y esto solo te causa repugnancia, ver como el excremento y la podredumbre caen del cielo como si fueran gotas de agua que vienen a limpiar las impurezas, pero esta mal, porque esa lluvia no viene a limpiar, viene a corromper más, ahogar a las almas que cayeron al río por querer ingerir más de lo que sus cuerpos soportaban.',
  'Ver como las personas comen de forma desesperada ese néctar podrido, como si un instinto animal se hubiese apoderado de ellos, no te causa nada más que náuseas, tu estomago quiere vaciarse, pero no puedes sacar nada de lo que está vacío, aún así las arcadas no se detienen, lo único saludable que puedes hacer es tratar de ignorar todo esto cerrando los ojos, pero necesitas abrirlos para caminar, para seguir avanzando y salir de este infierno.'
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
    window.location.href = '../tercer_opcionA/opcionA.html';
  }

  function opcionB() {
    window.location.href = '../tercer_opcionB/opcionB.html';
  }
