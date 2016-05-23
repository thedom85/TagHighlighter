
document.addntListener('DOMContentLoaded', function() {
	var all = document.body.getElementsByTagName("*");
	var colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
	for(var count =0; count < all.length; ++count) {
		item = all[count];
		item.style.outline = "thick solid "+colors[(Math.floor(Math.random() * (5 - 1 + 1)) + 1)];
	}
});
