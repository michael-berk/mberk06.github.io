//This file will be used to create bubbles with experience content
//in the experience page

//dummy data 
var date = '2-2018';
var title = 'NBA Lineup';

//////////////////////
//Read in data
//////////////////////


//////////////////////
//Add content
//////////////////////
//Create bubble
function createBubble(text, date) {
	//create bubble container
	var bubbleContainer = document.createElement("div");
	bubbleContainer.className = "bubble-container";

	//create bubble
	var bubble = document.createElement("div");
	bubble.className = "bubble";
	bubble.setAttribute("style","transform: translate(0,"+(Math.random()*1000).toString+"px);")

	//create text on bubble
	var bubbleText = document.createElement("h1");
	bubbleText.className = "desc-text";
	bubbleText.innerHTML = text;

	//Create line with date
	var line = document.createElement("div");
	line.className = "line";
	line.id = "line_"+date;

	var date = document.createElement("h4");
	date.className = "date";
	date.innerHTML = "date";

	//layer children onto parents
	line.appendChild(date);
	bubble.appendChild(bubbleText);
	bubble.appendChild(line);
	bubbleContainer.appendChild(bubble);

	return(bubbleContainer);
}

//Create tick marks
function createTicks(date1, date2) {
	//get distance
	var line1 = $("#line_"+date1);
	var line2 = $("#line_"+date2);
	var distance = Math.abs(line1.offset().top - line2.offset().top);

	//create tick marks correcly spaced
	var numTicks = 4;
	for (i = 0; i < numTicks; i++) {
		//create tick
		var tick = document.createElement("div");
		tick.className = "tick";

		if (i != 0) {
			var margin = (distance/(numTicks+1)-line1.height());
			tick.setAttribute("style","margin-top: "+margin.toString()+"px");
		} else {
			var margin = -distance/12+line1.height();
			tick.setAttribute("style","margin-top: "+margin.toString()+"px");
		}
		
		line1.append(tick);
	}
}


//////////////////////
//Call functions
//////////////////////
$(document).ready(function() {
	/*var child = createBubble("NBA Lineup","2-2019");
	var child1 = createBubble("Something Else","11-2018");
	var child2 = createBubble("Another one","6-2018");

	document.getElementById("bubbles-container").appendChild(child);
	document.getElementById("bubbles-container").appendChild(child1);
	document.getElementById("bubbles-container").appendChild(child2);

	var dates = ["2-2019","11-2018","6-2018"];
	for (i = 0; i < dates.length-1; i++) {
		createTicks(dates[0], dates[1]);
		createTicks(dates[1], dates[2]);
	}*/

	//handle modal clicks
	$('.bubble-button').click(function(){
	  var buttonId = $(this).attr('id');
	  $('#modal-container').removeAttr('class').addClass(buttonId);
	  $('body').addClass('modal-active');
	})

	$('#modal-container').click(function(){
	  $(this).addClass('out');
	  $('body').removeClass('modal-active');
	});
});



