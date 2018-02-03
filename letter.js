
// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
//pass in latter into function


var letter = function(letter){
	this.charac = letter;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//export the constructor
module.exports = letter;