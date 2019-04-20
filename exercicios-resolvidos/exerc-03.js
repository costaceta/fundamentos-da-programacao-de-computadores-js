/**
 * 3. Faça um programa que receba três notas e seus respectivos
 * pesos, calcule e mostre a média ponderada dessas notas.
 */

var n1 = 10;
var n2 = 7;
var n3 = 5;

var p1 = 3;
var p2 = 2;
var p3 = 1;

var mp = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

console.log(mp.toFixed(2));