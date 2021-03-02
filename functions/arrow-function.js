//Create function to add two numbers
let addNumbers = function() {
    console.log('The sum of five and eight is ' + (5 + 8));
}

addNumbers();

//as an 'arrow function'
let addNumbersArrow = () => console.log('The sum of five and eight is ' + (5 + 8));

addNumbersArrow();

//with parameters
let addNumbersAgain = num1 => console.log('The sum of ' + num1 + ' and 8 is ' + (num1 + 8));

addNumbersAgain(5);

//with two parameters, must use parens and curly braces with arrow functions
let addAgain = (num1, num2) => {
    let total = num1 + num2;
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + total);
}

addAgain(5, 8);