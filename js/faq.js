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

function convert(){
    usd = document.getElementById('usd')
    shc = document.getElementById('shc')

    if (usd.value != ''){
        shc.value = (usd.value / 1000000)
    }
    else if (shc.value != ''){
        usd.value = (shc.value * 1000000)
    }
}

function resetConverter(){
    document.getElementById('usd').value = ''
    document.getElementById('shc').value = ''
}