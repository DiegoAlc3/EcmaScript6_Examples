const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
  // function umPorSegundo() { WITHOUT ASYNC/AWAIT FUNCTION
  //   delay().then(() => {
  //     console.log('1s');
  //     delay().then(() => {
  //       console.log('2s');
  //       delay().then(() => {
  //         console.log('3s');
  //       });
  //     })
  //   });
  // }
  async function umPorSegundo(){ // WITH ASYNC/AWAIT FUNCTION
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
  }
umPorSegundo();

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