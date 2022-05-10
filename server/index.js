const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  console.log("socketConnect",);
  try {
    socket.on('message', ({ name, message }) => {
      console.log("socketConnect_message",message);
      io.emit('message', { name, message })
    })
  } catch (error) {
    console.log(error)
  }
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})
