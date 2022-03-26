// node classe-clientepoup.js

class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor (nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const Thawany = new ClientePoupanca("Thawany","thawany@email.com","5879632585",100000,20000)

console.log(Thawany);

Thawany.depositar(80000)
Thawany.depositarPoupanca(50000)

console.log(Thawany);

