$(document).ready(function(){
	
	$(".theme-menu")
		.addClass("closed")
		.on("mouseover mouseout", function(ev) {
			$(this).toggleClass("closed");
		});
	SyntaxHighlighter.all();
});