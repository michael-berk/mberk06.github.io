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
            alert("sending");

            var data = {
                message : $('#message').val(),
                contact : $('#contactMethod').val()
            };
            
            $.ajax({
                type : 'POST',
                url : 'https://hooks.zapier.com/hooks/catch/2689457/xiooqx/',  
                data: JSON.stringify(data),
                success:function (data) {
                    alert(JSON.stringify(data));
                },
                error: function(xhr, status, error) {
                    // handle error
                    alert(error);
                }
            });
        }
	});
});
