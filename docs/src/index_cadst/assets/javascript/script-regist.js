document.addEventListener('DOMContentLoaded', () => {
  // Gerenciar abas ativas
  const links = document.querySelectorAll('.tab-link');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', href === currentPage);

    link.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = link.getAttribute('href');
    });
  });

  // Carregar registros
  const registros = JSON.parse(localStorage.getItem('registros')) || [];
  const tbody = document.querySelector('#myTable tbody');

  registros.forEach((reg, index) => {
    const row = tbody.insertRow();
    row.id = `row-${index + 1}`;

    row.insertCell(0).textContent = index + 1;
    row.insertCell(1).textContent = reg.codigo;
    row.insertCell(2).textContent = reg.data;
    row.insertCell(3).textContent = reg.nome;
    row.insertCell(4).textContent = reg.cpf;
    row.insertCell(5).textContent = reg.endereco;
    row.insertCell(6).textContent = reg.bairro;
    row.insertCell(7).textContent = reg.cidade;
    row.insertCell(8).textContent = reg.uf;
    row.insertCell(9).textContent = reg.cep;
    row.insertCell(10).textContent = reg.email;
    row.insertCell(11).textContent = reg.celular;
    row.insertCell(12).textContent = reg.fone;

    const actionCell = row.insertCell(13);
    actionCell.innerHTML = `
      <div class="action-icons">
        <button class="remove-btn" title="Editar">✏️</button>
        <button class="remove-btn" title="Excluir">🗑️</button>
      </div>
    `;

    // Botão excluir
    actionCell.querySelector('[title="Excluir"]').addEventListener('click', () => {
      registros.splice(index, 1);
      localStorage.setItem('registros', JSON.stringify(registros));
      row.remove();
    });
  });
});
