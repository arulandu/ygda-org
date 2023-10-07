import {
	BoxGeometry,
	DirectionalLight,
	HemisphereLight,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	Plane,
	PlaneGeometry,
	Scene,
	Vector3,
	WebGLRenderer
} from 'three';
import * as THREE from 'three';

export const createScene = (el: HTMLCanvasElement, window: Window & typeof globalThis) => {
	const scene = new Scene();

	const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 5;
    camera.position.y = 0
    camera.lookAt(new Vector3(0, 0, 0))

	const geometry = new BoxGeometry();
	const material = new MeshStandardMaterial({
		color: 0x9be6f7,
		metalness: 0.13,
        roughness: 0.08
	});
	const cube = new Mesh(geometry, material);
    cube.position.y = -1
	scene.add(cube);

    const planeGeometry = new PlaneGeometry(30, 10);
    const planeMaterial = new MeshStandardMaterial({
        color: 0x9be6f7,
        metalness: 0.01,
        roughness: 0.1
    })
    const plane = new Mesh(planeGeometry, planeMaterial)
    plane.position.y = -2
    plane.rotation.setFromVector3(new Vector3(THREE.MathUtils.degToRad(-90), 0, 0))
    scene.add(plane)

	const directionalLight = new DirectionalLight(0x9090aa);
	directionalLight.position.set(-10, 10, -10).normalize();
	scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight)

	const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
	hemisphereLight.position.set(1, 1, 1);
	scene.add(hemisphereLight);

	const renderer = new WebGLRenderer({ antialias: true, canvas: el, alpha: true});

	const animate = () => {
		requestAnimationFrame(animate);
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		renderer.render(scene, camera);
	};

	const resize = () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	};

	resize();
	animate();

	window.addEventListener('resize', resize);
};
