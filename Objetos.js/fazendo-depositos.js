// node fazendo-depositos.js

const cliente = {
    nome:"Thawany",
    idade:36,
    cpf:"1358498565",
    email:"thawany@gmail.com",
    fones:["988475869", "966588745"],
    dependentes: [
        {
            nome:"Sara",
            parentesco:"namorada",
            dataNasc:"09/08/1996" },
        {
            nome:"Frederico Lopes",
            parentesco: "Gato da casa",
            dataNasc:"07/07/2020"
        } 
//como dar comportamento para o objeto: saldo e depositar entraram como componentes do
//objeto, colocando então, uma função dentro do objeto.
    ],
    saldo:100,

    depositar:function(valor){
        this.saldo +=valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
