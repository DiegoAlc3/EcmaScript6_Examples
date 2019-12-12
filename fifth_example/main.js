// USING REST OPERATOR

function soma(...x){
  const soma = x.reduce(function(total,next){
    return total+next;
  })
  return soma;
}
console.log(soma(1,2,3,4,5,6,7));

// USING SPREAD OPERATOR

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

 const usuario2 = {...usuario,nome:"Gabriel"};
 const usuario3 = {...usuario,nome:"Leandro"};

 console.log(usuario2);
 console.log(usuario3);
