//Create a variable called 'firstName'
let firstName = 'Jane';

function welcome() {
    console.log('Welcome ' + firstName + ' to variable scope');
}

welcome();    //returns properly since 'firstName' is of 'global scope'

//add variable for last name inside of the function
/*function welcome2() {
    let lastName = 'Smith';
    console.log('Welcome ' + firstName + ' to variable scope');
}

function hello() {
    console.log('Hello ' + firstName + ' ' + lastName)  //block level variable scope for 'lastName' not readable, returns undefined
}

welcome2();
hello();*/

//create another function that displays how layers of 'block scope' work together
function welcome3() {
    let anotherFirstName = 'Brenda';
    if(true) {
        let anotherLastName = 'Smith';
        console.log('Hello ' + anotherFirstName + ' ' + anotherLastName);
    }
}

welcome3();

//create a function to examine global scope achieved at block level
function welcome4() {
    //notice the absence of the 'let' keyword; automatically global scopes the variable and its value;
    //console.log below actually returns 'Hello Stuart' as a result
    oneMoreName = 'Stuart';
    if(true) {
        let oneLastName = 'Stewart';
    }
}

welcome4()
console.log('Hello ' + oneMoreName);