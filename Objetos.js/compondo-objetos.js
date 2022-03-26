// node compondo-objetos.js

const cliente = {
    nome:"Thawany",
    idade:36,
    cpf:"1358498565",
    email:"thawany@gmail.com",
    fones:["988475869", "966588745"]
}

//para compor o objeto e adicionar dependentes, utilizamos o (.)
cliente.dependentes = {
    nome:"Sara",
    parentesco:"esposa",
    dataNasc:"09/08/1996"
}

console.log(cliente);

//para fazer alteração de um objeto que está dentro do objeto (dependentes):

cliente.dependentes.nome = "Sara Lopes Arruda";

console.log(cliente);