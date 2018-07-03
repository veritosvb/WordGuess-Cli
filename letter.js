function Letter (letter){
    var placeholder = "_";
    this.letter = letter;
    this.guessed = false;


    this.returnLetter = function(){
        if (this.guessed)
        return this.letter;
        else
        return placeholder;
    }

    this.checkLetter = function(guessedLetter){
        if (this.letter == guessedLetter){
         this.guessed = true;
         return true;
        }
         else{
         return false;   
        }
    }
}

module.exports = Letter;
