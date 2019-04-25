
/**
 * Faça um programa que receba o salário-base de um funcionário,
 * calcule e mostre o seu salário a receber, sabendo-se
 * que esse funcionário tem gratificação de R$ 50,00
 * e paga imposto de 10% sobre o salário-base.
 */

var salBase = 1000;
var grat = 50;
var impost = (salBase * 10) / 100;

var salLiq = salBase + grat - impost;

console.log("Salário a receber é: ", salLiq);