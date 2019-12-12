"use strict";

// CONVERTING CODE TO ARROW FUNCTIONS
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
}); // SECOND EXAMPLE
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostrarIdade = function mostrarIdade(usuario) {
  return usuario.idade;
};

console.log(mostrarIdade(usuario));
