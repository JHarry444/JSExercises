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

function createPersonFromFields() {
    person = new Object();
    editPerson();
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("edit").style.visibility = "visible";
}

function outputPerson() {
    alert("Name: " + person.name + " Age: " + person.age + " Occupation: " + person.occupation);
}

function editPerson() {
    person.name = document.getElementById("name").value;
    person.age = document.getElementById("age").value;
    person.occupation = document.getElementById("occupation").value;
}

function checkAge() {
    if (person.age > 20 && person.age < 40) {
        return true;
    } else {
        return false;
    }
}

function fizzBuzz(limit, fizz, buzz) {
        for (i = 1; i < limit; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                document.write(fizz + buzz);
            }else if (i % 3 == 0) {
                document.write(fizz);
            } else if (i % 5 == 0) {
                document.write(buzz);
            } else {
                document.write(i);
            }
            document.write("</br>");
    } 
}