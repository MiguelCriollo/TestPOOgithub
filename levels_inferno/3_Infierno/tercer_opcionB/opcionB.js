var contador = 0;
var parrafos = [
  '¿De que otra forma esperabas que terminara si apenas comienzas, ya estas rindiendote?'
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
    window.location.href = '../../4_Infierno.html';
  }