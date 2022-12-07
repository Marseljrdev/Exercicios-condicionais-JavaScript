// 11. Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0                      A
//       Entre 7.5 e 9.0                        B
//       Entre 6.0 e 7.5                        C
//       Entre 4.0 e 6.0                        D
//       Entre 4.0 e zero                      E
//     O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.


const disciplina = prompt("Digite o nome da disciplina: ");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let mediaFinal = parseFloat(nota1 + nota2) / 2;




if( mediaFinal >= 9.0 || mediaFinal <= 10.0 ){

    alert("APROVADO!!");
    
    console.log('Discipla: ' + disciplina);
    console.log('A primeira nota foi: ' + nota1);
    console.log('A segunda nota foi: ' + nota2);
    console.log('A media final foi: ' + mediaFinal.toFixed(1));
    console.log('O conceito foi: A');

}else if( mediaFinal >= 7.5 || mediaFinal < 9.0 ){

    alert("APROVADO!!");
    
    console.log('Discipla: ' + disciplina);
    console.log('A primeira nota foi: ' + nota1);
    console.log('A segunda nota foi: ' + nota2);
    console.log('A media final foi: ' + mediaFinal.toFixed(1));
    console.log('O conceito foi: B');


}else if( mediaFinal >= 6.0 || mediaFinal < 7.5 ){

    alert("APROVADO!!");
    
    console.log('Discipla: ' + disciplina);
    console.log('A primeira nota foi: ' + nota1);
    console.log('A segunda nota foi: ' + nota2);
    console.log('A media final foi: ' + mediaFinal.toFixed(1));
    console.log('O conceito foi: C');

}else if( mediaFinal >= 4.0 || mediaFinal < 6.0 ){

    alert("REPROVADO!!");
    
    console.log('Discipla: ' + disciplina);
    console.log('A primeira nota foi: ' + nota1);
    console.log('A segunda nota foi: ' + nota2);
    console.log('A media final foi: ' + mediaFinal.toFixed(1));
    console.log('O conceito foi: D');


}else if( mediaFinal >= 0.0 || mediaFinal < 4.0 ){

    alert("REPROVADO!!");
    
    console.log('Discipla: ' + disciplina);
    console.log('A primeira nota foi: ' + nota1);
    console.log('A segunda nota foi: ' + nota2);
    console.log('A media final foi: ' + mediaFinal.toFixed(1));
    console.log('O conceito foi: E');


}