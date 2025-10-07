let editRowId = null;

document.addEventListener('DOMContentLoaded', () => {
  // Troca de abas
  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const tabId = link.getAttribute('data-tab');
      showTab(tabId);
    });
  });

  // Máscara CPF/CNPJ
  document.getElementById('cpf').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '');
    if (v.length <= 11) {
      this.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      this.value = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  });

  // Máscara CEP
  document.getElementById('cep').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '');
    this.value = v.replace(/(\d{5})(\d{3})/, '$1-$2');
  });

  // Máscara telefone
  ['fone1', 'fone2'].forEach(id => {
    document.getElementById(id).addEventListener('input', function () {
      let v = this.value.replace(/\D/g, '');
      if (v.length <= 10) {
        this.value = v.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      } else {
        this.value = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
    });
  });
});

// Troca de abas
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
}

// Limpa formulário
function clearForm() {
  ['codigo','data','nome','cpf','endereco','bairro','cidade','uf','cep','email','fone1','fone2']
    .forEach(id => document.getElementById(id).value = '');

  document.getElementById('add-btn').style.display = 'inline-block';
  document.getElementById('update-btn').style.display = 'none';
  editRowId = null;
}

// Adiciona registro
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

// Edita registro
function editRow(button) {
  const row = button.closest('tr');
  if (!row) return;
  editRowId = row.id;

  ['codigo','data','nome','cpf','endereco','bairro','cidade','uf','cep','email','fone1','fone2']
    .forEach((id, i) => document.getElementById(id).value = row.cells[i + 1].textContent);

  document.getElementById('add-btn').style.display = 'none';
  document.getElementById('update-btn').style.display = 'inline-block';
  showTab('form-tab');
}

// Atualiza registro
function updateTable() {
  if (!editRowId) return;

  const row = document.getElementById(editRowId);
  if (!row) return;

  ['codigo','data','nome','cpf','endereco','bairro','cidade','uf','cep','email','fone1','fone2']
    .forEach((id, i) => row.cells[i + 1].textContent = document.getElementById(id).value.trim());

  clearForm();
  showTab('table-tab');
}

// Remove registro
function removeToTable(button) {
  const row = button.closest('tr');
  if (row) row.remove();
}
