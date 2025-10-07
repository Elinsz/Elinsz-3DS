document.addEventListener('DOMContentLoaded', () => {
  // CPF/CNPJ
  document.getElementById('cpf').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '');
    if (v.length <= 11) {
      this.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      this.value = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  });

  // CEP
  document.getElementById('cep').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '');
    this.value = v.replace(/(\d{5})(\d{3})/, '$1-$2');
  });

  // Celular
  document.getElementById('celular').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '');
    this.value = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  });

  // Fone fixo
  document.getElementById('fone').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '');
    this.value = v.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  });

  // Validação de data dd/mm/aaaa
  document.getElementById('data').addEventListener('blur', function () {
    const regex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;
    if (this.value && !regex.test(this.value)) {
      alert('Data inválida. Use o formato dd/mm/aaaa.');
      this.value = '';
    }
  });

  // Abrir calendário invisível
  function abrirCalendario(id) {
    const input = document.getElementById(id);

    // Cria seletor de data visível
    const picker = document.createElement('input');
    picker.type = 'date';
    picker.style.position = 'absolute';
    picker.style.zIndex = 9999;
    picker.style.left = input.getBoundingClientRect().left + 'px';
    picker.style.top = input.getBoundingClientRect().bottom + window.scrollY + 'px';
    picker.style.fontSize = '14px';

    // Quando o usuário escolhe a data
    picker.onchange = () => {
      const [ano, mes, dia] = picker.value.split('-');
      input.value = `${dia}/${mes}/${ano}`;
      document.body.removeChild(picker);
    };

    // Remove se perder o foco
    picker.onblur = () => {
      if (document.body.contains(picker)) {
        document.body.removeChild(picker);
      }
    };

    document.body.appendChild(picker);
    picker.focus();
  }

  // Botão Cadastrar
  document.getElementById('add-btn').addEventListener('click', () => {
    const celular = document.getElementById('celular').value;
    const fone = document.getElementById('fone').value;
    const data = document.getElementById('data').value;

    if (celular.length < 15 || fone.length < 14) {
      alert('Preencha os campos de telefone corretamente.');
      return;
    }

    if (data.length !== 10) {
      alert('Preencha a data corretamente.');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    document.querySelectorAll('.input-text').forEach(input => input.value = '');
    document.getElementById('add-btn').classList.add('active-btn');
    document.getElementById('update-btn').classList.remove('active-btn');
  });

  // Botão Atualizar
  document.getElementById('update-btn').addEventListener('click', () => {
    alert('Cadastro atualizado com sucesso!');
    document.querySelectorAll('.input-text').forEach(input => input.value = '');
    document.getElementById('update-btn').classList.add('active-btn');
    document.getElementById('add-btn').classList.remove('active-btn');
  });
});
