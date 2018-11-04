function showAnswer(num) {
    var x = document.getElementById("answer" + num);
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var y = document.getElementById("arrow" + num);
    if (y.style.borderTop != "none"){
    	y.style.borderBottom = "0.4em solid";
    	y.style.borderTop = "none";
    } else{
    	y.style.borderTop = "0.4em solid";
    	y.style.borderBottom = "none";
    }
}