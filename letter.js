

var letter = function(letter){
	this.charac = letter;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

module.exports = letter;