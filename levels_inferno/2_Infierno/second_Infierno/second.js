var contador = 0;
var parrafos = [
  'No comprendes como una tormenta puede existir aquí abajo donde las corrientes de aire no tocan este sitio perdido, pero aun así existe, y ves el dolor que provoca a diferentes personas que están en su interior.',
  'Personas incapaces de salvarse a sí mismos de aquel castigo, pues como una persona puede ir contra la marea cuando está atrapada en ella, como un cordero puede regresar cuando no sabe qué dirección tomar, incluso a veces prefieren esto que a regresar donde antes, pues como se puede explicar que las mismas personas que están encerradas ahí dentro, siguen desenfrenadas por sus deseos más primarios.',
  'Están perdidos, no hay salvación para ellos, porque incluso mientras sus cuerpos están siendo desgarrados, su piel desprendiéndose de la carne, él como partes de su cuerpo están en direcciones equivocadas , ellos disfrutan de su lujuria, se regocijan de ella, sin saber que nunca escaparan de este infierno.'
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
    window.location.href = '../second_opcionA/opcionA.html';
  }

  function opcionB() {
    window.location.href = '../second_opcionB/opcionB.html';
  }
