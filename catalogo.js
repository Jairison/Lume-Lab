const pesquisa = document.getElementById("pesquisa");

const pacotes = document.querySelectorAll(".pacote");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    pacotes.forEach((pacote) => {

        const conteudo = pacote.innerText.toLowerCase();

        if (conteudo.includes(texto)) {

            pacote.style.display = "block";

        } else {

            pacote.style.display = "none";

        }

    });

});

// Animação de entrada

window.addEventListener("load", () => {

    pacotes.forEach((pacote, index) => {

        pacote.style.opacity = "0";

        pacote.style.transform = "translateY(40px)";

        setTimeout(() => {

            pacote.style.transition = ".6s";

            pacote.style.opacity = "1";

            pacote.style.transform = "translateY(0)";

        }, index * 120);

    });

});