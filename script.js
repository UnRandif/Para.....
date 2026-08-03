document.addEventListener("DOMContentLoaded", () => {
    const flecha = document.getElementById("flecha");
    const cartaPrincipal = document.getElementById("cartaPrincipal");
    const segundaCarta = document.getElementById("sc");
    const volver = document.getElementById("volver");

    flecha.addEventListener("click", () => {
        cartaPrincipal.classList.add("oculto");
        segundaCarta.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    });

    volver.addEventListener("click", () => {
        segundaCarta.classList.add("oculto");
        cartaPrincipal.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    });
});