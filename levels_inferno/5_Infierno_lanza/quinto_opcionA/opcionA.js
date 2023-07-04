var contador = 0;
var parrafos = [
  'Algo dentro de ti reniega esa decisión, pero la elección ya está hecha, apartando la mirada de los ojos del hombre, bajas la lanza perforando el cráneo de la bestia, al cerrar tus ojos, escuchas el sonido de la carne siendo cortada y el como la existencia de alguien se extingue.',
  'Salvaste a muchos, a costa de unos pocos.'
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
    window.location.href = 'documento_a.html';
  }