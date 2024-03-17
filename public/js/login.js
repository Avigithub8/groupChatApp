const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  
  if (email.trim() === '' || password.trim() === '') {
    showMessage('Please enter username and password.');
   
  } else {
    
    showMessage(`Welcome, ${username}!`);
    
  }
});

function showMessage(msg) {
  message.textContent = msg;
}
