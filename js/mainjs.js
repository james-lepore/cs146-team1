window.addEventListener('load', function(){
	icon = document.getElementById('icon');
	icon.addEventListener('click', function(){
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
		  x.className += " responsive";
		} else {
		  x.className = "topnav";
		}

		var y = document.getElementById('container');
		y.classList.toggle("change");
	});
	  
	submit_button = document.getElementById("newsletterSubmit");
	submit_button.addEventListener('click', function(){
		var x = document.getElementById("footerEmail");
	  console.log(x.value)
	  if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x.value))){
	    x.value = '';
	    x.placeholder = 'Success!';
	  }
	  else{
	    x.value = '';
	    x.placeholder = "Invalid, Try again";
	  }
	});
});