let formulario = document.getElementById("formularioSugerencia");
let mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    mensaje.textContent = "Tu sugerencia ha sido registrada correctamente.";

    formulario.reset();
});