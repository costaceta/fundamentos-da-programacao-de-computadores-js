/**
 * 1. exerc 07
 *
 * Faça um programa que receba quatro valores, I, A, B e C.
 * I é um valor inteiro e positivo e A, B e C são valores reais.
 * Escreva os números A, B e C obedecendo à tabela a seguir
 *
 *  Valor de I  | Forma de escrever
 *      1       | A, B e C em ordem crescente
 *      2       | A, B e C em ordem decrescente
 *      3       | O maior fica entre os outros dois números
 */

let i = prompt('Digite um inteiro entre 1 e 3:');
    i = parseInt(i);

    let a = prompt('Digite um número real:');
    let b = prompt('Digite mais um número real:');
    let c = prompt('Digite mais um número real:');

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

if( i === 1 ) {

    if( a < b && a < c  ) {
        if( b < c ) {
            alert(`${a} - ${b} - ${c}`);
        } else{
            alert(`${a} - ${c} - ${b}`);
        }
    }

    if( b < a && b < c  ) {
        if( a < c ) {
            alert(`${b} - ${a} - ${c}`);
        } else{
            alert(`${b} - ${c} - ${a}`);
        }
    }

    if( c < a && c < b  ) {
        if( b < a ) {
            alert(`${c} - ${b} - ${a}`);
        } else{
            alert(`${c} - ${a} - ${b}`);
        }
    }

} else if ( i === 2 ) {

    if( a < b && a < c  ) {
        if( b < c ) {
            alert(`${c} - ${b} - ${a}`);
        } else{
            alert(`${b} - ${c} - ${a}`);
        }
    }

    if( b < a && b < c  ) {
        if( a < c ) {
            alert(`${c} - ${a} - ${b}`);
        } else{
            alert(`${a} - ${c} - ${b}`);
        }
    }

    if( c < a && c < b  ) {
        if( b < a ) {
            alert(`${a} - ${b} - ${c}`);
        } else{
            alert(`${b} - ${a} - ${c}`);
        }
    }

} else if ( i === 3 ) {

    if( a > b && a > c ) {
        alert(`${b} - ${a} -${c}`);
    }

    if( b > a && b > c ) {
        alert(`${a} - ${b} -${c}`);
    }

    if( c > a && c > b ) {
        alert(`${a} - ${c} -${n}`);
    }

}