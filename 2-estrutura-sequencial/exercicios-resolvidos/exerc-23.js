/**
 * 23. Faça um programa que receba um número real, calcule e mostre:
 *
 * a) a parte inteira desse número
 * b) a parte fracionária desse número
 * c) o arredondamento desse número
 */

var num = 10.14;
var i = Math.trunc(num);// Retorna a parte inteira do número 
var f = num - i; // Retorna a parte fracionaria de um número
var a = num.toFixed(); // Aredonda um número

console.log("A parte inteira do número é: ", i);
console.log("A parte fracionária do número é: ", f);
console.log("O arredondamento do número é: ", a);

