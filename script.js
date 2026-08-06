// ================================
// LUME LAB BANABUIÚ
// JavaScript Premium
// ================================

// Animação de entrada dos botões
const botoes = document.querySelectorAll(".buttons a");

botoes.forEach((botao, index) => {

    botao.style.opacity = "0";
    botao.style.transform = "translateY(30px)";

    setTimeout(() => {

        botao.style.transition = "0.6s ease";
        botao.style.opacity = "1";
        botao.style.transform = "translateY(0)";

    }, index * 180);

});

// ================================
// Animação dos Cards
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.04)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ================================
// Saudação conforme horário
// ================================

const titulo = document.querySelector("h2");

const hora = new Date().getHours();

if (hora < 12) {

    titulo.innerHTML = "Bom dia ☀️";

}
else if (hora < 18) {

    titulo.innerHTML = "Boa tarde 🌤";

}
else {

    titulo.innerHTML = "Boa noite 🌙";

}

// Após alguns segundos volta ao texto original
setTimeout(() => {

    titulo.innerHTML = "BANABUIÚ";

}, 4000);

// ================================
// Brilho acompanhando o mouse
// ================================

const glass = document.querySelector(".glass");

glass.addEventListener("mousemove", (e) => {

    const rect = glass.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glass.style.background = `
    radial-gradient(circle at ${x}px ${y}px,
    rgba(255,255,255,.22),
    rgba(255,255,255,.10))
    `;

});

glass.addEventListener("mouseleave", () => {

    glass.style.background = "rgba(255,255,255,.12)";

});

// ================================
// Animação nos ícones sociais
// ================================

const sociais = document.querySelectorAll(".social a");

sociais.forEach(icon => {

    icon.addEventListener("click", () => {

        icon.animate([

            { transform: "scale(1)" },
            { transform: "scale(1.3)" },
            { transform: "scale(1)" }

        ], {

            duration: 400

        });

    });

});

// ================================
// Rolagem suave
// ================================

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// Mensagem de boas-vindas
// ================================

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log("Bem-vindo ao LUME LAB BANABUIÚ");

    }, 800);

});

// ================================
// Efeito de pulsação nos botões
// ================================

setInterval(() => {

    botoes.forEach(botao => {

        botao.animate([

            { transform: "scale(1)" },

            { transform: "scale(1.03)" },

            { transform: "scale(1)" }

        ], {

            duration: 1200

        });

    });

}, 5000);