class usuario{
  constructor(email,senha){
    this.email = email;
    this.senha = senha;
    this.isAdmin;
  }
  isAdmin(){
    this.isAdmin = false;
    console.log(this.isAdmin);
  }
}

class admin extends usuario{
  super(){
  }
  isAdmin(){
    this.isAdmin = true;
    console.log(this.isAdmin);
  }
}

const User1 = new usuario('email@teste.com', 'senha123');
const Adm1 = new admin('email@teste.com', 'senha123');
User1.isAdmin() // false
Adm1.isAdmin() // true'
