const inputNumber = document.querySelector(".input-number");
const guessNumber = document.querySelector(".guess-number");
const playButton = document.querySelector("#input-form button");
const resultText = document.querySelector(".result-text");
const result = document.querySelector(".result");

function onClickPlayButton(e) {
  e.preventDefault();

  if (inputNumber.value === "" || guessNumber.value === "") {
    alert("숫자를 모두 입력하세요.");
  } else if (inputNumber.value < 0 || guessNumber.value < 0) {
    alert("숫자는 0보다 커야 합니다.");
  } else {
    const randomNumber = Math.ceil(Math.random() * inputNumber.value);

    resultText.innerHTML = `<p>You chose: ${guessNumber.value}, the machine chose: ${randomNumber}.</p>`;

    if (parseInt(guessNumber.value) === randomNumber) {
      result.innerHTML = `<p style="font-weight:bold;">You won!</p>`;
    } else {
      result.innerHTML = `<p style="font-weight:bold;">You lost!</p>`;
    }
  }
}

playButton.addEventListener("click", onClickPlayButton);
