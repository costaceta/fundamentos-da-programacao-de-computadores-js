/**
 * 11. Faça um programa que receba um número positivo e maior
 * que zero, calcule e mostre:
 * a) o número digitado ao quadrado;
 * b) o número digitado ao cubo;
 * c) a raiz quadrada do número digitado;
 * d) a raiz cúbica do número digitado;
 */

var num = 8;
var quad = Math.pow(num, 2); // Ou num * num
var cubo = Math.pow(num, 3);
var rqua = Math.sqrt(num);
var rcub = Math.cbrt(num);

console.log(`${num} ao quadrado é: ${quad}`);
console.log(`${num} ao cubo é: ${cubo}`);
console.log(`A raiz quadrada de ${num} é: ${rqua}`);
console.log(`A raiz cúbica de ${num} é: ${rcub}`);