const botonCerrarSesion = document.querySelector("#cerrar-sesion");

botonCerrarSesion.addEventListener("click", () => {
    sessionStorage.removeItem("sesionEventos");
    window.location.href = "../index.html";
});
