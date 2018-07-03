// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js");
const chalk = require('chalk');
var figlet = require('figlet');
var isLetter = require('is-letter');
var randomWord;
var score;



function startGame(){
  score = 3;
  randomWord = new Word();
  randomWord.guessString();
  selectLetter();
}

function selectLetter(){
    //Keep prompting user to enter a letter if there are slots/underscores that still need to be filled in
    inquirer.prompt([
    {
      name: "letter",
      message: "Guess a letter:",
      //Check if value is a letter (for example, "a") or not a letter ("aba") using the is-letter npm package.
      validate: function(value) {
          if(isLetter(value)){
            return true;
          } 
          else {
            return false;
          }
        }
    }
  ]).then(function(answer) {
    //Convert all letters guessed by the user to upper case.
    console.log(chalk.blue("You guessed: " + answer.letter.toUpperCase()));
    if(randomWord.searchLetter(answer.letter.toUpperCase())){
      score++;
    }
    else{
      score --;
    }

    randomWord.guessString();
    console.log("Score: " + score);

      if (score > 0 && !randomWord.winner()){
        selectLetter();
      }else if (randomWord.winner()){
        console.log("YOU WON!!");
        confirmPlay();
      }
      else{
        console.log("GAME OVER");
        console.log(chalk.red("The correct country was: " + randomWord.word));

        confirmPlay();
      }
  });
}



figlet("Word Guess Game", function(err, data) {
  if (err) {
      return;
  }
  console.log(data);
  console.log(chalk.blue("Welcome to the World Cup Countries guess game!"));
  confirmPlay();
  
});

function confirmPlay(){
  inquirer.prompt([
    {
      type: 'confirm',
	    name: 'readyToPlay',
	    message: 'Do you want to play?',
	    default: true
    }
  ]).then(function(answers) {
   
    if (answers.readyToPlay){
      console.log("Let's play..."); 
      startGame();
    } 
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
  });
}

