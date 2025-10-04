let editRowId = null;

// Função para alternar entre abas
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const links = document.querySelectorAll('.tab-link');

  tabs.forEach(tab => tab.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Função para limpar o formulário
function clearForm() {
  const fields = [
    'codigo', 'data', 'nome', 'cpf', 'endereco', 'bairro',
    'cidade', 'uf', 'cep', 'email', 'fone1', 'fone2'
  ];
  fields.forEach(id => document.getElementById(id).value = '');

  document.getElementById('add-btn').style.display = 'block';
  document.getElementById('update-btn').style.display = 'none';

  editRowId = null;
}

// Função para adicionar novo registro
function addToTable() {
  const tbody = document.querySelector('#myTable tbody');
  const fields = {
    codigo: document.getElementById('codigo').value.trim(),
    data: document.getElementById('data').value.trim(),
    nome: document.getElementById('nome').value.trim(),
    cpf: document.getElementById('cpf').value.trim(),
    endereco: document.getElementById('endereco').value.trim(),
    bairro: document.getElementById('bairro').value.trim(),
    cidade: document.getElementById('cidade').value.trim(),
    uf: document.getElementById('uf').value.trim(),
    cep: document.getElementById('cep').value.trim(),
    email: document.getElementById('email').value.trim(),
    fone1: document.getElementById('fone1').value.trim(),
    fone2: document.getElementById('fone2').value.trim()
  };

  // Validação simples
  if (!fields.codigo || !fields.data || !fields.nome || !fields.cpf) {
    alert("Preencha os campos obrigatórios.");
    return false;
  }

  const rowIndex = tbody.rows.length + 1;
  const row = tbody.insertRow();
  row.id = `row-${rowIndex}`;

  row.insertCell(0).textContent = rowIndex;
  row.insertCell(1).textContent = fields.codigo;
  row.insertCell(2).textContent = fields.data;
  row.insertCell(3).textContent = fields.nome;
  row.insertCell(4).textContent = fields.cpf;
  row.insertCell(5).textContent = fields.endereco;
  row.insertCell(6).textContent = fields.bairro;
  row.insertCell(7).textContent = fields.cidade;
  row.insertCell(8).textContent = fields.uf;
  row.insertCell(9).textContent = fields.cep;
  row.insertCell(10).textContent = fields.email;
  row.insertCell(11).textContent = fields.fone1;
  row.insertCell(12).textContent = fields.fone2;
  row.insertCell(13).innerHTML = `
    <div class="action-icons">
      <button class="remove-btn" title="Editar" onclick="editRow(this)">✏️</button>
      <button class="remove-btn" title="Excluir" onclick="removeToTable(this)">🗑️</button>
    </div>
  `;

  clearForm();
  showTab('table-tab');
  return false;
}

// Função para editar registro
function editRow(button) {
  const row = button.closest('tr');
  if (!row) return;

  editRowId = row.id;

  document.getElementById('codigo').value = row.cells[1].textContent;
  document.getElementById('data').value = row.cells[2].textContent;
  document.getElementById('nome').value = row.cells[3].textContent;
  document.getElementById('cpf').value = row.cells[4].textContent;
  document.getElementById('endereco').value = row.cells[5].textContent;
  document.getElementById('bairro').value = row.cells[6].textContent;
  document.getElementById('cidade').value = row.cells[7].textContent;
  document.getElementById('uf').value = row.cells[8].textContent;
  document.getElementById('cep').value = row.cells[9].textContent;
  document.getElementById('email').value = row.cells[10].textContent;
  document.getElementById('fone1').value = row.cells[11].textContent;
  document.getElementById('fone2').value = row.cells[12].textContent;

  document.getElementById('add-btn').style.display = 'none';
  document.getElementById('update-btn').style.display = 'block';

  showTab('form-tab');
}

// Função para atualizar registro existente
function updateTable() {
  if (!editRowId) return false;

  const row = document.getElementById(editRowId);
  if (!row) return false;

  row.cells[1].textContent = document.getElementById('codigo').value.trim();
  row.cells[2].textContent = document.getElementById('data').value.trim();
  row.cells[3].textContent = document.getElementById('nome').value.trim();
  row.cells[4].textContent = document.getElementById('cpf').value.trim();
  row.cells[5].textContent = document.getElementById('endereco').value.trim();
  row.cells[6].textContent = document.getElementById('bairro').value.trim();
  row.cells[7].textContent = document.getElementById('cidade').value.trim();
  row.cells[8].textContent = document.getElementById('uf').value.trim();
  row.cells[9].textContent = document.getElementById('cep').value.trim();
  row.cells[10].textContent = document.getElementById('email').value.trim();
  row.cells[11].textContent = document.getElementById('fone1').value.trim();
  row.cells[12].textContent = document.getElementById('fone2').value.trim();

  clearForm();
  showTab('table-tab');
  return false;
}

// Função para remover registro
function removeToTable(button) {
  const row = button.closest('tr');
  if (row) row.remove();
  return false;
}
