document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tab-link');
  const iframe = document.getElementById('content-frame');

  // Define os caminhos das páginas
  const pages = {
    form: 'index-form.html',
    regist: 'index-regist.html'
  };

  // Carrega a página inicial
  iframe.src = pages.form;

  links.forEach(link => {
    link.addEventListener('click', () => {
      // Atualiza visual
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Atualiza conteúdo do iframe
      const pageKey = link.getAttribute('data-page');
      iframe.src = pages[pageKey];
    });
  });
});
