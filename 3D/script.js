let scene, camera, renderer, sphere, sphery;

function all() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1100);
    camera.position.z = 6;
    //camera.rotation.x = Math.PI / 2;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let geomet = new THREE.SphereGeometry(4, 26, 26, );
    let appar = new THREE.TextureLoader().load('images/monde.gif');
    let material = new THREE.MeshStandardMaterial({ map: appar });
    sphere = new THREE.Mesh(geomet, material);
    sphere.position.set(2, 1, -5);
    scene.add(sphere);

    let geomoon = new THREE.SphereGeometry(0.9, 36, 36);
    let apparence = new THREE.TextureLoader().load('images/moon.gif');
    let materiel = new THREE.MeshStandardMaterial({ map: apparence });
    sphery = new THREE.Mesh(geomoon, materiel);
    sphery.position.set(-3, -0.5, 0);
    scene.add(sphery);
}

function animate() {

    sphere.rotation.y += 0.05;
    sphery.rotation.y += 0.10;
    //sphere.rotation.x += 0.01;
    //sphery.rotation.x += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

all();
animate();

function onVindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerHeight, window.innerHeight);
}
window.addEventListener('resize', onVindowResize, false);
renderer.setClearColor("#30303F");
let Light = new THREE.PointLight("#ffffff", 5, 70);
scene.add(Light);