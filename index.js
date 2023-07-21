const prompt = require('prompt-sync')();
const colours = require('ansi-colors');
const rps = () => {
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'rock';
            break;
          case 1:
            return 'scissors';
            break;
          case 2:
            return 'paper';
            break;
            };
      }

const userRps = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors'){
        return userInput;
    } 
  }

while (userRps) {
    const userInput = prompt('rock, paper, scissors: ');  
    if (userRps(userInput) === rps()) {
        console.log(colours.yellow('Draw')) ;
    } else if (userRps(userInput) === 'rock') {
        if (rps() === 'paper') {
        console.log(colours.red('Loss'));
        } else {
        console.log(colours.green('Win'));
        }
    } else if (userRps(userInput) === 'paper'){
        if (rps() === 'scissors') {
        console.log(colours.red('Loss'));
        }else {
        console.log(colours.green('Win'));
        }
    } else if (userRps(userInput) === 'scissors') {
        if (rps() === 'rock') {
        console.log(colours.red('Loss'));
        } else {
        console.log(colours.green('Win'));
        }
    }
}


