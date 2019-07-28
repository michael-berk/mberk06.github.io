$(document).click(function(e) {
	//hide all tooltips on click
	var classes = ["values","tooltip","tooltip_shark","tooltip_question","tooltip_basketball","tooltip_left","tooltip_right","tooltip_small"];
	if (!classes.includes(e.target.className)) {
		for (var i = 0; i < classes.length; i++) {
			var c = classes[i];
			$('.'+c).children('.tooltiptext').removeAttr('style');
		}
	}
});

function tooltip(elem) {
	//hide previously open tooltips
	$('.tooltiptext').css('visibility','hidden');

	//open clicked one
	var t = $(elem).children('.tooltiptext');
	t.css('visibility','visible');
};
