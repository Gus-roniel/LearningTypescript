/*
Qualquer tipo satisfaz a variável;

Evitar utilizar pois vai contra os princípios do typescript

Usar apenas em dois casos:
  1 - tipo de dado realmente nao importa
  2 - arrays com dados de múltiplos tipos
*/

const arr1: any = [1, 2, "Gustavo", true]; //aceita qualquer tipo
