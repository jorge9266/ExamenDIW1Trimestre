console.log("Hola mundo...");

document.addEventListener("DOMContentLoaded", function () {
    var borrar = document.querySelectorAll("#Borrar");
    var borrarArticulo = document.querySelector("#borrarArticulo");
    var nuevaEntrada = document.querySelector("#nuevaEntrada");
    var insertarArticulo = document.querySelector("#insertarArticulo");
    var botonCancelar = document.querySelectorAll("#botonCancelar");

    borrar.forEach(btn => {
        btn.addEventListener('click', () => {
            borrarArticulo.showModal();
        });
    });

    nuevaEntrada.addEventListener('click', () => {
        insertarArticulo.showModal();
    });

    botonCancelar.forEach(boton => {
        boton.addEventListener('click', () => {
        window.location.href = "index.html";
    });
})});