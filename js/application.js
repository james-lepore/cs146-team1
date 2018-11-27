window.addEventListener('load',function(){
	var plus = document.getElementById('plus');
	if (plus!=null){
		plus.addEventListener("click", function(){
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
	});
}
	var submit = document.getElementById('sub');
	if (submit!=null){
		sub.addEventListener('click', function(){
			var elements = document.getElementsByClassName("inputs");
			var values = [];
			for (let i = 0; i < elements.length; i++){
				if (elements[i]!=null){
					values.push(elements[i].value);
				}
			}
			console.log(values);
			alert("Thank you " + values[0] + ' for submitting your application to go to mars. Please verify all your information on the next page.')
			window.location='verify.html';
			var p = createElement('p');
			var name = createTextNode(values[0] + ' ' + values[1]);
			console.log(name);
			p.appendChild(name)
			var info = document.getElementById("info");
			info.appendChild(p);
		});
	}
});