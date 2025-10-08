function ligar(sala) {
  const estado = document.getElementById(`estado${sala}`);
  estado.innerText = "Acesa ";
  estado.style.color = "green";
}

function desligar(sala) {
  const estado = document.getElementById(`estado${sala}`);
  estado.innerText = "Desligada ⚫";
  estado.style.color = "red";
}
