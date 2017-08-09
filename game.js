var __main = function () {

  var pad = Pad()
  var game = Gua()
  var ball = Ball()
  var wall = new Array()
  for (var i = 0; i < 15; i++) {
    wall.push(Block(100,i * 20))
  }
  game.regest('a',pad.moveL)
  game.regest('d', function () {
    pad.moveR()
  })
  game.regest('f', function () {
    ball.fire()
  })
  game.update = function () {
    for (var i = 0; i < wall.length; i++) {
      if (wall[i].alive) {
        game.testHit(wall[i],ball)
      }
    }
    game.testHit( ball, pad)
    ball.move()
  }
  game.draw = function () {
    for (var i = 0; i < wall.length; i++) {
      if (wall[i].alive) {
        game.drawObj(wall[i])
      }
    }

    game.drawObj(pad)
    game.drawObj(ball)
  }
  log(pad)
}


__main()
