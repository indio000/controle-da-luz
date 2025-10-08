:root {
  --fundo: #f9fafb;
  --texto: #111827;
  --card: #ffffff;
  --primaria: #2563eb;
  --ligar: #16a34a;
  --desligar: #dc2626;
}

.dark {
  --fundo: #0f172a;
  --texto: #f9fafb;
  --card: #1e293b;
  --primaria: #3b82f6;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--fundo);
  color: var(--texto);
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
}

header {
  background: var(--primaria);
  color: white;
  text-align: center;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  position: relative;
}

#modoBtn {
  position: absolute;
  right: 20px;
  top: 20px;
  background: white;
  color: var(--primaria);
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.dashboard {
  padding: 40px;
  text-align: center;
}

.salas-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.card {
  background: var(--card);
  width: 260px;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}

.card h3 {
  margin-bottom: 10px;
}

.estado {
  font-weight: bold;
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  color: white;
  border-radius: 8px;
  margin: 5px;
  cursor: pointer;
  font-weight: 600;
}

.ligar {
  background-color: var(--ligar);
}

.desligar {
  background-color: var(--desligar);
}

.grafico {
  padding: 30px;
  margin-top: 20px;
}

footer {
  background-color: var(--primaria);
  color: white;
  text-align: center;
  padding: 15px;
}
