// node objetos.js
//const listaCPFs = ["15874554776", "16887559662", "35887446582"];

//const cliente = ["nome", "André", "idade", 36];

// no objeto, os dados podem 'receber' informações para serem acessadas de maneira mais coesa.
const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1358498565",
    email:"andre@gmail.com"
}
// para acessar um dado especifico dentro do objeto, utilizamos o ponto (.)
console.log(`O cliente se chama ${cliente.nome} e tem ${cliente.idade} anos.`);
// para exibir somente alguns números, é utilizad o substring, que recebe onde começa a aparecer e onde para de aparecer.
console.log(cliente.cpf.substring(0,3));