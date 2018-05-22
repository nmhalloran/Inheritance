function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
  that = this;
  window.setTimeout(function() {
    ctx.clearRect(0, 0, 1400, 700);
    that.pos[0] += that.vel[0];
    that.pos[1] += that.vel[1];
    that.draw(ctx);
    that.move(ctx);
  }, 300);
};

module.exports = MovingObject;
