//call functions
$( document ).ready(function() {
	//get text from /text
	var v;
	$.getJSON("/text/because_text.json", function(json) {
		v = JSON.parse(JSON.stringify(json))[0];

		//initializle buttons
		initButtons(v.clutter);

	});

	//reduce clutter
	$("#b_clutter").mousedown(function() {
		toggleButtons(1, v);
	});

	//improve myself
	$("#b_improvement").mousedown(function() {
		toggleButtons(2, v);
	});

	//make money
	$("#b_money").mousedown(function() {
		toggleButtons(3, v);
	});

});

var initButtons = function(text) {
	$("#because-text1").text(text[0]);
	$("#because-text2").text(text[1]);
	$("#b_clutter").css("border-color", "#1D2041");
	$("#b_improvement").css("color", "grey");
	$("#b_money").css("color", "grey");
}

var toggleButtons = function(buttonNum, v) {
	//get correct buttons
	var texts = [v.clutter,v.improvement,v.money];
	var buttons = ["clutter","improvement","money"];
	var buttonPressed = buttons.splice(buttonNum-1,1);

	$("#b_"+buttonPressed).css('color','#1D2041'); //change color
	$("#b_"+buttonPressed).css('border-color','#1D2041'); //change color
	$("#because-text1").text(texts[buttonNum-1][0]); //render new text
	$("#because-text2").text(texts[buttonNum-1][1]); //render new text
	
	//toggle other button color
	for (i = 0; i < 2; i++) {
		$("#b_"+buttons[i]).css('color','grey');
		$("#b_"+buttons[i]).css('border-color','grey');
	}
}