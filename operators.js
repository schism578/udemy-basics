//using the modulus for finding division remainders
let num1 = 17;
let num2 = 3;

console.log(num1 % num2);



//testing for even or odd numbers
let num3 = 6;

if(num3 % 2 === 0) {
    console.log('The number is even')
} else {
    console.log('The number is odd')
}



//increment and decrement operators
let num4 = 15;
//console.log(num4++);
console.log(++num4);    //returns 16 without the line above
//need to precede the variable in first instance to return an incrementation immediately

let num5 = 7
console.log(--num5);    //returns 6



//ternary operator
let num6 = 15;

let howLarge = (num6 >= 10) ? 'The number is larger than 10' : 'The number is less than 10';

console.log(howLarge);