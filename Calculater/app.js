var display = document.getElementById("display")

function getvalue(a){
    display.value += a
}

function calculate (){
    var a = eval(display.value)
    display.value = a
}
function empty (){
    display.value = " ";
}