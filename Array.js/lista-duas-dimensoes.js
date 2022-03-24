// node lista-duas-dimensoes.js

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];

// Array que recebe como indice outras arrays.
                    // 0[Alunos]   1[Média dos alunos]
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

  //0 recebe a array de alunos, depois o que está dentro dela //1 recebe media de alunos, depois o que está dentro dela.
console.log(`${listaDeNotasEAlunos[0][1]}, a sua média é ${listaDeNotasEAlunos[1][1]}`);