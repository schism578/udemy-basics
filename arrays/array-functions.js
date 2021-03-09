let cities = ['New York', 'London', 'Paris', 'Berlin'];

console.log(cities);

//.shift() with no argument or element declared, removes the first element of an array
cities.shift();    //removes 'NewYork'
console.log(cities);
//.unshift('<element>') adds element to beginning of array;
cities.unshift('Dublin');    //adds 'Dublin'
console.log(cities);
//.push() method adds element to end of array no matter the length
cities.push('Miami');
console.log(cities);    //adds 'Miami' to end of array
//.pop() with no argument or element declared, removes last element of array
cities.pop();     //removes Miami from array
console.log(cities.pop());    //displays the element to be removed (now, Berlin since Miami was already removed)
console.log(cities);    //displays array after .pop() element removal
//The above logging call can be combined: console.log(cities, cities.pop())

//.indexOf() method; be aware that the parameter passed in is case sensitive!
console.log(cities.indexOf('Paris'));

//make new array with segment of original array with .splice(<index of starting point through the end>, or <starting point and non-inclusive ending point>)
//removes elements from original array! Does not COPY!
let newCities = cities.splice(1);    //with starting and ending indexes let newCities = cities.splice(1, 2);
console.log(newCities);

//.slice() allows for copying rather than removal with .splice()
let copyCities = cities.slice(1,2);
console.log(copyCities);    //returns [] because all of the array elements that were assigned indexes 1 and 2 were removed via .splice() above

