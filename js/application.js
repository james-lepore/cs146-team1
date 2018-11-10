function addPerson(){
	var lClass = document.createAttribute("class");
	lClass.value="labels";

	var iClass = document.createAttribute("class");
	iClass.value="index";

	var lClass2 = document.createAttribute("class");
	lClass2.value="labels";

	var iClass2 = document.createAttribute("class");
	iClass2.value="index";

	var l = document.createElement("p");
	var txt = document.createTextNode("Full Name: ");
	//l.setAttributeNode(lClass);
	var i = document.createElement("input");
	//i.setAttributeNode(iClass);
	l.appendChild(txt);

	var p = document.getElementById("placeholder");
	var d = document.getElementById("placeholderdiv");

	var k = document.createElement("p");
	var txt2 = document.createTextNode("Birthday: ");
	var b = document.createElement("input");
	var att = document.createAttribute("type");
	att.value="date";

	//k.setAttributeNode(lClass2);
	//b.setAttributeNode(iClass2);
	b.setAttributeNode(att);
	k.appendChild(txt2);
	
	d.insertBefore(b,p);
	d.insertBefore(k,b);


	d.insertBefore(i,k);
	d.insertBefore(l,i);
}
