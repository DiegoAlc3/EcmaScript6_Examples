// USING OPERATOR MAP

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const idades = usuarios.map(usuarios => usuarios.idade);
 console.log("MAP EXAMPLE")
 console.log(idades);

 // USING FILTER

 const filter = usuarios.filter(usuarios =>{
   return usuarios.empresa == "Rocketseat" && usuarios.idade >= 18
 } )
 console.log("FILTER EXAMPLE")
 console.log(filter)

 // USING FIND

 const find = usuarios.find(usuarios =>{
   return usuarios.empresa === "Google"
 })
 console.log("FIND EXAMPLE") // RESPONSE (UNDEFINED) CAUSE DON'T HAVE (EMPRESA) = "Google"
 console.log(find);

 const multiply = usuarios.map(usuarios =>{
   usuarios.idade *= 2;
   return usuarios;
   
 })
 
 const filtering = multiply.filter(multiply =>{
  return multiply.idade <=50;
  }
 )
 console.log(filtering);

