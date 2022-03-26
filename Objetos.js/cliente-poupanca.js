// node cliente-poupanca.js

function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo=saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

/* call é chamar, onde vamos no contrutor citado e chamamos 
os parametros */
function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const Sara = new clientePoupanca("Sara", "58749665884","sara@gmail.com",100,300);



clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

Sara.depositarPoup(30)

console.log(Sara.saldoPoup);