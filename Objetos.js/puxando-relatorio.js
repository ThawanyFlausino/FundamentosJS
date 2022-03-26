// node puxando-relatorio.js

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
    ],
    saldo:100,

    depositar:function(valor){
        this.saldo +=valor
    }
}

// metodo for in, especifico para objetos.

let relatorio="";

//let info (dentro) cliente.
for (let info in cliente) {
    if(typeof cliente[info]==="object" || typeof cliente[info]==="function"){
        continue
    }else {
        relatorio += `
        ${info} ==>  ${cliente[info]}
        `
    }
}

console.log(relatorio);