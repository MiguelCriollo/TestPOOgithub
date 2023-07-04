var contador = 0;
var parrafos = [
  'Tu alma ha ingresado a un círculo vicioso donde no tendrás escapatoria, incluso si conseguiste aquel calor que estabas anhelando, tu alma quedará condenada a este sufrimiento eterno.'
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
    window.location.href = '../../../Game-Over.html';
  }