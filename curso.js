
 const aluno = require('./estudantes.js');
 //const calcularMedia = require('./aluno.js');

 

/*Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).*/

let curso ={
    nomeDoCurso: 'Certified Tech Developer',
    notaAprovacao: 7,
    faltasMaximas: 7,
    listaDeEstudantes: [aluno.listaAlunos],

    /*Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curso.*/

    novoAluno: function(nomeAluno, faltasAluno, notasAluno){
        let addNovoAluno = new aluno.Aluno(nomeAluno, faltasAluno, notasAluno);
        aluno.listaAlunos.push(addNovoAluno);
    },

/*Crie um método para o objeto curso que receba um aluno (como parâmetro) e
retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
aprovação.*/

//aluno.Aluno.prototype.calcularMedia()



aprovaAluno: function(nome){
    curso.listaDeEstudantes.forEach(alunosDoArray => {
        alunosDoArray.forEach(conteudoArray => {
              if(conteudoArray.nomeAluno === nome){
                 if(conteudoArray.faltasAluno < this.faltasMaximas && (conteudoArray.notasAluno.reduce((total, nota) => total + nota)/4) >= this.notaAprovacao){
                   console.log(` O Aluno(a) ${nome} foi aprovado!`);
                   console.log(true);
                } else if (conteudoArray.faltasAluno >= this.faltasMaximas && (conteudoArray.notasAluno.reduce((total, nota) => total + nota)/4) >= ((this.notaAprovacao*10)/100 + this.notaAprovacao)) {
                    console.log(`Aluno(a) ${nome} foi aprovado pela regra 10%`);
                    console.log(true);
                }else {
                    console.log(` O Aluno(a) ${nome} foi Reprovado!`);
                      console.log(false);
                    }
            }  
    }) 
  }) /*
  if(!nome in curso.listaDeEstudantes){
  console.log(`${nome} não é aluno(a) do curso`);
}*/
},

/*Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
array de booleanos com os resultados se os alunos aprovaram ou não.*/

alunoAprovados: function(){
    let conteudoArray = [];
    curso.listaDeEstudantes.forEach(alunosDoArray => {
        alunosDoArray.forEach((conteudo, i) => {
            conteudoArray [i] = conteudo;
        })
    })
    let arrayAprova = [];
    let verMelhor = [];
    for(let cont = 0;cont < aluno.listaAlunos.length; cont++){  
     if(conteudoArray[cont].faltasAluno < this.faltasMaximas && (conteudoArray[cont].notasAluno.reduce((total, nota) => total + nota)/4) >= this.notaAprovacao){
        arrayAprova [cont] = true;
        verMelhor [cont] =`${conteudoArray[cont].nomeAluno} foi aprovado`;
     } else if (conteudoArray[cont].faltasAluno >= this.faltasMaximas && (conteudoArray[cont].notasAluno.reduce((total, nota) => total + nota)/4) >= ((this.notaAprovacao*10)/100 + this.notaAprovacao)) {
        arrayAprova [cont] = true;
        verMelhor [cont] =`${conteudoArray[cont].nomeAluno} foi aprovado`;
     }else {
        arrayAprova [cont] = false;
        verMelhor [cont] =`${conteudoArray[cont].nomeAluno} foi Reprovado`;
     }
   
}
console.log('');
console.log('=================================================================================');
console.log('|----------------------- Array de booleanos ------------------------------------|');
console.log('=================================================================================');
console.log('');
console.log(arrayAprova);
console.log('');
console.log('=================================================================================');
console.log('|------------- Mostrando os alunos aprovados/reprovados ------------------------|');
console.log('=================================================================================');
console.log('');
console.log(verMelhor);

}

} 
    console.log('📌:::::::: Micro desafio - Passo 3 e 4 ::::::::::::::::::::::::::::::::::::::::::');
    console.log('');
    console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
    console.log('||||||||||||||||||||||- ESTAMOS NO ARQUIVO curso.js -||||||||||||||||||||||||||||');
    console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
    console.log('|----------------------- Cadastrando Novos Alunos ------------------------------|');
    console.log('|--------------------------- (5 Novos Alunos)-----------------------------------|');
    console.log('=================================================================================');
    console.log('');
    curso.novoAluno('Bruno', 4, [10,9,5,6]);
    curso.novoAluno('Kauana', 3, [10,9,5,8]);
    curso.novoAluno('Gustavo', 5, [7,8,5,9]);
    curso.novoAluno('William', 2, [10,4,5,6]);
    curso.novoAluno('Rafael', 8, [10,2,8,6]);
    console.log('');
    console.log('=================================================================================');
    console.log(`|---------------- Nosso "Banco" tem ${aluno.listaAlunos.length} alunos cadastrados até o momento --------|`);
    console.log('|----------------------- Mostrando todos os Alunos Cadastrados -----------------|');
    console.log('=================================================================================');
    console.log('');
    console.log(curso.listaDeEstudantes);

    
    console.log('');
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
    console.log('📌:::::::::::::::::::::::::: Micro desafio - Passo 5 ::::::::::::::::::::::::::::');
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
    console.log('');
    console.log('=================================================================================');
    console.log('|----------------------- Aluno Aprovado? ---------------------------------------|');
    console.log('|--------------------------(Teste com 4 Alunos)---------------------------------|');
    console.log('|-------------(Se aluno não existir não retornar nada)--------------------------|');
    console.log('=================================================================================');
    console.log('');

 curso.aprovaAluno('Lauro');
 curso.aprovaAluno('Bruno');
 curso.aprovaAluno('Rafael');
 curso.aprovaAluno('William');

 console.log('');
 console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
 console.log('📌:::::::::::::::::::::: Micro desafio - Passo 6 ::::::::::::::::::::::::::::::::');
 console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('');
 curso.alunoAprovados();

 // pegando o tamnho da lista de estudantes
 let tamArray = aluno.listaAlunos.length;

 // Exportando o objeto curso e a variavel que recebeu o tamnho da lista de estudantes
 module.exports = {curso,tamArray};