import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

const onFormElSubmit = event => {
  event.preventDefault();

  console.dir(event.target.elements);

  let { delay, step, amount } = event.target.elements;
  let nextDelay = Number(delay.value);
  console.log(amount.value);

  for (let position = 1; position <= Number(amount.value); position++) {
    createPromise(position, nextDelay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      setTimeout(
        Notiflix.Notify.success,
        delay,
        `✅ Fulfilled promise ${position} in ${delay}ms`)
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      setTimeout(
        Notiflix.Notify.failure,
        delay,
        `❌ Rejected promise ${position} in ${delay}ms`)
    })
    nextDelay += Number(step.value)
  }

};
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
        resolve({ position, delay });
    } else {   
        reject({ position, delay });    
    }
  });
}
formEl.addEventListener('submit', onFormElSubmit);



