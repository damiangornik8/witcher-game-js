// Define all variables
const character = document.getElementById('character');
const golds = document.querySelectorAll('.gold');

const newGame = document.getElementById('newGameBtn');
const scoreTable = document.getElementById('score');
const info = document.getElementById('infoBtn');

const h1 = document.getElementsByTagName('h1')[0];

let pixels = 100;
let score = 0;
let newGameStopwatch = 0;

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let t = 0;

// Appear an info on how to play in the game
infoBtn.addEventListener("click", () => {
  alert("Use keyboard arrows or W S A D keys to navigate the character");
});

// Start a new game 
newGame.addEventListener("click", () => {
  // Reload the page
  document.location.reload(true);

  // Set the current score to 0 
  score = 0;

  // Reset in-game stopwatch
  newGameStopwatch = 0;  
});

  // Define all gold items
  golds.forEach((gold) => {

  window.addEventListener("keydown", () => {
    if (newGameStopwatch < 1 ) {
        timer();
        newGameStopwatch += 1;
      }

  // Check if our character is on a gold item
  if (character.style.top  === (gold.style.top) && character.style.left  === gold.style.left) {

  // Hide gold item if it was collected already
  gold.style.visibility = 'hidden';

  // Add 1 to the total score every time when the user collects 1 gold 
  if (score < golds.length) {
    score += 1;
  } 

  // If user succesfully collected all the golds available to collect, then stop the stopwatch 
  if (score >= golds.length) {
    clearTimeout(t);
  }
  
  // Show current score on the screen
  scoreTable.innerHTML = `Score: ${score}`;
  } })

  for (i=0; i<3; i++) {
    gold.style.top = pixels+'px';
    gold.style.left = (pixels+60)+'px';
    pixels += 20;
  }
});

window.addEventListener("keydown", (keyPressed) => {
  // Move to different direction depending on which arrow (or button) has been presser
  switch (keyPressed.keyCode) {
      // Arrow Left
      case 37:
      leftArrowPressed();
      break;

      // Move Left (A)
      case 65:
      leftArrowPressed();
      break;

      // Arrow Right
      case 39:
      rightArrowPressed();
      break;

      // Move Right (D)
      case 68:
      rightArrowPressed();
      break;

      // Arrow Up
      case 38:
      upArrowPressed();
      break;

      // Move Up (W)
      case 87:
      upArrowPressed();
      break;

      // Arrow Down
      case 40:
      downArrowPressed();
      break;

      // Move Down (S)
      case 83:
      downArrowPressed();
      break;
  };
})

function leftArrowPressed() {
character.style.left = parseInt(character.style.left) - 10 + 'px';
}

function rightArrowPressed() {
character.style.left = parseInt(character.style.left) + 10 + 'px';
}

function upArrowPressed() {
character.style.top = parseInt(character.style.top) - 10 + 'px';
}

function downArrowPressed() {
character.style.top = parseInt(character.style.top) + 10 + 'px';
}

// Calculate the time which have gone so far
function add() {
    miliseconds++;
    if (miliseconds >= 99) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    // Appear current time on the screen
    h1.textContent = "Time: " + (minutes ? (minutes > 9 ? minutes : "0" +  minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (miliseconds > 9 ? miliseconds : "0" + miliseconds);

    timer();
}

// Start a stopwatch
function timer() {
    t = setTimeout(add, 10);
}


