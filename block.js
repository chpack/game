var Block = function (px, py) {
  var image = imageFromPath("block.png")
  var o = {
    image:  image,
    x: px,
    y: py,
    alive: true,
  }
  o.hit = function () {
    o.alive = false
  }
  return o
}
