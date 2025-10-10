document.addEventListener('DOMContentLoaded', () => {
  // Máscaras de entrada
  const formatInput = (id, formatFn) => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
      let v = input.value.replace(/\D/g, '');
      input.value = formatFn(v);
    });
  };

  formatInput('cpf', v => {
    return v.length <= 11
      ? v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      : v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  });

  formatInput('cep', v => v.replace(/(\d{5})(\d{3})/, '$1-$2'));
  formatInput('celular', v => v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'));
  formatInput('fone', v => v.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'));

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

  // Preencher formulário se estiver editando
  const indiceEdicao = localStorage.getItem('registroEditando');
  const addBtn = document.getElementById('add-btn');
  const updateBtn = document.getElementById('update-btn');

  if (indiceEdicao !== null) {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    const dados = registros[indiceEdicao];

    if (dados) {
      Object.keys(dados).forEach(id => {
        const campo = document.getElementById(id);
        if (campo) campo.value = dados[id];
      });

      addBtn.style.display = 'inline-block';
      updateBtn.style.display = 'inline-block';
      updateBtn.classList.add('active-btn');
    }
  } else {
    updateBtn.style.display = 'inline-block';
    updateBtn.classList.remove('active-btn');
  }

  // Botão Cadastrar
  addBtn.addEventListener('click', () => {
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
    updateBtn.classList.remove('active-btn');
  });

  // Botão Atualizar
  updateBtn.addEventListener('click', () => {
    const campos = [
      'codigo', 'nome', 'email', 'cpf', 'celular', 'fone',
      'data', 'endereco', 'bairro', 'cep', 'cidade', 'uf'
    ];

    const dadosAtualizados = {};
    campos.forEach(id => {
      dadosAtualizados[id] = document.getElementById(id).value.trim();
    });

    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    const indice = parseInt(localStorage.getItem('registroEditando'), 10);

    if (!isNaN(indice) && registros[indice]) {
      registros[indice] = dadosAtualizados;
      localStorage.setItem('registros', JSON.stringify(registros));
      localStorage.removeItem('registroEditando');
      alert('Cadastro atualizado com sucesso!');
      limparCampos();
      updateBtn.classList.remove('active-btn');
    } else {
      alert('Erro ao atualizar registro.');
    }
  });

  function limparCampos() {
    document.querySelectorAll('.input-text').forEach(input => input.value = '');
  }
});
