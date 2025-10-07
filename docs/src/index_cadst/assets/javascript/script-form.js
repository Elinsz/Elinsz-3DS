document.addEventListener('DOMContentLoaded', () => {
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

  // Botões
  document.getElementById('add-btn').addEventListener('click', () => {
    alert('Cadastro realizado com sucesso!');
    document.querySelectorAll('.input-text').forEach(input => input.value = '');
    document.getElementById('add-btn').classList.add('active-btn');
    document.getElementById('update-btn').classList.remove('active-btn');
  });

  document.getElementById('update-btn').addEventListener('click', () => {
    alert('Cadastro atualizado com sucesso!');
    document.querySelectorAll('.input-text').forEach(input => input.value = '');
    document.getElementById('update-btn').classList.add('active-btn');
    document.getElementById('add-btn').classList.remove('active-btn');
  });
});
