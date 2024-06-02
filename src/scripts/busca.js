document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const results = document.getElementById("results");
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");

  listAllViagens();

  searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    const viagens = getViagens();
    results.innerHTML = "";

    viagens.forEach((viagens) => {
      if (
        viagens.nome.toLowerCase().includes(query) ||
        viagens.email.toLowerCase().includes(query) ||
        viagens.destino.toLowerCase().includes(query)
      ) {
        const li = document.createElement("li");
        li.innerHTML = `
                    <div>
                        <strong>Nome:</strong> ${viagens.nome}<br>
                        <strong>Email:</strong> ${viagens.email}<br>
                        <strong>Destino:</strong> ${viagens.destino}<br>
                        <strong>Data:</strong> ${viagens.data}<br>
                        <strong>Propósito:</strong> ${viagens.propostaViagem}<br>
                        <strong>Plástico Coletado:</strong> ${viagens.coletaPlastico} kg
                    </div>
                    <button class="delete-button" >Excluir</button>
                `;
        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
          deleteViagens(viagens.id);
          li.remove();
          showModal("Viagem removida com sucesso!");
        });
        results.appendChild(li);
      }
    });
  });

  function listAllViagens() {
    const viagens = getViagens();
    results.innerHTML = "";

    viagens.forEach((viagens) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <div>
                    <strong>Nome:</strong> ${viagens.nome}<br>
                    <strong>Email:</strong> ${viagens.email}<br>
                    <strong>Destino:</strong> ${viagens.destino}<br>
                    <strong>Data:</strong> ${viagens.data}<br>
                    <strong>Propósito:</strong> ${viagens.propostaViagem}<br>
                    <strong>Plástico Coletado:</strong> ${viagens.coletaPlastico} kg
                </div>
                <button class="delete-button btn_default">Excluir</button>
            `;
      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => {
        deleteViagens(viagens.id);
        li.remove();
        showModal("Viagem removida com sucesso!");
      });
      results.appendChild(li);
    });
  }

  function getViagens() {
    return JSON.parse(localStorage.getItem("viagens")) || [];
  }

  function deleteViagens(id) {
    const viagens = getViagens();
    const updatedViagens = viagens.filter((viagens) => viagens.id !== id);
    localStorage.setItem("viagens", JSON.stringify(updatedViagens));
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
