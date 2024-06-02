document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const closeButton = document.querySelector(".close-button");
  const modal = document.getElementById("modal");
  const Button = document.getElementById("Button");

  Button.addEventListener("click", () => {
    showModal(
      "Viagem Cadastrada com Sucesso!"
    );
  });

  // Handle form submission
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const trip = {
      id: Date.now(),
      nome: registerForm.nome.value,
      email: registerForm.email.value,
      destino: registerForm.destino.value,
      data: registerForm.data.value,
      duracao: registerForm.duracao.value,
      propostaViagem: registerForm.propostaViagem.value,
      coletaPlastico: registerForm.coletaPlastico.value,
    };

    saveTrip(trip);
    registerForm.reset();
  });

  function saveTrip(trip) {
    const viagens = getViagens();
    viagens.push(trip);
    localStorage.setItem("viagens", JSON.stringify(viagens));
  }

  function getViagens() {
    return JSON.parse(localStorage.getItem("viagens")) || [];
  }

  function showModal(message) {
    modal.querySelector("p").textContent = message;
    modal.style.display = "block";
  }

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
