let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");
const attemptsSpan = document.getElementById("attempts");

checkButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value, 10);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Por favor, insira um número entre 1 e 100.";
    return;
  }

  attempts--;
  attemptsSpan.textContent = attempts;

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Parabéns! Você acertou o número!";
    endGame();
  } else if (attempts === 0) {
    message.textContent = `😢 Você perdeu! O número era ${randomNumber}.`;
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = "Tente um número maior.";
  } else {
    message.textContent = "Tente um número menor.";
  }

  guessInput.value = "";
});

resetButton.addEventListener("click", resetGame);

function endGame() {
  guessInput.disabled = true;
  checkButton.disabled = true;
  resetButton.classList.remove("hidden");
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  attemptsSpan.textContent = attempts;
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  checkButton.disabled = false;
  resetButton.classList.add("hidden");
}
