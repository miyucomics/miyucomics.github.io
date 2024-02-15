const possible_colours = [
  "#f5e0dc",
  "#f2cdcd",
  "#f5c2e7",
  "#cba6f7",
  "#f38ba8",
  "#eba0ac",
  "#fab387",
  "#f9e2af",
  "#a6e3a1",
  "#94e2d5",
  "#89dceb",
  "#74c7ec",
  "#89b4fa",
  "#b4befe",
];
const wall_thickness = 1000;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let engine = Matter.Engine.create();
let world = engine.world;

let drag_control = Matter.MouseConstraint.create(engine, { mouse: Matter.Mouse.create(canvas), });
Matter.World.add(world, [drag_control]);

Matter.World.add(world, [
  new Box( canvas.width / 2, -wall_thickness / 2, canvas.width + wall_thickness, wall_thickness, "rgba(0, 0, 0, 0)", { isStatic: true },).body,
  new Box( canvas.width / 2, canvas.height + wall_thickness / 2, canvas.width + wall_thickness, wall_thickness, "rgba(0, 0, 0, 0)", { isStatic: true },).body,
  new Box( -wall_thickness / 2, canvas.height / 2, wall_thickness, canvas.height + wall_thickness, "rgba(0, 0, 0, 0)", { isStatic: true },).body,
  new Box( canvas.width + wall_thickness / 2, canvas.height / 2, wall_thickness, canvas.height + wall_thickness, "rgba(0, 0, 0, 0)", { isStatic: true },).body,
]);

let mouseDown = 0;
document.body.onmousedown = () => { mouseDown = 1 }
document.body.onmouseup = () => { mouseDown = 0 }
