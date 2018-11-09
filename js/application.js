var x = document.getElementById("add");
x.addEventListener("click", function(){
	console.log("clicked");
	var l = document.createElement(label);
	var txt = document.createTextNode("Name: ");
	l.appendChild(txt);
	var before = document.getElementById("add");
	document.body.insertBefore(before,l);
}
