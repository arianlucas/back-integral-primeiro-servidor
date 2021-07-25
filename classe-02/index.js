const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];

const { nome: nome0, idade: idade0, email: email0, curso: curso0 } = alunos[0];
const { nome: nome1, idade: idade1, email: email1, curso: curso1 } = alunos[1];

const alunosResumido = alunos.map(({ nome, idade, email, curso }) => ({ nome, idade, email, curso }))


console.log(alunosResumido);
