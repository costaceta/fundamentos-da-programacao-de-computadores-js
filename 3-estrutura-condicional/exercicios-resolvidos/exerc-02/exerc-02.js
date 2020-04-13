/**
 * 1. exerc 02
 *
 * Faça um programa que receba três notas de um aluno, calcule e mostre a
 * média aritmética ea mensagem que segue a tabela abaixo.
 * Para alunos de exame, calcule e mostre a nota que deverá ser
 * tirada no exame para aprovação, considerando que a média no exame é 6,0
 */

 let nota01 = prompt( 'Digite a primeira nota' );
 let nota02 = prompt( 'Digite a segunda nota' );
 let nota03 = prompt( 'Digite a terceira nota' );

 nota01 = parseInt( nota01 );
 nota02 = parseInt( nota02 );
 nota03 = parseInt( nota03 );

 let media = ( nota01 + nota02 + nota03 ) / 3;

 if( media >= 0 && media < 3 ) {

     alert( `Média é: ${media} - Reprovado` );

 } else if ( media >= 3 && media < 7 ) {

    let pontos_a_alcancar = 12 - media;
    alert( `Média é: ${media} - Exame faltam ${pontos_a_alcancar} para atingir a média` );

 } else if ( media >= 7 && media <= 10 ) {

    alert(`Média é: ${media} - Aprovado`);

 }
