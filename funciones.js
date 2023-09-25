
console.log("¡Bienvenidos!");


// alterna la visibilidad del contenido, es para desplegar  textos de educacion, experiencia, etc.
function toggleContenido(elemento) {
    const contenido = elemento.nextElementSibling;
    contenido.classList.toggle('active');
  }
  

//PARA OCULTAR O MOSTRAR LA NAVBAR//
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.getElementById('navbar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });
});


//PARA FORMULARIO:

//elementos del DOM
const mostrarFormularioButton = document.getElementById('mostrarFormulario');
const modal = document.getElementById('modal');
const cerrarModalButton = document.getElementById('cerrarModal');

// Abre ventana modal
mostrarFormularioButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Cierra la ventana 
cerrarModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});