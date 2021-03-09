//Create an array of cities
let citiesArray = ['San Francisco', 'Raleigh', 'Chicago', 'Boston', 'New York', 'Palermo'];

citiesArray.forEach(function(city, index) {
    //since indexes start at 0, add 1 to the index to start the numbering at 1
    console.log((index + 1) + '. ' + city);
    /*Another way to achieve the same result with more implantable code, as we like to do, 
    is to create a 'count' variable and pass that in to the console.log as below
    let count = index + 1;
    console.log(count + '. ' + city);*/
})