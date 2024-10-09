let computerMove = ''; // Global Variable to store the computer's choice
let result = ''; // Global Variable to store the game result

// Retrieve score from localStorage or initialize to 0
const score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Loses: 0,
  Ties: 0
};

// Get the score display element from the HTML
const scoreDisplay = document.querySelector('.js-score');

// Get the computer move display element from the HTML
const moveDisplay = document.querySelector('.js-moves');

// Function to display the current score on the webpage
function displayScore() {
  scoreDisplay.innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`;
}

// Function to display the computer moves
function displayMoves() {
  moveDisplay.innerHTML = `Computer Picked: ${computerMove}`; // Fixed to properly display the move
}

// Get the result display elememnt from html
const display = document.querySelector('.js-result');

// Function to show the score in the screen
function showScore(){
  display.innerHTML = `Result of the game is : ${result}`
}

// Call displayScore initially to show current score on page load
displayScore();

// Function to decide the computer's move randomly
function PickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }
}

// Function for the player choosing Rock
function rock() {
  PickComputerMove(); // Get the computer's move
  console.log("Computer picked: " + computerMove); // Debug log for visibility

  // Determine the result of the game
  if (computerMove === 'Rock') {
    result = 'Tie';
  } else if (computerMove === 'Paper') {
    result = 'You Lose';
  } else {
    result = 'You Won';
  }

  updateScore(); // Update the score based on the result
  console.log(`You picked rock. Computer picked ${computerMove}. ${result}.`); // Show the result
  displayScore(); // Update the displayed score after the game
  showScore();   // Display the result to computer screen
  displayMoves(); // Show the computer's move
}

// Function for the player choosing Paper
function paper() {
  PickComputerMove();
  console.log("Computer picked: " + computerMove);

  if (computerMove === 'Rock') {
    result = 'You Won';
  } else if (computerMove === 'Paper') {
    result = 'Tie';
  } else {
    result = 'You Lose';
  }

  updateScore();
  console.log(`You picked paper. Computer picked ${computerMove}. ${result}.`);
  displayScore();   // Display the score to the screen
  showScore();   // Display the result to the computer screen
  displayMoves(); // Show the computer's move
}

// Function for the player choosing Scissors
function scissor() {
  PickComputerMove();
  console.log("Computer picked: " + computerMove);

  if (computerMove === 'Rock') {
    result = 'You Lose';
  } else if (computerMove === 'Paper') {
    result = 'You Won';
  } else {
    result = 'Tie';
  }

  updateScore();
  console.log(`You picked scissor. Computer picked ${computerMove}. ${result}.`);
  displayScore();    // Display the score the score to screen
  
  showScore();    // Display the result to computer screen
  displayMoves(); // Show the computer's move
}

// Function to update the score based on the result
function updateScore() {
  if (result === 'You Won') {
    score.Wins += 1; // Increment wins
  } else if (result === 'Tie') {
    score.Ties += 1; // Increment ties
  } else if (result === 'You Lose') {
    score.Loses += 1; // Increment losses
  }

  // Save updated score to localStorage
  localStorage.setItem('score', JSON.stringify(score));
}

// Function to reset the score to zero
function reset() {
  const defaultScore = {
    Wins: 0,
    Loses: 0,
    Ties: 0
  };

  // Reset the score in localStorage
  localStorage.setItem('score', JSON.stringify(defaultScore));

  // Update the score variable to match the reset value
  Object.assign(score, defaultScore); // Synchronize the score variable with the reset value

  console.log(JSON.parse(localStorage.getItem('score'))); // Debug log to confirm reset
  displayScore(); // Update displayed score to show reset values
 
}
function applyStyle() {
  const body = document.body;
  const title = document.querySelector('.title');
  const h2 = document.querySelector('.js-h2');
  const p = document.querySelector('.js-p');
  const rockButton = document.querySelector('.rock');
  const paperButton = document.querySelector('.paper');
  const scissorButton = document.querySelector('.scissor');
  const clickButton = document.querySelector('.click');
  const text = document.querySelector('.h2');
  const score = document.querySelector('.js-score');
  const move = document.querySelector('.js-moves');
  const result = document.querySelector('.js-result');
  const reset = document.querySelector('.reset');
  

  // Toggle styles
  body.classList.toggle('styled-body');
  title.classList.toggle('styled-title');
  h2.classList.toggle('styled-h2');
  p.classList.toggle('styled-p');
  rockButton.classList.toggle('styled-rock');
  paperButton.classList.toggle('styled-paper');
  scissorButton.classList.toggle('styled-scissor');
  clickButton.classList.toggle('styled-click');
  text.classList.toggle('styled-text');
  score.classList.toggle('styled-score');
  move.classList.toggle('styled-move');
  result.classList.toggle('styled-result');
  reset.classList.toggle('styled-reset');

  // Add game functionality to buttons
  rockButton.onclick = rock;
  paperButton.onclick = paper;
  scissorButton.onclick = scissor;
}
