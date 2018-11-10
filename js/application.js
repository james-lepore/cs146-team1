function addPerson(){
	console.log("clicked");
	var l = document.createElement("p");
	var txt = document.createTextNode("Name: ");
	l.appendChild(txt);

	var p = document.getElementById("placeholder");
	var d = document.getElementById("placeholderdiv");
	d.insertBefore(l,p);
}

/*
var b = document.getElementById("add");
b.addEventListener("click", addPerson);
*/