//This file will be used to create bubbles with experience content
//in the experience page

//Read from text file
/*var jsonText;
$.getJSON('/text/experience_text.json', function(data) {         
    jsonText = JSON.stringify(data);
});

//Note: size = 1-10
var createDiv = function(size, title, description, date, duration) {
	var r = String(size/10*40/2)+"%"; //set radius
	var titleSize = String(size*16)+"px"; //set title size

	//add bubble
	var bubble = document.createElement("div");
	bubble.setAttribute("width", "300px");
	bubble.setAttribute("height", "auto");
	bubble.setAttribute("border-radius","50%");
	bubble.setAttribute("background-color", "orange");
	bubble.setAttribute("style", "background-color: orange;");

	//add text to bubble
	var t = document.createElement("h1");
	t.textContent = title;
	t.setAttribute("id", title+"_title");
	t.setAttribute("style", "color: red;");
	bubble.appendChild(t);

	//add bubble to container
	document.getElementById("bubble-container").append(bubble);

}

createDiv(10,"TEst","description","2-2018","2 years");

$('#someid').click(function() {
	alert("hi");
	//$( this ).setAttribute("src","/assets/img/bubbleHover.png");
});*/

