// controllerLoguin.js

function loginFunction() {
    // Obtenemos los valores de los campos de email y password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Llamamos a la función de modelLoguin.js para guardar los datos
    addUserData(email, password);

    // Mostrar mensaje de bienvenida
    alert(`Bienvenido, ${email}!`);

    // Redirigir a la página de inicio (ajusta el enlace según tu estructura de carpetas)
    window.location.href = "index.html";  // Cambia 'index.html' por la ruta correcta
}
