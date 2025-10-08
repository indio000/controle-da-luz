const salas = [
  { id: 101, nome: "Sala 101", estado: "Desligada " },
  { id: 102, nome: "Sala 102", estado: "Acesa " },
  { id: 103, nome: "Sala 103", estado: "Desligada " },
  { id: 104, nome: "Sala 104", estado: "Acesa " },
];

const container = document.getElementById("salasContainer");

function renderizarSalas() {
  container.innerHTML = "";
  salas.forEach((sala) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${sala.nome}</h3>
      <p class="estado">${sala.estado}</p>
      <button class="btn ligar" onclick="ligar(${sala.id})">Ligar</button>
      <button class="btn desligar" onclick="desligar(${sala.id})">Desligar</button>
    `;
    container.appendChild(card);
  });
}

function ligar(id) {
  const sala = salas.find((s) => s.id === id);
  sala.estado = "Acesa ";
  renderizarSalas();
}

function desligar(id) {
  const sala = salas.find((s) => s.id === id);
  sala.estado = "Desligada ";
  renderizarSalas();
}

// Modo escuro
const modoBtn = document.getElementById("modoBtn");
modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modoBtn.textContent = document.body.classList.contains("dark")
    ? " Modo Claro"
    : " Modo Escuro";
});

// Gráfico de energia
const ctx = document.getElementById("graficoEnergia").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
    datasets: [
      {
        label: "Consumo (kWh)",
        data: [12, 19, 8, 15, 10],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        borderWidth: 2,
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
});

renderizarSalas();
