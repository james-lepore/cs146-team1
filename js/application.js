function addPerson(){
	var l = document.createElement("p");
	var txt = document.createTextNode("Full Name: ");
	var i = document.createElement("input");
	l.appendChild(txt);

	var p = document.getElementById("placeholder");
	var d = document.getElementById("placeholderdiv");
	d.insertBefore(l,p);
	d.insertBefore(i,l);
}

function submit(){
	console.log("clicked");
	window.history.pushState("index.html");
}