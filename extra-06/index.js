const express = require("express");

const app = express();

let minuto = 0;
let segundo = 0;
let contador = ''

function contar() {
    if (segundo == 59) {
        segundo = 0;
        minuto++;
    } else {
        segundo++;
    }
};

app.get("/", (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minuto.toString().padStart(2, 0)} minutos e ${segundo.toString().padStart(2, 0)} segundos`)
});

app.get("/iniciar", (req, res) => {
    contador = setInterval(contar, 1000);
    res.send("Cronômetro iniciado!")
});

app.get("/pausar", (req, res) => {
    clearInterval(contador);
    res.send("Cronômetro pausado!")
});

app.get("/zerar", (req, res) => {
    segundo = 0;
    minuto = 0;
    res.send("Cronômetro zerado!")
});



app.listen(8000);

