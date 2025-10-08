document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.tab-link');
        const iframe = document.getElementById('content-frame');

        const lastHref = localStorage.getItem('abaAtiva');
        if (lastHref) {
          const lastLink = Array.from(links).find(link => link.getAttribute('href') === lastHref);
          if (lastLink) {
            links.forEach(l => l.classList.remove('active'));
            lastLink.classList.add('active');
            iframe.setAttribute('src', lastHref);
          }
        }

        links.forEach(link => {
          link.addEventListener('click', e => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const href = link.getAttribute('href');
            iframe.setAttribute('src', href);
            localStorage.setItem('abaAtiva', href);
          });
        });

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
