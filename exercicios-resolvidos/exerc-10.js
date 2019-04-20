/**
 * 10. Faça um programa que calcule e mostre a área de um círculo.
 * Sabe-se que: Área = PI R²
 */

const PI = Math.PI;
let raio = 10;
let area = PI * Math.pow(raio, 2);

console.log(area.toFixed(2));