function getJSON() {
    var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        var requestData = request.response;
        var pre = document.createElement("pre");
        pre.innerHTML = JSON.stringify(requestData, null, 10);
        document.getElementsByTagName('body')[0].appendChild(pre);
    }
}
