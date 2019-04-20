/**
 * 6. Faça um programa que receba o salário-base de um funcionário,
 * calcule e mostre o salário a receber, sabendo-se que
 * esse funcionário tem gratificação de 5% sobre o salário-base
 * e paga imposto de 7% sobre o salário-base.
 */

var salbase = 1000;
var gratificacao = (salbase * 5) / 100;
var imposto = (salbase * 7) / 100;
var salLiquido = (salbase + gratificacao) - imposto;

console.log("Seu salário a receber é: ", salLiquido);