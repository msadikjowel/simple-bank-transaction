document.getElementById('login-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if(userEmail == 'sadik@gmail.com' && userPassword == '123'){
        window.location.href='banking.html'
    }
    else{
        // alert('please input valid email and password')
        const errorMessage = document.getElementById('error-message')
        errorMessage.style.display = 'block'
    }
})