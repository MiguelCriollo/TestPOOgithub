var contador = 0;
var parrafos = [
  'Sin un proposito por el cual seguir, una existencia vacia sin un proposito, te quedas varado en este lugar donde la nada es un acompañante cruel, en verdad un desperdicio de existencia'
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