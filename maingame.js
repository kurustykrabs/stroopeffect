let start = document.getElementById('start-button');
let red = document.getElementById('redbutton');
let green = document.getElementById('greenbutton');
let blue = document.getElementById('bluebutton');
let reset = document.getElementById('reset-button');

let score_board = document.querySelector('.scores');
let score = 0
let timer_display = document.querySelector('.timer-display');
let timer = 0;
let game = false;

let generatedText = document.getElementById('text-id');
const colours = [ 'Red', 'Green', 'Blue'];
const texts = [ 'Red', 'Green', 'Blue'];
const target = document.querySelector('.target')

start.addEventListener('click', handleStartClick);
red.addEventListener('click', displayColour);
green.addEventListener('click', displayColour);
blue.addEventListener('click', displayColour);
reset.addEventListener('click', handleResetClick);


//timer here
function handleStartClick () {
  reset.style.display = 'none';
  game = true;
  startTimer()
  timer_display.style.display = 'inline';
  start.style.display = 'none';
  timer = 10

}

function startTimer () {
  let runTimer = setInterval(function () {
    if (timer > 0) {
      timer -= 1;
      timer_display.innerHTML = `${timer} seconds`
    } else {
      clearInterval(runTimer)
      // reset.style.display = 'none';
      timer_display.style.display = 'none';
      game = false;
      reset.style.display = 'inline';
      handleResetClick()
    }
  }, 1000);

}

function getRandomElement() {
  return Math.floor(Math.random() * 3)
}

function displayColour (e) {
  let button = e.currentTarget

   while (game == true) {
     if (button.value === generatedText.style.color) {
       score++;
   } else {
       score = 0;
   }
   generatedText.innerHTML = texts[getRandomElement()];
   generatedText.style.color = colours[getRandomElement()];
   score_board.innerHTML = score
 }
}

function handleResetClick () {
  handleStartClick()
  console.log(handleResetClick)
}
