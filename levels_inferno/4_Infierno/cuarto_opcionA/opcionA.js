var contador = 0;
var parrafos = [
  'Con una cuerda amarras la lanza en tu espalda para no hacerte daño por accidente, con eso listo, vuelves a caminar por todo este lugar lleno de oro ignorandolo por completo, despues de todo, tu propia existencia no tiene codicia.',
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

  function opcionA() {
    window.location.href = '../../5_Infierno_lanza/quinto_Infierno/quinto.html';
  }