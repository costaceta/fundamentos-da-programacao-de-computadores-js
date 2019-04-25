/**
 * 24. Faça um programa que receba uma hora formada por hora e minutos
 * (um número real), calcule e mostre a hora digitada apenas em minutos.
 * Lembre-se que:
 *
 * * Para quatro e meia deve-se digitar: 4.30;
 * * Os minutos vão de 0 a 60
 */

var num = 7.45;
var i = Math.trunc(num);// Retorna a parte inteira do número 
var f = (num - i) * 100; // Retorna a parte fracionaria de um número
var f = Math.round(f); // Arredonda a parte fracionaria

var convert = i * 60; // Converte a parte inteira para min
var hFinal = convert + f;

console.log(hFinal);
