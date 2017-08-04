let clearButton = document.getElementById("clearButton");
let display = document.getElementById("display");

let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let divide = document.getElementById("divide");

let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let multiply = document.getElementById("multiply");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let subtract = document.getElementById("subtract");

let zero = document.getElementById("zero");
let decimal = document.getElementById("decimal");
let equal = document.getElementById("equal");
let add = document.getElementById("add");


clearButton.addEventListener('click', function(){
  display.value = "       ";
});

seven.addEventListener('click', function(){
  display.value += "7";
});

eight.addEventListener('click', function(){
  display.value += "8";
});

nine.addEventListener('click', function(){
  display.value += "9";
});

four.addEventListener('click', function(){
  display.value += "4";
});

five.addEventListener('click', function(){
  display.value += "5";
});

six.addEventListener('click', function(){
  display.value += "6";
});

one.addEventListener('click', function(){
  display.value += "1";
});

two.addEventListener('click', function(){
  display.value += "2";
});

three.addEventListener('click', function(){
  display.value += "3";
});

divide.addEventListener('click', function(){
  display.value += "/";
});

multiply.addEventListener('click', function(){
  display.value += "*";
});

subtract.addEventListener('click', function(){
  display.value += " - ";
});

zero.addEventListener('click', function(){
  display.value += "0";
});

decimal.addEventListener('click', function(){
  display.value += ".";
});

add.addEventListener('click', function(){
  display.value += "+";
});

equal.addEventListener('click', function(){
  display.value = eval(display.value);
});
