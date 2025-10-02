document.addEventListener('DOMContentLoaded', function () {
  // Botões de abrir
  const openLeft = document.getElementById('open-left');
  const openRight = document.getElementById('open-right');

  // Botões de fechar
  const closeLeft = document.getElementById('close-left');
  const closeRight = document.getElementById('close-right');

  // Painéis
  const leftPanel = document.querySelector('.panel-left');
  const rightPanel = document.querySelector('.panel-right');

  // Abrir painel esquerdo
  openLeft.addEventListener('click', () => {
    leftPanel.classList.add('expanded');
    openLeft.style.display = 'none';
  });

  // Abrir painel direito
  openRight.addEventListener('click', () => {
    rightPanel.classList.add('expanded');
    openRight.style.display = 'none';
  });

  // Fechar painel esquerdo
  closeLeft.addEventListener('click', () => {
    leftPanel.classList.remove('expanded');
    openLeft.style.display = 'block';
  });

  // Fechar painel direito
  closeRight.addEventListener('click', () => {
    rightPanel.classList.remove('expanded');
    openRight.style.display = 'block';
  });

  // Dropdown funcionalidade
  const dropdowns = document.querySelectorAll('.dropdown-btn');
  dropdowns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      content.classList.toggle('show');
    });
  });
});
