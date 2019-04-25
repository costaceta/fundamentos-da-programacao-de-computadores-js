/**
 * 15. O custo ao consumidor de um carro novo é a soma do preço
 * de fábrica com o percentual de lucro do distribuidor e dos
 * impostos aplicados ao preço de fábrica.
 *
 * Faça um programa que receba o preço de fábrica de um veículo,
 * o percentual de lucro do distribuidor e o percentual de
 * impostos. Calcule e mostre.
 *
 * a) O valor correspondente ao lucro do distribuidor;
 * b) o valor correspondente aos impostos;
 * c) o preço final do veículo;
 */

var pFabrica = 1000;
var pLucro = 10;
var vImpost = 5;

var lucro = pFabrica * pLucro / 100;
var impostos = pFabrica * vImpost / 100;
var precoVeiculo = pFabrica + lucro + impostos;

console.log("O lucro do distribuidor é: ", lucro);
console.log("O valor a ser pago de impostos é: ", impostos);
console.log("O valor final do veículo é: ", precoVeiculo);