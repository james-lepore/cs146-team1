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
			complete = true;
			var elements = document.getElementsByClassName("inputs");
			console.log(elements);
			var values = [];
			for (let i = 0; i < elements.length; i++){
				if ((elements[i].value==null || elements[i].value==''||elements[i].value=='-')&&(i!=7&&i!=19)){
					alert("Your application is incomplete. Please fill in all fields marked with an asterisk before continuing.");
					complete = false;
					break;
				}
				if (elements[i]!=null){
					values.push([elements[i].value]);
				}
			}
			if (complete == true){
				alert(values[0] + ", thank you for submitting your application to go to mars. Please verify all your information on the next page.");
				sessionStorage.setItem("list",values);
				window.location='verify.html';
			}
		});
	}
});