/**
 * 1. exerc 08
 *
 * Faça um programa que mostre o menu de opções a seguir, receba a opção do usuário e os dados
 * necessários para executar cada operação
 *
 * Menu de opções
 * 1. Somar dois números
 * 2. Raiz quadrada de um número
 * Digite a opção desejada
 */

let menu = prompt(`
    Menu de opções
    1. Somar dois números
    2. Raiz quadrada de um número
    Digite a opção desejada
`)

menu = parseInt( menu );

if ( menu === 1 ) {
    let num01 = prompt( 'Digite o primeiro número!' );
    let num02 = prompt( 'Digite o segundo número!' );

    num01 = parseInt( num01 );
    num02 = parseInt( num02 );

    let soma = num01 + num02;

    alert( `O resultado da soma é: ${soma}` );
} else if ( menu === 2 ) {
    let num = prompt( 'Digite o número para o cálculo da raiz:' );
        num = parseInt( num );

    let raiz = Math.sqrt( num );

    alert(`A raiz quadrada do número é: ${raiz}`);

}