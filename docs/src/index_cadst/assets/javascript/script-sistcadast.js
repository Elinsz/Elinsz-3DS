document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.tab-link');
  const iframe = document.getElementById('content-frame');

        document.addEventListener("DOMContentLoaded", function () {
            // Aguarda 100 milissegundos para atualizar o iframe
            setTimeout(function () {
                const iframe = document.getElementById("content-frame");
                if (iframe) {
                    // Atualiza o iframe recarregando a mesma URL
                    iframe.src = iframe.src;
                }
            }, 3); // 3 milissegundos (ajuste conforme necessário)
        });

  // Define os caminhos das páginas
    // const pages = {
    //   form: 'index-form.html',
    //   regist: 'index-regist.html'
    // };

  // Carrega a página inicial
    // iframe.src = pages.form;

    // links.forEach(link => {
    //   link.addEventListener('click', () => {
    //     // Atualiza visual
    //     links.forEach(l => l.classList.remove('active'));
    //     link.classList.add('active');

    //     // Atualiza conteúdo do iframe
    //     const pageKey = link.getAttribute('data-page');
    //     iframe.src = pages[pageKey];
    //   });
    // });

});
