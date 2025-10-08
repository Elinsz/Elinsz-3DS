document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tab-link');
  const iframe = document.getElementById('content-frame');

  // Restaura aba ativa do localStorage
  const lastHref = localStorage.getItem('abaAtiva');
  if (lastHref) {
    const lastLink = Array.from(links).find(link => link.getAttribute('href') === lastHref);
    if (lastLink) {
      links.forEach(l => l.classList.remove('active'));
      lastLink.classList.add('active');
      iframe.setAttribute('src', lastHref);
    }
  }

  // Evento de clique nas abas
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Atualiza visual
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Atualiza iframe
      const href = link.getAttribute('href');
      iframe.setAttribute('src', href);

      // Salva aba ativa
      localStorage.setItem('abaAtiva', href);
    });
  });

  // Ajusta altura do iframe dinamicamente (se permitido)
  iframe.addEventListener('load', () => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const altura = iframeDoc.body.scrollHeight;
      iframe.style.height = altura + 'px';
    } catch (err) {
      console.warn('Não foi possível ajustar a altura do iframe:', err);
    }
  });
});
