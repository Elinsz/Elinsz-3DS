let editRowId = null;

// Adiciona novo registro
function addToTable() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const work = document.getElementById('work').value.trim();
  const tbody = document.querySelector('#myTable tbody');

  if (!name || !email || !phone || !work) {
    alert("Preencha todos os campos.");
    return false;
  }

  const rowIndex = tbody.rows.length + 1;
  const row = tbody.insertRow();
  row.id = `row-${rowIndex}`;

  row.insertCell(0).textContent = rowIndex;
  row.insertCell(1).textContent = name;
  row.insertCell(2).textContent = email;
  row.insertCell(3).textContent = phone;
  row.insertCell(4).textContent = work;
  row.insertCell(5).innerHTML = `
    <div class="action-icons">
      <button class="remove-btn" onclick="editRow(this)">✏️</button>
      <button class="remove-btn" onclick="removeToTable(this)">🗑️</button>
    </div>
  `;

  clearForm();
  showTab('table-tab');
  return false;
}

// Remove registro
function removeToTable(button) {
  const row = button.closest('tr');
  if (row) row.remove();
  return false;
}

// Edita registro
function editRow(button) {
  const row = button.closest('tr');
  if (!row) return;

  editRowId = row.id;

  document.getElementById('name').value = row.cells[1].textContent;
  document.getElementById('email').value = row.cells[2].textContent;
  document.getElementById('phone').value = row.cells[3].textContent;
  document.getElementById('work').value = row.cells[4].textContent;

  document.getElementById('add-btn').style.display = 'none';
  document.getElementById('update-btn').style.display = 'block';

  showTab('form-tab');
}

// Atualiza registro existente
function updateTable() {
  if (!editRowId) return false;

  const row = document.getElementById(editRowId);
  if (!row) return false;

  row.cells[1].textContent = document.getElementById('name').value.trim();
  row.cells[2].textContent = document.getElementById('email').value.trim();
  row.cells[3].textContent = document.getElementById('phone').value.trim();
  row.cells[4].textContent = document.getElementById('work').value.trim();

  clearForm();
  showTab('table-tab');
  return false;
}

// Limpa o formulário
function clearForm() {
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('phone').value = "";
  document.getElementById('work').value = "";

  document.getElementById('add-btn').style.display = 'block';
  document.getElementById('update-btn').style.display = 'none';

  editRowId = null;
}

// Alterna entre abas
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const links = document.querySelectorAll('.tab-link');

  tabs.forEach(tab => tab.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}
