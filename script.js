function startGame() {
  document.getElementById('start-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
}

function playGame(playerChoice) {
  const options = ["Rock", "Paper", "Scissors"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  let playerResult = "";
  let computerResult = "";

  if (playerChoice === computerChoice) {
    playerResult = "It's a Draw!";
    computerResult = "It's a Draw!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerResult = "🎉 You Win!";
    computerResult = "😢 Computer Lose!";
  } else {
    playerResult = "😢 You Lose!";
    computerResult = "🎉 Computer Win!";
  }

  // Show results
  document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
  document.getElementById('result-text').innerHTML = `${playerResult}<br>${computerResult}`;

  // Switch screens
  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('result-screen').classList.add('active');
}

function restartGame() {
  document.getElementById('result-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
}
