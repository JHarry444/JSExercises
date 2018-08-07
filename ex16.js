function getJSON(input) {
    var requestUrl = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    var request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        var target;
        var requestData = request.response;
        for (key in requestData) {
            for (key2 in requestData[key]) {
                if (requestData[key][key2] == input) {
                    target = requestData[key];
                    break;
                }
            }
        }
        for (x in target)  {
            document.write(target[x] + "<br>");
        }
    }
}
