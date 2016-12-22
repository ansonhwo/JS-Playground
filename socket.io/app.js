const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

io.on('connection', (socket) => {
  let roomno = 1

  // Increment room # by one if there are 2 users present in a room
  if (io.nsps['/'].adapter.rooms['room-'+roomno] && io.nsps['/'].adapter.rooms['room-'+roomno].length > 1) roomno++
  socket.join('room-' + roomno)
  console.log(io.nsps['/'].adapter.rooms)

  // Send this event to everyone in the room
  io.sockets.in('room-'+roomno).emit('connectToRoom', 'You are in room no. ' + roomno)

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })

})

http.listen(3000, () => { console.log('Listening on 3000') })
