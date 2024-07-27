import * as THREE from "three"
import { TrackballControls } from "three/addons/controls/TrackballControls.js"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 15

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x11111b)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

const controls = new TrackballControls(camera, renderer.domElement)
controls.rotateSpeed = 25

function addCylinder(x, y, z, radius, height, color) {
    const geometry = new THREE.CylinderGeometry(radius, radius, height, 128)
    const material = new THREE.MeshStandardMaterial({ color: color })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(x, y, z)
    scene.add(mesh)
}

function addLight (x, y, z) {
    const light = new THREE.PointLight(0xffffff, 100, 100)
    light.position.set(x, y, z)
    scene.add(light)
}

addLight(10, 0, 0)
addLight(-10, 0, 0)
addLight(0, 10, 0)
addLight(0, -10, 0)
addLight(0, 0, 10)
addLight(0, 0, -10)

const bodyRadius = 5
const bodyThickness = 0.4

addCylinder(0, bodyThickness / 4, 0, bodyRadius, bodyThickness / 2, 0xcdd6f4)
addCylinder(0, -bodyThickness / 4, 0, bodyRadius, bodyThickness / 2, 0x1e1e2e)

function animate() {
	controls.update()
    renderer.render(scene, camera)
}
