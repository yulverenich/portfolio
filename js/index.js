document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

function login() {
    var password = document.getElementById('password').value;

    var validPassword = "showmeall";

    if (password === validPassword) {
        window.location.href = "home.html"; 
    } else {
        document.getElementById('message').innerText = "Invalid password";
    }
}