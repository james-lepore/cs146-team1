window.addEventListener('load',function(){
	lst = sessionStorage.getItem("list");
	values = lst.split(',');
	document.getElementById("vName").innerHTML+=values[0]+' '+values[1];
	labels = document.getElementsByClassName("vLabels");
	console.log(labels);
	if (values.length==27){
		for (let i = 1; i < labels.length; i++){
			if (labels[i]!=null){
				if(values[i+1] != ''){
					labels[i].innerHTML+=values[i+1];
				} else{
					labels[i].innerHTML = '';
				}
			}
		}
	}
	else{
		var legend = document.createElement("legend");
		let txt = document.createTextNode("Passengers");
		legend.appendChild(txt);
		var div = document.getElementById('info');
		var addAfter = document.getElementById("addAfter");
		div.insertBefore(legend,addAfter);
		console.log(labels.length);
		console.log(labels);
		for (let i = 0; i < values.length-27;i+=2){
			console.log("hello");
			var p1 = document.createElement("p");
			var name = document.createElement("label");
			var txtName = document.createTextNode("Full Name: ");
			name.classList.add("vLabels");
			name.appendChild(txtName);
			p1.appendChild(name);

			var p2 = document.createElement("p");
			var birthday = document.createElement("label");
			var txtName2 = document.createTextNode("Birthday: ");
			birthday.classList.add("vLabels");
			birthday.appendChild(txtName2);
			p2.appendChild(birthday);

			div.insertBefore(p1,addAfter);
			div.insertBefore(p2,addAfter);
		}
		for (let i = 1; i < labels.length; i++){
			if (labels[i]!=null){
				if(values[i+1] != ''){
					labels[i].innerHTML+=values[i+1];
				} else{
					labels[i].innerHTML = '';
				}
			}
		}
	}
	var verify = document.getElementById('finished');
	if (verify!=null){
		verify.addEventListener('click', function(){
			sessionStorage.setItem("restart","true");
			alert("Your application has been submitted successfuly. Returning to the home page...");
			window.location='../index.html';
		});
	}
	var fix = document.getElementById('fix');
	if (fix!=null){
		fix.addEventListener('click', function(){
			sessionStorage.setItem("restart","false");
			alert("Found something wrong with your application? Or maybe you're experiencing some last minute nerves. No problem! Returning you to the application page...");
			window.location='application.html';
		});
	}
	var restart = document.getElementById('restart');
	if (restart!=null){
		restart.addEventListener('click', function(){
			sessionStorage.setItem("restart","true");
			alert("Don't give up! We can't wait to see your application when it's finished! Redirecting to a brand new application page...");
			window.location='application.html';
		});
	}
});