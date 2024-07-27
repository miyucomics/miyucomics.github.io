import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 15

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x181825, 1)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const geometry = new THREE.CylinderGeometry(5, 5, 0.5, 128)
const material = new THREE.MeshStandardMaterial({ color: 0xcdd6f4 })
scene.add(new THREE.Mesh(geometry, material))

scene.add(new THREE.AmbientLight(0x404040))

function addLight (x, y, z) {
    const light = new THREE.PointLight(0xffffff, 100, 100)
    light.position.set(x, y, z)
    scene.add(light)
}

addLight(25, 0, 0)
addLight(-25, 0, 0)
addLight(0, 25, 0)
addLight(0, -25, 0)
addLight(0, 0, 25)
addLight(0, 0, -25)

function animate() {
	controls.update()
    renderer.render(scene, camera)
}
