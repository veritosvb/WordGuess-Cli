var Letter = require("./letter.js");
var randomWords = ["Iran","Japan","Australia","Nigeria","Egypt","Senegal","Tunisia","Morocco","Mexico","Panama","Brazil","Uruguay","Argentina","Colombia", "Peru"];


function Word(){

        this.word = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase();
        this.letters = [];
        //Set the random word chosen from the word list to someWord.
        //Tell the user how many letters are in the word.
        console.log("Your word contains " + this.word.length + " letters.");
        //Use the Word constructor in Word.js to split the word and generate letters.gg

    
            for (var i = 0 ; i < this.word.length; i++){
                    this.letters.push(new Letter(this.word[i]));
            }

        this.guessString = function(){
            var output =" ";
            for (var i = 0 ; i < this.letters.length; i++){
                output += " "  +  this.letters[i].returnLetter();
           }
           console.log(output);
        }

        this.searchLetter = function(letter){
            var correctGuess = false;
            for (var i = 0 ; i < this.letters.length; i++){
                if (this.letters[i].checkLetter(letter) == true){
                    correctGuess = true;
                    this.letters[i].checkLetter(letter);
                } 
                    
           }
           return correctGuess;
        }

        this.winner= function(){
            var win = true;
            for (var i = 0 ; i < this.letters.length; i++){
                if (this.letters[i].returnLetter() == "_"){
                    win = false;
                } 
                    
           }
           return win;
        }
}

module.exports = Word;
