window.addEventListener('load',function(){
	lst = sessionStorage.getItem("list");
	values = lst.split(',')
	console.log(values);
	document.getElementById("vName").innerHTML+=values[0]+' '+values[1];
	labels = document.getElementsByClassName("labels");
	for (let i = 1; i < labels.length; i++){
		if (labels[i]!=null){
			labels[i].innerHTML+=values[i+1];
		}
	}
	var verify = document.getElementById('finished');
	if (verify!=null){
		verify.addEventListener('click', function(){
			alert("Your application has been submitted successfuly. Returning to the home page...");
			window.location='../index.html';
		});
	}
	var fix = document.getElementById('fix');
	if (fix!=null){
		fix.addEventListener('click', function(){
			alert("Found something wrong with your application? Or maybe you're experiencing some last minute nerves. No problem! Returning you to the application page...");
			window.location='application.html';
		});
	}
});