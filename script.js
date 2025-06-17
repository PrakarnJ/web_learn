const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    alert('Button clicked!');
    console.log('Button was clicked!');
    // Change the text of a paragraph
    const myParagraph = document.querySelector('p');
    myParagraph.textContent = 'You clicked the button!';
});

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed";
}

{
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.write(c);
document.write("<br>");
document.write(a + b);
document.write("<br>");
document.write(a + b + c);
document.write("<br>");
document.write(a + b + c + " is the sum of a, b, and c<br>");
}

const PI = 3.14;
let _person = "John";
let _answer = "Yes I am";

function carFunction() {
    let _carName = "Volvo";
    document.getElementById("demo2").innerHTML = _carName;
}

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";
cars.push("Audi");
document.write(cars);
document.write("<br>");
document.write(cars.length);
document.write("<br>");
document.write(cars[0]);
document.write("<br>");
document.write(cars[1]);
document.write("<br>");
document.write(cars[2]);
document.write("<br>");

const car = {type:"Fiat", model:"500", color:"white"};
document.write(car.type);
document.write("<br>");
document.write(car.model);
document.write("<br>");
document.write(car.color);
document.write("<br>");

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
document.write(person.firstName);
document.write("<br>");
document.write(person.lastName);
document.write("<br>");
document.write(person.age);
document.write("<br>");
document.write(person.eyeColor);
document.write("<br>");

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.write(result);
document.write("<br>");

{
    let text1 = "What a very ";
    text1 += "nice day";
    document.write(text1);
    document.write("<br>");
}

{
    let x = 10;
    x **= 6;
    document.write(x);
    document.write("<br>");
}

{
    let x = -100;
    x <<= 5;
    document.write(x);
    document.write("<br>");
}

{
    let x = -100;
    x >>= 5;
    document.write(x);
    document.write("<br>");
}

{
    // Numbers:
    let length = 16;
    let weight = 7.5;
    document.write(length);
    document.write("<br>");
    document.write(weight);
    document.write("<br>");

    // Strings:
    let color = "Yellow";
    let fullName = 'John Doe';
    let answer = 'Yes, I am!';
    document.write(color);
    document.write("<br>");
    document.write(fullName);
    document.write("<br>");
    document.write(answer);
    document.write("<br>");

    // Booleans:
    let x = 5;
    let y = 5;
    let z = 6;
    let isBig = x === y;
    let isSmall = x < z;
    document.write(isBig);
    document.write("<br>");
    document.write(isSmall);

    // Objects:
    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    document.write(person.firstName);
    document.write("<br>");
    document.write(person.lastName);
    document.write("<br>");
    document.write(person.age);
    document.write("<br>");
    document.write(person.eyeColor);

    // Arrays:
    const cars = ["Saab", "Volvo", "BMW"];
    document.write(cars[0]);
    document.write("<br>");
    document.write(cars[1]);
    document.write("<br>");
    document.write(cars[2]);
    document.write("<br>");

    // Dates:
    const date = new Date();
    document.write(date);
    document.write("<br>");

    // Functions:
    function myFunction(p1, p2) {
        return p1 * p2;
    }
    document.write(myFunction(4, 3));
    document.write("<br>");
}

function toCelsius(f) {
    // document.getElementById("demo3").innerHTML = (5/9) * (f-32);
    return (5/9) * (f-32);
}
document.write(toCelsius(77));
document.write("<br>");
document.write(toCelsius(90));
document.write("<br>");
document.write(toCelsius(32));
document.write("<br>");

person.name = function() {
    return this.firstName + " " + this.lastName;
}
document.write(person.name());
document.write("<br>");

{
    const person = {
        name: "John",
        age: 20,
        city: "New York"
    };

    // Build a text
    let text = "";
    for (let x in person) {
        text += person[x] + " ";
    };
    function getPerson() {
        document.getElementById("demo4").innerHTML = text;
    }

    // Create an Array
    const myArray = Object.values(person);

    function getArray() {
        document.getElementById("demo5").innerHTML = myArray;
    }
}

{
    // String substr()
    let str = "Apple, Banana, Kiwi";
    let pos = str.indexOf("Banana");
    document.write(pos);
    document.write("<br>");

    let part = str.substring(7, 13);
    document.write(part);
    document.write("<br>");
    let text1 = str.toUpperCase();
    document.write(text1);
    document.write("<br>");
    let text2 = str.toLowerCase();
    document.write(text2);
    document.write("<br>");
}

{
    // String concat()
    let text1 = "Hello";
    let text2 = "Prakarn J.";
    let text3 = text1.concat(" ", text2);
    document.write(text3);
    document.write("<br>");
}

{
    // String trim()
    let str = "        Hello World!       ";
    document.write(str);
    document.write(str.length);
    document.write("<br>");
    document.write(str.trim());
    document.write(str.trim().length);
    document.write("<br>");
    document.write(str.trimStart());
    document.write(str.trimStart().length);
    document.write("<br>");
    document.write(str.trimEnd());
    document.write(str.trimEnd().length);
    document.write("<br>");
}
{
    // String charAt()
    let str = "Hello world, welcome to the universe.";
    let position = str.indexOf("welcome");
    document.write(position);
    document.write("<br>");
}
{
    // String repeat()
    let text = "Hello world!";
    document.write(text.repeat(2));
    document.write("<br>");
    document.write(text.repeat(3));
    document.write("<br>");
    document.write(text.repeat(4));
    document.write("<br>");
}

{
    // String replace()
    let text = "Please visit Microsoft!";
    document.write(text);
    document.write("<br>");
    let newText = text.replace("Microsoft", "W3Schools");
    document.write(newText);
    document.write("<br>");
}

