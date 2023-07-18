window.addEventListener("DOMContentLoaded", function () {
  var pageContainer = document.querySelector(".pageContainer");
  pageContainer.classList.add("show");
});

var contador = 0;
var parrafos = [
  "Deberías sentirte mal por el solo hecho de no haber causado la muerte de la bestia, esa criatura seguirá causando más sufrimiento a otras personas, el solo hecho de que tal cosa exista también es preocupante, desde qué llegaste no viste algo parecido a eso, algo que está activamente asesinando personas solo por la diversión y el placer que le causa.",
  "Sin embargo dejas eso de lado, lo hecho, hecho está y solo toca seguir con el camino que has elegido.",
  "Saliendo de la cueva llegas a un sitio diferente al resto, no hay bullicio, una tormenta o excremento cayendo del cielo, solo miles de personas de rodillas, orando algo en voz baja.",
  "En frente de todo había una puerta de acero, con unos acabados renacentista, la cuestión fue que el tamaño no tenía nada de sencillo, pareciera que fue creada para que un gigante pasará por ellas.",
  "Otra prueba, algo que te ha cansado desde que empezaste a caminar por todos estos infiernos, este lugar está creado como una prueba para la redención de las personas, lo sabes porque desde que comenzaste tu viaje has logrado encontrar un objetivo para seguir adelante.",
  "No está mal ayudar a otros, un objetivo extraño, sobre todo para alguien que está caminando por este infierno, no obstante es algo que te llena.",
  "Lo que amarga tu existencia es el simple hecho de que para lograr eso tienes que sacrificar algo, como antes donde se te dio a elegir entre salvar a alguien quien pudo haber sido asesinado en cualquier momento y matar a la bestia para evitar más masacres sin sentido.",
  "Pero no te arrepientas, este es el camino que has elegido recorrer.",
  "Las puertas comenzaron a chirriar, parece esforzarse en hacerlo, como si a pesar de no querer se fuerza hacerlo, la razón es porque has llegado a la respuesta que muchos no logran llegar, o mejor dicho un objetivo para seguir avanzando, solo falta ver si tu determinación podrá mantener tus ideales intactos, la entrada al siguiente infierno está abierta.",
];

function next() {
  if (contador < parrafos.length) {
    document.getElementById("paragraph").innerHTML = parrafos[contador];
    contador++;

    if (contador === parrafos.length) {
      document.getElementById("paragraph").style.display = "block";
      document.getElementById("next").style.display = "none";
      document.getElementById("option").style.display = "block";
    }
    playSound("../../../../../music/next/sound.mp3");
  }
}

function optionA() {
  playSound("../../../../../music/next/sound.mp3");
  setTimeout(function () {
    window.location.href = "../optionA/optionA.html";
  }, 2200);
}

function playSound(soundPath) {
  var audio = new Audio(soundPath);
  audio.play();
}
