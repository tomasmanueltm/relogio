"use strict";

let JS = (e)=> document.querySelector(e),
hoje = new Date(),
hora = JS(".hora"),
minuto = JS(".minuto"),
segundo = JS(".segundo");
var diaSemana = hoje.toUTCString().split(",")[0],
    dias = document.querySelectorAll(".semana li");




// percorrer os dias de semana
dias.forEach(element => {
    (element.dataset.dia == diaSemana.toString()) ? element.classList.add("dia") : null;  
});

// adiciona valores nas label
function relogio(){
    hoje = new Date();
    hora.innerText = hoje.getHours();
    minuto.innerText = hoje.getUTCMinutes();
    segundo.innerText = hoje.getSeconds();
};

// atualizacao
setInterval(() => {
    relogio();

    hora.innerText = (hora.textContent.length == 1) ? "0"+hoje.getHours() : hoje.getHours();
    minuto.innerText = (minuto.textContent.length == 1) ? "0"+hoje.getUTCMinutes() : hoje.getUTCMinutes();
    segundo.innerText = (segundo.textContent.length == 1) ? "0"+hoje.getSeconds() : hoje.getSeconds();
}, 100);
