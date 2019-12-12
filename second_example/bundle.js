"use strict";

// USING OPERATOR MAP
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (usuarios) {
  return usuarios.idade;
});
console.log("MAP EXAMPLE");
console.log(idades); // USING FILTER

var filter = usuarios.filter(function (usuarios) {
  return usuarios.empresa == "Rocketseat" && usuarios.idade >= 18;
});
console.log("FILTER EXAMPLE");
console.log(filter); // USING FIND

var find = usuarios.find(function (usuarios) {
  return usuarios.empresa === "Google";
});
console.log("FIND EXAMPLE"); // RESPONSE (UNDEFINED) CAUSE DON'T HAVE (EMPRESA) = "Google"

console.log(find);
var multiply = usuarios.map(function (usuarios) {
  usuarios.idade *= 2;
  return usuarios;
});
var filtering = multiply.filter(function (multiply) {
  return multiply.idade <= 50;
});
console.log(filtering);
