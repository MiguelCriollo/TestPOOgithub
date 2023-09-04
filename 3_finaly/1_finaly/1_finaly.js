// Obtener el elemento del texto "darling"
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
// Evento cuando la página se carga completamente
window.addEventListener("load", () => {
  animateLetters(); 
});

// Función para mostrar la pantalla negra y redireccionar a la pantalla principal
function fadeToBlack() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  let opacity = 0.1; // Opacidad inicial
  const interval = setInterval(() => {
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    opacity += 0.1; 
    if (opacity >= 1) {
      clearInterval(interval);
    }
  }, 200);
}

const botonFinalizar = document.querySelector(".boto");

// Evento cuando se hace clic en el botón "Finalizar todo"
botonFinalizar.addEventListener("click", () => {
  fadeToBlack();
});
