let computerMove = '';      // Global Variable
let result = '';            // Global Variable

const score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Loses: 0,
  Ties: 0
};

console.log(score);


// Decides the computer Move

function PickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
}



function rock() {
  PickComputerMove();  
  console.log("Computer picked: " + computerMove);  // Debug log for visibility

  if (computerMove === 'Rock') {
    result = 'Tie';
  } else if (computerMove === 'Paper') {
    result = 'You Lose';
  } else if (computerMove === 'Scissors') {
    result = 'You Won';
  }

  // Update the score based on the result
  if (result === 'You Won') {
    score.Wins += 1;
  } else if (result === 'Tie') {
    score.Ties += 1;
  } else if (result === 'You Lose') {
    score.Loses += 1;
  }

  alert(`You picked rock. Computer picked ${computerMove}. ${result}.
    Wins: ${score.Wins}. Loses: ${score.Loses}. Ties: ${score.Ties}`);

  // Save updated score to localStorage
  localStorage.setItem('score', JSON.stringify(score));
}

function paper() {
  PickComputerMove();  
  console.log("Computer picked: " + computerMove);  // Debug log for visibility

  if (computerMove === 'Rock') {
    result = 'You Won';
  } else if (computerMove === 'Paper') {
    result = 'Tie';
  } else if (computerMove === 'Scissors') {
    result = 'You Lose';
  }

  if (result === 'You Won') {
    score.Wins += 1;
  } else if (result === 'Tie') {
    score.Ties += 1;
  } else if (result === 'You Lose') {
    score.Loses += 1;
  }

  alert(`You picked paper. Computer picked ${computerMove}. ${result}.
    Wins: ${score.Wins}. Loses: ${score.Loses}. Ties: ${score.Ties}`);

  // Save updated score to localStorage
  localStorage.setItem('score', JSON.stringify(score));
}

function scissor() {
  PickComputerMove();  
  console.log("Computer picked: " + computerMove);  // Debug log for visibility

  if (computerMove === 'Rock') {
    result = 'You Lose';
  } else if (computerMove === 'Paper') {
    result = 'You Won';
  } else if (computerMove === 'Scissors') {
    result = 'Tie';
  }

  if (result === 'You Won') {
    score.Wins += 1;
  } else if (result === 'Tie') {
    score.Ties += 1;
  } else if (result === 'You Lose') {
    score.Loses += 1;
  }

  alert(`You picked scissor. Computer picked ${computerMove}. ${result}.
    Wins: ${score.Wins}. Loses: ${score.Loses}. Ties: ${score.Ties}`);

  // Save updated score to localStorage
  localStorage.setItem('score', JSON.stringify(score));
}
