// node parametros.js

// parâmetros de função
              //2  //2
function soma (num1, num2){
  return num1 + num2; 
}

//console.log(soma(2, 2))
//console.log(soma(245, 20))
//console.log(soma(-500, 20))

// parâmetros x argumentos

// ordem dos parâmetros 


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade} `
} ;

console.log(nomeIdade("Thawany", 23));

function multiplica (num1 = 1, num2 = 1){
    return num1 * num2;
}
                        //9     // *    //6
console.log(multiplica(soma(4, 5), soma(3, 3)))

// somente um parametro = NaN (definir um numero neutro para o parametro, ao multiplicar, sempre vai ter um numero.)
console.log(multiplica(soma(4, 5)))