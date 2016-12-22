var socket = io()
socket.on('connectToRoom', (data) => {
  document.write(data)
})
