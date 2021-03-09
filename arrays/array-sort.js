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

//same challenge but with sorted results, or could place secondNumbers.sort() right below the variable declaration
let secondNumbers = [2, 34, 43, 79, 37, 5, 1, 12, 80, 55];

let filteredNums = secondNumbers.filter(function(nums) {
    return nums >= 25;
});
console.log(filteredNums);

let sortedNums = filteredNums.sort();
console.log(sortedNums);

let thirdNumbers = [3, 6, 9, 14, 19, 20, 25, 26, 32, 55, 87, 103];
let stringArray = ['joined', 'together'];

//combine, or concatenate, two arrays even with different data types
console.log(thirdNumbers.concat(stringArray));
/*
returns [
  3,        6,
  9,        14,
  19,       20,
  25,       26,
  32,       55,
  87,       103,
  'joined', 'together'
]
*/

//.join() 
console.log(thirdNumbers.join(stringArray));
/*returns:
3joined,together6joined,together9joined,together14joined,together19joined,together20joined,together25joined,together26joined,together32joined,together55joined,together87joined,together103
...stringifying the integers and adding both (or all) string array elements to every integer*/

//.reverse()
console.log(thirdNumbers.reverse());    //returns array in reverse order

//.reduce()
console.log(thirdNumbers.reduce(function(result, number) {
    return result + number;
}))    //sums all of the array elements!!! Returns 399.