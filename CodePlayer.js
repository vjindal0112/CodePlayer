var windowHeight;

var windowHeight = $(window).height();
var headerHeight = $("#header").height();
var codeContainerHeight = windowHeight - headerHeight;
$(".tabs").css("height", codeContainerHeight + "px");

$(".toggle").click(function() {
	$(this).toggleClass("selected");
	activeDiv = $(this).html();
	$("#" + activeDiv + "Tab").toggle();
	var showingDivs = $(".tabs").filter(function() {
		return $(this).css("display") != "none";	
	}).length;
	var width = 100/showingDivs;
	$(".tabs").css("width", width + "%");
	
});

$("#runButton").click(function() {
	$("iframe").contents().find("html").html('<style>' + $("#CSSCode").val() + '</style>' + $("#HTMLCode").val());
	document.getElementById("resultFrame").contentWindow.eval($("#JSCode").val());
});

