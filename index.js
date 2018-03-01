var Word = require('./word.js');
var prompt = require('prompt');

//start the game

console.log("Guess the word that is Ocean Themed");
console.log("Guess a letter of the word.");
console.log("-----------------------------");
prompt.start();

// word bank

game = {
 	wordBank: ['whale','ocean','beach', 'squid','starfish','tide','shark'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,

 	// start game
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLetter();
 		this.promptUser();
 	},
 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},
 		//right or wrong function
 	promptUser: function(){
 		var self = this;
 				prompt.get(['guessWord'], function(err, result){
 					console.log("You guessed: " + result.guessWord);
 					var manyGuessed = self.currentWrd.checkLetter(result.guessWord);
 				if(manyGuessed ==0) {
 						console.log("WRONG");
 						self.guessesRemaining--;
 				} else {
 						console.log("CORRECT");
 						if(self.currentWrd.findWord()){
 							console.log("You won!");
 							console.log("-------------------");
 							return;
 					}
 			}
 				//remaining guesses
 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 				if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 				else if(self.guessesRemaining ==0){
 					console.log("Game over. Correct Word ", self.currentWrd.city);
 				} else {
 					console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();