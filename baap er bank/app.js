document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-value');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.open('bank.html')
    }
    else {
        alert("Tui password Vule gesos tui teijjo sontan");
    }
});

