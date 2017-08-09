var Gua = function () {
  var g = {
    keys: {},
    action: {},
    canvas: document.querySelector("#can"),
    context: document.querySelector("#can").getContext("2d"),
    fps: 1000/60,
  }
  g.update = function () {}
  g.draw = function () {}
  g.drawObj = function (obj) {
    g.context.drawImage(obj.image, obj.x, obj.y)
  }
  //event
  window.addEventListener('keydown', function (event) {
    g.keys[event.key] = true
  })
  window.addEventListener('keyup', function (event) {
    g.keys[event.key] = false
  })
  g.regest = function (key, action) {
    g.action[key] = action
  }
  g.testHit = function ( a, b) {
      var x = (a.x + a.image.width  <= b.x || b.x + b.image.width  <= a.x)
      var y = (a.y + a.image.height <= b.y || b.y + b.image.height <= a.y)
      if (! (x || y)) {
        log(x,y)
        a.hit(!x?'y':'x')
        b.hit(!x?'x':'y')
      }
 }
  //timer
  setInterval(function () {
    //event
    var actions = Object.keys(g.action)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keys[key]) {
        g.action[key]()
      }
    }
    g.update()
    g.context.clearRect( 0, 0,g.canvas.width, g.canvas.height)
    g.draw()
  },g.fps)
  return g
}
