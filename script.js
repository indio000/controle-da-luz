document.getElementById("ligar").addEventListener("click", () => {
  document.getElementById("estado").innerText = "Acesa 💡";
  document.getElementById("estado").style.color = "green";
});

document.getElementById("desligar").addEventListener("click", () => {
  document.getElementById("estado").innerText = "Desligada ⚫";
  document.getElementById("estado").style.color = "red";
});
