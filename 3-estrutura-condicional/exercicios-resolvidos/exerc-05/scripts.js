/**
 * 1. exerc 05
 *
 * Faça um programa que receba três números obrigatoriamente em ordem crescente e
 * um quarto número que não siga esta regra. Mostre, em seguida, os quatro números
 * em ordem decrescente
 */

alert('Digite 3 números em ordem crescente');

let num01 = prompt('Digite o primeiro número!');
let num02 = prompt('Digite o segundo número!');
let num03 = prompt('Digite o terceiro número!');

alert('Agora preciso de um número qualquer');

let num04 = prompt('Digite agora um número qualquer');

num01 = parseInt( num01 );
num02 = parseInt( num02 );
num03 = parseInt( num03 );
num04 = parseInt( num04 );

if( num04 > num03 ) {
    alert(`${num04} - ${num03} - ${num02} - ${num01}`);
}

if( num04 > num01 && num04 < num02 ) {
  alert(`${num03} - ${num02} - ${num04} - ${num01}`);
}

if( num04 > num02 && num04 < num03 ) {
    alert(`${num03} - ${num04} - ${num02} - ${num01}`);
}

if( num04 < num01 ) {
    alert(`${ num03 } - ${ num02 } - ${ num01 } - ${ num04 } `);
}
