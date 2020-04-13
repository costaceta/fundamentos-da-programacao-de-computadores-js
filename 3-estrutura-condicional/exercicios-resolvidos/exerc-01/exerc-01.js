/**
 * 1. exerc 01
 */

// Recebe as notas
var n_tl = prompt("Qual a nota do seu trabalho de laboratório? ", "Digite aqui");
var n_as = prompt("Qual a nota da sua avaliação semestral?", "Digite aqui");
var n_ef = prompt("Qual a nota do seu exame final?", "Digite aqui");

// Pesos das notas
var p_tl = 2;
var p_as = 3;
var p_ef = 5;

// Calculo da media ponderada
var soma = n_tl * p_tl + n_as * p_as + n_ef * p_ef;
var pesos = p_as + p_as + p_ef;
var media = soma / pesos;

var media = Math.round(media);// Arredonda para o inteiro mais prox

alert("Sua média é: " + media);

if (media >= 8 && media <= 10) {
    alert("Parabéns você obteve conceito A");
} else if (media >= 7 && media < 8) {
    alert("Parabéns você obteve conceito B");
} else if (media >= 6 && media < 7) {
    alert("Parabéns você obteve conceito C");
} else if (media >= 5 && media < 6) {
    alert("Você obteve conceito D, precisa estudar mais um pouco");
} else if (media >= 0 && media < 5) {
    alert("Você é burro obteve conceito E");
}


