var contador = 0;
var parrafos = [
  'Incluso con los fuertes vientos, sigues tu camino hasta llegar a la siguiente sección, al mirar hacia atrás lo único que puedes hacer es lamentarte por aquellas personas, sin darte cuenta de cómo la pequeña cruz brilla con luz calmante.',
  'Al abandonar cualquier tipo de deseo carnal, sigues tu camino atravesando aquellos fuertes vientos que azotan tu carne suave, sientes como la carne quiere desprenderse de tu cuerpo, pero sigues adelante ignorando cualquier tipo de sonido, tus ojos arden cuanto más avanzas por el viento que aumentó la fuerza de sus corrientes, aun asi sigues ignorando cualquier tipo de dolor.',
  'No sabes cuanto tiempo has estado así caminando por este tormento, pero no te detienes, hacerlo significa sufrir esto para siempre, por lo tanto sigues adelante, de forma abrupta la tormenta comienza a cesar, el viento que antes podía desgarrar la carne ahora es apenas una simple brisa, mirando al frente notas como la salida de este lugar está cerca.'
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
    window.location.href = '../../../3_Infierno/tercer_Infierno/.html';
  }