// Obtener el elemento del texto "CIELO"
const cieloText = document.getElementById("cieloText");

// Función para animar las letras del texto
function animateLetters() {
  let text = cieloText.textContent;
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    newText += `<span style="animation-delay: ${i * 0.8}s">${text[i]}</span>`;
  }
  cieloText.innerHTML = newText;
}
// Evento cuando la página se carga completamente
window.addEventListener("load", () => {
  animateLetters(); // Llama a la función para animar las letras del texto
});

// Función para mostrar la pantalla negra y redireccionar a la pantalla principal
function fadeToBlack() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  let opacity = 0.1; // Opacidad inicial
  const interval = setInterval(() => {
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    opacity += 0.1; // Aumentar la opacidad en cada iteración
    if (opacity >= 1) {
      clearInterval(interval); // Detener la transición cuando la opacidad llegue a 1
      window.location.href = "pantalla_principal.html"; // Redireccionar a la pantalla principal
    }
  }, 200); // Intervalo de tiempo en milisegundos (200ms en este caso)
}

const botonFinalizar = document.querySelector(".boto");

// Evento cuando se hace clic en el botón "Finalizar todo"
botonFinalizar.addEventListener("click", () => {
  fadeToBlack();
});
