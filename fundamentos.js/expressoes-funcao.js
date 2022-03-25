// node expressoes-funcao.js

// declaração de função
function minhaFuncao (param) {
    //bloco de código 
}

minhaFuncao("param");

//expressão de função
//const soma = function(num1, num2) {return num1 + num2}
//console.log(soma(1, 1))

// diferença principal 

console.log(apresentar())

function apresentar() {
    return "Olá";
}

console.log(soma(1, 1));
// ReferenceError: soma tem que estar listada antes de ser chamada.
// funções e var são "listadas" e já chama, no topo. No caso da const, ela só vai ser chamada no momento de utilizar.
const soma = function(num1, num2) {return num1 + num2}


