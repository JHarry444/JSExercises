"use strict";


function convertDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = "" + date.getMinutes();
    var splitMinutes = [];
    if (minutes < 10) {
        splitMinutes[0] = 0;
        splitMinutes[1] = minutes;
    } else {
        splitMinutes = minutes.split("");
        splitMinutes[0] = parseInt(splitMinutes[0]);
        splitMinutes[1] = parseInt(splitMinutes[1]);
    }
    var amPm = date.getHours > 12 ? "pm" : "am";
    var stringHours = convertHours(hours);
    var units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
    var tens = ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty"];
    var stringMinutes = "";
    if (splitMinutes[0] > 1) {
        stringMinutes = tens[splitMinutes[0]] + " " + units[splitMinutes[1]];
    } else {
        stringMinutes = units[minutes];
    }
    if (date.getHours() > 12) {
        amPm = "pm";
    }
    var time = "It is " + stringHours + (minutes < 10 ? " Oh " : " ") + stringMinutes + " " + amPm;
    alert(time);
}

function convertHours(hours) {
    var stringHours = "";
    switch (hours) {
        case 0:
        case 12:
            stringHours = "Twelve";
            break;
        case 1:
        case 13: stringHours = "One";
            break;
        case 2:
        case 14: stringHours = "Two";
            break;
        case 3:
        case 15: stringHours = "Three";
            break;
        case 4:
        case 16: stringHours = "Four";
            break;
        case 5:
        case 17: stringHours = "Five";
            break;
        case 6:
        case 18: stringHours = "Six";
            break;
        case 7:
        case 19: stringHours = "Seven";
            break;
        case 8:
        case 20: stringHours = "Eight";
            break;
        case 9:
        case 21: stringHours = "Nine";
            break;
        case 10:
        case 22: stringHours = "Ten";
            break;
        case 11:
        case 23: stringHours = "Eleven";
            break;
    }
    return stringHours;
}