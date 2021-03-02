//Create a welcome function
let welcome = function(firstName) {
    return 'Welcome ' + firstName + ', to the world of functions';
}

console.log(welcome('David'));
console.log(welcome('Stephanie'));
console.log(welcome('Thomas'));

//Add more parameters...
let welcome2 = function(firstName = 'whoever', lastName) {
    return 'Welcome ' + firstName + ' ' + lastName + ', to the world of functions';
}

console.log(welcome2('David', 'Duchovny'));
console.log(welcome2('Stephanie', 'Smith'));
console.log(welcome2('Thomas', 'Edison'));

//With default values in case no values are given
let welcome3 = function(firstName = 'whoever', lastName = 'whatever') {
    return 'Welcome ' + firstName + ' ' + lastName + ', to the world of functions';
}

console.log(welcome3('David', 'Duchovny'));
console.log(welcome3('Stephanie'));     //returns '...Stephanie whatever...'
console.log(welcome3());     //returns '...whoever whatever...'

