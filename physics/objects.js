class Box {
  constructor(x, y, width, height, colour, options) {
    this.size = {
      width: width,
      height: height,
    };
    this.colour = colour;
    this.options = options;
    this.body = Matter.Bodies.rectangle(x, y, width, height, this.options);
  }

  draw() {
    ctx.fillStyle = this.colour;
    ctx.shadowColor = this.colour;
    ctx.shadowBlur = bodySettings.glowIntensity;

    ctx.save();
    ctx.translate(this.body.position.x, this.body.position.y);
    ctx.rotate(this.body.angle);
    ctx.fillRect(
      -this.size.width / 2,
      -this.size.height / 2,
      this.size.width,
      this.size.height,
    );
    ctx.restore();
  }
}

class Circle {
  constructor(x, y, radius, colour, options) {
    this.radius = radius;
    this.colour = colour;
    this.options = options;
    this.body = Matter.Bodies.circle(x, y, radius, this.options);
  }

  draw() {
    ctx.fillStyle = this.colour;
    ctx.shadowColor = this.colour;
    ctx.shadowBlur = bodySettings.glowIntensity;

    ctx.beginPath();
    ctx.arc(this.body.position.x, this.body.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
