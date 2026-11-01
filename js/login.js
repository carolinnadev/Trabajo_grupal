// Credenciales de demostración para la actividad académica.
const credencialesDemo = {
    usuario: "Pedrito",
    contrasena: "12345"
};

const formularioLogin = document.querySelector("#formulario-login");
const campoUsuario = document.querySelector("#usuario");
const campoContrasena = document.querySelector("#contrasena");
const mensajeLogin = document.querySelector("#mensaje-login");

formularioLogin.addEventListener("submit", (evento) => {
    // Evita que el navegador recargue la página al enviar el formulario.
    evento.preventDefault();

    const usuarioIngresado = campoUsuario.value.trim();
    const contrasenaIngresada = campoContrasena.value;

    if (
        usuarioIngresado === credencialesDemo.usuario &&
        contrasenaIngresada === credencialesDemo.contrasena
    ) {
        sessionStorage.setItem("sesionEventos", "activa");
        window.location.href = "eventos.html";
        return;
    }

    mensajeLogin.textContent = "El usuario o la contraseña son incorrectos. Inténtalo de nuevo.";
    campoContrasena.value = "";
    campoContrasena.focus();
});
