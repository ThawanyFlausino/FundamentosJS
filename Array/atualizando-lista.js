// node atualizando-lista.js
                        //0    //1    //2
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//listaDeChamada.splice(1,2,'Rodrigo');
    //1)Local da alteração 2)Quantos vão ser apagados 3)Adicionar. 
listaDeChamada.splice(2,0,'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}`);