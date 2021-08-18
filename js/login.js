document.getElementById('login-submit').addEventListener('click', function () {
    const nameField = document.getElementById('user-name');
    const username = nameField.value;

    //get users password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check user info
    if ((username == 'name' && userPassword == 1234 )||( username == 'Tasneem' && userPassword == 1234) || ( username == 'user' && userPassword == 1234) || ( username == 'admin' && userPassword == 1234)) {
        window.location.href = 'banking.html';
    }
});
