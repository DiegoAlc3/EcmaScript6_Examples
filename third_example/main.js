// CONVERTING CODE TO ARROW FUNCTIONS

// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10)

// SECOND EXAMPLE

// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);

const usuario = { nome: 'Diego', idade: 23 };
const mostrarIdade = usuario => usuario.idade;
mostrarIdade(usuario);

//THIRD EXAMPLE

// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);
// const nome = "Diego";
// const idade = 23;

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome,idade=18)=> {nome, idade};
mostraUsuario(nome, idade);
mostraUsuario(nome);

