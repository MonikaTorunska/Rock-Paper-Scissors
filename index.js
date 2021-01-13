const choiceButtons = document.querySelectorAll(".button-section button")
const resultMessage = document.querySelector('.result-message')
const playerPoints = document.querySelector('.playerScores');
const computerPoints = document.querySelector('.computerScores');
const resetButton = document.querySelector('.reset');

let choices = ['Rock', 'Paper', 'Scissors'];
let playerScores = 0;
let computerScores = 0;

function getRandomComputerChoice() {
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
};

function playRound(playerSelection, computerSelection){
  if(playerSelection === 'Rock') {
    if(computerSelection === 'Paper'){
      computerPoints.textContent = ++computerScores;
      resultMessage.textContent =  'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors'){
      playerPoints.textContent = ++playerScores;
      resultMessage.textContent = 'You Win! Rock beats Scissors';
    } else {
      resultMessage.textContent  = "It's a tie!";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors'){
      computerPoints.textContent = ++computerScores;
      resultMessage.textContent = 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      playerPoints.textContent = ++playerScores;
      resultMessage.textContent  = 'You win! Paper beats Rock';
    } else {
      resultMessage.textContent = "It's a tie!"
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      computerPoints.textContent = ++computerScores;
      resultMessage.textContent = 'You lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper'){
      playerPoints.textContent = ++playerScores;
      resultMessage.textContent = 'You win! Scissors beats Paper';
    } else {
      resultMessage.textContent= "It's a tie!";
    }
  }

};

function startGame() {
  choiceButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const choice = event.target.dataset.choice;
      const compChoice = getRandomComputerChoice();
      playRound(choice, compChoice)
    });
  });
}
startGame();

function resetGame() {
  resetButton.addEventListener('click', () =>
    location.reload());  
}
resetGame();