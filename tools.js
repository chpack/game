var log = console.log.bind(console)
var imageFromPath = function (path) {
  //load a image
  var img = new Image()
  img.src = path
  return img
}
