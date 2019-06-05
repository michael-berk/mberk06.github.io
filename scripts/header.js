//Super hacky - change later

$(document).ready(function(){
	$("#mobile_nav").click(function(){
    
    //toggles nav and ensures other elements play nice too
		if($("#primary_nav").css('left') < "0px"){
			$("#primary_nav").animate({left: "0px"}, 200);
			$("body").css("overflow-x","hidden");
			$("#primary_nav").css("overflow-y","hidden");
			$("#primary_nav").css("background-color","rgba(220,220,221,0.95)");		

		}else{
			$("#primary_nav").animate({left: "-115px"}, 200);
			$("body").css("overflow-x","hidden");
			$("#primary_nav").css("background-color","rgba(220,220,221,0)");		
		}

	});

	$("#primary_nav").mouseleave(function() {
    	//toggles nav and ensures other elements play nice too
		if($("#primary_nav").css('left') < "0px"){
		}else{
			$("#primary_nav").animate({left: "-115px"}, 200);
			$("body").css("overflow-x","hidden");
			$("#primary_nav").css("background-color","rgba(220,220,221,0)");		

		}
	});

	$("#mobile_nav_dark").click(function(){
    
    //toggles nav and ensures other elements play nice too
		if($("#primary_nav_dark").css('left') < "0px"){
			$("#primary_nav_dark").animate({left: "0px"}, 200);
			$("body").css("overflow-x","hidden");
			$("#primary_nav_dark").css("overflow-y","hidden");
			$("#primary_nav_dark").css("background-color","rgba(93,149,208,0.95)");		

		}else{
			$("#primary_nav_dark").animate({left: "-115px"}, 200);
			$("body").css("overflow-x","hidden");
			$("#primary_nav_dark").css("background-color","rgba(220,220,221,0)");		

		}
	});


	$("#primary_nav_dark").mouseleave(function() {
    	//toggles nav and ensures other elements play nice too
		if($("#primary_nav_dark").css('left') < "0px"){
		}else{
			$("#primary_nav_dark").animate({left: "-115px"}, 200);
			$("body").css("overflow-x","hidden");
			$("#primary_nav_dark").css("background-color","rgba(220,220,221,0)");		

		}
	});
	 
});//end