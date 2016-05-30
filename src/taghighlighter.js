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
		this.colors = ["yellow"];
	};
	EasyTheme.prototype = Object.create(Theme.prototype);
	EasyTheme.prototype.apply = function(el) {
		el.style.outline = "thick solid "+this.colors[0];
	};
	// Pesticide Theme
	function PesticideTheme(){
		 this.colors = {
			'body': '#2980b9',
			'article': '#3498db',
			'nav': '#0088c3',
			'aside': '#33a0ce',
			'section': '#66b8da',
			'header': '#99cfe7',
			'footer': '#cce7f3',
			'h1': '#162544',
			'h2': '#314e6e',
			'h3': '#3e5e85',
			'h4': '#449baf',
			'h5': '#c7d1cb',
			'h6': '#4371d0',
			'main': '#2f4f90',
			'address': '#1a2c51',
			'div': '#036cdb',
			'p': '#ac050b',
			'hr': '#ff063f',
			'pre': '#850440',
			'blockquote': '#f1b8e7',
			'ol': '#ff050c',
			'ul': '#d90416',
			'li': '#d90416',
			'dl': '#fd3427',
			'dt': '#ff0043',
			'dd': '#e80174',
			'figure': '#ff00bb',
			'figcaption': '#bf0032',
			'table': '#00cc99',
			'caption': '#37ffc4',
			'thead': '#98daca',
			'tbody': '#64a7a0',
			'tfoot': '#22746b',
			'tr': '#86c0b2',
			'th': '#a1e7d6',
			'td': '#3f5a54',
			'col': '#6c9a8f',
			'colgroup': '#6c9a9d',
			'button': '#da8301',
			'datalist': '#c06000',
			'fieldset': '#d95100',
			'form': '#d23600',
			'input': '#fca600',
			'keygen': '#b31e00',
			'label': '#ee8900',
			'legend': '#de6d00',
			'meter': '#e8630c',
			'optgroup': '#b33600',
			'option': '#ff8a00',
			'output': '#ff9619',
			'progress': '#e57c00',
			'select': '#e26e0f',
			'textarea': '#cc5400',
			'details': '#33848f',
			'summary': '#60a1a6',
			'command': '#438da1',
			'menu': '#449da6',
			'del': '#bf0000',
			'ins': '#400000',
			'img': '#22746b',
			'iframe': '#64a7a0',
			'embed': '#98daca',
			'object': '#00cc99',
			'param': '#37ffc4',
			'video': '#6ee866',
			'audio': '#027353',
			'source': '#012426',
			'canvas': '#a2f570',
			'track': '#59a600',
			'map': '#7be500',
			'area': '#305900',
			'a': '#ff62ab',
			'em': '#800b41',
			'strong': '#ff1583',
			'i': '#803156',
			'b': '#cc1169',
			'u': '#ff0430',
			's': '#f805e3',
			'small': '#d107b2',
			'abbr': '#4a0263',
			'q': '#240018',
			'cite': '#64003c',
			'dfn': '#b4005a',
			'sub': '#dba0c8',
			'sup': '#cc0256',
			'time': '#d6606d',
			'code': '#e04251',
			'kbd': '#5e001f',
			'samp': '#9c0033',
			'var': '#d90047',
			'mark': '#ff0053',
			'bdi': '#bf3668',
			'bdo': '#6f1400',
			'ruby': '#ff7b93',
			'rt': '#ff2f54',
			'rp': '#803e49',
			'span': '#cc2643',
			'br': '#db687d',
			'wbr': '#db175b',
      };
	}
	PesticideTheme.prototype = Object.create(Theme.prototype);
	PesticideTheme.prototype.apply = function(el) {
		var color = this.colors[el.tagName.toLowerCase()] || 'red';
		el.style.outline = "thick solid "+color;
	};
	
	// Theme Mondrian
	function MondrianTheme(){
		this.colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
	};
	MondrianTheme.prototype = Object.create(Theme.prototype);
	MondrianTheme.prototype.apply = function(el) {
		el.style.background = this.colors[(Math.floor(Math.random() * (5 - 1 + 1)) + 1)];
	};
	

	// Highliter Constructor
	function Taghighlighter() {
		var _ = this;
		_.themes = {
			random: new RandomTheme(),
			easy: new EasyTheme(),
			pesticide: new PesticideTheme(),
			mondrian:  new MondrianTheme()
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
