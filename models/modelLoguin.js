// modelLoguin.js

let userData = [];

function addUserData(email, password) {
    // Almacenamos los datos en un array
    userData.push({ email, password });
    console.log(userData);  // Para ver el contenido del array en la consola
}
