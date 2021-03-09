let cities = ['New York', 'London', 'Paris', 'Berlin'];

//.sort() method alphabetizes or ascending numeric sort
console.log(cities.sort());    //returns alphabetized array

//.filter() method takes a function with a parameter, requires 'return' call, is case sensitive
console.log(cities.filter(function(city) {
    return city == 'Paris';
}));    //returns [ 'Paris' ]

let numbers = [3, 6, 9, 14, 19, 20, 25, 26, 32, 55, 87, 103];

console.log(numbers.filter(function(number) {
    return number >= 25;
}));    //returns [ 25, 26, 32, 55, 87, 103 ]