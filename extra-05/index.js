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
});

app.get("/remover", (req, res) => {
    const indice = Number(req.query.indice);

    if (!indice) {
        res.status(400);
        res.send(`Você não passou o valor do indice.`)
    } else if (indice >= jogadores.length) {
        res.status(400);
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    } else {
        jogadores.splice(indice, 1);
        res.send(`${jogadores}`)
    }

});

app.get("/adicionar", (req, res) => {
    const nome = req.query.nome;
    const indice = Number(req.query.indice);

    if (!nome) {
        res.status(400);
        res.send(`O nome não foi informado.`);
    } else if (nome && !indice) {
        jogadores.push(nome);
        res.send(`{${jogadores}}`);
    } else if (indice >= jogadores.length) {
        res.status(400);
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
    } else {
        jogadores.splice(indice, 0, nome);
        res.send(`{${jogadores}}`);
    }

});

app.listen(8000)

