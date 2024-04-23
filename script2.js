// Agrega un evento de escucha al hacer clic en el elemento con el id "cambiarColor"
document.getElementById('cambiarColor').addEventListener('click', function() {
    // Define una lista de colores disponibles
    var colores = ['#ffcc00', '#66ccff', '#ff6666', '#99ff99', '#cc99ff'];
    // Genera un número aleatorio para seleccionar un color de la lista
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    // Cambia el color de fondo del cuerpo del documento al color aleatorio seleccionado
    document.body.style.backgroundColor = colorAleatorio;
});
