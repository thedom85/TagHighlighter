
function Taghighlighter() {
}



Taghighlighter.prototype.Hlighter = function(tagName,theme){
	if(!tagName)tagName="*";
	var all = document.body.getElementsByTagName(tagName);
	if(theme =="random")
	{
		var all = document.body.getElementsByTagName(tagName);
		var colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
			for(var count =0; count < all.length; ++count) {
				item = all[count];
				item.style.outline = "thick solid "+colors[(Math.floor(Math.random() * (5 - 1 + 1)) + 1)];
			}
	} 
	else if (theme =="easy") 
	{
		for(var count =0; count < all.length; ++count) {
			item = all[count];
			item.style.outline = "thick solid "+"yellow";
		}
	}
}


if (typeof taghighlighter == "undefined") {
    var taghighlighter = new Taghighlighter();
}
