/**
 * 19. Cada degrau de uma escada tem X de altura. Faça um programa
 * que receba essa altura e a altura que o usuário deseja
 * alcançar subindo a escada. Calcule e mostre quantos degraus
 * o usuário deverá subir para atingir seu objetivo, sem se
 * preocupar com a altura do usuário.
 */

var a_degrau = 50;
var a_usuario = 1000;

var q_degral = a_usuario / a_degrau;

console.log("O usuário deverá subir: ", q_degral);