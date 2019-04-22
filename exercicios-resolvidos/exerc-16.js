/**
 * 16. Faça um programa que receba o número de horas trabalhadas
 * e o valor do salário mínimo.
 * Calcule e mostre o salário a receber seguindo as regras abaixo:
 *
 * a) A hora trabalhada vale a metade do salário mínimo;
 * b) O salário bruto equivale ao número de horas trabalhadas multiplicado
 * pelo valor da hora trabalhada.
 * c) O imposto equivale a 3% do salário bruto.
 * d) o salário a receber equivale ao salário bruto menos o imposto.
 */

var horas_t = 44;
var sal_min = 1000;

var hora_t = sal_min / 2;
var sal_bruto = hora_t * horas_t;
var imposto = sal_bruto * 3 / 100;
var sal = sal_bruto - imposto;

console.log("O salário a receber é: ", sal);