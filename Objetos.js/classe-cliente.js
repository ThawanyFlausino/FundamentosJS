// node classe-cliente.js
// Orientação a objetos: classe

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

const Thawany = new Cliente("Thawany","thawany@email.com","58868748996",7000)

Thawany.exibirSaldo()

console.log(Thawany);


