'use strict';

const rand = Math.trunc(Math.random() * 100) + 1;

let totalGuess = 0;
let gameState = true;


if (localStorage.getItem("highScore") === null) {
   localStorage.setItem('highScore', String(0))
    document.querySelector('.high-score').textContent = "🏆 High Score: 0";
}else{
    document.querySelector('.high-score').textContent = "🏆 High Score: " + localStorage.getItem('highScore');
}

document.querySelector('.g-check').addEventListener('click', function () {
    if(gameState){
        const guess = Number(document.querySelector('.g-input').value);
        document.querySelector('.display').textContent = guess;
        totalGuess += 1;
        if (guess == rand){
            document.querySelector('.g-button').textContent = "Congrats! You WIN 🏆🏆";
            document.querySelector('.g-button').style["color"] = "#08ff00";
            document.querySelector('.before').style.display = "block";
            document.querySelector('.total-guess').textContent = "❓ Total Guesses: " + String(totalGuess);
            if(totalGuess < localStorage.getItem('highScore')){
                localStorage.setItem('highScore', String(guess))
                document.querySelector('.high-score').textContent = "🏆 High Score: " + String(totalGuess);
            }
            document.querySelector('.check-button').textContent = "Replay!";
            gameState = false;
        }else if(guess < rand){
            document.querySelector('.g-button').textContent = "The number is greater than your guess!";
            document.querySelector('.g-button').style["color"] = "red";
            document.querySelector('.total-guess').textContent = "❓ Total Guesses: " + String(totalGuess);
        }else if(guess > rand){
            document.querySelector('.g-button').textContent = "The number is smaller than your guess!";
            document.querySelector('.g-button').style["color"] = "red";
            document.querySelector('.total-guess').textContent = "❓ Total Guesses: " + String(totalGuess);
        }
    }else{
        window.location.reload();
    }    
})


