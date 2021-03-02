//convert mi to km function
let conversion = function(miles = 1) {
    let kiloMeters = (miles / 0.62137).toFixed(2);
    return miles + ' miles equals ' + kiloMeters + ' kilometers';
}

console.log(conversion(23));
console.log(conversion(45));
console.log(conversion(100459));