var contador = 0;
var parrafos = [
  'Aunque tú mismo sabes que es falso, siempre tendrás dudas sobre tu existencia, dudas del porque sigues aqui mientras que otros no, pero eso no quiere decir que no puedas seguir avanzando por este camino que has elegido recorrer, la pregunta será, ¿podrás llegar hasta el final?'
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
    window.location.href = '../../1_Infierno/primer_Infierno/primer.html';
  }