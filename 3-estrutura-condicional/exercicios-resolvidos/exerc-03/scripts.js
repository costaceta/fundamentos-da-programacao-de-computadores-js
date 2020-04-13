/**
 * 1. exerc 03
 *
 * Faça um programa que receba dois números e mostre o maior
 */

 let num01 = prompt( 'Digite o primeiro número' );
 let num02 = prompt( 'Digite o segundo número' );

 num01 = parseInt( num01 );
 num02 = parseInt( num02 );

 if( num01 > num02 ) {

    alert(`O maior é: ${num01}`);

 } else if ( num02 > num01 ) {

   alert(`O maior é: ${num02}`);

 } else {

   alert(`São iguais!`);

 }
