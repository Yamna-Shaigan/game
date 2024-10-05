
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

document.getElementById('submit').addEventListener('click', checkGuess);

function checkGuess() {
  let userGuess = parseInt(document.getElementById('guess').value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById('result').innerHTML = 'Invalid guess!';
  } else {
    guessCount++;
    
    if (userGuess === numberToGuess) {
      document.getElementById('result').innerHTML = `You won! The number was ${numberToGuess}. It took you ${guessCount} guesses.`;
      document.getElementById('submit').disabled = true;
    } else if (userGuess < numberToGuess) {
      document.getElementById('result').innerHTML = 'Too low!';
    } else {
      document.getElementById('result').innerHTML = 'Too high!';
    }
  }
}

