document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");
  const contactButton = document.getElementById("contactButton");

  contactButton.addEventListener("click", () => {
    showModal(
      "Guilherme Rossi Kirsten - RM95230",
      "João Pedro de Carvalho Maurano - RM: 96264",
      "Pedro Henrique Salles - RM: 94770"
    );
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function showModal(message1, message2, message3) {
    const modal = document.getElementById("modal");
    const modalMessage = modal.querySelector("p");
    modalMessage.innerHTML = "";
    modalMessage.appendChild(document.createTextNode(message1));
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(document.createTextNode(message2));
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(document.createTextNode(message3));
    modal.style.display = "block";
  }
});

// Guilherme Rossi Kirsten - RM: 95230
// João Pedro de Carvalho Maurano – RM: 96264
// Pedro Henrique Salles - RM: 94770
