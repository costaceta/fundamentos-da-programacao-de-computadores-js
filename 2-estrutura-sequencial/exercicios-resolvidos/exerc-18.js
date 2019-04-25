/**
 * 18. Pedro comprou um saco de ração com peso em quilos. Pedro
 * possui dois gatos para os quais fornece a quantidade de
 * ração em gramas. Faça um programa que receba o peso do
 * aco de ração e a quantidade de ração fornecida para cada
 * gato. Calcule e mostre quanto restará de ração no saco
 * após cinco dias.
 */

var p_saco = 1; // Em Kg
var q_gat1 = 100; // Em Gramas
var q_gat2 = 200; // Em Gramas

var p_saco_gra = p_saco * 1000;
var saco_rest = p_saco_gra - q_gat1 - q_gat2;

console.log("Restou no saco: ", saco_rest);