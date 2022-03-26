// node oferta-seguro.js

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

/* método Object.keys cria uma array a partir das chaves do objeto:
includes é um método de array do JS, que verifica se o array inclui
determinado dado que é passado por parâmetro. */

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Òferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente);

/* um correspondente do Object.keys() existente é o object.values(),
 que ao invés de um array com chaves, traz um array com valores. */

 console.log(Object.values(cliente));

 /* também pode ser utilizado o Object.entries() que nos traz um 
 array com várias arrays dentro, cad um sendo um conjunto de chaves
 e valores só que agora em uma estrutura de array, o indice 0 se
 refere a chave, e o indice um vai se referir ao valor, assim por diante */

console.log(Object.entries(cliente));
