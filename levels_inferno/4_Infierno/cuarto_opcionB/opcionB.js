var contador = 0;
var parrafos = [
  'Caminas por el lugar ignorando todo lo que te rodea, tratando de llegar a la salida de este sitio que ya ha comenzado a agobiarte, después de todo de qué sirve todo si no puedes utilizarlo.',
  'Ingresas en la cueva que te llevará al siguiente círculo.'
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

  function opcionB() {
    window.location.href = '../../../Game-Over.html';
  }