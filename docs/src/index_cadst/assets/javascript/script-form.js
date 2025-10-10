document.addEventListener('DOMContentLoaded', () => {
  // Máscara CPF/CNPJ
  const cpfInput = document.getElementById('cpf');
  cpfInput.addEventListener('input', () => {
    let v = cpfInput.value.replace(/\D/g, '');
    cpfInput.value = v.length <= 11
      ? v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      : v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  });

  // Máscara CEP
  const cepInput = document.getElementById('cep');
  cepInput.addEventListener('input', () => {
    let v = cepInput.value.replace(/\D/g, '');
    cepInput.value = v.replace(/(\d{5})(\d{3})/, '$1-$2');
  });

  // Máscara Celular
  const celularInput = document.getElementById('celular');
  celularInput.addEventListener('input', () => {
    let v = celularInput.value.replace(/\D/g, '');
    celularInput.value = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  });

  // Máscara Telefone fixo
  const foneInput = document.getElementById('fone');
  foneInput.addEventListener('input', () => {
    let v = foneInput.value.replace(/\D/g, '');
    foneInput.value = v.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  });

  // Validação de data
  const dataInput = document.getElementById('data');
  dataInput.addEventListener('input', () => {
    let v = dataInput.value.replace(/\D/g, '');
    if (v.length >= 2) v = v.replace(/^(\d{2})/, '$1/');
    if (v.length >= 5) v = v.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
    dataInput.value = v;
  });

  dataInput.addEventListener('blur', () => {
    const regex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;
    if (dataInput.value && !regex.test(dataInput.value)) {
      alert('Data inválida. Use o formato dd/mm/aaaa.');
      dataInput.value = '';
    }
  });

  // Calendário flutuante
  window.abrirCalendario = function (id) {
    const input = document.getElementById(id);
    const picker = document.createElement('input');
    picker.type = 'date';
    picker.style.position = 'absolute';
    picker.style.zIndex = 9999;
    picker.style.left = input.getBoundingClientRect().left + 'px';
    picker.style.top = input.getBoundingClientRect().bottom + window.scrollY + 'px';
    picker.style.fontSize = '14px';

    picker.onchange = () => {
      const [ano, mes, dia] = picker.value.split('-');
      input.value = `${dia}/${mes}/${ano}`;
      document.body.removeChild(picker);
    };

    picker.onblur = () => {
      if (document.body.contains(picker)) {
        document.body.removeChild(picker);
      }
    };

    document.body.appendChild(picker);
    picker.focus();
  };

  // Botão Cadastrar
  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', () => {
    const celular = celularInput.value;
    const fone = foneInput.value;
    const data = dataInput.value;

    if (celular.length < 15 || fone.length < 14) {
      alert('Preencha os campos de telefone corretamente.');
      return;
    }

    if (data.length !== 10) {
      alert('Preencha a data corretamente.');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    limparCampos();
    addBtn.classList.add('active-btn');
    document.getElementById('update-btn').classList.remove('active-btn');
  });

  // Botão Atualizar
  const updateBtn = document.getElementById('update-btn');
  updateBtn.addEventListener('click', () => {
    alert('Cadastro atualizado com sucesso!');
    limparCampos();
    updateBtn.classList.add('active-btn');
    addBtn.classList.remove('active-btn');
  });

  // Função para limpar os campos
  function limparCampos() {
    document.querySelectorAll('.input-text').forEach(input => input.value = '');
  }
});
