// node acessar-telefones.js

// um objeto pode receber vários tipos de dados, como string, booleanos, number, arrays..
const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1358498565",
    email:"andre@gmail.com",
    fones:["988475869", "966588745"]
}

cliente.fones.forEach(fone => console.log(fone))