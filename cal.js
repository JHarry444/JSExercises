
function workit(){
    document.getElementById("jordanshutup").innerHTML = eval(document.getElementById("jordanshutup").innerHTML);
}

function add(value){
    document.getElementById("jordanshutup").innerHTML += value;
}

function clearCalculator(){
    document.getElementById("jordanshutup").innerHTML = "";
}

function backSpace() {
    let contents = document.getElementById("jordanshutup").innerHTML;
    document.getElementById("jordanshutup").innerHTML = contents.substring(0, contents.length - 1);
}
