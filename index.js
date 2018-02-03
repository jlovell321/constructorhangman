//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Word = require('./word.js');
var prompt = require('prompt');

//start the game

console.log("Welcome to City Hangman");
console.log("Guess a letter of the name of a city.");
console.log("-----------------------------");
prompt.start();

// beginning of the game with word bank of the cities

game = {
 	wordBank: ['Atlanta', 'Dallas', 'Austin', 'New York City', 'Los Angeles', 'Charleston', 'Seattle'],
 	wordsWon: 0,
 	guessesRemaining: 15,
 	currentWrd: null,

 	// create a function with the this to start the game and grab the word from theword bank
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLetter();
 		this.promptUser();
 	},


 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},
 		//function that tells the user if they guessed right or wrong
 	promptUser: function(){
 		var self = this;
 				prompt.get(['guessCity'], function(err, result){
 					console.log("You guessed: " + result.guessCity);
 					var manyGuessed = self.currentWrd.checkLetter(result.guessCity);

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
 				// if they have guesses remaining tell them how many are left
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