//Create a function called 'sum'
function sum() {
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;

    console.log('The total of ' + num1 + ' and ' + num2 + ' is ' + sum)
}

sum();

//Can also be written as a 'function expression':
let sum2 = function() {
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;

    //Replaced this as return statement below: console.log('The total of ' + num1 + ' and ' + num2 + ' is ' + sum)
    return 'The total of ' + num1 + ' and ' + num2 + ' is ' + sum;     //This returns/prints/displays the concatenated string with results
}

//sum2();
//console.log(sum2());    //returns 'undefined'

//Declare a new variable:
let total = sum2;
//Call the new variable as a function:
console.log(total());