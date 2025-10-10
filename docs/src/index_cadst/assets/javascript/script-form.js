document.addEventListener('DOMContentLoaded', () => {
  // Máscaras de entrada
  const formatInput = (id, pattern) => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
      let v = input.value.replace(/\D/g, '');
      input.value = v.replace(pattern.regex, pattern.format);
    });
  };

  formatInput('cpf', {
    regex: v => v.length <= 11
      ? /(\d{3})(\d{3})(\d{3})(\d{2})/
      : /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    format: v => v.length <= 11
      ? v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      : v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  });

  formatInput('cep', {
    regex: /(\d{5})(\d{3})/,
    format: '$1-$2'
  });

  formatInput('celular', {
    regex: /(\d{2})(\d{5})(\d{4})/,
    format: '($1) $2-$3'
  });

  formatInput('fone', {
    regex: /(\d{2})(\d{4})(\d{4})/,
    format: '($1) $2-$3'
  });

  // Data com barra automática
  const dataInput = document.getElementById('data');
  dataInput.addEventListener('input', () => {
    let v = dataInput.value.replace(/\D/g, '');
    if (v.length >= 2) v = v.replace(/^(\d{2})/, '$1/');
    if (v.length >= 4) v = v.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
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
  document.getElementById('add-btn').addEventListener('click', () => {
    const campos = [
      'codigo', 'nome', 'email', 'cpf', 'celular', 'fone',
      'data', 'endereco', 'bairro', 'cep', 'cidade', 'uf'
    ];

    const dados = {};
    let valido = true;

    campos.forEach(id => {
      const valor = document.getElementById(id).value.trim();
      dados[id] = valor;
      if (!valor) valido = false;
    });

    if (!valido) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(dados);
    localStorage.setItem('registros', JSON.stringify(registros));

    alert('Cadastro realizado com sucesso!');
    limparCampos();
  });

  // Botão Atualizar
  document.getElementById('update-btn').addEventListener('click', () => {
    alert('Cadastro atualizado com sucesso!');
    limparCampos();
  });

  function limparCampos() {
    document.querySelectorAll('.input-text').forEach(input => input.value = '');
  }
});
