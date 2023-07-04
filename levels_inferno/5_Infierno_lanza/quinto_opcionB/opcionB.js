var contador = 0;
var parrafos = [
  'Te alejas del ser despacio, tratando de evitar cualquier confrontación, ellos al ver también cómo te alejas de su entretenimiento sueltan a la carne inservible, los dos lados caminan a por sus respectivas preocupaciones ignorando la existencia del otro.',
  'Cuando llegas donde está el hombre puedes ver como la gratitud resplandece en sus ojos, no hace falta ni una palabra, ya sabes lo que quiere transmitir con solo su mirada.',
  'Con esfuerzo logras subirlo a tu espalda, sujetando la lanza en una mano y la otra como apoyo para evitar que el hombre caiga, sigues tu camino con pasos pesados, pero tu corazón, tu alma, tu misma existencia está en calma.'
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
    window.location.href = '../Game-Over.html';
  }