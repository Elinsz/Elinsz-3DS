document.addEventListener('DOMContentLoaded', () => {
  // Exemplo de dados simulados
  const registros = [
    {
      codigo: '001',
      data: '2025-10-06',
      nome: 'João Silva',
      cpf: '123.456.789-00',
      endereco: 'Rua A',
      bairro: 'Centro',
      cidade: 'Pinhais',
      uf: 'PR',
      cep: '83320-000',
      email: 'joao@email.com',
      fone1: '(41) 99999-9999',
      fone2: '(41) 98888-8888'
    }
  ];

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
    row.insertCell(11).textContent = reg.fone1;
    row.insertCell(12).textContent = reg.fone2;
    row.insertCell(13).innerHTML = `
      <div class="action-icons">
        <button class="remove-btn" title="Editar">✏️</button>
        <button class="remove-btn" title="Excluir" onclick="this.closest('tr').remove()">🗑️</button>
      </div>
    `;
  });
});
