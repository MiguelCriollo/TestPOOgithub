window.addEventListener('DOMContentLoaded', function() {
  var pageContainer = document.querySelector('.pageContainer');
  pageContainer.classList.add('show');
});

var contador = 0;
var parrafos = [
  'Para sobrevivir decidiste sacrificar todo de ti con tal de dar un solo paso más, abandonaste tu esperanza cuando viste a ese padre morir por su familia, el amor que alguna vez tuviste por una familia que ya no recuerdas, la fe al ver un santo ser condenado, el miedo a la muerte, alimentaste el fuego con todo lo que alguna vez te hizo humano.',
  'Eras una cáscara vacía desde un inicio, sin ambiciones, sin pecados, y aun así llegaste aquí solo por una mala jugada del destino, y lo aceptas, aceptas estar aquí porque tú mismo no puedes perdonarte por lo que tu inacción provocó, todas las vidas que murieron en aquel incendio.',
  'Un rugido más fuerte resuena en el lugar, miras al frente para ver como el monstruo dejó caer el cuerpo inerte del hombre, como si fuera una mero juguete que perdió su gracia al quedar inservible, por lo tanto se prepara para terminar, extendiendo su mano agarra una alabarda tan larga como su altura.',
  'Sabes lo que pasará a continuación, no hay otro resultado que pueda evitarlo, y aun así.',
  'Con cautela te acercas a la criatura, aunque nunca has utilizado un arma sabes que la lanza es una de las armas perfectas para un principiante como tu, tiene un largo alcance que permite a un novato portarla lo suficientemente para poder protegerse, su largo es menor que la alabarda siendo de 1,40 m su longitud, pero es más que suficiente.',
  'El ser a comenzando a bajar su alabarda con velocidad, el propósito, decapitar el juguete inservible que está en el piso, las alabanzas de los demás juguetes comienzan a intensificarse, su excitación por la masacre de uno de los suyos no causa mas que alegria al monstruo.',
  'Al bajar por completo su brazo no escucho el sonido que esperaba, el sonido de la carne siendo cortada por su instrumento preferido, no, lo que escuchó era el sonido que hace un juguete al caer cuando se cansa de jugar con ellos.',
  'Mirando hacia su brazo nota algo importante, o mejor dicho ve como su brazo ha desaparecido de su lugar, su vista se desplaza hacia dónde se originó el sonido y lo que ve solo causa una furia incontrolable.',
  'Vio como la parte que le falta está en el suelo, algo que desde que tiene uso de razonamiento nunca ha sucedido, algo ilógico para el, que se considera un ser hecho para la masacre, él nunca debería de haber perdido un brazo, mucho menos por uno de los juguetes, algo inaceptable para el.',
  '“¡_▄▄▄▄██████████!” Un rugido desgarrador sale de sus cuerdas bucales, esto siempre funciona para inundar de temor los corazones de sus pequeños juguetes, pero este es diferente, el temor de sus ojos nunca apareció, eso logró enfurecer más.',
  '“¡_▄▄▄▄██!” su brazo restante se movió de su posición con el propósito de desgarrar la existencia de este juguete que no sabe jugar, se supone que los juguetes no se mueven, se quedan quietos para que pueda romperlos, los juguetes no te atacan, ¡el ataca a los juguetes!',
  'El juguete aunque lento logró esquivar su golpe, esto lo irrita más, no debe pasar esto, ¡no se supone que deba pasar esto!, su brazo golpeó el suelo provocando que se trizara y el polvo se alce segando por un instante la visión de ambos.',
  'Guiándote por tus instintos casi inexistentes, logras poner la lanza al frente tuyo, logrando bloquear la embestida de la bestia, el golpe te empuja hacia atrás, haciendo que pierdas el equilibrio.',
  'El ser ve esto como otra oportunidad para acabar la vida de este juguete defectuoso, con velocidad se impulsa hacia al frente, con la intención de acabar esta molestia.',
  'La mejor defensa es el ataque, la bestia atacó por impulso, aun cuando ese golpe logró desorientar tus sentidos, nunca dejaste de ver a la bestia, reposicionando tus pies, esperas hasta que la bestia está cerca.',
  'El temblor en la tierra hace que tu decisión flaquee un poco, aun asi tu determinación por salvar a la persona es más fuerte, en unos segundo el bestia recorre el espacio entre los dos como si fuera nada, es normal para alguien inhumano como eso, utiliza su único brazo bueno para lanzar otro golpe devastador.',
  'Usas el ataque de la bestia a tu favor, extendiendo la lanza la posicionas para que cuando ese golpe de, termine por ser perforado por la mitad.',
  '“¡███████▄▄!” tu plan logra su cometido, la lanza perfora toda la extremidad del monstruo, sacando tu lanza del demonio, pegas un salto lo suficiente para poder esquivar la embestida que dio cuando vio que su otro brazos terminó por ser inservible.',
  'Logras esquivar el ataque del ser, esto te deja en una posición ventajosa, el monstruo no puede levantarse, ya que sus brazos no se lo permiten, es como si un bebe quisiera tratar de usar los brazos para levantarse.',
  'Aprovechas esa abertura para atacar a las pezuñas del ser, aunque son golpes inexpertos, son los suficientes para lograr tu cometido.',
  '“¡▄▄▄▄▄▄▄▄__!” Aun incluso en esa posición, el ser no se ha rendido, moviéndose de forma desesperada, trata de ponerse de pie, pero le es imposible.',
];

function next() {
  if (contador < parrafos.length) {
    document.getElementById('paragraph').innerHTML = parrafos[contador];
    contador++;

    if (contador === parrafos.length) {
      document.getElementById('paragraph').style.display = 'block';
      document.getElementById('next').style.display = 'none';
      document.getElementById('option').style.display = 'block';
    }
    playSound('../../../../../music/next/sound.mp3'); 
  }
}

function optionA() {
  playSound('../../../../../music/next/sound.mp3');
  setTimeout(function() {
    window.location.href = '../optionA/optionA.html';
  }, 3100);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath); 
  audio.play();
}