// const signupForm = document.querySelector('.signupForm');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const phonenumber = document.querySelector('#number');
// const password = document.querySelector('#password');


// // signup data submission
// signupForm.addEventListener('submit', signupSubmit);
// console.log("==========+++++++");
// async function signupSubmit(e) {
//     e.preventDefault();
//     try {
//         console.log("==========");
//         const signupSubmitedData = await axios.post(`http://localhost:3000/user/signup`, {
//             name: name.value,
//             email: email.value,
//             phonenumber: phonenumber.value,
//             password: password.value,
           
//         });
//          console.log("+++++++++",signupSubmitedData.data);
//         // if (!alert(signupSubmitedData.data.message)) {
//         //     window.location.href = '/login';
//         // }

//     }
//     catch (err) {
//         if (err.response.status === 302) {
//             //console.log(err.response.data.message);
//             console.log("-------------");
//             if (!alert(err.response.data.message)) {
//                 location.reload();
//             }
//         }
//         else {

//             console.log(err);
//             console.log("..........");
//         }
//     }
// }


//////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('.signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('number').value;
        const password = document.getElementById('password').value;

        console.log("checking...")
        axios.post(`http://localhost:5000/user/signup`, {
            name: name,
            email: email,
            phonenumber:phonenumber,
            password: password
        })
        .then(response => {
            console.log('Signup successful:', response.data);
           
            window.location.href = '/user/login.html';
        })
        .catch(error => {
            if (err.response.status === 302) {
                    // console.log(err.response.data.message);
                    console.log("testing...")
                 if (!alert(err.response.data.message)) {
                        location.reload();
                    }
                }
                else {
                    console.log(error);
                    alert('Signup failed. Please check your input and try again.');
                }
        });
    });
});
