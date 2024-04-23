// Espera a que el contenido del documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene referencia al formulario de comentario y la lista de comentarios
    const formularioComentario = document.getElementById("formulario-comentario");
    const listaComentarios = document.getElementById("lista-comentarios");
  
    // Función para agregar un comentario
    function agregarComentario(nombre, comentario, valoracion) {
        // Crea un nuevo elemento <div> para el comentario
        const nuevoComentario = document.createElement("div");
        // Asigna HTML al nuevo comentario con el nombre, comentario y las estrellas generadas
        nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario} <span class="valoracion">${generarEstrellas(valoracion)}</span>`;
        // Agrega el nuevo comentario a la lista de comentarios
        listaComentarios.appendChild(nuevoComentario);
    }
  
    // Función para generar las estrellas en base a la valoración
    function generarEstrellas(valoracion) {
        let estrellas = ''; // Inicializa una cadena vacía para almacenar las estrellas
        // Recorre un bucle por cada valor de la valoración
        for (let i = 0; i < valoracion; i++) {
            estrellas += '&#9733;'; // Agrega el código HTML de una estrella a la cadena
        }
        return estrellas; // Devuelve la cadena con las estrellas generadas
    }
  
    // Agrega un evento de escucha para el envío del formulario de comentario
    formularioComentario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        // Obtiene el nombre, comentario y valoración del formulario
        const nombre = document.getElementById("nombre").value;
        const comentario = document.getElementById("comentario").value;
        const valoracion = document.querySelector("[name=valoracion]:checked").value;
        // Llama a la función agregarComentario con los datos del comentario
        agregarComentario(nombre, comentario, valoracion);
        formularioComentario.reset(); // Reinicia el formulario
        // Muestra una alerta indicando que el comentario fue enviado
        alert("¡Comentario enviado!");
    });
});
