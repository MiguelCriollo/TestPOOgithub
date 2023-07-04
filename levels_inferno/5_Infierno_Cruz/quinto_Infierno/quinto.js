var contador = 0;
var parrafos = [
  'A pesar de ello, los ignoras, nada bueno sale dejando te influenciar por aquellos que se resignaron a un destino sin sentido, ¿O deberías hacerlo?.',
  'Sin saber por dónde ir, te acercas a una de aquellas personas y preguntas por indicaciones, estas personas a pesar de no haber avanzado, saben muy bien como hacerlo, pero temen intentarlo, dando las gracias por las indicaciones, sigues con tu camino hacia un lago que está en la parte izquierda de esta caverna.',
  'El tan solo acercarte aquel lago provoca un sentimiento de opresión sobre tu pecho, como si acercarte fuera una prueba hercúlea en sí mismo, lo ignoras todo con tal de seguir adelante, pero eso fue tu error, porque el tan solo haber dado un pie en el agua fue suficiente para que estas te arrastrarán a las profundidades buscando ahogarte.'
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
    window.location.href = '../primer_opcionA/opcionA.html';
  }

  function opcionB() {
    window.location.href = '../primer_opcionB/opcionB.html';
  }
