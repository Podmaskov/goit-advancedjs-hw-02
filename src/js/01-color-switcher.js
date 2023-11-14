const CHANGE_COLOR_DURATION = 1000;
const BODY = document.querySelector('body');
const START_BTN = document.querySelector('[data-start]');
const STOP_BTN = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let intervalId = null;

const startHandler = () => {
  START_BTN.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    BODY.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DURATION);
};

const stopHandler = () => {
  clearInterval(intervalId);
  START_BTN.removeAttribute('disabled');
};

START_BTN.addEventListener('click', startHandler);

STOP_BTN.addEventListener('click', stopHandler);
