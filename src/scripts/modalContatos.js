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
    const modalContent = modal.querySelector(".modal-content");
    const modalMessage = modal.querySelector("p");

    // Limpar o conteúdo atual
    modalMessage.innerHTML = "";

    // Adicionar a primeira mensagem
    modalMessage.appendChild(document.createTextNode(message1));

    // Adicionar uma quebra de linha
    modalMessage.appendChild(document.createElement("br"));

    // Adicionar a segunda mensagem
    modalMessage.appendChild(document.createTextNode(message2));

    // Adicionar outra quebra de linha
    modalMessage.appendChild(document.createElement("br"));

    // Adicionar a terceira mensagem
    modalMessage.appendChild(document.createTextNode(message3));

    // Mostrar o modal
    modal.style.display = "block";
  }
});

// Guilherme Rossi Kirsten - RM: 95230
// João Pedro de Carvalho Maurano – RM: 96264
// Pedro Henrique Salles - RM: 94770
