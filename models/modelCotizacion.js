// Crear un array para almacenar las cotizaciones
let cotizaciones = [];

// Función para guardar una nueva cotización
const guardarCotizacion = (cotizacion) => {
    // Añadir la cotización al array de cotizaciones
    cotizaciones.push(cotizacion);
};

// Función para obtener todas las cotizaciones (si lo necesitas)
const obtenerCotizaciones = () => {
    return cotizaciones;
};

// Exportar las funciones para que puedan ser usadas en el controlador
module.exports = {
    guardarCotizacion,
    obtenerCotizaciones
};
