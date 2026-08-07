// Animação dos horários

const itens = document.querySelectorAll(".item");

itens.forEach((item, index)=>{

item.style.opacity="0";

item.style.transform="translateY(30px)";

setTimeout(()=>{

item.style.transition=".6s";

item.style.opacity="1";

item.style.transform="translateY(0)";

}, index*180);

});

// Data atual

const hoje = new Date();

console.log("LUME LAB BANABUIÚ");

console.log("Hoje é:", hoje.toLocaleDateString("pt-BR"));