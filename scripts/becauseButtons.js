//call functions
$( document ).ready(function() {

	initButtons();

	//reduce clutter
	$("#b_clutter").mousedown(function() {
		toggleButtons(1);
	});

	//improve myself
	$("#b_improvement").mousedown(function() {
		toggleButtons(2);
	});

	//make money
	$("#b_money").mousedown(function() {
		toggleButtons(3);
	});

});

initButtons = function() {
	$("#because-text").load("/text/because_clutter.txt");
	$("#b_clutter").css("color", "red");
}

toggleButtons = function(buttonNum) {
	//get correct buttons
	var buttons = ["clutter","improvement","money"]; //
	var buttonPressed = buttons.splice(buttonNum-1,1);

	$("#b_"+buttonPressed).css('color','red'); //change color
	$("#because-text").load("/text/because_"+buttonPressed+".txt"); //render new text
	
	//toggle other button color
	for (i = 0; i < 2; i++) {
		$("#b_"+buttons[i]).css('color','black');
	}

}