// node lista-dependentes.js

const cliente = {
    nome:"Thawany",
    idade:36,
    cpf:"1358498565",
    email:"thawany@gmail.com",
    fones:["988475869", "966588745"],
    dependentes: [{
        nome:"Sara",
        parentesco:"namorada",
        dataNasc:"09/08/1996"
    }]
}
cliente.dependentes.push({
    nome:"Frederico Lopes",
    parentesco: "Gato da casa",
    dataNasc:"07/07/2020"
})

console.log(cliente);

//para acessar a lista:
// entrou no objeto cliente, depois no dependentes, depois filtrou por dataNasc.
const gato = cliente.dependentes.filter(dependente => dependente.dataNasc==="07/07/2020");

console.log(gato[0].nome);