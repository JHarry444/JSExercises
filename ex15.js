function getJSON() {
    var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        var requestData = request.response;
        var myH1 = document.createElement('h1'); 
        /*myH1.textContent = JSON.stringify(requestData);*/
        for (x in requestData) {
            if (Array.isArray(requestData[x])) { 
                myH1.innerHTML += "" + x + ": [" + "<br>";
                var array = requestData[x];
                for (i = 0; i < array.length; i++) {
                    myH1.innerHTML += "{ <br>"
                    for (y in array[i]) {
                        myH1.innerHTML += "" + y + ": " + array[i][y] + "<br>"; 
                    }
                    myH1.innerHTML += "} <br>"
                }
                myH1.innerHTML += "] <br>"
            } else {
                myH1.innerHTML += "" + x + ": " + requestData[x] + "<br>";
            }
        }
        document.getElementsByTagName('body')[0].appendChild(myH1);
    }
}