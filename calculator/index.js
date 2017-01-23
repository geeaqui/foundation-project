
var number1 = prompt("Enter your first number");
var operator = prompt ("enter your operator");
var number2 = prompt("enter your second number")

function addNumber(){
   var result = parseInt(number1) * parseInt(number2);
   alert(result);
}

addNumber();