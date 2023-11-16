import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import { convertMs, addLeadingZero } from './timerHelpers';

import '../css/timer.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const MS_PER_SECOND = 1000;
const TOAST_DEFAULT_OPTIONS = {
  position: 'topRight',
  messageColor: '#fff',
};
startBtn.setAttribute('disabled', true);

function setToDOM({ days, hours, minutes, seconds }) {
  if (daysElement.innerHTML !== addLeadingZero(days)) {
    daysElement.innerHTML = addLeadingZero(days);
  }
  if (hoursElement.innerHTML !== addLeadingZero(hours)) {
    hoursElement.innerHTML = addLeadingZero(hours);
  }
  if (minutesElement.innerHTML !== addLeadingZero(minutes)) {
    minutesElement.innerHTML = addLeadingZero(minutes);
  }
  secondsElement.innerHTML = addLeadingZero(seconds);
}

function startTimer() {
  let timeToEmd = Number(this.latestSelectedDateObj) - Number(new Date());
  this._input.setAttribute('disabled', true);
  startBtn.setAttribute('disabled', true);

  setToDOM(convertMs(timeToEmd));
  timeToEmd -= MS_PER_SECOND;

  const intervalID = setInterval(() => {
    if (timeToEmd < MS_PER_SECOND) {
      clearInterval(intervalID);
      iziToast.show({
        ...TOAST_DEFAULT_OPTIONS,
        message: 'The time is up',
        color: '#7dc67d',
      });
      this._input.removeAttribute('disabled');
      return;
    }

    timeToEmd -= MS_PER_SECOND;
    setToDOM(convertMs(timeToEmd));
  }, MS_PER_SECOND);
}

const datePickerOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const timeToEmd = Number(selectedDates[0]) - Number(new Date());
    if (timeToEmd < 0) {
      iziToast.show({
        ...TOAST_DEFAULT_OPTIONS,
        message: 'Please choose a date in the future',
        color: '#ef5350',
      });
      return;
    }
    startBtn.removeAttribute('disabled');
  },
};

const datePicker = flatpickr('#datetime-picker', datePickerOptions);

startBtn.addEventListener('click', startTimer.bind(datePicker));
