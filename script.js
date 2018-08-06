function square(input) {
    return input * input;
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function testSumSquare() {
    window.alert("Square: " + square(2) + " Sum: " + sum(1, 2, 3));
}
var person;
function createPerson(name, age, occupation) {
    person = new Object();
    person.name = name;
    person.age = age;
    person.occupation = occupation;
}

function testPerson() {
        createPerson("test", 44, "Unemployed");
        alert("Name: " + person.name + " Age: " + person.age + " Occupation: " + person.occupation);
        person.age = 99;
        alert("Name: " + person.name + " Age: " + person.age + " Occupation: " + person.occupation);
}

function agePerson() {
    person.age = person.age + 1;
    alert("Name: " + person.name + " Age: " + person.age + " Occupation: " + person.occupation);
}