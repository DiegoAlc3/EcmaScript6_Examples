import axios from 'axios';

async function getUserFromGithub(user){
  try{
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  }catch(err){
    console.log('Usuario nao existe');
  }
}
getUserFromGithub('diegoalc3')
getUserFromGithub('diegoalc33232323')