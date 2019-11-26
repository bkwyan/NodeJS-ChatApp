const socket = io();

socket.on('message', (message) => {
    console.log(message)
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
    // Prevent page refresh
    e.preventDefault()

    const message = e.target.elements.message.value;

    socket.emit('sendMessage', message);
});