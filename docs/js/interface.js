

// Inicializa cena 3D com Three.js
let scene, camera, renderer, controls;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf4f4f4);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(2, 2, 2);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  const grid = new THREE.GridHelper(10, 10);
  scene.add(grid);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Funções de componentes
function loadComponent(name) {
  alert(`Carregando: ${name}`);
}

function addModule() {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x0077be });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

function saveModules() {
  alert("Função de salvar ainda não implementada.");
}

function loadModules() {
  alert("Função de carregar ainda não implementada.");
}

// Dropdown funcionalidade
document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown-btn');

  dropdowns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});

// Responsividade
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();

// document.addEventListener('DOMContentLoaded', function () {
//   // Dropdown funcionalidade
//   const subBtns = document.querySelectorAll('.sub-btn');

//   subBtns.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//       const parentItem = btn.closest('.item');
//       const subMenu = btn.nextElementSibling;
//       const dropdownIcon = btn.querySelector('.dropdown');
//       const navLinks = document.querySelector('.nav-links');

//       // Alterna visibilidade do submenu
//       if (subMenu.style.display === 'block') {
//         subMenu.style.display = 'none';
//       } else {
//         subMenu.style.display = 'block';
//       }

//       // Alterna rotação do ícone
//       if (dropdownIcon) {
//         dropdownIcon.classList.toggle('rotate');
//       }

//       // Ajusta scroll se for o último item
//       setTimeout(function () {
//         const items = document.querySelectorAll('.item');
//         if (parentItem === items[items.length - 1]) {
//           const offset = parentItem.offsetTop + parentItem.offsetHeight - navLinks.offsetHeight;
//           navLinks.scrollTop = offset > 0 ? offset + 25 : 0;
//         }
//       }, 300);
//     });
//   });

//   // Botões de menu lateral
//   const closeBtn = document.querySelector('.close-btn');
//   const menuBtn = document.querySelector('.menu-btn');
//   const section = document.querySelector('section');
//   const iframe = document.querySelector('section iframe');

//   if (closeBtn && section) {
//     closeBtn.addEventListener('click', function () {
//       section.style.marginLeft = '0px';
//       if (iframe) iframe.style.marginLeft = '0';
//     });
//   }

//   if (menuBtn && section) {
//     menuBtn.addEventListener('click', function () {
//       section.style.marginLeft = '0px';
//       // if (iframe) iframe.style.marginLeft = '10px'; // opcional
//     });
//   }

//   // Recarregar iframe após delay
//   setTimeout(function () {
//     const iframe = document.getElementById("meuIframe");
//     if (iframe) {
//       iframe.src = iframe.src;
//     }
//   }, 3);
// });

