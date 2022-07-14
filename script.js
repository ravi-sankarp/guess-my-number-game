'use strict';

let randNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randNumber;
let score = 20;
let highscore = 0;
let guessNumber;
let clickButton = document.querySelector('.check');
let playAgain = document.querySelector('.again');

clickButton.addEventListener('click', () => {
    guessNumber = Number(document.querySelector('.guess').value);

    // if there is no input
    if (!guessNumber) {
        document.querySelector('.message').textContent = "Enter a number to start playing....";
    }
        //if the guess is correct
    else if (guessNumber === randNumber) {
        document.querySelector('.message').textContent = "You guessed correctly";
        document.querySelector('body').style = `background-color:#60b334`;
        document.querySelector('.number').style = `width:30rem`;
        document.querySelector('.number').textContent = randNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //if the guess is not correct
   else if (guessNumber!== randNumber){
       document.querySelector('.message').textContent= guessNumber>randNumber?"too high....":"too low....";
       if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('body').style = `background-color:red`;
        document.querySelector('.message').textContent = "You lost the game...";
    }
   }
   
   
    


});
playAgain.addEventListener('click', () => {
    score = 20;
    randNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style = `background-color:#222`;
    document.querySelector('.number').style = `width:15rem`;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent = 'start guessing....';
    document.querySelector('.guess').value = '';

});