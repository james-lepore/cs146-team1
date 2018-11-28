window.addEventListener('load', function(){
    questions = document.getElementsByClassName('question');
    var num_of_questions = questions.length

    for(let i = 0; i < num_of_questions; i++){
        questions[i].addEventListener('click', function(){
	        num = String(i);
	        var x = document.getElementById("answer" + num);
	        if (x.style.display != "block") {
	            x.style.display = "block";
	        } else {
	            x.style.display = "none";
	        }

	        var y = document.getElementById("arrow" + num);
	        if (y.style.borderTop != "none"){
	            y.style.borderBottom = "0.4em solid";
	            y.style.borderTop = "none";
	        } else{
	            y.style.borderTop = "0.4em solid";
	            y.style.borderBottom = "none";
	        }
	    });
    }

    convert_button = document.getElementById("convertButton");
    convert_button.addEventListener('click', function(){
        usd = document.getElementById('usd')
        shc = document.getElementById('shc')

        if (usd.value != ''){
            shc.value = (usd.value / 8370537)
        }
        else if (shc.value != ''){
            usd.value = (shc.value * 8370537)
        }
    }); 

    reset_button = document.getElementById("resetConverter");
    reset_button.addEventListener('click', function(){
        document.getElementById('usd').value = ''
        document.getElementById('shc').value = ''
    });
});