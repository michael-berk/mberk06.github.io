//handle contact form sumbit

$(document).ready(function() {

	handleSubmit = function() {
		//check if forms are filled
		var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
        	alert("Fill out all forms");
            //$("form").submit(function(e){
				//e.preventDefault();
			//}); 
        } else {
            alert("Sent");
            //$("form").submit(function(e){
				//e.enableDefault();
			//}); 
            document.getElementById('contactMethod').value = '';
			document.getElementById('message').value = '';
        }
        return true;
	}
});
