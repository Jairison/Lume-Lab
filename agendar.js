//=========================================
// LUME LAB BANABUIÚ
// Sistema de Agendamento
//=========================================

const form = document.getElementById("formAgendamento");

const numeroWhatsApp = "5588999999999"; // ALTERE PARA O NÚMERO DO LABORATÓRIO

//=========================================
// DATA MÍNIMA
//=========================================

const campoData = document.getElementById("data");

const hoje = new Date().toISOString().split("T")[0];

campoData.min = hoje;

//=========================================
// MÁSCARA TELEFONE
//=========================================

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");

    this.value = valor;

});

//=========================================
// ENVIAR PARA WHATSAPP
//=========================================

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const fone = telefone.value.trim();

    const email = document.getElementById("email").value.trim();

    const exame = document.getElementById("exame").value;

    const data = document.getElementById("data").value;

    const hora = document.getElementById("hora").value;

    const obs = document.getElementById("obs").value.trim();

    if(nome === "" || fone === "" || data === ""){

        alert("Preencha todos os campos obrigatórios.");

        return;

    }

    const mensagem =

`*LUME LAB BANABUIÚ*

🧪 *SOLICITAÇÃO DE AGENDAMENTO*

👤 Nome:
${nome}

📱 Telefone:
${fone}

📧 E-mail:
${email || "Não informado"}

🧬 Exame:
${exame}

📅 Data:
${data}

🕒 Horário:
${hora}

📝 Observações:
${obs || "Nenhuma"}

Aguardo a confirmação do agendamento.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});

//=========================================
// EFEITO NOS INPUTS
//=========================================

const campos = document.querySelectorAll("input, select, textarea");

campos.forEach(campo => {

    campo.addEventListener("focus", () => {

        campo.parentElement.style.transform = "translateY(-2px)";

    });

    campo.addEventListener("blur", () => {

        campo.parentElement.style.transform = "translateY(0)";

    });

});

//=========================================
// ANIMAÇÃO DOS CAMPOS
//=========================================

window.addEventListener("load", () => {

    const elementos = document.querySelectorAll(".input-box");

    elementos.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(25px)";

        setTimeout(() => {

            item.style.transition = ".5s";

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }, index * 120);

    });

});

//=========================================
// EFEITO NO BOTÃO
//=========================================

const botao = document.querySelector("button");

botao.addEventListener("mouseenter", () => {

    botao.style.transform = "translateY(-3px)";

});

botao.addEventListener("mouseleave", () => {

    botao.style.transform = "translateY(0)";

});

//=========================================
// MENSAGEM NO CONSOLE
//=========================================

console.log("LUME LAB BANABUIÚ - Sistema de Agendamento carregado com sucesso.");