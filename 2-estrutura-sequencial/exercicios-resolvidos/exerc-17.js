/**
 * 17. Um trabalhador recebeu seu salário e o depositou em
 * sua conta corrente bancária.
 * Esse trabalhador emitiu dois cheques e agora deseja saber
 * seu lado atual. Sabe-se que cada operação bancária
 * de retirada paga CPMF de 0,38% e o saldo inicial da
 * conta está zerado.
 */

var sal = 1000;
var cheque1 = 10
var cheque2 = 20;

var cpmf1 = cheque1 * 0.38 / 100;
var cpmf2 = cheque2 * 0.38 / 100;

var sal_atual = sal - cheque1 - cheque2 - cpmf1 - cpmf2;

console.log("O saldo em conta é: ", sal_atual);