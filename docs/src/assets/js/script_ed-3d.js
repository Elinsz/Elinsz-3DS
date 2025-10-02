document.addEventListener('DOMContentLoaded', function () {
  // Dropdown funcionalidade
  const dropdowns = document.querySelectorAll('.dropdown-btn');
  dropdowns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      content.classList.toggle('show');
    });
  });

  // Painéis laterais
  const leftToggle = document.querySelector('.left-toggle');
  const rightToggle = document.querySelector('.right-toggle');
  const leftPanel = document.querySelector('.panel-left');
  const rightPanel = document.querySelector('.panel-right');

  leftToggle.addEventListener('click', () => {
    leftPanel.classList.toggle('expanded');
  });

  rightToggle.addEventListener('click', () => {
    rightPanel.classList.toggle('expanded');
  });
});
