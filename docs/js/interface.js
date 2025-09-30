let scene, camera, renderer, controls;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f4f4);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
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

function loadComponent(name) {
    alert(`Carregando: ${name}`);
    // Aqui você pode integrar loaders de arquivos .glb, .obj, etc.
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

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
