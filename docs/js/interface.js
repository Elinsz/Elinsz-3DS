
document.addEventListener('DOMContentLoaded', function () {
  // Dropdown funcionalidade
  const subBtns = document.querySelectorAll('.sub-btn');

  subBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const parentItem = btn.closest('.item');
      const subMenu = btn.nextElementSibling;
      const dropdownIcon = btn.querySelector('.dropdown');
      const navLinks = document.querySelector('.nav-links');

      // Alterna visibilidade do submenu
      if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
      } else {
        subMenu.style.display = 'block';
      }

      // Alterna rotação do ícone
      if (dropdownIcon) {
        dropdownIcon.classList.toggle('rotate');
      }

      // Ajusta scroll se for o último item
      setTimeout(function () {
        const items = document.querySelectorAll('.item');
        if (parentItem === items[items.length - 1]) {
          const offset = parentItem.offsetTop + parentItem.offsetHeight - navLinks.offsetHeight;
          navLinks.scrollTop = offset > 0 ? offset + 25 : 0;
        }
      }, 300);
    });
  });

  // Botões de menu lateral
  const closeBtn = document.querySelector('.close-btn');
  const menuBtn = document.querySelector('.menu-btn');
  const section = document.querySelector('section');
  const iframe = document.querySelector('section iframe');

  if (closeBtn && section) {
    closeBtn.addEventListener('click', function () {
      section.style.marginLeft = '0px';
      if (iframe) iframe.style.marginLeft = '0';
    });
  }

  if (menuBtn && section) {
    menuBtn.addEventListener('click', function () {
      section.style.marginLeft = '0px';
      // if (iframe) iframe.style.marginLeft = '10px'; // opcional
    });
  }

  // Recarregar iframe após delay
  setTimeout(function () {
    const iframe = document.getElementById("meuIframe");
    if (iframe) {
      iframe.src = iframe.src;
    }
  }, 3);
});

