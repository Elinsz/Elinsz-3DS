// Função para adicionar uma nova linha na tabela
function addToTable() {
  // Capturando os dados dos campos
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const work = document.getElementById('work').value.trim();
  const table = document.getElementById('myTable');

  // Validação simples: não adicionar se algum campo estiver vazio
  if (!name || !email || !phone || !work) {
    alert("Preencha todos os campos antes de enviar.");
    return false;
  }

  // Inserindo nova linha no final da tabela
  const row = table.insertRow(-1);
  const rowIndex = table.rows.length - 1;
  row.id = `row-${rowIndex}`;

  // Inserindo células
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  // Preenchendo células
  cell1.textContent = rowIndex;
  cell2.textContent = name;
  cell3.textContent = email;
  cell4.textContent = phone;
  cell5.textContent = work;
  cell6.innerHTML = `<button class="remove-btn" onclick="removeToTable(this)">Remover</button>`;

  // Limpando os campos
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('phone').value = "";
  document.getElementById('work').value = "";

  return false; // Impede o reload da página
}

// Função para remover uma linha da tabela
function removeToTable(button) {
  const row = button.closest('tr');
  if (row) {
    row.remove();
  }
  return false;
}
