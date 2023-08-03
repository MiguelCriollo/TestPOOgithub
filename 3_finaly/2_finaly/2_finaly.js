const darlingText = document.getElementById("darlingText");

// Función para animar las letras del texto
function animateLetters() {
  let text = darlingText.textContent;
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    newText += `<span style="animation-delay: ${i * 0.8}s">${text[i]}</span>`;
  }
  darlingText.innerHTML = newText;
}

window.addEventListener("load", () => {
  animateLetters(); // Llama a la función para animar las letras del texto
});

// Función para mostrar la pantalla negra y redireccionar a la pantalla principal
function fadeToBlack() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  let opacity = 0.1;
  const interval = setInterval(() => {
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    opacity += 0.1;
    if (opacity >= 1) {
      clearInterval(interval);
      window.location.href = "pantalla_principal.html"; // Redireccionar a la pantalla principal
    }
  }, 200); // Intervalo de tiempo
}

const botonFinalizar = document.querySelector(".boton_2");

// Evento cuando se hace clic en el botón "Finalizar todo"
botonFinalizar.addEventListener("click", () => {
  fadeToBlack();
});
