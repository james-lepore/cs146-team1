window.addEventListener('load', function(){
	email_field = document.getElementById('email_input');
	error_message = document.getElementById('error_message');
	
	email_field.addEventListener('keyup', function(){
		if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_field.value)) || email_field.value == ''){
	    	error_message.innerHTML = '';
	    } else{
	    	error_message.innerHTML = 'Email not valid';
	    }
	});

	submit_button = document.getElementById('submitEmail');
	name_field = document.getElementById('name_input');
	message_field = document.getElementById('message_input');

	submit_button.addEventListener('click', function(){
		if(name_field.value.length == 0){
			name_field.classList.add('error');
		} else{name_field.classList.remove('error');}
		if(error_message.innerHTML != '' || email_field.value.length == 0){
			email_field.classList.add('error');
		} else{email_field.classList.remove('error');}
		if(message_field.value.length == 0){
			message_field.classList.add('error');
		} else{message_field.classList.remove('error');}

		if(document.querySelectorAll('.error').length == 0){
			alert("Thank you, " + name_field.value.split(' ')[0] +  ", your message has been sent! Redirecting to the homepage.");
			window.location='../index.html';
		}
	});
});