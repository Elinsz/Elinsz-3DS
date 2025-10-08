document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tab-link');
  const iframe = document.getElementById('content-frame');

  // Restaura aba ativa
  const lastHref = localStorage.getItem('abaAtiva');
  if (lastHref && iframe) {
    iframe.src = lastHref;
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === lastHref);
    });
  }

  // Intercepta cliques e força troca no iframe
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // impede navegação padrão

      const href = link.getAttribute('href');
      if (iframe) {
        iframe.setAttribute('src', href);
      }

      // Atualiza visual
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Salva aba ativa
      localStorage.setItem('abaAtiva', href);
    });
  });
});
