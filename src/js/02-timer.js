import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import { convertMs, addLeadingZero } from './timerHelpers';

import '../css/timer.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'flatpickr/dist/flatpickr.min.css';

const START_BTN = document.querySelector('[data-start]');
const DAYS = document.querySelector('[data-days]');
const HOURS = document.querySelector('[data-hours]');
const MINUTES = document.querySelector('[data-minutes]');
const SECONDS = document.querySelector('[data-seconds]');
const MS_PER_SECOND = 1000;
const TOAST_DEFAULT_OPTIONS = {
  position: 'topRight',
  messageColor: '#fff',
};
START_BTN.setAttribute('disabled', true);

function setToDOM({ days, hours, minutes, seconds }) {
  if (DAYS.innerHTML !== addLeadingZero(days)) {
    DAYS.innerHTML = addLeadingZero(days);
  }
  if (HOURS.innerHTML !== addLeadingZero(hours)) {
    HOURS.innerHTML = addLeadingZero(hours);
  }
  if (MINUTES.innerHTML !== addLeadingZero(minutes)) {
    MINUTES.innerHTML = addLeadingZero(minutes);
  }
  SECONDS.innerHTML = addLeadingZero(seconds);
}

function startTimer() {
  let timeToEmd = Number(this.latestSelectedDateObj) - Number(new Date());

  START_BTN.setAttribute('disabled', true);

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
    START_BTN.removeAttribute('disabled');
  },
};

const datePicker = flatpickr('#datetime-picker', datePickerOptions);

START_BTN.addEventListener('click', startTimer.bind(datePicker));
