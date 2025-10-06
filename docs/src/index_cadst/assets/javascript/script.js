let editRowId = null;

document.addEventListener('DOMContentLoaded', () => {
  // Ativa troca de abas
  const links = document.querySelectorAll('.tab-link');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const tabId = link.getAttribute('data-tab');
      showTab(tabId);
    });
  });

  // Corrige campo de data se necessário
  const dataInput = document.getElementById('data');
  if (dataInput && dataInput.type !== 'date') {
    dataInput.type = 'text';
    dataInput.placeholder = 'dd/mm/aaaa';
  }
});

// Troca de abas
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const links = document.querySelectorAll('.tab-link');

  tabs.forEach(tab => tab.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));

  const targetTab = document.getElementById(tabId);
  if (targetTab) targetTab.classList.add('active');

  links.forEach(link => {
    if (link.getAttribute('data-tab') === tabId) {
      link.classList.add('active');
    }
  });
}

// Limpa formulário
function clearForm() {
  const fields = [
    'codigo', 'data', 'nome', 'cpf', 'endereco', 'bairro',
    'cidade', 'uf', 'cep', 'email', 'fone1', 'fone2'
  ];
  fields.forEach(id => {
    const input = document.getElementById(id);
    if (input) input.value = '';
  });

  document.getElementById('add-btn').style.display = 'inline-block';
  document.getElementById('update-btn').style.display = 'none';

  editRowId = null;
}

// Adiciona registro
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

// Edita registro
function editRow(button) {
  const row = button.closest('tr');
  if (!row) return;

  editRowId = row.id;

  document.getElementById('codigo').value = row.cells[1].textContent;
  document.getElementById('data').value = row.cells[2].textContent;
  document.getElementById('nome').value = row.cells[3].textContent;
  document.getElementById('cpf').value = row.cells[4].textContent;
  document.getElementById('endereco').value = row.cells[5].textContent;
  document.getElementBy
}
