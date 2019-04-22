/**
 * 13. Sabe-se que:
 * 1 pé = 12 polegadas
 * 1 jarda = 3 pés
 * 1 milha = 1.760 jardas
 *
 * Faça um programa que receba uma medida em pês,
 * faça as conversões a seguir e mostre os resultados.
 *
 * a) polegadas;
 * b) jardas;
 * c) milhas;
 */

var medidaEmPes = 2;
var polegadas = medidaEmPes * 12;
var jardas = medidaEmPes / 3;
var milha = jardas / 1.760;

console.log("A medida em Polegadas é: ", polegadas);
console.log("A medida em Jardas é: ", jardas);
console.log("A medida em Milhas é: ", milha);