/**
 * 21. Faça um programa para calcular e mostrar a que distância deve estar uma escada da
 * parede. O usuário deve fornecer o tamanho da escada e a altura em que deseja pregar o 
 * quadro.
 * 
 * Lembre-se de que o tamanho da escada deve ser maior que a altura que se deseja alcançar
 */

var tam = 100;
var alt = 3;
var dis = Math.sqrt(Math.pow(tam, 2) - Math.pow(alt, 2));

console.log("A distância da escada deve ser: ", dis);