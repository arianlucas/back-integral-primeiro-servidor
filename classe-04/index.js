const express = require("express");
const app = express();

app.get("/somar", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const soma = num1 + num2

    if (!soma) {
        res.status(400);
        res.send("Você esqueceu de passar 1 ou mais parâmetros")
    } else {
        res.send(String(soma));
    }

});

app.get("/subtrair", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const subtracao = num1 - num2

    if (!subtracao) {
        res.status(400);
        res.send("Você esqueceu de passar 1 ou mais parâmetros")
    } else {
        res.send(String(subtracao));
    }
});

app.get("/multiplicar", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const multiplicacao = num1 * num2

    if (!multiplicacao) {
        res.status(400);
        res.send("Você esqueceu de passar 1 ou mais parâmetros")
    } else {
        res.send(String(multiplicacao));
    }
});

app.get("/dividir", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const divisao = num1 / num2

    if (!divisao) {
        res.status(400);
        res.send("Você esqueceu de passar 1 ou mais parâmetros")
    } else {
        res.send(String(divisao));
    }
});

app.listen(8000);