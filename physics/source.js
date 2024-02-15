let bodies = []
let leftStack = Matter.Composites.stack(canvas.width / 2 - 450, canvas.height - 150, 5, 5, 0, 0, (x, y) => {
  let body = new Box(x, y, 30, 30, possible_colours[Math.floor(Math.random() * possible_colours.length)], {})
  bodies.push(body)
  return body.body
})
let rightStack = Matter.Composites.stack(canvas.width / 2 + 300, canvas.height - 150, 5, 5, 0, 0, (x, y) => {
  let body = new Box(x, y, 30, 30, possible_colours[Math.floor(Math.random() * possible_colours.length)], {})
  bodies.push(body)
  return body.body
})
let middleStack = Matter.Composites.stack(canvas.width / 2 - 225, canvas.height - 450, 15, 15, 0, 0, (x, y) => {
  let body = new Box(x, y, 30, 30, possible_colours[Math.floor(Math.random() * possible_colours.length)], {})
  bodies.push(body)
  return body.body
})

Matter.World.add(world, [
  leftStack,
  rightStack,
  middleStack
])

const animate = () => {
  window.requestAnimationFrame(animate)

  ctx.fillStyle = "#1e1e2e"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  world.gravity.scale = simulationSettings.gravity.strength
  world.gravity.x = simulationSettings.gravity.x
  world.gravity.y = simulationSettings.gravity.y

  bodies.forEach((body) => {
    body.body.friction = bodySettings.friction.normal
    body.body.frictionAir = bodySettings.friction.air
    body.body.frictionStatic = bodySettings.friction.static
    body.body.restitution = bodySettings.restitution
  })

  Matter.Engine.update(engine, 16.6666)

  bodies.forEach((body) => body.draw())
}

animate()
