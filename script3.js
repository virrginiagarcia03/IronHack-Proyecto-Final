// Agrega un evento de escucha al hacer clic en el elemento con el id "imagen"
document.getElementById('imagen').addEventListener('click', function() {
    // Alterna la clase "imagen-ampliada" en el elemento actual
    this.classList.toggle('imagen-ampliada');
    // Imprime en la consola si la clase "imagen-ampliada" ha sido agregada o no al elemento
    console.log("Clase agregada:", this.classList.contains('imagen-ampliada'));
});

// Agrega un evento de escucha al hacer clic en el elemento con el id "imagen"
document.getElementById('imagen-2').addEventListener('click', function() {
    // Alterna la clase "imagen-ampliada" en el elemento actual
    this.classList.toggle('imagen-ampliada');
    // Imprime en la consola si la clase "imagen-ampliada" ha sido agregada o no al elemento
    console.log("Clase agregada:", this.classList.contains('imagen-ampliada'));
});

// Agrega un evento de escucha al hacer clic en el elemento con el id "imagen"
document.getElementById('imagen-3').addEventListener('click', function() {
    // Alterna la clase "imagen-ampliada" en el elemento actual
    this.classList.toggle('imagen-ampliada');
    // Imprime en la consola si la clase "imagen-ampliada" ha sido agregada o no al elemento
    console.log("Clase agregada:", this.classList.contains('imagen-ampliada'));
});

