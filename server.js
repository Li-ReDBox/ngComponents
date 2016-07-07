// Serve files with vanilla node.js http server
function serve(root, port) {
  var http = require('http')
  var serveStatic = require('serve-static')
  var finalhandler = require('finalhandler')

  // Serve up all static content from root
  var serveContent = serveStatic(root)

  // Create server
  var server = http.createServer(function(req, res){
    var done = finalhandler(req, res)
    serveContent(req, res, done)
  })

  // Listen
  server.listen(port)
  console.log('Serve content of my Downloads at http://%s:%s', server.address().address, port)
}

serve('.', 8080)
