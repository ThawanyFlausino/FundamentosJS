// node cliente-generico.js

function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo=saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

/* new é uma palavra reservada, para dizer que a partir da funcão cliente, 
estamos criando um novo cliente, isso se chama instancia, const Thawany
é uma nova instancia de cliente criado a partir da função cliente, quando
foi criada a const Thawany, passamos dentro dos parenteses os parametros da 
função com os dados reais do cliente */

const Thawany = new cliente("Thawany","18568749632","thawany@gmail.com",100)

console.log(Thawany);

