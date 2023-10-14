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

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { randFloat, randInt } from 'three/src/math/MathUtils';

const rand2DPtsBounded = (n: number, rmin: number, rmax: number, lb: THREE.Vector2, ur: THREE.Vector2, attempts=10) => {
    const pts = [new THREE.Vector2(0., 0.)]
    while(pts.length < n){
        const prev = pts[randInt(0, pts.length-1)]
        
        for(let j = 0; j < attempts; j++){
            const angle = randFloat(0, 2*Math.PI)
            const r = randFloat(rmin, rmax)
            const npt = (new THREE.Vector2(r*Math.cos(angle), r*Math.sin(angle))).add(prev)
            const fpts = pts.filter(pt => {
                const d = pt.distanceTo(npt)
                return d < rmin
            })

            if(fpts.length == 0){
                pts.push(npt)
                // TODO: not guaranteed to populate n?
                break;
            }
        }
    }
    return pts
}

export const createScene = (el: HTMLCanvasElement, window: Window & typeof globalThis) => {
	const scene = new Scene();

	const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new WebGLRenderer({ antialias: true, canvas: el, alpha: true });

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enablePan = false;
	// controls.enableRotate = false;
	controls.enableZoom = false; 
	controls.maxPolarAngle = 0.49 * Math.PI;
	controls.minPolarAngle = 0.39 * Math.PI;
	controls.autoRotate = true;
	controls.autoRotateSpeed = 0.25;
    controls.enableDamping = true;
	controls.update();

	camera.position.z = 5;
	camera.position.y = 2;
	camera.lookAt(new Vector3(0, 0, 0));

    const MAX_WORLD_RAD = 15
    const sttimer = new Date()
    const pts = rand2DPtsBounded(100, 1.5, 3, new THREE.Vector2(-5, -5), new THREE.Vector2(5, 5)).map(pt => new THREE.Vector3(pt.x, 0, pt.y))
    console.log((new Date().getMilliseconds() - sttimer.getMilliseconds()), "ms")
    pts.map(pt => {
        if(pt.distanceTo(new THREE.Vector3(0, 0, 0)) > MAX_WORLD_RAD) return;

        const loader = new GLTFLoader();
        const paths = ['assets/detail_forestA.gltf.glb', 'assets/detail_forestB.gltf.glb', 'assets/forest.gltf.glb', 'assets/house.gltf.glb'];
        const path = paths[THREE.MathUtils.randInt(0, paths.length-1)]
		loader.loadAsync(path).then(
			(gltf) => {
				const tree = new THREE.Object3D();
				tree.add(gltf.scene);

				tree.position.set(pt.x, pt.y, pt.z)
				scene.add(tree);
			},
			(error) => {
				console.error(error);
			}
		);
    })

	const plane = new Mesh(
		new THREE.CircleGeometry(MAX_WORLD_RAD, 30),
		new MeshStandardMaterial({
			color: 0x572d03,
			metalness: 0.01,
			roughness: 0.9,
			side: THREE.DoubleSide
		})
	);
	plane.position.y = 0;
	plane.rotation.setFromVector3(new Vector3(THREE.MathUtils.degToRad(-90), 0, 0));

	scene.add(plane);

	const directionalLight = new DirectionalLight(0x9090aa);
	directionalLight.position.set(-10, 10, -10).normalize();
	scene.add(directionalLight);

	const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
	scene.add(ambientLight);

	const hemisphereLight = new HemisphereLight(0xffffff, 0x444444);
	hemisphereLight.position.set(1, 1, 1);
	scene.add(hemisphereLight);

	const animate = () => {
		requestAnimationFrame(animate);

		controls.update();

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
