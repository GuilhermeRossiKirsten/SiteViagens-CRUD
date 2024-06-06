document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const closeButton = document.querySelector(".close-button");
  const modal = document.getElementById("modal");

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

    if (validate) {
      showModal("Viagem Cadastrada com Sucesso!");
      saveTrip(trip);
      registerForm.reset();
    }
  });

  function validate(viagen) {
    let aux = true;

    if (viagen.nome.trim() == "") {
      aux = false;
    }
    if (viagen.email.trim() == "" || viagens.email.indexOf("@") < 0) {
      aux = false;
    }
    if (viagen.destino.trim() == "") {
      aux = false;
    }
    if (viagen.data.trim() == "") {
      aux = false;
    }
    if (viagen.duracao.trim() == "") {
      aux = false;
    }
    if (viagen.propostaViagem.trim() == "") {
      aux = false;
    }
    if (viagen.coletaPlastico.trim() == "") {
      aux = false;
    }
    return aux;
  }

  function saveTrip(viagen) {
    const viagens = getViagens();
    viagens.push(viagen);
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
