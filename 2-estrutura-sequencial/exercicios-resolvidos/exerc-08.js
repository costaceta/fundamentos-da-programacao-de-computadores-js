
/**
 * 8. Faça um programa que receba o valor de um depósito
 * e o valor da taxa de juros, calcule e mostre o valor
 * do rendimento e o valor total depois do rendimento.
 */

var dep = 200;
var taxa = 10;
var rend = dep * taxa / 100;
var total = dep + rend;

console.log(`O rendimento foi: ${rend} reais`);
console.log(`O valor total com rendimento é: ${total}`);