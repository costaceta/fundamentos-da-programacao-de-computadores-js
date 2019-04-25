/**
 * 20. Faça um programa que receba a medida do ângulo formado
 * por uma escada apoiada no chão e encostada na parede e a
 * altura da parede onde está a ponta da escada. Calcule
 * e mostre a medida desta escada.
 */

var angulo = 90;
var altura = 10;
var radiano = angulo * 3.14 / 180;
var escada = altura / Math.sin(radiano);

console.log("O tamanho da escdada é: ", escada);

