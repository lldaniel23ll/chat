const socket = io();

let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', () => {
     socket.emit('chat:message', {
        username: username.value,
         message: message.value
     });
//     console.log(username.value, message.value);
});

message.addEventListener('keypress', () => {
    socket.emit('chat:typing', username.value);
});

socket.on('chat:message', (data) => {
    //console.log(data);
    actions.innerHTML = '';
     output.innerHTML += `<p>
     <strong>${data.username}</strong>: ${data.message}
     </p>`
});

socket.on('chat:typing', (data) => {
    actions.innerHTML  = `<p><em>${data} esta escribiendo...</em></p>`
});