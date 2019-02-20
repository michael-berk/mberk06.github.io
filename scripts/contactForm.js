//handle contact form sumbit

$(document).ready(function() {

	$("#sendButton").click(function() {
		//check if forms are filled
		var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            alert("input all fields");

        } else {
            //get inputs
            var messageV = $('#message').val();
            var contactV = $('#contactMethod').val();


            $.post( "https://hooks.zapier.com/hooks/catch/2689457/xiooqx/", 
                {message: messageV, contact: contactV})
                .success(function( data ) {
                    alert("Sent!");
                });
        }
	});
});
