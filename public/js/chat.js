document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.chatForm');
    const messageInput = document.getElementById('message');
    const showMessage = document.querySelector('.showMessage');

    
    displayMessage("You joined");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message !== '') {
            sendMessage(message, "You"); 
        }
        messageInput.value = '';
    });

    
    setTimeout(function() {
        displayMessage("Vaibhav joined");
        displayMessage("Vaibhav: hii there");
    }, 1000);

    function sendMessage(message, sender) {
       
        displayMessage(`${sender}: ${message}`);
    }

    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message');
        showMessage.appendChild(messageElement);
    }
});
