const prompt = require('prompt-sync')({sigint: true})
const colours = require('ansi-colors')

//random computer choice
function computerRps() {
    switch(Math.floor(Math.random()*3)) {
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

// player choice
function userRps (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors'){
        return userInput;
    } 
  }

// win, loss or draw
function whoWins(userRps, computerRps) {
    let result
    if (userRps === computerRps) {
        result = colours.yellow('Draw')
    } else if (userRps === 'rock') {
        if (computerRps === 'paper') {
            result = colours.red('You lose')
        } else {
            result = colours.green('You win')
        }
    } else if (userRps === 'paper') {
        if (computerRps === 'scissors') {
            result = colours.red('You lose')
        } else {
            result = colours.green('You win')
        }
    } else if (userRps === 'scissors') {
        if (computerRps === 'rock') {
            result = colours.red('You lose')
        } else {
            result = colours.green('You win')
        }
    }
    return result;
}

//score
function score() {
    let scores = {
        wins: 0, 
        loses: 0, 
        draws: 0
    };

    if (whoWins === 'You win') {
        scores.wins ++;
    } else if (whoWins === 'You lose') {
        scores.loses ++;
    } else if (whoWins === 'Draw') {
        scores.draws ++;
    }
    return scores;
}

while (userRps){
const userInput = prompt('Rock, paper or scissors: ')
console.log(whoWins(userInput, computerRps()));
const records = prompt('See scores? y / n: ')
if (records === 'y') {
    console.log(score());
}
}
