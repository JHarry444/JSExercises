function square(input) {
    return input * input;
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function testSumSquare() {
    window.alert("Square: " + square(2) + " Sum: " + sum(1, 2, 3));
}

function createPerson(name, age, occupation) {
    var person = new Object();
    person.name = name;
    person.age = age;
    person.occupation = occupation;
    return person;
}