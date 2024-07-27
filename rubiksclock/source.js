import * as THREE from "three"
import { TrackballControls } from "three/addons/controls/TrackballControls.js"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.y = 10
camera.position.z = 15

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x11111b)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

const controls = new TrackballControls(camera, renderer.domElement)
controls.rotateSpeed = 5
controls.noPan = true

scene.add(new THREE.AmbientLight(0xffffff))
scene.add(new THREE.AmbientLight(0xffffff))

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

addLight(0, 10, 0)
addLight(0, -10, 0)
addLight(7.5, 7.5, 0)
addLight(-7.5, -7.5, 0)

const bodyRadius = 5
const bodyThickness = 0.75
addCylinder(0, bodyThickness / 4, 0, bodyRadius, bodyThickness / 2, 0xf9e2af)
addCylinder(0, -bodyThickness / 4, 0, bodyRadius, bodyThickness / 2, 0x89b4fa)

const pinRadius = 0.2
const pinDistance = 1.5
const pinHeight = 2
class Pin {
    constructor(x, y) {
        this.x = x
        this.y = y
        const geometry = new THREE.CylinderGeometry(pinRadius, pinRadius, pinHeight, 128)
        const material = new THREE.MeshStandardMaterial({ color: 0xa6e3a1 })
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.position.set(x, 0, y)
        scene.add(this.mesh)
    }
}
new Pin(-pinDistance, pinDistance) 
new Pin(-pinDistance, -pinDistance) 
new Pin(pinDistance, -pinDistance) 
new Pin(pinDistance, pinDistance) 

const clockRadius = 1
const clockHeight = 1
const clockSpacing = 2.5
addCylinder(-clockSpacing, 0, -clockSpacing, clockRadius, clockHeight, 0xcba6f7)
addCylinder(0, 0, -clockSpacing, clockRadius, clockHeight, 0xcba6f7)
addCylinder(clockSpacing, 0, -clockSpacing, clockRadius, clockHeight, 0xcba6f7)
addCylinder(-clockSpacing, 0, 0, clockRadius, clockHeight, 0xcba6f7)
addCylinder(0, 0, 0, clockRadius, clockHeight, 0xcba6f7)
addCylinder(clockSpacing, 0, 0, clockRadius, clockHeight, 0xcba6f7)
addCylinder(-clockSpacing, 0, clockSpacing, clockRadius, clockHeight, 0xcba6f7)
addCylinder(0, 0, clockSpacing, clockRadius, clockHeight, 0xcba6f7)
addCylinder(clockSpacing, 0, clockSpacing, clockRadius, clockHeight, 0xcba6f7)

const dialPins = {}
const pinStates = {}
const pinChildren = {}

function animate() {
	controls.update()
    renderer.render(scene, camera)
}
