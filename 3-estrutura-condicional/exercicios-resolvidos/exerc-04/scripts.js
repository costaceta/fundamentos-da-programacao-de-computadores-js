/**
 * 1. exerc 04
 *
 * Faça um programa que receba três números e mostre-os em ordem crescente
 */

 let num01 = prompt('Digite o primeiro número!');
 let num02 = prompt('Digite o segundo número!');
 let num03 = prompt('Digite o terceiro número!');

 num01 = parseInt( num01 );
 num02 = parseInt( num02 );
 num03 = parseInt( num03 );

 if( num01 < num02 && num01 < num03 ) {
    if( num02 < num03 ) {
        alert( `${num01} - ${num02} - ${num03}` );
    } else {
        alert( `${num01} - ${num03} - ${num02}` );
    }
 }

 if( num02 < num01 && num02 < num03 ) {
     if( num01 < num03 ) {
        alert( `${num02} - ${num01} - ${num03}` );
     } else {
        alert( `${num02} - ${num03} - ${num01}` );
     }
 }

 if( num03 < num01 && num03 < num02 ) {
     if( num01 < num02 ) {
         alert(`${num03} - ${num01} - ${num02}`);
     } else {
        alert(`${num03} - ${num02} - ${num01}`);
     }
 }