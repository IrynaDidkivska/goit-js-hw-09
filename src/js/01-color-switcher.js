function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const body = document.querySelector('body');
const startBtnHeandler = document.querySelector('[data-start]');
const stopBtnHeandler = document.querySelector('[data-stop]');
let timerId = null;
startBtnHeandler.addEventListener('click', startBtnHandlerClick );
stopBtnHeandler.addEventListener('click', stopBtnHandlerClick);

console.dir(startBtnHeandler);

function startBtnHandlerClick({target}) { 
    target.disabled = true;
    stopBtnHeandler.disabled = false;
     timerId = setInterval(() => {
     body.style.backgroundColor = getRandomHexColor();
     }, 1000)
    console.log('Start');
}

function stopBtnHandlerClick({target}) { 
  startBtnHeandler.disabled = false;
  target.disabled = true;
  
    clearInterval(timerId);
    console.log('Stop');
}







