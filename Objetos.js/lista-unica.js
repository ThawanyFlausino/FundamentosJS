// node lista-unica.js

const clientes = [
    {
        nome:"Thawany",
        cpf:"1358498565",
        dependentes: [
            {
                nome:"Sara",
                parentesco:"namorada",
                dataNasc:"09/08/1996" 
            },
            {
                nome:"Frederico",
                parentesco:"Gato",
                dataNasc:"07/07/2020"
            } ],
    },
    {
        nome:"Marcela",
        cpf:"85474569885",
        dependentes: [ 
            {
            nome:"Sophia",
            parentesco:"filha",
            dataNasc:"25/08/2020"
        }],
    }
]

/* spread operator ou operador de espelhamento: abre um array, depois o conteúdo é espalhado
(...) no indice [0].dependentes, ou seja, o primeiro indice do array que 
é o objeto Thawany, acessou a chave dependentes dentro do objeto, pegou os
itens desse array e espalhou dentro do array que foi criado. e depois fez
a mesma coisa para o indice 2 (Marcela). */

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes);

/* console.table exibe em formato de lista */

console.table(listaDependentes)
