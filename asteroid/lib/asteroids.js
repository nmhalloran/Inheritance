const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;

const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 1400;
canvasEl.height = 700;

const ctx = canvasEl.getContext("2d");

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 15, color: "#00FF00"}
);


mo.draw(ctx);
mo.move(ctx);

const ast = new Asteroid({pos: [200, 100]});
ast.draw(ctx);
ast.move(ctx);

console.log("Webpack is working!");
