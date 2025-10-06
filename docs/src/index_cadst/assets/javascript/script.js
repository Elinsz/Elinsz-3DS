let editRowId = null;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const tabId = link.getAttribute('data-tab');
      showTab(tabId);
    });
  });
});

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
}

function clearForm() {
  ['codigo','data','nome','cpf','endereco','bairro','cidade','uf','cep','email','fone1','fone2']
    .forEach(id => document.getElementById(id).value = '');

  document.getElementById('add-btn').style.display = 'inline-block';
  document.getElementById('update-btn').style.display = 'none';
  editRowId = null;
}

function addToTable() {
  const tbody = document.querySelector('#myTable tbody');
  const fields = ['codigo','data','nome','cpf','endereco','bairro','cidade','uf','cep','email','fone1','fone2']
    .map(id => document.getElementById(id).value.trim());

  if (!fields[0] || !fields[1] || !fields[2] || !fields[3]) {
    alert("Preencha os campos obrigatórios.");
    return;
  }


  const row = tbody.insertRow();
  row.id = `row-${tbody.rows.length + 1}`;
  row.insertCell(0).textContent = tbody.rows.length + 1;
  fields.forEach((val, i) => row.insertCell(i + 1).textContent = val);
  row.insertCell(13).innerHTML = `
    <div class="action-icons">
      <button class="remove-btn" title="Editar" onclick="editRow(this)">✏️</button>
      <button class="remove-btn" title="Excluir" onclick="removeToTable(this)">🗑️</button>
    </div>
  `;

  clearForm();
  showTab('table-tab');
}

function editRow(button) {
  const row = button.closest('tr');
  if (!row) return;
  editRowId = row.id;

  ['codigo','data','nome','cpf','endereco','bairro','cidade','uf','cep','email','fone1','fone2']
    .forEach((id, i) => document.getElementById(id).value = row.cells[i + 1].textContent)
}

