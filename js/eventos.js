const sesionActiva = sessionStorage.getItem("sesionEventos") === "activa";

if (!sesionActiva) {
    // La página de login está en la misma carpeta que eventos.html.
    window.location.replace("login.html");
} else {
    const botonCerrarSesion = document.querySelector("#cerrar-sesion");

    botonCerrarSesion.addEventListener("click", () => {
        sessionStorage.removeItem("sesionEventos");
        window.location.replace("../index.html");
    });
}
