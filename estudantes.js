

/*Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno.*/


class Aluno {
    constructor(nomeAluno, faltasAluno, notasAluno) {

        this.nomeAluno = nomeAluno;
        this.faltasAluno = faltasAluno;
        this.notasAluno = notasAluno;
    }

    adcionarAluno() {
        return {
        nomeAluno: this.nomeAluno,
        faltasAluno: this.faltasAluno,
        notasAluno : this.notasAluno
        }
    }

    /*Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas*/

    calcularMedia() {
        const media = this.notasAluno.reduce((total, nota) => total + nota);
            return `A média das notas do aluno(a) ${this.nomeAluno} é ${media/4}!`;
    }

     /*Também terá um método chamado faltas, que simplesmente aumenta o número 
     de faltas em 1.*/

     faltas(){
        
        const falta = this.faltasAluno = this.faltasAluno + 1;
        return `O aluno(a) ${this.nomeAluno} agora tem ${falta} faltas!`;        
}
}

console.log('');
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('📌:::::::::::::::::::: Micro desafio - Passo 1 :::::::::::::::::::::::::::::::::');
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('');
console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('||||||||||||||||||- ESTAMOS NO ARQUIVO estudante.js -||||||||||||||||||||||||||||');
console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('|--------------------- Foram adcionados 7 alunos -------------------------------|');
console.log('');

const aluno1 = new Aluno('Lauro', 2, [10,8,9,6]);
aluno1.adcionarAluno()
const aluno2 = new Aluno('Michele', 5, [8,9,10,7]);
aluno2.adcionarAluno()
const aluno3 = new Aluno('Igor', 6, [10,5,7,9]);
aluno3.adcionarAluno()
const aluno4 = new Aluno('Rodrigo', 3, [10,7,10,5]);
aluno4.adcionarAluno()
const aluno5 = new Aluno('Emanuel', 2, [9,8,10,5]);
aluno5.adcionarAluno()
const aluno6 = new Aluno('Camila', 0, [10,8,10,8]);
aluno6.adcionarAluno()
const aluno7 = new Aluno('Isabela', 1, [10,9,8,6]);
aluno7.adcionarAluno()

let listaAlunos = [];
listaAlunos.push(aluno1, aluno2,aluno3, aluno4,aluno5, aluno6,aluno7);
console.log('=================================================================================');
console.log(`|---------------- Nosso "Banco" tem ${listaAlunos.length} alunos cadastrados até o momento ---------|`);
console.log('|----------------------- Mostrando os Alunos Cadastrados -----------------------|');
console.log('=================================================================================');
console.log('');
console.log(listaAlunos);

console.log('');
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('📌:::::::::::::::::::::::: Micro desafio - Passo 2 ::::::::::::::::::::::::::::::');
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('');
console.log('================================================================================');
console.log('|----------------- Método Calcular Média ( teste com 3 alunos) ----------------|');
console.log('================================================================================');
console.log('');
console.log(listaAlunos[3].calcularMedia());
console.log(listaAlunos[2].calcularMedia());
console.log(listaAlunos[4].calcularMedia());
console.log('');
console.log('================================================================================');
console.log('|----------------- Método Adcionar Falta ( teste com 2 alunos)-----------------|');
console.log('|------------------------ adcionando 3 faltas para cada -----------------------|');
console.log('================================================================================');
console.log('');
console.log(listaAlunos[0].faltas());
console.log(listaAlunos[0].faltas());
console.log(listaAlunos[0].faltas());
console.log(listaAlunos[2].faltas());
console.log(listaAlunos[2].faltas());
console.log(listaAlunos[2].faltas());
console.log('');


/*Crie um construtor para ele e importe-o como o
módulo aluno.*/

module.exports = {listaAlunos,Aluno};
const lista = require('./curso.js');

//exports.calcularMedia() = calcularMedia;


/*Micro desafio - Passo 7

Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
que contém o objeto curso. 

Substitua o conteúdo da propriedade lista de estudantes,

pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).*/

console.log('');
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('📌:::::::::::::::::::::::: Micro desafio - Passo 7 ::::::::::::::::::::::::::::::');
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('');
console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('||||||||||||||||||||- VOLTAMOS PRO ARQUIVO estudante.js -||||||||||||||||||||||||');
console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('');


console.log('================================================================================');
console.log('------- Armazenando os itens da lista de estudantes num array temporario -------');
console.log('================================================================================');

// armazenando os itens da lista de estudantes num array temporario
let temp = [];
lista.curso.listaDeEstudantes.forEach(alunosDoArray => {
    alunosDoArray.forEach(conteudoArray => {
    temp.push(conteudoArray);
    })})

console.log('================================================================================');
console.log('----------------- Removendo os itens da lista de estudantes --------------------');
console.log('================================================================================');

// Removendo os itens da lista de estudantes
for(let i=0;i <lista.tamArray;i++){
    listaAlunos.pop(i);
 }

 console.log(' ⬇️ Resultado ⬇️')
 console.log()
 console.log(listaAlunos)
 console.log()
 console.log(' ⬆️ Resultado ⬆️ ')

 console.log('================================================================================');
 console.log('|--------------- Preenchendo o array com o conteudo do array temp -------------|');
 console.log('================================================================================');

 // colocando os itens do Array temporario na lista de estudantes
 for(let i=0;i <lista.tamArray;i++){
    listaAlunos[i] = temp[i];
   
 }
 console.log(listaAlunos)

 console.log('================================================================================');
 console.log('|-------------------------- Testando os métodos -------------------------------|');
 console.log('================================================================================');


 console.log('');
console.log('================================================================================');
console.log('|----------------- Método Calcular Média ( teste com 3 alunos) ----------------|');
console.log('================================================================================');
console.log('');
console.log(listaAlunos[1].calcularMedia());
console.log(listaAlunos[5].calcularMedia());
console.log(listaAlunos[6].calcularMedia());
console.log('');
console.log('================================================================================');
console.log('|----------------- Método Adcionar Falta ( teste com 4 alunos)-----------------|');
console.log('|------------------------ adcionando 2 faltas para cada -----------------------|');
console.log('================================================================================');
console.log('');
console.log(listaAlunos[0].faltas());
console.log(listaAlunos[0].faltas());
console.log(listaAlunos[2].faltas());
console.log(listaAlunos[2].faltas());
console.log(listaAlunos[5].faltas());
console.log(listaAlunos[5].faltas());
console.log('');