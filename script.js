const socket = io();

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = userInput.value;
    if (message.trim() !== "") {
        chatBox.innerHTML += `<div class="user">${message}</div>`;
        socket.emit('sendMessage', message);
        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
});

socket.on('receiveMessage', (message) => {
    chatBox.innerHTML += `<div class="ai">${message}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
});
