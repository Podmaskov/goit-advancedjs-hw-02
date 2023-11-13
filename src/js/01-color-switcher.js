const CHANGE_COLOR_DURATION = 1000;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

const startHandler = () => {
  startBtn.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DURATION);
};

const stopHandler = () => {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled', false);
};

startBtn.addEventListener('click', startHandler);

stopBtn.addEventListener('click', stopHandler);
