function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'yahirgtz' && password === 'dimanor05') {
        window.location.href = 'main.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
