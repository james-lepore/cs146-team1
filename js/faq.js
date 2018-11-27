// function showAnswer(num) {
//     var x = document.getElementById("answer" + num);
//     if (x.style.display != "block") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }

//     var y = document.getElementById("arrow" + num);
//     if (y.style.borderTop != "none"){
//         y.style.borderBottom = "0.4em solid";
//         y.style.borderTop = "none";
//     } else{
//         y.style.borderTop = "0.4em solid";
//         y.style.borderBottom = "none";
//     }
// }

window.addEventListener('load', function(){
    questions = document.getElementsByClassName('question');
    console.log(questions);

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', function(){
        num = String(i);
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
    }) 
    }
    


    convert_button = document.getElementById("convertButton");
    convert_button.addEventListener('click', function(){
        usd = document.getElementById('usd')
        shc = document.getElementById('shc')

        if (usd.value != ''){
            shc.value = (usd.value / 1000000)
        }
        else if (shc.value != ''){
            usd.value = (shc.value * 1000000)
        }
    }); 

    reset_button = document.getElementById("resetConverter");
    reset_button.addEventListener('click', function(){
        document.getElementById('usd').value = ''
        document.getElementById('shc').value = ''
    });
});