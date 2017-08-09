var Ball = function () {
  var image = imageFromPath("ball.png")
  var o = {
    image:  image,
    fired: false,
    x: 195,
    y: 380,
    speedX: 3,
    speedY: -3,
  }
  o.fire = function () {
    o.fired = true
  }
  o.move = function () {
    if (o.fired) {
      o.x += o.speedX
      o.y += o.speedY
    }
    o.speedX = o.x  > 390 || o.x < 0?-o.speedX:o.speedX
    o.speedY = o.y < 0?-o.speedY:o.speedY
  }
  o.hit = function (dir) {

    if (dir == 'x') {
      o.speedX *= -1
    } else if (dir == 'y') {
      o.speedY *= -1
    }
  }
  return o
}
