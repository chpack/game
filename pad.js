var Pad = function () {
  var image = imageFromPath("pad.png")
  var o = {
    image:  image,
    x: 175,
    y: 390,
    speed: 3,
  }
  o.moveL = function () {
    o.x -= o.speed
    if (o.x <= 0) {
      o.x = 0
    }
  }
  o.moveR = function () {
    o.x += o.speed
    if (o.x >= 350) {
      o.x = 350
    }
  }
  o.hit = function () {
  }
  return o
}
