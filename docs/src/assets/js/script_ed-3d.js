document.addEventListener('DOMContentLoaded', function () {
  const openLeft = document.getElementById('open-left');
  const openRight = document.getElementById('open-right');
  const closeLeft = document.getElementById('close-left');
  const closeRight = document.getElementById('close-right');
  const leftPanel = document.querySelector('.panel-left');
  const rightPanel = document.querySelector('.panel-right');

  openLeft.addEventListener('click', () => {
    leftPanel.classList.add('expanded');
    openLeft.style.display = 'none';
  });

  openRight.addEventListener('click', () => {
    rightPanel.classList.add('expanded');
    openRight.style.display = 'none';
  });

  closeLeft.addEventListener('click', () => {
    leftPanel.classList.remove('expanded');
    openLeft.style.display = 'block';
  });

  closeRight.addEventListener('click', () => {
    rightPanel.classList.remove('expanded');
    openRight.style.display = 'block';
  });

  const dropdowns = document.querySelectorAll('.dropdown-btn');
  dropdowns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      content.classList.toggle('show');
    });
  });
});
