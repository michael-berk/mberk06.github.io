function handleSubmit() {

	document.getElementById("test").value = "Sent";


	$.ajax({
		type: "POST",
		url: "https://hooks.zapier.com/hooks/catch/2689457/xiooqx/",
		data: JSON.stringify({"value":value}), 
		success: success
	});

	document.getElementById("message").value = "";
	document.getElementById("contactMethod").value = "";
	return true;
}
