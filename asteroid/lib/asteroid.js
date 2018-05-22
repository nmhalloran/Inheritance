const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

window.Util = Util;
window.MovingObject = MovingObject;


function Asteroid(pos_hash) {
  this.prototype = Object.create(MovingObject.prototype.__proto__);
  this.prototype.constructor = this;
  this.pos = pos_hash.pos;
  this.vel = Util.randomVec(100);
  this.color = "green";
  this.radius = 40;
}

module.exports = Asteroid;
