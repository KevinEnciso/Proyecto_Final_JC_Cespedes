// Función para guardar el usuario en Local Storage al registrarse
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    // Crear un objeto con los datos del usuario
    const user = { username, email, password };

    // Guardar los datos en Local Storage
    localStorage.setItem('user', JSON.stringify(user));
    e.target.reset(); // Limpiar el formulario

    // Cambiar al formulario de inicio de sesión
    document.querySelector('.wrapper').classList.remove('active');
});

// Función para verificar el inicio de sesión usando Local Storage
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    // Obtener los datos del usuario almacenados en Local Storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        // Redirigir a otro archivo HTML
        window.location.href = 'user_website.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// Función para alternar entre formularios
function toggleForm() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.toggle('active');
}