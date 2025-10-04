function addToTable() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const work = document.getElementById('work').value.trim();
  const tbody = document.querySelector('#myTable tbody');

  if (!name || !email || !phone || !work) {
    alert("Preencha todos os campos antes de enviar.");
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
  row.insertCell(5).innerHTML = `<button class="remove-btn" onclick="removeToTable(this)">Remover</button>`;

  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('phone').value = "";
  document.getElementById('work').value = "";

  showTab('table-tab'); // Alterna para a aba de registros

  return false;
}

function removeToTable(button) {
  const row = button.closest('tr');
  if (row) row.remove();
  return false;
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const links = document.querySelectorAll('.tab-link');

  tabs.forEach(tab => tab.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}
