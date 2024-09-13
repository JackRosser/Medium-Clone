window.onload = function () {
  const nav = document.querySelector("nav"); // Seleziona l'elemento nav
  nav.classList.add("top"); // Imposta la classe iniziale su "top"

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY; // Ottiene la posizione di scroll attuale

    if (scrollPosition > 100) {
      nav.classList.remove("top"); // Rimuove la classe "top"
      nav.classList.add("scroll_nav"); // Aggiunge la classe "scroll_nav"
    } else {
      nav.classList.remove("scroll_nav"); // Rimuove la classe "scroll_nav"
      nav.classList.add("top"); // Ritorna alla classe "top" quando si torna in cima
    }
  });
};
