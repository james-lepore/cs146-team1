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
});