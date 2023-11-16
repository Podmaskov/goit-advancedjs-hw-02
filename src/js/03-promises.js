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
  const {
    target: {
      elements: {
        delay: delayElement,
        step: stepElement,
        amount: amountElement,
      },
    },
  } = event;

  for (let i = 0; i < Number(amountElement.value); i++) {
    const position = i + 1;
    const delayPromise =
      Number(delayElement.value) + Number(stepElement.value) * i;
    createPromise(position, delayPromise)
      .then(({ position, delay }) => {
        showToast(position, delay, true);
      })
      .catch(({ position, delay }) => {
        showToast(position, delay, false);
      });
  }
  delayElement.value = '';
  stepElement.value = '';
  amountElement.value = '';
}

FORM.addEventListener('submit', onSubmit);
