const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let index = 0

app.get("/", (req, res) => {
    if (index > jogadores.length - 1) {
        index = 0;
    }
    res.send(`É a vez de ${jogadores[index]} jogar!`);
    index++
})

app.listen(8000)