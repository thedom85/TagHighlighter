(function(window, document) {
	'use strict'

	// Theme interface
	function Theme(){};
	Theme.prototype.apply = function(el) {};

	// Random Theme
	function RandomTheme(){
		this.colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
	};
	RandomTheme.prototype = Object.create(Theme.prototype);
	RandomTheme.prototype.apply = function(el) {
		el.style.outline = "thick solid "+this.colors[(Math.floor(Math.random() * (5 - 1 + 1)) + 1)];
	};

	// Easy Theme
	function EasyTheme(){
		this.colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
	};
	EasyTheme.prototype = Object.create(Theme.prototype);
	EasyTheme.prototype.apply = function(el) {
		el.style.outline = "thick solid "+"yellow";
	};

	// Highliter Constructor
	function Taghighlighter() {
		var _ = this;
		_.themes = {
			random: new RandomTheme(),
			easy: new EasyTheme()
		};
	};

	Taghighlighter.prototype.getTheme = function(name){
		var _ = this;
		if (name in _.themes) return _.themes[name];
		else throw new Error('not found theme: '+name);
	};

	Taghighlighter.prototype.Hlighter = function(tagName,theme){
		var _ = this;
		if(!tagName)tagName="*";
		var all = document.body.getElementsByTagName(tagName);
		var theme = _.getTheme(theme);
		for(var count =0; count < all.length; ++count) {
			theme.apply(all[count]);
		}
	}

	// Singleton Window Global variable
	if (typeof window.taghighlighter == "undefined") {
	    window.taghighlighter = new Taghighlighter();
	}

})(window, document);
