const path = require('path')
const http = require('http')
const express = require ('express')
const socketio = require('socket.io')
const { generateMessage } = require ('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory));

io.on('connection', (socket) => {
    console.log('New WebSocket Connection')

    socket.emit('message', generateMessage('Welcome!'))
    socket.broadcast.emit('message', generateMessage('A new user has joined!'))

    socket.on('sendMessage', (message, callback) => {
        io.emit('message', generatedMessage(message))
        callback()
    });

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left!'))
    })
});

server.listen(PORT, ()=> {
    console.log(`Server is up on port ${PORT}`)
});
