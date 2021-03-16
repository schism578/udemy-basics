//Create an array
let numArray = [3, 7, 6];

//print the entire array
console.log(numArray);    //returns [3, 7, 6]

//change the value of an array at a particular index;
numArray[2] = 50;

//print the length of the array
console.log(numArray.length);  //returns 3

//print the index of an array element
console.log(numArray[1]);    //returns 7

//print the entire array with a new value at index 2
console.log(numArray);    //returns [3, 7, 50]

//create a NEW array
let numArray2 = new Array(4, 9, 2);

console.log(numArray2);    //returns [4, 9, 2]

//create empty array as a vessel for later values
let numArray3 = [];
//create values by index
numArray3[0] = 3;
numArray3[1] = 7;
numArray3[2] = 6;

console.log(numArray3);    //returns [3, 7, 6]

//destructuring array elements and assign to variables
let numArray4 = [3, 7, 6];

let [num1, num2] = numArray4;

console.log(num1 + ' and ' + num2);    //returns '3 and 7' by the assignment of first and second array elements automatically 

//Or......
let numArray5 = [3, 7, 6];

let [number1, ,number2] = numArray5;

console.log(number1 + ' and ' + number2);    //returns '3 and 6' because the destructuring statement skips the second element in the array

console.log("Changing some stuff to create a new commit and push");