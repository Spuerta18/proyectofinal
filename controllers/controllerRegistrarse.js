
import { usuarios } from "../models/ModelRegistro.js";


function registrarUsuario(event) {
  event.preventDefault(); 

  
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();


  if (!nombre || !email || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

 
  const existe = usuarios.some(usuario => usuario.email === email);
  if (existe) {
    alert("El correo ya está registrado. Por favor, usa otro.");
    return;
  }

 
  const nuevoUsuario = { nombre, email, password };
  usuarios.push(nuevoUsuario);

  
  alert("Registro exitoso. ¡Bienvenido!");

  console.log("Usuarios registrados:", usuarios);

  
  document.getElementById("registroForm").reset();
}


document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("registroForm");
  formulario.addEventListener("submit", registrarUsuario);
});
