/**
 * 5. Faça um programa que receba o salário de um funcionário e
 * o percentual de aumento, calcule e mostre o valor do aumento
 * e o novo salário.
 */

var sal = 2000;
var pecen = 10;

var aumento = (sal * pecen) / 100;
sal += aumento;

console.log("Seu aumento foi de: ", aumento);
console.log("Seu novo salário é: ", sal);