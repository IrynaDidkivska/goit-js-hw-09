function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const body = document.querySelector('body');
const startBtnHeandler = document.querySelector('[data-start]');
const stopBtnHeandler = document.querySelector('[data-stop]');
let timerId = null;
startBtnHeandler.addEventListener('click', startBtnHeandlerClick );
stopBtnHeandler.addEventListener('click', stopBtnHeandlerClick);

console.dir(startBtnHeandler);

function startBtnHeandlerClick({target}) { 
    target.disabled = true;
    stopBtnHeandler.disabled = false;
     timerId = setInterval(() => {
    return body.style.backgroundColor = getRandomHexColor();
     }, 1000)
    console.log('Start');
}

function stopBtnHeandlerClick({target}) { 
  startBtnHeandler.disabled = false;
  target.disabled = true;
  
    clearInterval(timerId);
    console.log('Stop');
}







