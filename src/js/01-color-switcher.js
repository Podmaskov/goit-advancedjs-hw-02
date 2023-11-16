const CHANGE_COLOR_DURATION = 1000;
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
stopBtn.setAttribute('disabled', true);
let intervalId = null;

const startHandler = () => {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DURATION);
};

const stopHandler = () => {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
};

startBtn.addEventListener('click', startHandler);

stopBtn.addEventListener('click', stopHandler);
