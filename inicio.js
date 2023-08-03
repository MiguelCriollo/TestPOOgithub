confirm("Te recomiendo usar audifonos para una mejor experiencia🕹️");

function redireccion() {
    window.location.href = "mainChoices/prologo.html";
}

document.addEventListener("DOMContentLoaded", function () {
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.play();
});
