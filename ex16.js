"use strict";
function getJSON(input) {
    let requestUrl = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        let target = [];
        let requestData = request.response;
        target.push(requestData.filter(a => Object.values(a).includes(input)));
        let pre = document.createElement('pre');
        document.getElementsByTagName('body')[0].appendChild(pre);
        pre.innerHTML = JSON.stringify(target, null, 4);
    }
}
