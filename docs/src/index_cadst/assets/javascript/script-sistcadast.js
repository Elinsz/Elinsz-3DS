document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tab-link');
  const iframe = document.getElementById('content-frame');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Remove classe ativa de todos os links
      links.forEach(l => l.classList.remove('active'));

      // Adiciona classe ativa ao link clicado
      link.classList.add('active');

      // Atualiza o src do iframe
      const src = link.getAttribute('data-src');
      iframe.src = src;
    });
  });
});
