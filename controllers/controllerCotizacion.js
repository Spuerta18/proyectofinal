// Array para almacenar las cotizaciones
let cotizaciones = [];

// Función para capturar los datos del formulario y guardarlos en el array
document.getElementById('submit-btn').addEventListener('click', function() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const consumo = document.getElementById('consumo').value;
    const costo_kw = document.getElementById('costo_kw').value;
    const area_disponible = document.getElementById('area_disponible').value;
    const tipo_techo = document.getElementById('tipo_techo').value;

    // Verificar que todos los campos estén completos
    if (nombre && apellido && correo && telefono && direccion && consumo && costo_kw && area_disponible && tipo_techo) {
        // Crear el objeto de cotización
        const cotizacion = {
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
            consumo,
            costo_kw,
            area_disponible,
            tipo_techo
        };

        // Guardar la cotización en el array
        cotizaciones.push(cotizacion);

        // Mostrar un mensaje de éxito
        alert("Cotización enviada con éxito");

        // Redirigir a otra página (por ejemplo, la página de confirmación)
        window.location.href = 'indexConfirmarcotizacion.html';
    } else {
        // Si faltan campos, mostrar un mensaje de error
        alert("Por favor, complete todos los campos");
    }
});
