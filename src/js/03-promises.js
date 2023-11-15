import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const FORM = document.querySelector('form');
const TOAST_DEFAULT_OPTIONS = {
  position: 'topRight',
  messageColor: '#fff',
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

function showToast(position, delay, isSuccess) {
  iziToast.show({
    ...TOAST_DEFAULT_OPTIONS,
    message: isSuccess
      ? `✅ Fulfilled promise ${position} in ${delay}ms`
      : `❌ Rejected promise ${position} in ${delay}ms`,
    color: isSuccess ? '#7dc67d' : '#ef5350',
  });
}

function onSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + step * i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        showToast(position, delay, true);
      })
      .catch(({ position, delay }) => {
        showToast(position, delay, false);
      });
  }
}

FORM.addEventListener('submit', onSubmit);
