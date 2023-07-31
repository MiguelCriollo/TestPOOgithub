confirm("¿Estás listo para adentrarte en la oscuridad y enfrentar tu destino?");

function redireccion() {
  window.location.href = "/levels/level-0/prologo.html";
}

document.addEventListener("DOMContentLoaded", function () {
  var audioPlayer = document.getElementById("audio-player");
  audioPlayer.pause();
});
