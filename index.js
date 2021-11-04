/*------------BOILER PLATE--------------------*/
const { exit } = require('process');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
/*------------------GLOBAL VARIABLES----*/
let min = 0; 
let max = 100; 

function randomInt(min, max) {
  let range = max - min +1; 
  return min +
  Math.floor(Math.random() *range);
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  let roboGuess = randomInt(min, max);
  let sassyRobo = await ask ('I think ur number is '+ roboGuess + "? (y or n)")
  if (sassyRobo === "y") {
      console.log("WOO! ROBO WIn.");
    exit();
  } else {
    while (sassyRobo !== "y"){
      let hiLow = await ask("Is it higher or lower? ")
      console.log(hiLow)
      if (hiLow === "h"){
        min = roboGuess;
        roboGuess = randomInt(min, max);
        sassyRobo = await ask ('I think ur number is ' + roboGuess + "? (y or n)");
        

      } else { (hiLow !== "h") 
        max = roboGuess;
        roboGuess = randomInt(min, max);
        sassyRobo = await ask('I think ur number is ' + roboGuess + "? (y or n)");
      }
    }
  }
}
