//handle contact form sumbit

$(document).ready(function() {

	$("#sendButton").click(function() {
		//check if forms are filled
        var m = $('#message').val();
        var c = $('#contactMethod').val()

        if (m == '') {
            $('#message').css('border-color', '#5D95D0');
        }

        if (c == '') {
            $('#contactMethod').css('border-color', '#5D95D0');
        }

        if (m != '' && c != '') {
            //get inputs
            var data = {
                message : m,
                contact : c
            };
            
            $.ajax({
                type : 'POST',
                url : 'https://hooks.zapier.com/hooks/catch/2689457/xiooqx/',  
                data: JSON.stringify(data),
                success:function (data) {
                    //remove input fields and display sent messsage
                    $("#message").hide();
                    $("#contactMethod").hide();
                    $("#sendButton").hide();
                    $("#sendButton").prop("disabled",true)
                    $("#sentText").css("visibility", "visible");
                },
                error: function(xhr, status, error) {
                    // handle error
                    alert("There was an error");
                }
            });
        }
	});

    //reset text fields when user edits
    $("#message").keypress(function () {
        $("#message").css("border-color", "#1D2041");
    });

    $("#contactMethod").keypress(function () {
        $("#contactMethod").css("border-color", "#1D2041");
    });
});
