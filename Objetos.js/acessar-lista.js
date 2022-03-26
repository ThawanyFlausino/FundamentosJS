// node acessar-lista.js

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1358498565",
    email:"andre@gmail.com"
}

//utilizamos uma lista (array) de chaves (nome, idade, etc). atráves disso,
//utilizou o colchete para acessar o objeto através do array.

 const chaves =["nome","idade","cpf","email"];

console.log(cliente[chaves[0]]);

// utilizou o forEach para acessar o array e através do array acessar o objeto.
chaves.forEach(info => console.log(cliente[info])); 
