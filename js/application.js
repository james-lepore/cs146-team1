function addPerson(){
	var l = document.createElement("p");
	var txt = document.createTextNode("Full Name: ");
	var i = document.createElement("input");
	l.appendChild(txt);

	var p = document.getElementById("placeholder");
	var d = document.getElementById("placeholderdiv");

	var k = document.createElement("p");
	var txt2 = document.createTextNode("Birthday: ");
	var b = document.createElement("input");
	var att = document.createAttribute("type");
	att.value="date";
	b.setAttributeNode(att);
	k.appendChild(txt2);

	d.insertBefore(b,p);
	d.insertBefore(k,b);

	d.insertBefore(i,k);
	d.insertBefore(l,i);


}
