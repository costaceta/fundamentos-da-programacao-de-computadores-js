/**
 * 1. exerc 09
 *
 * Faça um programa que mostre a data e a hora do sistema nos seguintes formatos:
 * dia/mês/ano - mês por extenso e hora:minuto
 */

 let data = new Date();
 let dia  = data.getDate();
 let mes  = data.getMonth() + 1;
 let ano  = data.getFullYear();
 let hora = data.getHours();
 let min  = data.getMinutes();
 
 if( mes === 1 ) {
     mes_txt = 'Janeiro';
 } else if ( mes === 2 ) {
    mes_txt = 'Fevereiro';
 } else if ( mes === 3 ) {
    mes_txt = 'Março';
 } else if ( mes === 4 ) {
    mes_txt = 'Abril';
 } else if ( mes === 5 ) {
    mes_txt = 'Maio';
 } else if ( mes === 6 ) {
    mes_txt = 'Junho';
 } else if ( mes === 7 ) {
    mes_txt = 'Julho';
 } else if ( mes === 8 ) {
    mes_txt = 'Agosto';
 } else if ( mes === 9 ) {
    mes_txt = 'Setembro';
 } else if ( mes === 10 ) {
    mes_txt = 'Outubro';
 } else if ( mes === 11 ) {
    mes_txt = 'Novembro';
 } else if ( mes === 12 ) {
    mes_txt = 'Dezembro';
 }

 alert( 'Data atual: ' + dia + '/' + mes + '/' + ano + ' - ' + mes_txt + ' - ' + hora + ':' + min );