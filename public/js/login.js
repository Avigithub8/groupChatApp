document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const message = document.getElementById('message');

  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;
    console.log('Login success:====///');
    // Simple validation (you can add more complex validation)
    if (email.trim() === '' || password.trim() === '') {
      showMessage('Please enter email and password.');
    } else {
      try {
          
                  const response = await axios.post(`http://localhost:5000/user/login`, {
                      email: email,
                      password: password
                  });
                  console.log('Login success:====[[[[[');
                  console.log('Login success:', response.data);
        
                 
                  if (response.data.token) {
                     
                      localStorage.setItem('token', response.data.token);
                  }
        
                  if (response.status === 200) {
                      console.log('Login success:', response.data);
                      
                      console.log('Login success:====');
                      //window.location.href = '/user/new.html'; 
                  } else {
                    showMessage(response.error.data.message)
                      console.error('Unexpected response status:', response.status);
                  }
              } catch (error) {
                showMessage(response.error.data.message)
                  console.error('Login error:', error.response.data);
        
                  alert('Login failed. Please check your credentials and try again.');
              }
    }
  });

  function showMessage(msg) {
    message.textContent = msg;
  }
});




















// document.addEventListener('DOMContentLoaded', () => {
//   const loginForm = document.querySelector('.loginForm');

//   loginForm.addEventListener('submit', async (event) => {
//       event.preventDefault();

//       console.log('=========:');
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       console.log('...................');

//       try {
          
//           const response = await axios.post(`http://localhost:5000/user/login`, {
//               email: email,
//               password: password
//           });

//           console.log('Login success:', response.data);

         
//           if (response.data.token) {
             
//               localStorage.setItem('token', response.data.token);
//           }

//           if (response.status === 200) {
//               console.log('Login success:', response.data);

             
//               window.location.href = '/'; 
//           } else {
//               console.error('Unexpected response status:', response.status);
//           }
//       } catch (error) {
         
//           console.error('Login error:', error.response.data);

//           alert('Login failed. Please check your credentials and try again.');
//       }
//   });
// });






























// const loginForm = document.getElementById('loginForm');
// const message = document.getElementById('message');

// loginForm.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const email = loginForm.elements.email.value;
//   const password = loginForm.elements.password.value;

  
//   if (email.trim() === '' || password.trim() === '') {
//     showMessage('Please enter username and password.');
   
//   } else {
    
//     showMessage(`Welcome, ${username}!`);
    
//   }
// });

// function showMessage(msg) {
//   message.textContent = msg;
// }
