//list of letters object
//a boolean that says if word is guessed or not
// var LetterObjects = [];
// var guessed = false;
//display text function
// loop through letterobject array
// for each letterobject get the text
// concatenate text for each letter object
// return concatendated string

// actions methods
// isGuessed methos that returns guessed
// if (secret word.isGuessed) {
// 	gameover}
 



var letter = require('./letter.js');

function Word(city) {
	this.city = city;
	this.character = [];
	this.found = false;

	this.getLetter = function() {
		for (var i=0; i < this.city.length; i++) {
			this.character.push( new letter(this.city[i]));
		}
	};

	this.findWord = function() {
		this.found = this.character.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessCity) {
		var toReturn = 0;

		for (var i = 0; i < this.character.length; i++) {
			if (this.character[i].charac == guessCity){
				this.character[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};
	//constructor to 
	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.character.length; i++){
			string += this.character[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;