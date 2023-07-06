// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datePickerInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]')
const [dataDays, dataHours, dataMinutes, dataSeconds] = document.querySelectorAll('[data-days], [data-hours], [data-minutes], [data-seconds]');
const timerDataAttr = {
  days: dataDays,
  hours: dataHours,
  minutes: dataMinutes,
  seconds: dataSeconds,
};
console.dir(timerDataAttr);
let targetDateTime = null;
let timerID = null;
startBtn.addEventListener('click', onClickStartBtn)
startBtn.disabled = true; // Disabled start btn when page loaded


function onClickStartBtn() {
    timerID = setInterval(onTimerTick, 1000);
    startBtn.disabled = true; 
    datePickerInput.disabled = true;
}

function onTimerTick() {
    const currentDateTime = new Date(); // Get current time
    const diff = targetDateTime - currentDateTime; // Interval in ms between target and current time

    if (diff < 0) { // Таймер повинен зупинятися, коли дійшов до кінцевої дати
        console.log(`Stop Interval = ${timerID}`);
        clearInterval(timerID);
        Notiflix.Notify.info('Stop Timer');
        return;
    }

    const convertedDiff = convertMs(diff); // {days: 0, hours: 0, minutes: 2, seconds: 20}

    for (const property in convertedDiff) {
    const value = convertedDiff[property];
      timerDataAttr[property].textContent = addLeadingZero(value);
    }

    

}
// перед рендерингом інтефрейсу форматує значення
    function addLeadingZero(value) { 
    return String(value).padStart(2, "0");
    }

    const options = {
    enableTime: true, // Включает выбор времени
    time_24hr: true, // Displays time picker in 24 hour mode without AM/PM selection when enabled.
    defaultDate: new Date(), // Sets the initial selected date(s).
    minuteIncrement: 1, // Adjusts the step for the minute input (incl. scrolling)
    onClose,
    };

    function onClose(selectedDates) { // Function(s) to trigger on every time the calendar is closed. See Events API
    targetDateTime = selectedDates[0];

    if (targetDateTime > new Date()) {
        // if user select feature time we undisabled start button
        startBtn.disabled = false;
    } else {
        // if user select past time we disabled start button
        startBtn.disabled = true;
        Notiflix.Notify.warning("Please choose a date in the future");
    }
    }

    flatpickr(datePickerInput, options);

    function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
    }

    datePickerInput.classList.add("timer-input");
    startBtn.classList.add("timer-btn");
