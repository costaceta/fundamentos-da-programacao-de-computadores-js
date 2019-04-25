/**
 * 22. Sabe-se que o quilowatt de energia custa um quinto do salário mínimo.
 * Faça um programa que receba o valor do salário mínimo e a quantidade de quilowatts consumida por uma residência.
 *  Calcule e mostre:
 *
 * a) O valor, em reais, de cadas quilowatt
 * b) O valor, em reais, a ser pago por essa residência
 * c) O valor, em reais, a ser pago com desconto de 15%
 */

var sal = 1000;
var wattconsu = 10;

var wattValor = sal / 5;
var valorPago = wattValor * wattconsu;
var desconto = valorPago * 15 / 100;
var valorComDes = valorPago - desconto;

console.log("O valor de cada quilowatt é: ", wattValor);
console.log("O valor ser pago pela residência é: ", valorPago);
console.log("O valor com 15% de desconto é: ", valorComDes);
