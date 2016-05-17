$(document).ready(function()
{
	var colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
	$("*").find("div").each(function() {    
		$(this).css("border-color", colors[(Math.floor(Math.random() * (5 - 1 + 1)) + 1)] ).css("border-style","solid").css("border-width","medium");
	});
});
