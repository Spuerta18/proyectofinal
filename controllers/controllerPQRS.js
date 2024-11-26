import { pqrs } from "../models/ModelPQRS.js";

function registrarPQRS() {


    let email = document.getElementById("email")
    let mensaje = document.getElementById("feedback")

    let emailvalue = email.value
    let mensajevalue = mensaje.value
   

    let pqr = {
        emailvalue,
        mensajevalue,
    };

    pqrs.push(pqr);

    console.log(pqrs);

    email.value = " "
    mensaje.value = " "

  
}


document.getElementById("feedbackBtn").addEventListener("click", registrarPQRS);